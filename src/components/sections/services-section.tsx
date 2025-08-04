import { useLanguageStore } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, FileCode, Laptop, CodepenIcon } from "lucide-react";

const ServicesSection = () => {
  const { t, language } = useLanguageStore();
  
  // Services data
  const services = [
    {
      title: t("services.c_cpp.title"),
      description: t("services.c_cpp.description"),
      icon: <Code2 className="h-10 w-10 text-blue-500" />,
    },
    {
      title: t("services.java.title"),
      description: t("services.java.description"),
      icon: <CodepenIcon className="h-10 w-10 text-orange-500" />,
    },
    {
      title: t("services.web.title"),
      description: t("services.web.description"),
      icon: <Laptop className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Custom Solutions",
      description: "Tailored software solutions designed to meet your specific requirements",
      icon: <FileCode className="h-10 w-10 text-green-500" />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <h2 className="text-3xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden group">
                <CardContent className={`p-6 h-full flex flex-col ${language === 'ar' ? 'rtl text-right' : 'ltr'}`}>
                  <div className="mb-4 p-3 rounded-lg bg-muted/50 inline-flex">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  {/* Decorative background element */}
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;