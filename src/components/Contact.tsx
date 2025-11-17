import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trackSectionView, trackButtonClick } from "@/utils/analytics";
import { toast } from "sonner";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView('contact');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackButtonClick('enviar_mensagem', 'contact_form');
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Contato</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vamos criar algo incrível juntos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Informações</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Email:</strong><br />
                    contato@studionoir.com.br
                  </p>
                  <p>
                    <strong className="text-foreground">Telefone:</strong><br />
                    +55 (11) 98765-4321
                  </p>
                  <p>
                    <strong className="text-foreground">Localização:</strong><br />
                    São Paulo, SP - Brasil
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  {['Instagram', 'Behance', 'LinkedIn'].map((social) => (
                    <Button
                      key={social}
                      variant="outline"
                      size="sm"
                      onClick={() => trackButtonClick(`social_${social.toLowerCase()}`, 'contact_section')}
                    >
                      {social}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Seu nome"
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Seu email"
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Sua mensagem"
                  required
                  rows={6}
                  className="bg-background resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
