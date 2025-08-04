import { useLanguageStore } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Layout, Database, Server } from "lucide-react";

const AboutSection = () => {
  const { t, language } = useLanguageStore();
  
  // Skills data
  const skills = [
    { 
      name: "C/C++", 
      icon: <Code className="h-8 w-8 mb-4 text-blue-500" />,
      level: 95 
    },
    { 
      name: "Java", 
      icon: <Server className="h-8 w-8 mb-4 text-orange-500" />,
      level: 90 
    },
    { 
      name: "Web Development", 
      icon: <Layout className="h-8 w-8 mb-4 text-purple-500" />,
      level: 85 
    },
    { 
      name: "Database", 
      icon: <Database className="h-8 w-8 mb-4 text-green-500" />,
      level: 80 
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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <h2 className="text-3xl font-bold mb-4">{t("about.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Text */}
          <motion.div 
            className={`space-y-6 ${language === 'ar' ? 'rtl' : 'ltr'}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Anas Makouar
              </span>
            </h3>
            <p className="text-muted-foreground">
              I'm a passionate and detail-oriented developer with strong experience in C, C++, and Java programming. 
              I love solving problems, writing clean and efficient code, and bringing creative ideas to life through technology.
            </p>
            <p className="text-muted-foreground">
              {t("about.description")}
            </p>
            
            {/* Key strengths */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {["Efficient code", "Problem solving", "Creative solutions", "Attention to detail"].map((strength, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center">
                      {skill.icon}
                    </div>
                    <h4 className="font-medium mb-2">{skill.name}</h4>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground mt-1 inline-block">{skill.level}%</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;