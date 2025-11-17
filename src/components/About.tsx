import { useEffect, useRef } from "react";
import { trackSectionView } from "@/utils/analytics";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView('about');
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

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Sobre Nós</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  O Studio Noir nasceu da paixão por contar histórias através de imagens. 
                  Especializados em fotografia artística, buscamos capturar a essência 
                  de cada momento com um olhar único e sensível.
                </p>
                <p className="text-lg leading-relaxed">
                  Nossa abordagem combina técnica refinada com criatividade, 
                  resultando em trabalhos que transcendem o ordinário e criam 
                  conexões emocionais profundas.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">Anos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Prêmios</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=800&fit=crop"
                  alt="Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
