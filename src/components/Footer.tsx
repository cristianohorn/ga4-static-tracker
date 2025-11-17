const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Studio Noir</h3>
              <p className="text-primary-foreground/80">
                Fotografia artística de alta qualidade para capturar seus momentos únicos.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfólio</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">Sobre</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>contato@studionoir.com.br</li>
                <li>+55 (11) 98765-4321</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Studio Noir. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
