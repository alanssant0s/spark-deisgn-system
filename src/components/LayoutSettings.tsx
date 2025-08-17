import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogBody, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useLayout } from "@/contexts/LayoutContext";
import { Settings, Monitor, Smartphone, Palette } from "lucide-react";

export function LayoutSettings() {
  const { 
    desktopLayoutType, 
    mobileLayoutType, 
    sidebarTheme,
    setDesktopLayoutType, 
    setMobileLayoutType,
    setSidebarTheme
  } = useLayout();
  
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-2">
          <Settings className="h-4 w-4" />
          <span className="hidden sm:inline">Configurar Layout</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Configurações de Layout</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <div className="space-y-6">
            {/* Desktop Layout */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Monitor className="h-5 w-5 text-muted-foreground" />
                <Label className="text-base font-medium">Layout Desktop</Label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setDesktopLayoutType('vertical')}
                  className={`p-4 border rounded-lg text-left transition-colors ${
                    desktopLayoutType === 'vertical' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:bg-accent'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="font-medium">Vertical</div>
                    <div className="text-sm text-muted-foreground">
                      Menu lateral esquerdo
                    </div>
                    <div className="w-full h-8 bg-muted rounded flex">
                      <div className="w-6 bg-primary/20 rounded-l"></div>
                      <div className="flex-1"></div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setDesktopLayoutType('horizontal')}
                  className={`p-4 border rounded-lg text-left transition-colors ${
                    desktopLayoutType === 'horizontal' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:bg-accent'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="font-medium">Horizontal</div>
                    <div className="text-sm text-muted-foreground">
                      Menu superior
                    </div>
                    <div className="w-full h-8 bg-muted rounded flex flex-col">
                      <div className="h-2 bg-primary/20 rounded-t"></div>
                      <div className="flex-1"></div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5 text-muted-foreground" />
                <Label className="text-base font-medium">Layout Mobile</Label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setMobileLayoutType('vertical')}
                  className={`p-4 border rounded-lg text-left transition-colors ${
                    mobileLayoutType === 'vertical' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:bg-accent'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="font-medium">Vertical</div>
                    <div className="text-sm text-muted-foreground">
                      Menu lateral deslizante
                    </div>
                    <div className="w-full h-8 bg-muted rounded flex">
                      <div className="w-6 bg-primary/20 rounded-l"></div>
                      <div className="flex-1"></div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setMobileLayoutType('horizontal')}
                  className={`p-4 border rounded-lg text-left transition-colors ${
                    mobileLayoutType === 'horizontal' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:bg-accent'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="font-medium">Horizontal</div>
                    <div className="text-sm text-muted-foreground">
                      Menu superior dropdown
                    </div>
                    <div className="w-full h-8 bg-muted rounded flex flex-col">
                      <div className="h-2 bg-primary/20 rounded-t"></div>
                      <div className="flex-1"></div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Sidebar Theme */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Palette className="h-5 w-5 text-muted-foreground" />
                <Label className="text-base font-medium">Tema da Sidebar</Label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSidebarTheme('light')}
                  className={`p-4 border rounded-lg text-left transition-colors ${
                    sidebarTheme === 'light' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:bg-accent'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="font-medium">Claro</div>
                    <div className="text-sm text-muted-foreground">
                      Menu com fundo claro
                    </div>
                    <div className="w-full h-8 bg-muted rounded flex">
                      <div className="w-6 bg-background border rounded-l"></div>
                      <div className="flex-1"></div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setSidebarTheme('dark')}
                  className={`p-4 border rounded-lg text-left transition-colors ${
                    sidebarTheme === 'dark' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:bg-accent'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="font-medium">Escuro</div>
                    <div className="text-sm text-muted-foreground">
                      Menu com fundo escuro
                    </div>
                    <div className="w-full h-8 bg-muted rounded flex">
                      <div className="w-6 bg-slate-800 rounded-l"></div>
                      <div className="flex-1"></div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Current Settings Display */}
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-sm font-medium mb-2">Configuração Atual:</div>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Desktop: {desktopLayoutType === 'vertical' ? 'Vertical' : 'Horizontal'}</div>
                <div>Mobile: {mobileLayoutType === 'vertical' ? 'Vertical' : 'Horizontal'}</div>
                <div>Sidebar: {sidebarTheme === 'light' ? 'Tema Claro' : 'Tema Escuro'}</div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>
            Salvar Configurações
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}