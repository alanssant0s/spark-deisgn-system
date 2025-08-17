import { LogoProcessor } from "@/components/LogoProcessor";

export default function LogoProcessorPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Processador de Logo</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Carregue sua logo e obtenha uma versão com fundo branco automaticamente. 
          Nossa IA analisa o formato da logo e preserva apenas os elementos principais, 
          criando uma versão limpa com fundo branco.
        </p>
      </div>
      
      <LogoProcessor />
    </div>
  );
}