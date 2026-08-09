import { ServiceType } from '@/types'

export type Locale = 'fr' | 'ar'

export interface Content {
  meta: {
    title: string
    description: string
  }
  topbar: {
    items: string[]
  }
  nav: {
    links: { label: string; href: string }[]
    cta: string
  }
  hero: {
    badge: string
    heading: { line1: string; line2: string; highlight: string }
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    videoBadge: string
  }
  comparison: {
    stat: {
      label: string
      number: number
      suffix: string
      description: string
    }
    label: string
    heading: string
    withoutTitle: string
    withTitle: string
    vipTag: string
    without: string[]
    withUs: string[]
  }
  portfolio: {
    label: string
    heading: string
    sub: string
    audioFallback: string
    prevLabel: string
    nextLabel: string
    showcaseTitle: string
    playLabel: string
    pauseLabel: string
    soundOnLabel: string
    soundOffLabel: string
    expandLabel: string
    items: {
      id: string
      category: string
      title: string
      description: string
      tags: string[]
      imageUrl: string
      audioUrl: string
    }[]
  }
  form: {
    label: string
    heading: string
    sub: string
    firstName: { label: string; placeholder: string }
    lastName: { label: string; placeholder: string }
    whatsapp: { label: string; placeholder: string }
    service: { label: string; placeholder: string }
    serviceOptions: { id: ServiceType; label: string }[]
    success: string
    error: string
    submit: string
    whatsappMessage: {
      title: string
      firstName: string
      lastName: string
      whatsapp: string
      service: string
      unspecified: string
    }
  }
  footer: {
    tagline: string
    navTitle: string
    servicesTitle: string
    contactTitle: string
    address: string
    copyrightSuffix: string
    legal: { privacy: string; terms: string }
  }
  floatingCta: string
}

export const translations: Record<Locale, Content> = {
  fr: {
    meta: {
      title: 'Tech Hermanos | Demande VIP',
      description:
        'Tech Hermanos : Web, App, Système & Publicité. Accompagnement digital réservé aux entrepreneurs qui visent la croissance.',
    },
    topbar: {
      items: [
        'RÉSERVÉ AUX ENTREPRENEURS VIP',
        'PLACES LIMITÉES CE MOIS-CI',
        'WEB · APP · SYSTÈME · PUBLICITÉ',
      ],
    },
    nav: {
      links: [
        { label: 'Accueil', href: '#home' },
        { label: 'Comparaison', href: '#comparison' },
        { label: 'Réalisations', href: '#portfolio' },
        { label: 'Qualification VIP', href: '#form-section' },
      ],
      cta: 'Demande VIP',
    },
    hero: {
      badge: 'Web · App · Système · Publicité',
      heading: { line1: 'Upscale Your Business', line2: 'With An', highlight: 'Experienced Team' },
      subtitle:
        "Tech Hermanos accompagne les entrepreneurs sérieux dans la création de leur site, application, système ou campagne publicitaire, de la stratégie jusqu'aux résultats.",
      ctaPrimary: 'Demande VIP ↗',
      ctaSecondary: 'Pourquoi Tech Hermanos',
      videoBadge: "Message de l'équipe",
    },
    comparison: {
      stat: {
        label: 'Le Constat',
        /* Placeholder figure, swap for a real, sourced number before launch */
        number: 90,
        suffix: '%',
        description:
          "des entreprises qui réussissent leur transformation digitale s'appuient sur une seule équipe experte plutôt que plusieurs prestataires séparés.",
      },
      label: 'Avant / Après',
      heading: 'Avec ou sans Tech Hermanos, le résultat change tout',
      withoutTitle: 'Sans Tech Hermanos',
      withTitle: 'Avec Tech Hermanos',
      vipTag: 'VIP',
      without: [
        'Un site amateur qui ne convertit pas vos visiteurs en clients',
        'Des prestataires différents pour le web, l’app et les pubs, zéro cohérence',
        'Des délais qui s’éternisent et une communication qui s’arrête',
        'Un budget pub dépensé sans stratégie ni suivi des résultats',
        'Vous gérez seul(e) la technique au lieu de vous concentrer sur votre business',
      ],
      withUs: [
        'Un site et une app pensés pour transformer vos visiteurs en clients',
        'Une seule équipe pour le web, l’app, le système et la publicité',
        'Un accompagnement réactif, du premier appel jusqu’au lancement',
        'Des campagnes publicitaires pilotées et optimisées pour votre ROI',
        'Vous pilotez votre croissance, on s’occupe de la technique',
      ],
    },
    portfolio: {
      label: 'Réalisations',
      heading: 'Des projets qui parlent d’eux-mêmes',
      sub: 'Faites défiler pour découvrir une sélection de nos réalisations récentes. Écoutez le brief de chaque projet.',
      audioFallback: 'Votre navigateur ne supporte pas la lecture audio.',
      prevLabel: 'Projet précédent',
      nextLabel: 'Projet suivant',
      showcaseTitle: 'Nos projets en action',
      playLabel: 'Lire la vidéo',
      pauseLabel: 'Mettre en pause',
      soundOnLabel: 'Activer le son',
      soundOffLabel: 'Couper le son',
      expandLabel: 'Voir en grand',
      items: [
        {
          id: 'p1',
          category: 'Mode',
          title: 'Boutique Streetwear en ligne',
          description:
            "Boutique e-commerce complète pour une marque streetwear : navigation par collection, soldes saisonnières et un hero éditorial percutant pensé pour convertir.",
          tags: ['E-Commerce', 'UI/UX', 'Web Design'],
          imageUrl: '/images/portfolio/fashion-store.jpg',
          audioUrl: '/audio/project-1.mp3',
        },
        {
          id: 'p2',
          category: 'SaaS',
          title: 'TIXTA, gestionnaire de tâches',
          description:
            "Landing page SaaS pour une plateforme de gestion de tâches utilisée par plus de 9M d'utilisateurs : hero percutant, statistiques en direct et CTA clairs pour maximiser les inscriptions.",
          tags: ['SaaS', 'Landing Page', 'Conversion'],
          imageUrl: '/images/portfolio/task-manager.jpg',
          audioUrl: '/audio/project-2.mp3',
        },
        {
          id: 'p3',
          category: 'SaaS',
          title: 'Plateforme de gestion de fichiers',
          description:
            'Interface cloud complète avec organisation par dossiers, collaboration d’équipe et offres de stockage par palier, pensée pour rester claire malgré la complexité.',
          tags: ['SaaS', 'Dashboard', 'Product Design'],
          imageUrl: '/images/portfolio/file-manager.jpg',
          audioUrl: '/audio/project-3.mp3',
        },
        {
          id: 'p4',
          category: 'Marketplace',
          title: 'Marketplace gaming Fantech',
          description:
            'Marketplace multi-vendeurs pour accessoires gaming : filtres avancés, notations, curseur de prix et recherche rapide pour les passionnés.',
          tags: ['Marketplace', 'E-Commerce', 'Web Dev'],
          imageUrl: '/images/portfolio/gaming-marketplace.jpg',
          audioUrl: '/audio/project-4.mp3',
        },
        {
          id: 'p5',
          category: 'Restauration',
          title: 'HieuBowl, cuisine vietnamienne',
          description:
            'Site vibrant pour un restaurant vietnamien : menu complet, compteur de calories, avis clients et identité visuelle chaleureuse qui donne faim au premier regard.',
          tags: ['Restaurant', 'Web Design', 'UI/UX'],
          imageUrl: '/images/portfolio/hieubowl.jpg',
          audioUrl: '/audio/project-5.mp3',
        },
        {
          id: 'p6',
          category: 'Restauration',
          title: 'Site pour restaurant vegan',
          description:
            'Site multi-sections pour un restaurant vegan : hero avec réservation, catégories de menu, valeurs nutritionnelles et section "Pourquoi nous choisir" qui inspire confiance.',
          tags: ['Restaurant', 'Landing Page', 'Branding'],
          imageUrl: '/images/portfolio/vegan-restaurant.jpg',
          audioUrl: '/audio/project-6.mp3',
        },
      ],
    },
    form: {
      label: 'Qualification VIP',
      heading: 'Parlons de votre projet',
      sub: 'Places limitées ce mois-ci. Remplissez le formulaire, on vous répond sur WhatsApp sous 24h pour cadrer votre projet.',
      firstName: { label: 'Prénom *', placeholder: 'Votre prénom' },
      lastName: { label: 'Nom *', placeholder: 'Votre nom' },
      whatsapp: { label: 'Numéro WhatsApp *', placeholder: '+212 6XX XXX XXX' },
      service: { label: 'Quel service vous intéresse ? *', placeholder: 'Choisissez un service' },
      serviceOptions: [
        { id: 'web', label: 'Site Web' },
        { id: 'app', label: 'Application Mobile' },
        { id: 'system', label: 'Système sur mesure' },
        { id: 'ads', label: 'Plateforme Publicitaire' },
      ],
      success: "Demande envoyée ! Un membre de l'équipe vous contacte sur WhatsApp sous 24h.",
      error: "Une erreur s'est produite. Merci de réessayer ou de nous contacter directement.",
      submit: 'Envoyer ma demande VIP ↗',
      whatsappMessage: {
        title: 'Demande VIP · Tech Hermanos',
        firstName: 'Prénom',
        lastName: 'Nom',
        whatsapp: 'WhatsApp',
        service: 'Service',
        unspecified: 'Non précisé',
      },
    },
    footer: {
      tagline:
        "L'agence digitale réservée aux entrepreneurs qui visent la croissance : web, app, système et publicité, une seule équipe.",
      navTitle: 'Navigation',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      address: 'Casablanca, Maroc',
      copyrightSuffix: 'Tech Hermanos. Tous droits réservés.',
      legal: { privacy: 'Politique de confidentialité', terms: 'Conditions générales' },
    },
    floatingCta: 'Demande VIP · Places Limitées',
  },

  ar: {
    meta: {
      title: 'Tech Hermanos | طلب VIP',
      description:
        'Tech Hermanos: موقع، تطبيق، نظام وإعلانات. مرافقة رقمية مخصصة لرواد الأعمال الطامحين للنمو.',
    },
    topbar: {
      items: [
        'مخصص لرواد الأعمال VIP',
        'أماكن محدودة هذا الشهر',
        'ويب · تطبيق · نظام · إعلانات',
      ],
    },
    nav: {
      links: [
        { label: 'الرئيسية', href: '#home' },
        { label: 'المقارنة', href: '#comparison' },
        { label: 'أعمالنا', href: '#portfolio' },
        { label: 'طلب VIP', href: '#form-section' },
      ],
      cta: 'طلب VIP',
    },
    hero: {
      badge: 'ويب · تطبيق · نظام · إعلانات',
      heading: { line1: 'طوّر أعمالك', line2: 'مع فريق', highlight: 'ذو خبرة عالية' },
      subtitle:
        'تك هرمانوس ترافق رواد الأعمال الجادين في إنشاء موقعهم الإلكتروني، تطبيقهم، نظامهم أو حملتهم الإعلانية، من الاستراتيجية إلى النتائج.',
      ctaPrimary: 'طلب VIP ←',
      ctaSecondary: 'لماذا Tech Hermanos',
      videoBadge: 'رسالة من الفريق',
    },
    comparison: {
      stat: {
        label: 'الواقع',
        number: 90,
        suffix: '%',
        description:
          'من الشركات التي تنجح في تحوّلها الرقمي تعتمد على فريق واحد متخصص عوض عدة مزودين متفرقين.',
      },
      label: 'قبل / بعد',
      heading: 'مع أو بدون Tech Hermanos، النتيجة تتغيّر بالكامل',
      withoutTitle: 'بدون Tech Hermanos',
      withTitle: 'مع Tech Hermanos',
      vipTag: 'VIP',
      without: [
        'موقع هاوٍ لا يحوّل زوارك إلى عملاء',
        'مقدّمو خدمات مختلفون للموقع والتطبيق والإعلانات، بدون أي انسجام',
        'آجال تطول بلا نهاية وتواصل ينقطع',
        'ميزانية إعلانية تُصرف بدون استراتيجية أو متابعة للنتائج',
        'تدير الجانب التقني بمفردك بدل التركيز على تطوير مشروعك',
      ],
      withUs: [
        'موقع وتطبيق مصمَّمان لتحويل زوارك إلى عملاء حقيقيين',
        'فريق واحد يتكفّل بالموقع والتطبيق والنظام والإعلانات',
        'مرافقة سريعة وفعّالة من أول اتصال إلى غاية الإطلاق',
        'حملات إعلانية مُدارة ومُحسَّنة لضمان أفضل عائد على استثمارك',
        'أنت تقود نمو مشروعك، ونحن نتكفّل بالجانب التقني',
      ],
    },
    portfolio: {
      label: 'أعمالنا',
      heading: 'مشاريع تتحدث عن نفسها',
      sub: 'تصفّح لاكتشاف مجموعة من أحدث أعمالنا. استمع لملخص كل مشروع.',
      audioFallback: 'متصفحك لا يدعم تشغيل الصوت.',
      prevLabel: 'المشروع السابق',
      nextLabel: 'المشروع التالي',
      showcaseTitle: 'مشاريعنا في العمل',
      playLabel: 'تشغيل الفيديو',
      pauseLabel: 'إيقاف مؤقت',
      soundOnLabel: 'تفعيل الصوت',
      soundOffLabel: 'كتم الصوت',
      expandLabel: 'عرض بحجم أكبر',
      items: [
        {
          id: 'p1',
          category: 'أزياء',
          title: 'متجر أزياء ستريتوير',
          description:
            'متجر إلكتروني متكامل لعلامة أزياء ستريتوير: تصفح حسب المجموعة، تخفيضات موسمية وواجهة رئيسية جذابة مصممة لتحويل الزوار إلى مشترين.',
          tags: ['E-Commerce', 'UI/UX', 'Web Design'],
          imageUrl: '/images/portfolio/fashion-store.jpg',
          audioUrl: '/audio/project-1.mp3',
        },
        {
          id: 'p2',
          category: 'SaaS',
          title: 'TIXTA، منظّم المهام',
          description:
            'صفحة هبوط لمنصة SaaS لإدارة المهام تخدم أكثر من 9 ملايين مستخدم: واجهة قوية، إحصائيات مباشرة وأزرار دعوة واضحة لزيادة التسجيلات.',
          tags: ['SaaS', 'Landing Page', 'Conversion'],
          imageUrl: '/images/portfolio/task-manager.jpg',
          audioUrl: '/audio/project-2.mp3',
        },
        {
          id: 'p3',
          category: 'SaaS',
          title: 'منصة إدارة الملفات',
          description:
            'واجهة سحابية متكاملة لتنظيم الملفات والتعاون الجماعي مع خطط تخزين متدرجة، مصممة لتبقى واضحة رغم تعقيد المهام.',
          tags: ['SaaS', 'Dashboard', 'Product Design'],
          imageUrl: '/images/portfolio/file-manager.jpg',
          audioUrl: '/audio/project-3.mp3',
        },
        {
          id: 'p4',
          category: 'سوق إلكتروني',
          title: 'سوق Fantech لعتاد الألعاب',
          description:
            'منصة متعددة البائعين لمستلزمات الألعاب: فلاتر متقدمة، تقييمات، شريط تحديد السعر وبحث سريع لعشاق الألعاب.',
          tags: ['Marketplace', 'E-Commerce', 'Web Dev'],
          imageUrl: '/images/portfolio/gaming-marketplace.jpg',
          audioUrl: '/audio/project-4.mp3',
        },
        {
          id: 'p5',
          category: 'مطاعم',
          title: 'HieuBowl، مطبخ فيتنامي',
          description:
            'موقع نابض بالحياة لمطعم فيتنامي: قائمة كاملة، عداد سعرات، آراء العملاء وهوية بصرية دافئة تفتح الشهية من أول نظرة.',
          tags: ['Restaurant', 'Web Design', 'UI/UX'],
          imageUrl: '/images/portfolio/hieubowl.jpg',
          audioUrl: '/audio/project-5.mp3',
        },
        {
          id: 'p6',
          category: 'مطاعم',
          title: 'موقع مطعم نباتي',
          description:
            'موقع متعدد الأقسام لمطعم نباتي: واجهة رئيسية مع حجز، تصنيفات القائمة، القيم الغذائية وقسم "لماذا تختارنا" يعزز الثقة.',
          tags: ['Restaurant', 'Landing Page', 'Branding'],
          imageUrl: '/images/portfolio/vegan-restaurant.jpg',
          audioUrl: '/audio/project-6.mp3',
        },
      ],
    },
    form: {
      label: 'تأهيل VIP',
      heading: 'لنتحدث عن مشروعك',
      sub: 'الأماكن محدودة هذا الشهر. املأ الاستمارة وسنرد عليك عبر واتساب خلال 24 ساعة لتحديد تفاصيل مشروعك.',
      firstName: { label: 'الاسم الشخصي *', placeholder: 'اسمك الشخصي' },
      lastName: { label: 'اسم العائلة *', placeholder: 'اسم عائلتك' },
      whatsapp: { label: 'رقم واتساب *', placeholder: '+212 6XX XXX XXX' },
      service: { label: 'ما الخدمة التي تهمّك؟ *', placeholder: 'اختر خدمة' },
      serviceOptions: [
        { id: 'web', label: 'موقع إلكتروني' },
        { id: 'app', label: 'تطبيق جوال' },
        { id: 'system', label: 'نظام مخصص' },
        { id: 'ads', label: 'منصة إعلانية' },
      ],
      success: 'تم إرسال طلبك! أحد أعضاء فريقنا سيتواصل معك عبر واتساب خلال 24 ساعة.',
      error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.',
      submit: 'أرسل طلب VIP ←',
      whatsappMessage: {
        title: 'طلب VIP · Tech Hermanos',
        firstName: 'الاسم الشخصي',
        lastName: 'اسم العائلة',
        whatsapp: 'واتساب',
        service: 'الخدمة',
        unspecified: 'غير محدد',
      },
    },
    footer: {
      tagline:
        'الوكالة الرقمية المخصصة لرواد الأعمال الطامحين للنمو: موقع، تطبيق، نظام وإعلانات، فريق واحد.',
      navTitle: 'التنقل',
      servicesTitle: 'الخدمات',
      contactTitle: 'تواصل معنا',
      address: 'الدار البيضاء، المغرب',
      copyrightSuffix: 'Tech Hermanos. جميع الحقوق محفوظة.',
      legal: { privacy: 'سياسة الخصوصية', terms: 'الشروط والأحكام' },
    },
    floatingCta: 'طلب VIP · أماكن محدودة',
  },
}
