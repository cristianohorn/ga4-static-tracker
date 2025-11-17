import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { trackNavigation } from "@/utils/analytics";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    trackNavigation(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold hover:text-accent transition-colors"
          >
            Studio Noir
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {['portfolio', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="text-muted-foreground hover:text-foreground transition-colors capitalize"
              >
                {section === 'about' ? 'Sobre' : section === 'contact' ? 'Contato' : 'Portfólio'}
              </button>
            ))}
            <Button 
              variant="outline"
              size="sm"
              onClick={() => handleNavClick('contact')}
              className="border-2"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
