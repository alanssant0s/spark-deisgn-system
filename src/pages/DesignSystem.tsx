const DesignSystem = () => {
  const colors = [
    { name: "Primary", class: "bg-primary", hex: "hsl(217 91% 60%)" },
    { name: "Primary Light", class: "bg-primary-light", hex: "hsl(217 91% 95%)" },
    { name: "Secondary", class: "bg-secondary", hex: "hsl(210 40% 96%)" },
    { name: "Accent", class: "bg-accent", hex: "hsl(262 83% 58%)" },
    { name: "Success", class: "bg-success", hex: "hsl(142 76% 36%)" },
    { name: "Warning", class: "bg-warning", hex: "hsl(38 92% 50%)" },
    { name: "Destructive", class: "bg-destructive", hex: "hsl(0 84% 60%)" },
  ];

  const gradients = [
    { name: "Primary Gradient", class: "bg-gradient-primary" },
    { name: "Secondary Gradient", class: "bg-gradient-secondary" },
    { name: "Hero Gradient", class: "bg-gradient-hero" },
  ];

  const shadows = [
    { name: "Small", class: "shadow-sm" },
    { name: "Medium", class: "shadow-md" },
    { name: "Large", class: "shadow-lg" },
    { name: "Glow", class: "shadow-glow" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Design System</h1>
        <p className="text-muted-foreground">
          Tokens de design, cores, gradientes e estilos do sistema
        </p>
      </div>

      {/* Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Cores do Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="space-y-3">
              <div className={`h-20 w-full rounded-lg ${color.class} shadow-sm`} />
              <div className="space-y-1">
                <p className="font-medium text-sm text-foreground">{color.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{color.hex}</p>
                <p className="text-xs text-muted-foreground font-mono">{color.class}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gradients */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Gradientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gradients.map((gradient) => (
            <div key={gradient.name} className="space-y-3">
              <div className={`h-24 w-full rounded-lg ${gradient.class} shadow-md`} />
              <div className="space-y-1">
                <p className="font-medium text-sm text-foreground">{gradient.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{gradient.class}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Tipografia</h2>
        <div className="space-y-6 p-6 bg-card rounded-lg border border-card-border">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Heading 1 - 4xl Bold</h1>
            <p className="text-xs text-muted-foreground font-mono">text-4xl font-bold</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-foreground">Heading 2 - 3xl Semibold</h2>
            <p className="text-xs text-muted-foreground font-mono">text-3xl font-semibold</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-foreground">Heading 3 - 2xl Semibold</h3>
            <p className="text-xs text-muted-foreground font-mono">text-2xl font-semibold</p>
          </div>
          <div className="space-y-2">
            <p className="text-base text-foreground">Body Text - Base Regular</p>
            <p className="text-xs text-muted-foreground font-mono">text-base</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Small Text - SM Muted</p>
            <p className="text-xs text-muted-foreground font-mono">text-sm text-muted-foreground</p>
          </div>
        </div>
      </section>

      {/* Shadows */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Sombras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shadows.map((shadow) => (
            <div key={shadow.name} className="space-y-3">
              <div className={`h-20 w-full bg-card rounded-lg ${shadow.class} border border-card-border`} />
              <div className="space-y-1">
                <p className="font-medium text-sm text-foreground">{shadow.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{shadow.class}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Border Radius</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <div className="h-16 w-full bg-primary rounded-sm" />
            <p className="font-medium text-sm text-foreground">Small - rounded-sm</p>
          </div>
          <div className="space-y-3">
            <div className="h-16 w-full bg-primary rounded-md" />
            <p className="font-medium text-sm text-foreground">Medium - rounded-md</p>
          </div>
          <div className="space-y-3">
            <div className="h-16 w-full bg-primary rounded-lg" />
            <p className="font-medium text-sm text-foreground">Large - rounded-lg</p>
          </div>
        </div>
      </section>

      {/* Animations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Animações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg border border-card-border">
            <div className="h-16 w-16 bg-primary rounded-lg animate-fade-in mb-4" />
            <p className="font-medium text-sm">Fade In</p>
            <p className="text-xs text-muted-foreground font-mono">animate-fade-in</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-card-border">
            <div className="h-16 w-16 bg-accent rounded-lg animate-scale-in mb-4" />
            <p className="font-medium text-sm">Scale In</p>
            <p className="text-xs text-muted-foreground font-mono">animate-scale-in</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-card-border">
            <div className="h-16 w-16 bg-success rounded-lg animate-pulse-glow mb-4" />
            <p className="font-medium text-sm">Pulse Glow</p>
            <p className="text-xs text-muted-foreground font-mono">animate-pulse-glow</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignSystem;