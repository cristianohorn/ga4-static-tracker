import { useEffect, useRef } from "react";
import { trackSectionView } from "@/utils/analytics";

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView('portfolio');
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

  const portfolioItems = [
    {
      title: "Natureza Urbana",
      category: "Arquitetura",
      image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&h=600&fit=crop"
    },
    {
      title: "Luz & Sombra",
      category: "Retratos",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    },
    {
      title: "Formas Abstratas",
      category: "Arte",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop"
    },
    {
      title: "Paisagens",
      category: "Natureza",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop"
    },
    {
      title: "Minimalismo",
      category: "Conceitual",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&h=600&fit=crop"
    },
    {
      title: "Perspectivas",
      category: "Urbano",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Portfólio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos nossos trabalhos mais recentes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-card shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm text-accent font-medium mb-2">{item.category}</p>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
