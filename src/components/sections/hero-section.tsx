import { useLanguageStore } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { useThemeStore } from "@/lib/theme-store";

const HeroSection = () => {
  const { t, language } = useLanguageStore();
  const { theme } = useThemeStore();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Programming themed background with code snippets */}
        <div className="absolute opacity-5 text-xs sm:text-sm md:text-base font-mono overflow-hidden h-full w-full">
          {Array(20).fill(0).map((_, i) => (
            <div key={i} className="my-4">
              <span className="text-blue-600">{`function`}</span> <span className="text-green-600">{`optimizeCode(code)`}</span> {`{`}<br />
              &nbsp;&nbsp;<span className="text-blue-600">{`const`}</span> <span className="text-purple-600">{`efficiency`}</span> = <span className="text-orange-600">{`analyzePerformance(code);`}</span><br />
              &nbsp;&nbsp;<span className="text-blue-600">{`if`}</span> (efficiency &lt; <span className="text-yellow-600">{`0.8`}</span>) {`{`}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">{`return`}</span> <span className="text-orange-600">{`refactor(code);`}</span><br />
              &nbsp;&nbsp;{`}`} <span className="text-blue-600">{`else`}</span> {`{`}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">{`return`}</span> code;<br />
              &nbsp;&nbsp;{`}`}<br />
              {`}`}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <motion.div 
          className={`max-w-3xl mx-auto text-center space-y-6 ${language === 'ar' ? 'rtl' : 'ltr'}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30 bg-primary/10 text-primary">
              {t("hero.greeting")}
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            {t("hero.intro")}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground"
          >
            {t("hero.description")}
          </motion.p>
          
          <motion.div variants={itemVariants} className="pt-4 flex justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">{t("contact.title")}</a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#about">{t("about.title")}</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm mb-2">{t("nav.about")}</span>
            <ArrowDownIcon className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;