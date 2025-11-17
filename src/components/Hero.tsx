import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/utils/analytics";

const Hero = () => {
  const handleCTAClick = () => {
    trackButtonClick('ver_portfolio', 'hero_section');
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    trackButtonClick('contato', 'hero_section');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Studio Noir
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Capturando momentos únicos através da arte da fotografia
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={handleCTAClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver Portfólio
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleContactClick}
              className="border-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
