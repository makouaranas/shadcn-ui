import { create } from "zustand";

export type Language = "en" | "ar";

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Translation dictionaries
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    
    // Hero section
    "hero.greeting": "Hello and welcome to my profile!",
    "hero.intro": "I'm Anas Makouar, a passionate and detail-oriented developer with strong experience in C, C++, and Java programming.",
    "hero.description": "I love solving problems, writing clean and efficient code, and bringing creative ideas to life through technology.",
    
    // About section
    "about.title": "About Me",
    "about.subtitle": "Passionate Developer & Problem Solver",
    "about.description": "I'm committed to delivering high-quality work, on time, with full client satisfaction. Let's work together to bring your project to life!",
    
    // Services section
    "services.title": "My Services",
    "services.subtitle": "What I Can Do For You",
    "services.c_cpp.title": "C/C++ Development",
    "services.c_cpp.description": "Robust applications in C or C++ with focus on performance and efficiency",
    "services.java.title": "Java Solutions",
    "services.java.description": "Desktop applications or backend services built with Java",
    "services.web.title": "Web Development",
    "services.web.description": "Modern websites using HTML/CSS/JavaScript or popular frameworks",
    
    // Experience section
    "experience.title": "My Experience",
    "experience.subtitle": "Areas of Expertise",
    "experience.embedded": "Embedded systems and automation",
    "experience.oop": "Object-oriented design",
    "experience.webdev": "Web development (from scratch or using CMS/tools)",
    "experience.problemsolving": "Technical problem-solving and debugging",
    
    // Contact section
    "contact.title": "Contact Me",
    "contact.subtitle": "Let's Work Together",
    "contact.message": "Feel free to contact me if you have any questions or custom requests. I'm here to help!",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message_input": "Message",
    "contact.send": "Send Message",
    
    // Footer
    "footer.rights": "All rights reserved",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "عني",
    "nav.services": "الخدمات",
    "nav.contact": "اتصل بي",
    
    // Hero section
    "hero.greeting": "مرحباً بك في صفحتي الشخصية!",
    "hero.intro": "أنا أنس مكوار، مطور شغوف ودقيق مع خبرة قوية في برمجة C و C++ و Java.",
    "hero.description": "أحب حل المشكلات، وكتابة التعليمات البرمجية النظيفة والفعالة، وإحياء الأفكار الإبداعية من خلال التكنولوجيا.",
    
    // About section
    "about.title": "نبذة عني",
    "about.subtitle": "مطور شغوف وحلال للمشاكل",
    "about.description": "أنا ملتزم بتقديم عمل عالي الجودة، في الوقت المحدد، مع رضا كامل للعملاء. دعنا نعمل معًا لإحياء مشروعك!",
    
    // Services section
    "services.title": "خدماتي",
    "services.subtitle": "ما يمكنني القيام به من أجلك",
    "services.c_cpp.title": "تطوير C/C++",
    "services.c_cpp.description": "تطبيقات قوية بلغة C أو C++ مع التركيز على الأداء والكفاءة",
    "services.java.title": "حلول Java",
    "services.java.description": "تطبيقات سطح المكتب أو خدمات الواجهة الخلفية المبنية بلغة Java",
    "services.web.title": "تطوير الويب",
    "services.web.description": "مواقع ويب حديثة باستخدام HTML/CSS/JavaScript أو أطر عمل شائعة",
    
    // Experience section
    "experience.title": "خبراتي",
    "experience.subtitle": "مجالات الخبرة",
    "experience.embedded": "الأنظمة المدمجة والأتمتة",
    "experience.oop": "التصميم الموجه للكائنات",
    "experience.webdev": "تطوير الويب (من الصفر أو باستخدام CMS/أدوات)",
    "experience.problemsolving": "حل المشكلات التقنية وتصحيح الأخطاء",
    
    // Contact section
    "contact.title": "اتصل بي",
    "contact.subtitle": "دعنا نعمل معًا",
    "contact.message": "لا تتردد في الاتصال بي إذا كان لديك أي أسئلة أو طلبات مخصصة. أنا هنا للمساعدة!",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.subject": "الموضوع",
    "contact.message_input": "الرسالة",
    "contact.send": "إرسال الرسالة",
    
    // Footer
    "footer.rights": "جميع الحقوق محفوظة",
  },
};

export const useLanguageStore = create<LanguageState>((set, get) => ({
  language: "en",
  setLanguage: (language) => set({ language }),
  t: (key) => {
    const { language } = get();
    // @ts-expect-error The key might not exist in translations
    return translations[language][key] || key;
  },
}));