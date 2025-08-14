const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-cultural rounded-lg flex items-center justify-center">
                <span className="text-cultural-foreground font-bold text-lg">Қ</span>
              </div>
              <span className="font-serif font-semibold text-xl">
                Ежелгі Мұра
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Қазақ халқының бай әдеби дәстүрлерін заманауи технологиялармен 
              үйлестіретін білім беру платформасы
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Тез сілтемелер</h3>
            <div className="space-y-2">
              <a href="#videos" className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Видеолар
              </a>
              <a href="#methodology" className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Методика
              </a>
              <a href="#glossary" className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Глоссарий
              </a>
              <a href="#references" className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Пайдаланылған әдебиеттер
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Байланыс</h3>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <p>Жоғары оқу орындары үшін</p>
              <p>Инновациялық білім беру технологиялары</p>
              <p className="pt-2">© 2024 Ежелгі Мұра платформасы</p>
            </div>
          </div>
        </div>

        {/* Cultural ornament */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex justify-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-cultural rounded-full"></div>
              <div className="w-3 h-3 bg-cultural/60 rounded-full"></div>
              <div className="w-3 h-3 bg-cultural/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;