export type Lang = "en" | "ar";

export const content = {
  en: {
    meta: {
      title: "Mohammed Al-Hamed — Software Engineering Student",
      description:
        "Portfolio of Mohammed Abdullah Al-Hamed, Software Engineering student at UMPSA with expertise in AI-assisted development, UI/UX design, and modern software engineering.",
    },

    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      downloadCV: "Download CV",
    },

    hero: {
      greeting: "Hello, I'm",
      name: "Mohammed\nAl-Hamed",
      title: "Software Engineering Student",
      subtitle: "AI & Full-Stack Development",
      tagline:
        "Third-year Software Engineering student at UMPSA, passionate about AI-assisted development, UI/UX design, and building impactful digital products. From Riyadh, building the future.",
      cta: "View My Work",
      ctaSecondary: "Get in Touch",
      scrollHint: "Scroll to explore",
      location: "Riyadh, Saudi Arabia · Studying at UMPSA, Malaysia",
      available: "Open to opportunities",
    },

    about: {
      label: "About Me",
      heading: "Building the Future\nOne Line at a Time",
      bio1:
        "I'm Mohammed Abdullah Al-Hamed, a third-year Software Engineering student at Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA), originally from Riyadh, Saudi Arabia.",
      bio2:
        "I have a strong interest in AI Engineering, modern software development, and digital product creation. My focus is on building practical technical skills while exploring how artificial intelligence can enhance software development workflows and productivity.",
      bio3:
        "I actively explore AI-assisted coding, UI/UX design with Figma, enterprise systems like SAP, and data analytics. My goal is to grow as a technology professional and contribute to impactful digital products.",
      stats: [
        { value: "Y3", label: "Software Engineering" },
        { value: "4+", label: "Certifications" },
        { value: "6+", label: "Technologies" },
        { value: "100%", label: "Commitment" },
      ],
    },

    skills: {
      label: "Skills & Stack",
      heading: "Technologies I Work With",
      subheading:
        "A growing technical toolkit spanning programming, AI-assisted development, enterprise systems, and design.",
      categories: [
        {
          name: "Programming Languages",
          icon: "Monitor",
          skills: ["Java", "C", "PHP", "HTML5", "CSS3"],
        },
        {
          name: "Software Engineering",
          icon: "Server",
          skills: ["Object-Oriented Programming (OOP)", "Software Development Fundamentals", "System Design", "Version Control (Git)"],
        },
        {
          name: "AI & Modern Dev",
          icon: "Wrench",
          skills: ["AI Prompt Engineering", "AI-Assisted Development", "Cursor AI", "Vibe Coding"],
        },
        {
          name: "Design",
          icon: "Palette",
          skills: ["UI/UX Design", "Figma", "Wireframing", "User Research"],
        },
        {
          name: "Enterprise & Data",
          icon: "Database",
          skills: ["SAP ERP", "Business Process Integration", "Data Analysis", "Datathon"],
        },
        {
          name: "Soft Skills",
          icon: "Users",
          skills: ["Problem Solving", "Team Collaboration", "Continuous Learning", "Technical Communication"],
        },
      ],
    },

    experience: {
      label: "Experience",
      heading: "Academic & Professional Journey",
      subheading: "Key experiences shaping my path as a software engineer.",
      placeholder: "PLACEHOLDER — Update with real experience",
      items: [
        {
          role: "Software Engineering Student",
          company: "Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
          period: "2022 – Present",
          type: "Full-time Study",
          description:
            "Pursuing a Bachelor's degree in Software Engineering. Gaining deep expertise in software development methodologies, object-oriented programming, enterprise systems, and modern development practices including AI-assisted coding.",
          achievements: [
            "Active participant in Datathon competitions — working with real-world datasets",
            "Completed specialized certifications in AI-assisted development and UI/UX design",
            "Gained hands-on experience with SAP ERP through BCS3423 coursework",
          ],
          isPlaceholder: false,
        },
        {
          role: "UI/UX Design Bootcamp Participant",
          company: "PETAKOM — Universiti Malaysia Pahang Al-Sultan Abdullah",
          period: "Nov 2025",
          type: "Bootcamp",
          description:
            "Participated in the UI/UX Figma Bootcamp organized by Persatuan Mahasiswa Teknologi Komputer (PETAKOM) at UMPSA. Developed practical Figma skills for designing modern, user-centered interfaces.",
          achievements: [
            "Completed intensive hands-on training in Figma design tools",
            "Learned wireframing, prototyping, and user experience principles",
            "Built complete UI mockups applying modern design standards",
          ],
          isPlaceholder: false,
        },
        {
          role: "AI-Assisted Development",
          company: "Self-directed Learning · Scrimba / Coursera",
          period: "Feb 2026",
          type: "Certification",
          description:
            "Completed two industry certifications focused on modern AI-powered development workflows — 'Learn to Code with AI' and 'Vibe Coding with Cursor AI' — mastering how to leverage AI tools to accelerate and enhance software development.",
          achievements: [
            "Credential ID (Learn to Code with AI): 5SP6VDU9QSZW",
            "Credential ID (Vibe Coding with Cursor AI): 9EMQ96VUTG03",
            "Developed proficiency in Cursor AI and AI-driven coding workflows",
          ],
          isPlaceholder: false,
        },
      ],
    },

    projects: {
      label: "Projects",
      heading: "Selected Work",
      subheading:
        "Projects under active development. Follow my GitHub to stay updated as I publish my work.",
      placeholder: "Coming Soon",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      items: [
        {
          title: "Portfolio Website",
          description:
            "This portfolio website — built with Next.js 16, TypeScript, Tailwind CSS v4, and full Arabic/English RTL bilingual support. A premium, production-ready personal brand site.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS v4", "React", "Bilingual"],
          github: "https://github.com/Mohammed-Alhamed1",
          demo: null,
          featured: true,
          isPlaceholder: false,
        },
        {
          title: "AI-Assisted Development Projects",
          description:
            "Exploring the frontier of AI-powered coding. Building projects that leverage Cursor AI, prompt engineering, and modern AI development workflows to create intelligent software solutions.",
          tags: ["Cursor AI", "AI Engineering", "Prompt Engineering", "Modern Dev"],
          github: "https://github.com/Mohammed-Alhamed1",
          demo: null,
          featured: true,
          isPlaceholder: false,
        },
        {
          title: "UI/UX Design Portfolio",
          description:
            "A collection of user interface and experience designs created in Figma — spanning wireframes, prototypes, and high-fidelity mockups for web and mobile applications.",
          tags: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
          github: "https://github.com/Mohammed-Alhamed1",
          demo: null,
          featured: false,
          isPlaceholder: false,
        },
        {
          title: "Data Analysis · Datathon",
          description:
            "Academic data analytics projects and Datathon competition work — applying data analysis techniques to real-world datasets and extracting actionable insights.",
          tags: ["Data Analysis", "Python", "Academic", "Datathon"],
          github: "https://github.com/Mohammed-Alhamed1",
          demo: null,
          featured: false,
          isPlaceholder: false,
        },
      ],
    },

    education: {
      label: "Education",
      heading: "Academic Background",
      placeholder: "",
      items: [
        {
          degree: "Bachelor of Software Engineering",
          institution: "Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA) · Malaysia",
          period: "2022 – Present (Year 3)",
          description:
            "Pursuing a Bachelor's degree in Software Engineering with focus areas including object-oriented programming, software development methodologies, enterprise systems (SAP ERP), data analytics, and modern AI-assisted development practices.",
          achievements: [
            "Currently in Year 3 — on track for graduation",
            "BCS3423 Integrated Business Processing Using SAP (Feb 2026)",
            "Active participation in Datathon competitions",
            "PETAKOM UI/UX Figma Bootcamp (Nov 2025)",
          ],
          isPlaceholder: false,
        },
      ],
    },

    certifications: {
      label: "Certifications",
      heading: "Credentials & Certifications",
      placeholder: "",
      items: [
        {
          name: "Learn to Code with AI",
          issuer: "Scrimba · Coursera",
          year: "Feb 2026",
          credentialId: "5SP6VDU9QSZW",
          isPlaceholder: false,
        },
        {
          name: "Vibe Coding with Cursor AI",
          issuer: "Scrimba · Coursera",
          year: "Feb 2026",
          credentialId: "9EMQ96VUTG03",
          isPlaceholder: false,
        },
        {
          name: "UI/UX Figma Bootcamp",
          issuer: "PETAKOM · Universiti Malaysia Pahang Al-Sultan Abdullah",
          year: "Nov 2025",
          credentialId: "UMPSA-PETAKOM",
          isPlaceholder: false,
        },
        {
          name: "BCS3423 Integrated Business Processing Using SAP",
          issuer: "Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
          year: "Feb 2026",
          credentialId: "UMPSA-SAP-BCS3423",
          isPlaceholder: false,
        },
      ],
    },

    github: {
      label: "GitHub",
      heading: "Code & Open Source",
      subheading:
        "I'm actively building and preparing several projects in software development, AI engineering, and modern web technologies. Follow my GitHub profile to be the first to see them when they drop.",
      githubUrl: "https://github.com/Mohammed-Alhamed1",
      viewProfile: "View GitHub Profile",
      stats: [
        { label: "Profile", value: "Mohammed-Alhamed1" },
        { label: "Account", value: "GitHub Pro" },
        { label: "Status", value: "Building Soon" },
      ],
      note: "Public repositories coming soon — follow to stay updated.",
    },

    contact: {
      label: "Contact",
      heading: "Let's Work Together",
      subheading:
        "I'm open to internship opportunities, project collaborations, and interesting conversations about technology. Reach out and let's connect.",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        emailLabel: "Or email me directly at",
        emailAddress: "alhamedmohammed33@gmail.com",
      },
      links: {
        linkedin: "LinkedIn Profile",
        github: "GitHub Profile",
        email: "Email",
      },
    },

    footer: {
      name: "Mohammed Al-Hamed",
      tagline: "Software Engineering Student · UMPSA · From Riyadh, Saudi Arabia",
      copyright: "2026 Mohammed Abdullah Al-Hamed. All rights reserved.",
      builtWith: "Built with Next.js 16 & Tailwind CSS v4",
      links: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Email",
      },
    },
  },

  ar: {
    meta: {
      title: "محمد الحامد — طالب هندسة برمجيات",
      description:
        "موقع محمد عبدالله الحامد، طالب هندسة برمجيات في جامعة UMP بماليزيا، متخصص في تطوير البرمجيات بمساعدة الذكاء الاصطناعي وتصميم UI/UX.",
    },

    nav: {
      about: "عني",
      skills: "المهارات",
      experience: "الخبرات",
      projects: "المشاريع",
      education: "التعليم",
      contact: "تواصل",
      downloadCV: "تحميل السيرة الذاتية",
    },

    hero: {
      greeting: "مرحباً، أنا",
      name: "محمد\nالحامد",
      title: "طالب هندسة برمجيات",
      subtitle: "الذكاء الاصطناعي · تطوير البرمجيات",
      tagline:
        "طالب في السنة الثالثة من هندسة البرمجيات في جامعة UMP بماليزيا، شغوف بالتطوير بمساعدة الذكاء الاصطناعي، تصميم واجهات المستخدم، وبناء منتجات رقمية مؤثرة. من الرياض، أبني المستقبل.",
      cta: "استعرض أعمالي",
      ctaSecondary: "تواصل معي",
      scrollHint: "مرر للاستكشاف",
      location: "الرياض، المملكة العربية السعودية · دراسة في UMPSA، ماليزيا",
      available: "متاح للفرص",
    },

    about: {
      label: "عني",
      heading: "أبني المستقبل\nسطراً بسطر",
      bio1:
        "أنا محمد عبدالله الحامد، طالب في السنة الثالثة من تخصص هندسة البرمجيات في جامعة ماليزيا باهانج السلطانية (UMPSA)، أصلي من الرياض، المملكة العربية السعودية.",
      bio2:
        "لديّ اهتمام كبير بهندسة الذكاء الاصطناعي، تطوير البرمجيات الحديثة، وبناء المنتجات الرقمية. أركز على تطوير مهاراتي التقنية بشكل عملي مع استكشاف كيفية تعزيز الذكاء الاصطناعي لإنتاجية المطورين.",
      bio3:
        "أستكشف التطوير بمساعدة الذكاء الاصطناعي، تصميم UI/UX باستخدام Figma، أنظمة SAP، وتحليل البيانات. هدفي أن أصبح متخصصاً تقنياً يساهم في منتجات رقمية مؤثرة.",
      stats: [
        { value: "ث٣", label: "هندسة برمجيات" },
        { value: "+٤", label: "شهادات مهنية" },
        { value: "+٦", label: "تقنيات محترفة" },
        { value: "١٠٠٪", label: "التزام كامل" },
      ],
    },

    skills: {
      label: "المهارات والتقنيات",
      heading: "التقنيات التي أعمل بها",
      subheading:
        "مجموعة تقنية متنامية تشمل البرمجة، التطوير بمساعدة الذكاء الاصطناعي، أنظمة المؤسسات، والتصميم.",
      categories: [
        {
          name: "لغات البرمجة",
          icon: "Monitor",
          skills: ["Java", "C", "PHP", "HTML5", "CSS3"],
        },
        {
          name: "هندسة البرمجيات",
          icon: "Server",
          skills: ["البرمجة كائنية التوجه (OOP)", "أساسيات تطوير البرمجيات", "تصميم الأنظمة", "Git"],
        },
        {
          name: "الذكاء الاصطناعي والتطوير الحديث",
          icon: "Wrench",
          skills: ["هندسة الـ Prompt", "التطوير بمساعدة AI", "Cursor AI", "Vibe Coding"],
        },
        {
          name: "التصميم",
          icon: "Palette",
          skills: ["تصميم UI/UX", "Figma", "الواير فريم", "أبحاث المستخدم"],
        },
        {
          name: "المؤسسات والبيانات",
          icon: "Database",
          skills: ["SAP ERP", "تكامل العمليات التجارية", "تحليل البيانات", "Datathon"],
        },
        {
          name: "المهارات الشخصية",
          icon: "Users",
          skills: ["حل المشكلات", "العمل الجماعي", "التعلم المستمر", "التواصل التقني"],
        },
      ],
    },

    experience: {
      label: "الخبرة المهنية",
      heading: "المسيرة الأكاديمية والمهنية",
      subheading: "المحطات الرئيسية في مسيرتي كمهندس برمجيات.",
      placeholder: "",
      items: [
        {
          role: "طالب هندسة برمجيات",
          company: "جامعة ماليزيا باهانج السلطانية (UMPSA) · ماليزيا",
          period: "٢٠٢٢ – الحاضر",
          type: "دراسة جامعية",
          description:
            "دراسة بكالوريوس هندسة البرمجيات مع التعمق في مناهج تطوير البرمجيات، البرمجة كائنية التوجه، أنظمة المؤسسات، تحليل البيانات، والتطوير بمساعدة الذكاء الاصطناعي.",
          achievements: [
            "مشاركة فعّالة في مسابقات Datathon مع بيانات حقيقية",
            "إتمام شهادات متخصصة في التطوير بالذكاء الاصطناعي وتصميم UI/UX",
            "اكتساب خبرة عملية في SAP ERP عبر مادة BCS3423",
          ],
          isPlaceholder: false,
        },
        {
          role: "مشارك في بوتكامب UI/UX",
          company: "PETAKOM · جامعة ماليزيا باهانج السلطانية",
          period: "نوفمبر ٢٠٢٥",
          type: "بوتكامب",
          description:
            "شاركت في بوتكامب UI/UX Figma المنظّم من قِبَل رابطة طلاب تقنية الحاسب (PETAKOM) في UMPSA، وطوّرت مهارات عملية في تصميم الواجهات الحديثة.",
          achievements: [
            "تدريب مكثف على أدوات Figma للتصميم",
            "تعلّم الـ Wireframing والـ Prototyping وأسس تجربة المستخدم",
            "بناء نماذج UI كاملة بمعايير التصميم الحديثة",
          ],
          isPlaceholder: false,
        },
        {
          role: "التطوير بمساعدة الذكاء الاصطناعي",
          company: "التعلم الذاتي · Scrimba / Coursera",
          period: "فبراير ٢٠٢٦",
          type: "شهادة",
          description:
            "أتممت شهادتين متخصصتين في التطوير بمساعدة الذكاء الاصطناعي: 'Learn to Code with AI' و'Vibe Coding with Cursor AI' — أتقنت من خلالهما استخدام أدوات AI لتسريع وتحسين جودة البرمجيات.",
          achievements: [
            "رمز الاعتماد (Learn to Code with AI): 5SP6VDU9QSZW",
            "رمز الاعتماد (Vibe Coding with Cursor AI): 9EMQ96VUTG03",
            "إتقان Cursor AI وسير عمل التطوير المدعوم بالذكاء الاصطناعي",
          ],
          isPlaceholder: false,
        },
      ],
    },

    projects: {
      label: "المشاريع",
      heading: "أعمال مختارة",
      subheading:
        "مشاريع قيد التطوير. تابع ملفي على GitHub لتكون أول من يطلع عليها عند نشرها.",
      placeholder: "قريباً",
      viewCode: "الكود",
      liveDemo: "عرض حي",
      items: [
        {
          title: "موقع البورتفوليو",
          description:
            "هذا الموقع الشخصي — مبني بـ Next.js 16 وTypeScript وTailwind CSS v4 مع دعم كامل للعربية (RTL) والإنجليزية (LTR). موقع براند شخصي احترافي جاهز للإنتاج.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS v4", "React", "ثنائي اللغة"],
          github: "https://github.com/Mohammed-Alhamed1",
          demo: null,
          featured: true,
          isPlaceholder: false,
        },
        {
          title: "مشاريع التطوير بالذكاء الاصطناعي",
          description:
            "استكشاف آفاق البرمجة بمساعدة الذكاء الاصطناعي — بناء مشاريع تستفيد من Cursor AI وهندسة الـ Prompt وسير عمل التطوير الحديث.",
          tags: ["Cursor AI", "هندسة AI", "Prompt Engineering", "تطوير حديث"],
          github: "https://github.com/Mohammed-Alhamed1",
          demo: null,
          featured: true,
          isPlaceholder: false,
        },
        {
          title: "محفظة تصميمات UI/UX",
          description:
            "مجموعة من تصاميم واجهات المستخدم المُنشأة في Figma — تشمل الواير فريم والنماذج الأولية والتصاميم عالية الدقة لتطبيقات الويب والجوال.",
          tags: ["Figma", "UI/UX", "واير فريم", "نماذج أولية"],
          github: "https://github.com/Mohammed-Alhamed1",
          demo: null,
          featured: false,
          isPlaceholder: false,
        },
        {
          title: "تحليل البيانات · Datathon",
          description:
            "مشاريع تحليل بيانات أكاديمية ومشاركات في مسابقات Datathon — تطبيق تقنيات تحليل البيانات على بيانات حقيقية واستخلاص رؤى قابلة للتنفيذ.",
          tags: ["تحليل البيانات", "Python", "أكاديمي", "Datathon"],
          github: "https://github.com/Mohammed-Alhamed1",
          demo: null,
          featured: false,
          isPlaceholder: false,
        },
      ],
    },

    education: {
      label: "التعليم",
      heading: "الخلفية الأكاديمية",
      placeholder: "",
      items: [
        {
          degree: "بكالوريوس هندسة البرمجيات",
          institution: "جامعة ماليزيا باهانج السلطانية (UMPSA) · ماليزيا",
          period: "٢٠٢٢ – الحاضر (السنة الثالثة)",
          description:
            "دراسة بكالوريوس هندسة البرمجيات مع التركيز على مناهج تطوير البرمجيات، البرمجة كائنية التوجه، أنظمة المؤسسات (SAP ERP)، تحليل البيانات، وممارسات التطوير الحديثة بمساعدة الذكاء الاصطناعي.",
          achievements: [
            "السنة الثالثة حالياً — في طريقي للتخرج",
            "BCS3423 معالجة الأعمال المتكاملة باستخدام SAP (فبراير ٢٠٢٦)",
            "مشاركة فعّالة في مسابقات Datathon",
            "بوتكامب UI/UX Figma بـ PETAKOM (نوفمبر ٢٠٢٥)",
          ],
          isPlaceholder: false,
        },
      ],
    },

    certifications: {
      label: "الشهادات والاعتمادات",
      heading: "الشهادات المهنية",
      placeholder: "",
      items: [
        {
          name: "Learn to Code with AI",
          issuer: "Scrimba · Coursera",
          year: "فبراير ٢٠٢٦",
          credentialId: "5SP6VDU9QSZW",
          isPlaceholder: false,
        },
        {
          name: "Vibe Coding with Cursor AI",
          issuer: "Scrimba · Coursera",
          year: "فبراير ٢٠٢٦",
          credentialId: "9EMQ96VUTG03",
          isPlaceholder: false,
        },
        {
          name: "بوتكامب UI/UX Figma",
          issuer: "PETAKOM · جامعة ماليزيا باهانج السلطانية",
          year: "نوفمبر ٢٠٢٥",
          credentialId: "UMPSA-PETAKOM",
          isPlaceholder: false,
        },
        {
          name: "BCS3423 معالجة الأعمال المتكاملة باستخدام SAP",
          issuer: "جامعة ماليزيا باهانج السلطانية (UMPSA)",
          year: "فبراير ٢٠٢٦",
          credentialId: "UMPSA-SAP-BCS3423",
          isPlaceholder: false,
        },
      ],
    },

    github: {
      label: "GitHub",
      heading: "الكود والمصادر المفتوحة",
      subheading:
        "أبني وأعدّ حالياً عدة مشاريع في تطوير البرمجيات وهندسة الذكاء الاصطناعي وتقنيات الويب الحديثة. تابع ملفي على GitHub لتكون أول من يطلع عليها.",
      githubUrl: "https://github.com/Mohammed-Alhamed1",
      viewProfile: "عرض ملف GitHub",
      stats: [
        { label: "الملف الشخصي", value: "Mohammed-Alhamed1" },
        { label: "الحساب", value: "GitHub Pro" },
        { label: "الحالة", value: "قيد البناء" },
      ],
      note: "المستودعات العامة قادمة قريباً — تابعني للبقاء على اطلاع.",
    },

    contact: {
      label: "التواصل",
      heading: "لنعمل معاً",
      subheading:
        "أرحّب بفرص التدريب والتعاون في المشاريع والمحادثات حول التقنية. تواصل معي ولنبنِ شيئاً رائعاً.",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "رسالتك",
        send: "إرسال الرسالة",
        sending: "جارٍ الإرسال...",
        success: "تم إرسال رسالتك! سأتواصل معك قريباً.",
        emailLabel: "أو راسلني مباشرةً على",
        emailAddress: "alhamedmohammed33@gmail.com",
      },
      links: {
        linkedin: "ملف LinkedIn",
        github: "ملف GitHub",
        email: "البريد الإلكتروني",
      },
    },

    footer: {
      name: "محمد الحامد",
      tagline: "طالب هندسة برمجيات · UMPSA · من الرياض، المملكة العربية السعودية",
      copyright: "٢٠٢٦ محمد عبدالله الحامد. جميع الحقوق محفوظة.",
      builtWith: "تم البناء بـ Next.js 16 و Tailwind CSS v4",
      links: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "البريد",
      },
    },
  },
} as const;

export type Content = typeof content.en;
