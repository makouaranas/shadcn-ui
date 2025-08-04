import { useLanguageStore } from "@/lib/i18n";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const { t, language } = useLanguageStore();

  // Experience areas
  const experiences = [
    {
      title: t("experience.embedded"),
      description: "Working with low-level systems, hardware integration, and automation solutions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("experience.oop"),
      description: "Creating maintainable, scalable software using object-oriented design principles",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: t("experience.webdev"),
      description: "Building responsive and interactive websites with modern technologies",
      color: "from-orange-500 to-amber-500",
    },
    {
      title: t("experience.problemsolving"),
      description: "Analyzing complex issues and implementing efficient solutions",
      color: "from-green-500 to-emerald-500",
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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <h2 className="text-3xl font-bold mb-4">{t("experience.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className={`p-6 flex gap-4 ${language === 'ar' ? 'rtl flex-row-reverse text-right' : 'ltr'}`}>
                  <div className={`shrink-0 mt-1 h-10 w-10 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white`}>
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Code snippet decoration */}
        <div className="relative mt-16 p-6 rounded-lg bg-muted/50 border border-border overflow-hidden">
          <div className={`${language === 'ar' ? 'rtl text-right' : 'ltr'}`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-muted-foreground text-sm">code-example.cpp</span>
            </div>
            <pre className="text-sm md:text-base font-mono overflow-x-auto whitespace-pre-wrap">
              <code className="language-cpp">
                <span className="text-blue-500">class</span> <span className="text-green-500">Developer</span> {"{"}
                <br />
                <span className="text-muted-foreground pl-4">// Attributes</span><br />
                <span className="pl-4 text-blue-500">private</span>:<br />
                <span className="pl-8">std::vector&lt;std::string&gt; <span className="text-purple-500">skills</span>;</span><br />
                <span className="pl-8">std::string <span className="text-purple-500">name</span>;</span><br />
                <span className="pl-8">bool <span className="text-purple-500">passionate</span>;</span><br />
                <br />
                <span className="pl-4 text-blue-500">public</span>:<br />
                <span className="pl-8"><span className="text-green-500">Developer</span>(std::string name)</span><br />
                <span className="pl-8">{" {"}</span><br />
                <span className="pl-12">this-&gt;<span className="text-purple-500">name</span> = name;</span><br />
                <span className="pl-12">this-&gt;<span className="text-purple-500">passionate</span> = true;</span><br />
                <span className="pl-12"><span className="text-purple-500">skills</span>.push_back("C++");</span><br />
                <span className="pl-12"><span className="text-purple-500">skills</span>.push_back("Java");</span><br />
                <span className="pl-12"><span className="text-purple-500">skills</span>.push_back("Web Dev");</span><br />
                <span className="pl-8">{" }"}</span><br />
                <br />
                <span className="pl-8">bool <span className="text-yellow-500">solveProblem</span>(Problem p) {"{"}</span><br />
                <span className="pl-12">return <span className="text-purple-500">passionate</span> && !<span className="text-purple-500">skills</span>.empty();</span><br />
                <span className="pl-8">{"}"}</span><br />
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;