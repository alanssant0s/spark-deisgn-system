import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Upload, Download, Loader2 } from "lucide-react";
import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

const processLogoWithWhiteBackground = async (
  imageElement: HTMLImageElement,
  onProgress: (progress: number) => void
): Promise<Blob> => {
  try {
    onProgress(10);
    console.log('Iniciando processamento da logo...');
    
    const segmenter = await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
      device: 'webgpu',
    });
    
    onProgress(30);
    
    // Convert HTMLImageElement to canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Não foi possível obter o contexto do canvas');
    
    // Resize image if needed and draw it to canvas
    const wasResized = resizeImageIfNeeded(canvas, ctx, imageElement);
    console.log(`Imagem ${wasResized ? 'foi' : 'não foi'} redimensionada. Dimensões finais: ${canvas.width}x${canvas.height}`);
    
    onProgress(50);
    
    // Get image data as base64
    const imageData = canvas.toDataURL('image/jpeg', 0.8);
    console.log('Imagem convertida para base64');
    
    // Process the image with the segmentation model
    console.log('Processando com modelo de segmentação...');
    const result = await segmenter(imageData);
    
    onProgress(70);
    
    console.log('Resultado da segmentação:', result);
    
    if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
      throw new Error('Resultado de segmentação inválido');
    }
    
    // Create a new canvas for the processed image
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;
    const outputCtx = outputCanvas.getContext('2d');
    
    if (!outputCtx) throw new Error('Não foi possível obter o contexto do canvas de saída');
    
    // Fill with white background
    outputCtx.fillStyle = '#FFFFFF';
    outputCtx.fillRect(0, 0, outputCanvas.width, outputCanvas.height);
    
    onProgress(80);
    
    // Draw original image
    outputCtx.drawImage(canvas, 0, 0);
    
    // Apply the mask to keep only the logo shape on white background
    const outputImageData = outputCtx.getImageData(
      0, 0,
      outputCanvas.width,
      outputCanvas.height
    );
    const data = outputImageData.data;
    
    // Apply mask to create white background while keeping logo
    for (let i = 0; i < result[0].mask.data.length; i++) {
      const maskValue = result[0].mask.data[i];
      // If mask value is low (background), make it white
      if (maskValue > 0.5) {
        const pixelIndex = i * 4;
        data[pixelIndex] = 255;     // R
        data[pixelIndex + 1] = 255; // G
        data[pixelIndex + 2] = 255; // B
        data[pixelIndex + 3] = 255; // A
      }
    }
    
    outputCtx.putImageData(outputImageData, 0, 0);
    console.log('Filtro aplicado com sucesso');
    
    onProgress(90);
    
    // Convert canvas to blob
    return new Promise((resolve, reject) => {
      outputCanvas.toBlob(
        (blob) => {
          if (blob) {
            console.log('Blob final criado com sucesso');
            onProgress(100);
            resolve(blob);
          } else {
            reject(new Error('Falha ao criar blob'));
          }
        },
        'image/png',
        1.0
      );
    });
  } catch (error) {
    console.error('Erro ao processar logo:', error);
    throw error;
  }
};

export function LogoProcessor() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Por favor, selecione um arquivo de imagem válido.');
      return;
    }

    try {
      // Display original image
      const imageUrl = URL.createObjectURL(file);
      setOriginalImage(imageUrl);
      setProcessedImage(null);
      setProgress(0);
      
      toast.success('Imagem carregada! Clique em "Processar" para aplicar o filtro.');
    } catch (error) {
      console.error('Erro ao carregar imagem:', error);
      toast.error('Erro ao carregar a imagem.');
    }
  };

  const processImage = async () => {
    if (!originalImage) return;

    setIsProcessing(true);
    setProgress(0);

    try {
      // Convert image URL to file
      const response = await fetch(originalImage);
      const blob = await response.blob();
      const imageElement = await loadImage(blob);

      // Process the image
      const processedBlob = await processLogoWithWhiteBackground(imageElement, setProgress);
      
      // Create URL for processed image
      const processedUrl = URL.createObjectURL(processedBlob);
      setProcessedImage(processedUrl);
      
      toast.success('Logo processada com sucesso! Agora você tem uma versão com fundo branco.');
    } catch (error) {
      console.error('Erro ao processar:', error);
      toast.error('Erro ao processar a imagem. Tente novamente.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadProcessedImage = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'logo-fundo-branco.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Download iniciado!');
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Processador de Logo - Filtro Fundo Branco
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload Section */}
          <div className="space-y-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            
            <Button
              onClick={() => fileInputRef.current?.click()}
              variant="outline"
              className="w-full h-32 border-dashed border-2 hover:border-primary/50"
            >
              <div className="text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <div className="text-sm font-medium">Clique para carregar sua logo</div>
                <div className="text-xs text-muted-foreground">PNG, JPG, GIF até 10MB</div>
              </div>
            </Button>
          </div>

          {/* Processing Button */}
          {originalImage && (
            <div className="space-y-4">
              <Button
                onClick={processImage}
                disabled={isProcessing}
                className="w-full"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processando...
                  </>
                ) : (
                  'Processar Logo'
                )}
              </Button>

              {isProcessing && (
                <div className="space-y-2">
                  <Progress value={progress} className="w-full" />
                  <p className="text-sm text-center text-muted-foreground">
                    {progress < 30 && 'Carregando modelo de IA...'}
                    {progress >= 30 && progress < 50 && 'Preparando imagem...'}
                    {progress >= 50 && progress < 70 && 'Analisando formato...'}
                    {progress >= 70 && progress < 90 && 'Aplicando filtro...'}
                    {progress >= 90 && 'Finalizando...'}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Image Comparison */}
          {originalImage && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Imagem Original</h3>
                <div className="border rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={originalImage}
                    alt="Original"
                    className="w-full h-64 object-contain"
                  />
                </div>
              </div>

              {processedImage && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Logo com Fundo Branco</h3>
                  <div className="border rounded-lg overflow-hidden bg-white">
                    <img
                      src={processedImage}
                      alt="Processada"
                      className="w-full h-64 object-contain"
                    />
                  </div>
                  <Button
                    onClick={downloadProcessedImage}
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Imagem
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
