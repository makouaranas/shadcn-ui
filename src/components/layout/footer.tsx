import { useLanguageStore } from "@/lib/i18n";

const Footer = () => {
  const { t, language } = useLanguageStore();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-10">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Anas Makouar
            </h3>
            <p className="text-muted-foreground mt-1">
              {t("footer.rights")} &copy; {currentYear}
            </p>
          </div>
          
          <div className="flex gap-4 md:gap-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.home")}
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.about")}
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.services")}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.contact")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;