export const gymDataBilingual = {
  en: {
    name: "Empire The Gym",
    slogan: "Be The Part Of An Epic Empire",
    owner: "Ramandeep Singh",
    address: "Plot No. 103/7, Lal Sadak, Hansi, Hisar, Haryana - 125033",
    phone: "+91 94667 09410",
    phoneClean: "919466709410",
    email: "info@empirethegym.com",
    timing: {
      weekdays: "Mon-Sat: 5:30 AM - 10:00 PM",
      sunday: "Sunday: Closed",
      raw: {
        monday: { open: "05:30", close: "22:00" },
        tuesday: { open: "05:30", close: "22:00" },
        wednesday: { open: "05:30", close: "22:00" },
        thursday: { open: "05:30", close: "22:00" },
        friday: { open: "05:30", close: "22:00" },
        saturday: { open: "05:30", close: "22:00" },
        sunday: { open: null, close: null }
      }
    },
    activities: [
      {
        id: "gym-workout",
        title: "Gym Workout",
        subtitle: "Strength • Muscle Gain • Fat Loss",
        description: "Complete workout facility with modern equipment for strength training, muscle building, and fat loss programs.",
        icon: "dumbbell",
        features: ["Strength Training", "Muscle Gain Programs", "Fat Loss Workouts", "Free Weights Area", "Machine Circuit"]
      },
      {
        id: "abs-training",
        title: "Abs Training",
        subtitle: "Core • Posture • Stamina",
        description: "Specialized core training sessions focusing on abdominal strength, posture correction, and stamina building.",
        icon: "fire",
        features: ["Core Strengthening", "Posture Correction", "Stamina Building", "Functional Training", "HIIT Sessions"]
      },
      {
        id: "personal-training",
        title: "Personal Training",
        subtitle: "Custom Plans • 1-on-1 Coaching",
        description: "Personalized workout and nutrition plans with dedicated certified trainers for faster results.",
        icon: "user-check",
        features: ["Custom Workout Plans", "Nutrition Guidance", "Progress Tracking", "Flexible Scheduling", "Goal-Oriented Coaching"]
      },
      {
        id: "weight-loss",
        title: "Weight Loss / Muscle Gain",
        subtitle: "Transform • Sculpt • Achieve",
        description: "Targeted programs for body transformation - whether your goal is losing fat or building lean muscle mass.",
        icon: "target",
        features: ["Body Composition Analysis", "Customized Diet Plans", "Weekly Progress Checks", "Supplement Guidance", "Lifestyle Coaching"]
      }
    ],
    amenities: [
      {
        id: "ac",
        title: "Air Conditioned Hall",
        description: "Fully air-conditioned workout area for comfortable training in any weather.",
        icon: "snowflake"
      },
      {
        id: "parking",
        title: "Parking Facility",
        description: "Ample parking space for two-wheelers and four-wheelers right at the facility.",
        icon: "car"
      },
      {
        id: "water",
        title: "Water Cooler",
        description: "Cold filtered water available throughout workout hours to keep you hydrated.",
        icon: "droplet"
      }
    ],
    usps: [
      {
        id: "equipment",
        title: "Modern Equipment",
        description: "State-of-the-art machines and free weights from top international brands. Regularly maintained and updated.",
        icon: "dumbbell"
      },
      {
        id: "trainers",
        title: "Knowledgeable Trainers",
        description: "Certified trainers with years of experience in strength, conditioning, and rehabilitation.",
        icon: "graduation-cap"
      },
      {
        id: "atmosphere",
        title: "Disciplined & Motivating Atmosphere",
        description: "A focused, energetic environment that pushes you to give your best every session. No distractions, only gains.",
        icon: "users"
      },
      {
        id: "affordable",
        title: "Affordable Fees",
        description: "Premium gym experience at competitive prices. Quality fitness should be accessible to everyone.",
        icon: "tag"
      }
    ],
    stats: [
      { id: "years", label: "Years of Experience", value: "8+", suffix: "" },
      { id: "members", label: "Happy Members", value: "2000+", suffix: "" },
      { id: "machines", label: "Modern Machines", value: "50+", suffix: "" },
      { id: "trainers", label: "Expert Trainers", value: "6+", suffix: "" }
    ],
    membershipPlans: [
      {
        id: "monthly",
        name: "Monthly",
        price: "Contact for Price",
        period: "/month",
        features: ["Full Gym Access", "All Group Classes", "Locker Facility", "Water & Towel Service", "Free Fitness Assessment"],
        cta: "Enquire Now",
        popular: false
      },
      {
        id: "quarterly",
        name: "Quarterly",
        price: "Contact for Price",
        period: "/3 months",
        features: ["Full Gym Access", "All Group Classes", "Locker Facility", "Water & Towel Service", "Free Fitness Assessment", "1 Personal Training Session/Month", "Nutrition Consultation"],
        cta: "Enquire Now",
        popular: true
      },
      {
        id: "yearly",
        name: "Yearly",
        price: "Contact for Price",
        period: "/year",
        features: ["Full Gym Access", "All Group Classes", "Locker Facility", "Water & Towel Service", "Free Fitness Assessment", "4 Personal Training Sessions/Month", "Nutrition Consultation", "Priority Booking", "Guest Passes (4/year)", "Free Merchandise"],
        cta: "Enquire Now",
        popular: false
      }
    ],
    gallery: [
      { id: 1, category: "Equipment", src: "/images/gallery/gallery-1.jpg", alt: "Modern gym equipment", caption: "Dumbbells neatly racked for training" },
      { id: 2, category: "Equipment", src: "/images/gallery/gallery-2.jpg", alt: "Free weights area", caption: "Free-weight rack in a modern gym" },
      { id: 3, category: "Workouts", src: "/images/gallery/gallery-3.jpg", alt: "Barbell training", caption: "Heavy barbell ready for the next set" },
      { id: 4, category: "Workouts", src: "/images/gallery/gallery-4.jpg", alt: "Cardio session", caption: "Cardio machines on the gym floor" },
      { id: 5, category: "Training", src: "/images/gallery/gallery-5.jpg", alt: "Personal training", caption: "Trainer and client celebrating progress" },
      { id: 6, category: "Workouts", src: "/images/gallery/gallery-6.jpg", alt: "Core workout", caption: "Core and strength session" },
      { id: 7, category: "Training", src: "/images/gallery/gallery-7.jpg", alt: "Functional training", caption: "Functional rope training" },
      { id: 8, category: "Members", src: "/images/gallery/gallery-8.jpg", alt: "Group stretching", caption: "Group stretching session" },
      { id: 9, category: "Equipment", src: "/images/gallery/gallery-9.jpg", alt: "Cardio equipment", caption: "Row of treadmills and cardio machines" },
      { id: 10, category: "Workouts", src: "/images/gallery/gallery-10.jpg", alt: "Strength workout", caption: "Full gym floor with machines and weights" },
      { id: 11, category: "Training", src: "/images/gallery/gallery-11.jpg", alt: "Barbell preparation", caption: "Preparing for a barbell lift" },
      { id: 12, category: "Workouts", src: "/images/gallery/gallery-12.jpg", alt: "Barbell training", caption: "Barbell strength training" }
    ],
    testimonials: [
      { id: 1, name: "Member Name", role: "Regular Member", text: "Amazing gym with great equipment and motivating atmosphere. Trainers are very knowledgeable and helpful. Highly recommended!", rating: 5, avatar: null },
      { id: 2, name: "Member Name", role: "Fitness Enthusiast", text: "Best gym in Hansi! Clean, well-maintained, and the trainers really care about your progress. The AC hall is a game changer in summer.", rating: 5, avatar: null },
      { id: 3, name: "Member Name", role: "Beginner", text: "Joined as a complete beginner and the trainers guided me perfectly. Affordable fees and great community. Love this place!", rating: 5, avatar: null }
    ],
    about: {
      story: "Empire The Gym was founded with a vision to bring world-class fitness facilities to Hansi. What started as a passion project has grown into the region's most trusted fitness destination. We believe fitness is not just about lifting weights - it's about building discipline, mental strength, and a lifestyle that empowers you in every aspect of life.",
      mission: "To provide a premium fitness experience that's accessible, result-oriented, and community-driven. We strive to be the catalyst in your transformation journey.",
      vision: "To become the leading fitness empire in North India, known for excellence in training, equipment, and member success stories.",
      owner: {
        name: "Ramandeep Singh",
        title: "Founder & Owner",
        bio: "A fitness enthusiast turned entrepreneur, Ramandeep Singh brings years of industry experience and a deep passion for helping others achieve their fitness goals. His vision for Empire The Gym is to create a space where everyone - from beginners to athletes - feels welcomed, motivated, and empowered.",
        photo: "/images/about/owner.jpg"
      },
      values: [
        { id: "discipline", title: "Discipline", description: "Consistency beats intensity. We build habits that last a lifetime.", icon: "target" },
        { id: "consistency", title: "Consistency", description: "Show up every day. Small steps lead to massive transformations.", icon: "repeat" },
        { id: "strength", title: "Strength", description: "Physical and mental strength go hand in hand. Train both.", icon: "dumbbell" },
        { id: "community", title: "Community", description: "Together we grow stronger. Your gym family has your back.", icon: "users" }
      ],
      timeline: [
        { year: "2016", title: "Foundation", description: "Empire The Gym established with a vision for premium fitness in Hansi." },
        { year: "2018", title: "Expansion", description: "Upgraded to modern equipment and expanded training programs." },
        { year: "2020", title: "Digital Era", description: "Launched online booking and virtual training during challenging times." },
        { year: "2022", title: "FITPASS Partnership", description: "Joined FITPASS network for wider accessibility and booking options." },
        { year: "2024", title: "New Heights", description: "Renovated facility with AC hall, new equipment, and enhanced amenities." }
      ]
    },
    trainers: [
      { id: 1, name: "Trainer Name", specialization: "Strength & Conditioning", experience: "5+ Years", certifications: ["ACE Certified", "Nutrition Specialist"], photo: "/images/trainers/trainer-1.jpg" },
      { id: 2, name: "Trainer Name", specialization: "Weight Loss & Transformation", experience: "4+ Years", certifications: ["NASM Certified", "Corrective Exercise"], photo: "/images/trainers/trainer-2.jpg" },
      { id: 3, name: "Trainer Name", specialization: "Muscle Building", experience: "6+ Years", certifications: ["ACSM Certified", "Powerlifting Coach"], photo: "/images/trainers/trainer-3.jpg" },
      { id: 4, name: "Trainer Name", specialization: "Functional Training", experience: "3+ Years", certifications: ["CrossFit Level 1", "Mobility Specialist"], photo: "/images/trainers/trainer-4.jpg" }
    ],
    faq: [
      { id: 1, question: "What are the gym timings?", answer: "We are open Monday to Saturday from 5:30 AM to 10:00 PM. Sunday is closed." },
      { id: 2, question: "Do you offer personal training?", answer: "Yes, we have certified personal trainers available for 1-on-1 sessions. Custom workout and nutrition plans included." },
      { id: 3, question: "Is there parking available?", answer: "Yes, we have ample parking space for both two-wheelers and four-wheelers right at the facility." },
      { id: 4, question: "Can I book via FITPASS?", answer: "Yes! Empire The Gym is listed on the FITPASS app. You can book your sessions directly through the app." },
      { id: 5, question: "What amenities do you provide?", answer: "We offer a fully air-conditioned hall, parking facility, water cooler, locker rooms, and towel service." },
      { id: 6, question: "Do you have trial sessions?", answer: "Please contact us at +91 94667 09410 for trial session availability and details." }
    ],
    social: {
      instagram: "https://instagram.com/empirethegym",
      facebook: "https://facebook.com/empirethegym",
      youtube: "https://youtube.com/@empirethegym",
      whatsapp: "https://wa.me/919466709410"
    },
    seo: {
      defaultTitle: "Empire The Gym | Be The Part Of An Epic Empire",
      defaultDescription: "Hansi's premier fitness destination. Modern equipment, expert trainers, disciplined atmosphere. Join the epic empire today!",
      ogImage: "https://empirethegym.com/og-image.jpg"
    },
    heroImages: {
      home: ["/images/hero/hero-1.png", "/images/hero/hero-2.jpeg", "/images/hero/hero-3.jpeg"],
      about: "/images/hero/hero-1.png",
      gallery: "/images/hero/hero-1.png",
      contact: "/images/hero/hero-1.png"
    },
    marqueeText: "STRENGTH • DISCIPLINE • POWER • EMPIRE • CONSISTENCY • GRIND • HUSTLE • ACHIEVE • TRANSFORM • DOMINATE • ",
    ctaText: "Be The Part Of An Epic Empire",
    fitpassNote: "Also bookable via FITPASS"
  },
  hi: {
    name: "एम्पायर द जिम",
    slogan: "एक महाकाव्य साम्राज्य का हिस्सा बनें",
    owner: "रामनदीप सिंह",
    address: "प्लॉट नंबर 103/7, लाल सदक, हांसी, हिसार, हरियाणा - 125033",
    phone: "+91 94667 09410",
    phoneClean: "919466709410",
    email: "info@empirethegym.com",
    timing: {
      weekdays: "सोम-शनि: सुबह 5:30 - रात 10:00",
      sunday: "रविवार: बंद",
      raw: {
        monday: { open: "05:30", close: "22:00" },
        tuesday: { open: "05:30", close: "22:00" },
        wednesday: { open: "05:30", close: "22:00" },
        thursday: { open: "05:30", close: "22:00" },
        friday: { open: "05:30", close: "22:00" },
        saturday: { open: "05:30", close: "22:00" },
        sunday: { open: null, close: null }
      }
    },
    activities: [
      {
        id: "gym-workout",
        title: "जिम वर्कआउट",
        subtitle: "ताकत • मांसपेशी वृद्धि • वसा हानि",
        description: "शक्ति प्रशिक्षण, मांसपेशी निर्माण और वसा हानि के लिए आधुनिक उपकरणों के साथ पूर्ण वर्कआउट सुविधा।",
        icon: "dumbbell",
        features: ["शक्ति प्रशिक्षण", "मांसपेशी वृद्धि कार्यक्रम", "वसा हानि वर्कआउट", "फ्री वेट्स क्षेत्र", "मशीन सर्किट"]
      },
      {
        id: "abs-training",
        title: "एब्स ट्रेनिंग",
        subtitle: "कोर • मुद्रा • सहनशक्ति",
        description: "पेट की ताकत, मुद्रा सुधार और सहनशक्ति पर केंद्रित विशेष कोर प्रशिक्षण सत्र।",
        icon: "fire",
        features: ["कोर मजबूती", "मुद्रा सुधार", "सहनशक्ति निर्माण", "फंक्शनल ट्रेनिंग", "HIIT सत्र"]
      },
      {
        id: "personal-training",
        title: "पर्सनल ट्रेनिंग",
        subtitle: "अनुकूलित योजनाएँ • 1-ऑन-1 कोचिंग",
        description: "तेजी से परिणामों के लिए समर्पित प्रमाणित ट्रेनरों के साथ व्यक्तिगत वर्कआउट और पोषण योजनाएँ।",
        icon: "user-check",
        features: ["अनुकूलित वर्कआउट योजनाएँ", "पोषण मार्गदर्शन", "प्रगति ट्रैकिंग", "लचीला समय", "लक्ष्य आधारित कोचिंग"]
      },
      {
        id: "weight-loss",
        title: "वजन घटाना / मांसपेशी वृद्धि",
        subtitle: "परिवर्तन • मूर्तिकला • प्राप्ति",
        description: "शरीर परिवर्तन के लिए लक्षित कार्यक्रम - चाहे आपका लक्ष्य वसा कम करना हो या दुबली मांसपेशियां बनाना हो।",
        icon: "target",
        features: ["शरीर संरचना विश्लेषण", "अनुकूलित आहार योजनाएँ", "साप्ताहिक प्रगति जांच", "पूरक मार्गदर्शन", "जीवनशैली कोचिंग"]
      }
    ],
    amenities: [
      {
        id: "ac",
        title: "एयर कंडीशन्ड हॉल",
        description: "किसी भी मौसम में आरामदायक प्रशिक्षण के लिए पूरी तरह से एयर कंडीशन्ड वर्कआउट क्षेत्र।",
        icon: "snowflake"
      },
      {
        id: "parking",
        title: "पार्किंग सुविधा",
        description: "सुविधा में ही दोपहिया और चारपहिया वाहनों के लिए पर्याप्त पार्किंग स्थान।",
        icon: "car"
      },
      {
        id: "water",
        title: "वॉटर कूलर",
        description: "वर्कआउट के दौरान हाइड्रेटेड रहने के लिए ठंडा फ़िल्टर किया हुआ पानी उपलब्ध।",
        icon: "droplet"
      }
    ],
    usps: [
      {
        id: "equipment",
        title: "आधुनिक उपकरण",
        description: "शीर्ष अंतर्राष्ट्रीय ब्रांडों के अत्याधुनिक मशीनें और फ्री वेट्स। नियमित रूप से रखरखाव और अद्यतन।",
        icon: "dumbbell"
      },
      {
        id: "trainers",
        title: "जानकार ट्रेनर",
        description: "शक्ति, कंडीशनिंग और पुनर्वास में वर्षों के अनुभव वाले प्रमाणित ट्रेनर।",
        icon: "graduation-cap"
      },
      {
        id: "atmosphere",
        title: "अनुशासित और प्रेरणादायक माहौल",
        description: "एक केंद्रित, ऊर्जावान वातावरण जो आपको हर सत्र में अपना सर्वश्रेष्ठ देने के लिए प्रेरित करता है। कोई ध्यान भटकाने वाली चीजें नहीं, केवल लाभ।",
        icon: "users"
      },
      {
        id: "affordable",
        title: "किफायती शुल्क",
        description: "प्रतिस्पर्धी कीमतों पर प्रीमियम जिम अनुभव। गुणवत्तापूर्ण फिटनेस सभी के लिए सुलभ होनी चाहिए।",
        icon: "tag"
      }
    ],
    stats: [
      { id: "years", label: "वर्षों का अनुभव", value: "8+", suffix: "" },
      { id: "members", label: "खुश मेंबर्स", value: "2000+", suffix: "" },
      { id: "machines", label: "आधुनिक मशीनें", value: "50+", suffix: "" },
      { id: "trainers", label: "विशेषज्ञ ट्रेनर", value: "6+", suffix: "" }
    ],
    membershipPlans: [
      {
        id: "monthly",
        name: "मासिक",
        price: "कीमत के लिए संपर्क करें",
        period: "/माह",
        features: ["पूर्ण जिम एक्सेस", "सभी ग्रुप क्लासेस", "लॉकर सुविधा", "पानी और तौलिया सेवा", "मुफ्त फिटनेस मूल्यांकन"],
        cta: "पूछताछ करें",
        popular: false
      },
      {
        id: "quarterly",
        name: "त्रैमासिक",
        price: "कीमत के लिए संपर्क करें",
        period: "/3 माह",
        features: ["पूर्ण जिम एक्सेस", "सभी ग्रुप क्लासेस", "लॉकर सुविधा", "पानी और तौलिया सेवा", "मुफ्त फिटनेस मूल्यांकन", "प्रति माह 1 पर्सनल ट्रेनिंग सत्र", "पोषण परामर्श"],
        cta: "पूछताछ करें",
        popular: true
      },
      {
        id: "yearly",
        name: "वार्षिक",
        price: "कीमत के लिए संपर्क करें",
        period: "/वर्ष",
        features: ["पूर्ण जिम एक्सेस", "सभी ग्रुप क्लासेस", "लॉकर सुविधा", "पानी और तौलिया सेवा", "मुफ्त फिटनेस मूल्यांकन", "प्रति माह 4 पर्सनल ट्रेनिंग सत्र", "पोषण परामर्श", "प्राथमिकता बुकिंग", "गेस्ट पास (4/वर्ष)", "मुफ्त मर्चेंडाइज"],
        cta: "पूछताछ करें",
        popular: false
      }
    ],
    gallery: [
      { id: 1, category: "उपकरण", src: "/images/gallery/gallery-1.jpg", alt: "आधुनिक जिम उपकरण", caption: "प्रशिक्षण के लिए व्यवस्थित रूप से रखे डम्बल" },
      { id: 2, category: "उपकरण", src: "/images/gallery/gallery-2.jpg", alt: "फ्री वेट्स क्षेत्र", caption: "आधुनिक जिम में फ्री-वेट रैक" },
      { id: 3, category: "वर्कआउट", src: "/images/gallery/gallery-3.jpg", alt: "बारबेल प्रशिक्षण", caption: "अगले सेट के लिए तैयार भारी बारबेल" },
      { id: 4, category: "वर्कआउट", src: "/images/gallery/gallery-4.jpg", alt: "कार्डियो सत्र", caption: "जिम फ्लोर पर कार्डियो मशीनें" },
      { id: 5, category: "ट्रेनिंग", src: "/images/gallery/gallery-5.jpg", alt: "पर्सनल ट्रेनिंग", caption: "ट्रेनर और क्लाइंट प्रगति का जश्न मनाते हुए" },
      { id: 6, category: "वर्कआउट", src: "/images/gallery/gallery-6.jpg", alt: "कोर वर्कआउट", caption: "कोर और ताकत सत्र" },
      { id: 7, category: "ट्रेनिंग", src: "/images/gallery/gallery-7.jpg", alt: "फंक्शनल ट्रेनिंग", caption: "फंक्शनल रस्सी प्रशिक्षण" },
      { id: 8, category: "मेंबर्स", src: "/images/gallery/gallery-8.jpg", alt: "समूह स्ट्रेचिंग", caption: "समूह स्ट्रेचिंग सत्र" },
      { id: 9, category: "उपकरण", src: "/images/gallery/gallery-9.jpg", alt: "कार्डियो उपकरण", caption: "ट्रेडमिल और कार्डियो मशीनों की पंक्ति" },
      { id: 10, category: "वर्कआउट", src: "/images/gallery/gallery-10.jpg", alt: "शक्ति वर्कआउट", caption: "मशीनों और वेट्स के साथ पूर्ण जिम फ्लोर" },
      { id: 11, category: "ट्रेनिंग", src: "/images/gallery/gallery-11.jpg", alt: "बारबेल तैयारी", caption: "बारबेल लिफ्ट की तैयारी" },
      { id: 12, category: "वर्कआउट", src: "/images/gallery/gallery-12.jpg", alt: "बारबेल प्रशिक्षण", caption: "बारबेल शक्ति प्रशिक्षण" }
    ],
    testimonials: [
      { id: 1, name: "मेंबर का नाम", role: "नियमित मेंबर", text: "बहुत अच्छा जिम है, बढ़िया उपकरण और प्रेरणादायक माहौल। ट्रेनर बहुत जानकार और सहायक हैं। अत्यधिक अनुशंसित!", rating: 5, avatar: null },
      { id: 2, name: "मेंबर का नाम", role: "फिटनेस उत्साही", text: "हांसी का सबसे अच्छा जिम! साफ-सुथरा, अच्छी तरह से रखरखाव, और ट्रेनर वास्तव में आपकी प्रगति की परवाह करते हैं। AC हॉल गर्मियों में गेम चेंजर है।", rating: 5, avatar: null },
      { id: 3, name: "मेंबर का नाम", role: "शुरुआती", text: "पूर्ण शुरुआतकर्ता के रूप में शामिल हुआ और ट्रेनरों ने मुझे बिल्कुल सही मार्गदर्शन दिया। किफायती शुल्क और बढ़िया समुदाय। मुझे यह जगह पसंद है!", rating: 5, avatar: null }
    ],
    about: {
      story: "एम्पायर द जिम की स्थापना हांसी में विश्वस्तरीय फिटनेस सुविधाएं लाने के दृष्टिकोण के साथ की गई थी। जुनून की शुरुआत से लेकर यह अब क्षेत्र का सबसे विश्वसनीय फिटनेस गंतव्य बन गया है। हम मानते हैं कि फिटनेस सिर्फ वजन उठाने के बारे में नहीं है - यह अनुशासन, मानसिक शक्ति और जीवनशैली बनाने के बारे में है जो आपको जीवन के हर पहलू में सशक्त बनाती है।",
      mission: "एक प्रीमियम फिटनेस अनुभव प्रदान करना जो सुलभ, परिणामोन्मुखी और समुदाय संचालित हो। हम आपकी परिवर्तन यात्रा में उत्प्रेरक बनने का प्रयास करते हैं।",
      vision: "उत्तर भारत का प्रमुख फिटनेस साम्राज्य बनना, प्रशिक्षण, उपकरण और मेंबर की सफलता की कहानियों में उत्कृष्टता के लिए जाना जाना।",
      owner: {
        name: "रामनदीप सिंह",
        title: "संस्थापक और मालिक",
        bio: "फिटनेस उत्साही से उद्यमी बने रामनदीप सिंह लाते हैं उद्योग का वर्षों का अनुभव और दूसरों को उनके फिटनेस लक्ष्यों को प्राप्त करने में मदद करने का गहरा जुनून। एम्पायर द जिम के लिए उनका दृष्टिकोण एक ऐसी जगह बनाना है जहां हर कोई - शुरुआती से लेकर एथलीट तक - स्वागत महसूस करे, प्रेरित हो और सशक्त हो।",
        photo: "/images/about/owner.jpg"
      },
      values: [
        { id: "discipline", title: "अनुशासन", description: "निरंतरता तीव्रता से जीतती है। हम ऐसी आदतें बनाते हैं जो जीवन भर रहती हैं।", icon: "target" },
        { id: "consistency", title: "निरंतरता", description: "हर दिन दिखें। छोटे कदम बड़े परिवर्तन लाते हैं।", icon: "repeat" },
        { id: "strength", title: "शक्ति", description: "शारीरिक और मानसिक शक्ति एक साथ जाती हैं। दोनों का प्रशिक्षण करें।", icon: "dumbbell" },
        { id: "community", title: "समुदाय", description: "साथ मिलकर हम मजबूत बनते हैं। आपका जिम परिवार आपके पीछे है।", icon: "users" }
      ],
      timeline: [
        { year: "2016", title: "स्थापना", description: "हांसी में प्रीमियम फिटनेस के दृष्टिकोण के साथ एम्पायर द जिम की स्थापना।" },
        { year: "2018", title: "विस्तार", description: "आधुनिक उपकरणों में अपग्रेड और प्रशिक्षण कार्यक्रमों का विस्तार।" },
        { year: "2020", title: "डिजिटल युग", description: "चुनौतियों के दौरान ऑनलाइन बुकिंग और वर्चुअल ट्रेनिंग शुरू की।" },
        { year: "2022", title: "FITPASS साझेदारी", description: "विस्तृत पहुंच और बुकिंग विकल्पों के लिए FITPASS नेटवर्क से जुड़े।" },
        { year: "2024", title: "नई ऊंचाइयां", description: "एसी हॉल, नए उपकरण और बेहतर सुविधाओं के साथ सुविधा का नवीनीकरण।" }
      ]
    },
    trainers: [
      { id: 1, name: "ट्रेनर का नाम", specialization: "शक्ति और कंडीशनिंग", experience: "5+ वर्ष", certifications: ["ACE प्रमाणित", "पोषण विशेषज्ञ"], photo: "/images/trainers/trainer-1.jpg" },
      { id: 2, name: "ट्रेनर का नाम", specialization: "वजन घटाना और परिवर्तन", experience: "4+ वर्ष", certifications: ["NASM प्रमाणित", "सुधारात्मक व्यायाम"], photo: "/images/trainers/trainer-2.jpg" },
      { id: 3, name: "ट्रेनर का नाम", specialization: "मांसपेशी निर्माण", experience: "6+ वर्ष", certifications: ["ACSM प्रमाणित", "पावरलिफ्टिंग कोच"], photo: "/images/trainers/trainer-3.jpg" },
      { id: 4, name: "ट्रेनर का नाम", specialization: "फंक्शनल ट्रेनिंग", experience: "3+ वर्ष", certifications: ["CrossFit लेवल 1", "गतिशीलता विशेषज्ञ"], photo: "/images/trainers/trainer-4.jpg" }
    ],
    faq: [
      { id: 1, question: "जिम का समय क्या है?", answer: "हम सोमवार से शनिवार तक सुबह 5:30 से रात 10:00 तक खुले हैं। रविवार बंद रहता है।" },
      { id: 2, question: "क्या आप पर्सनल ट्रेनिंग प्रदान करते हैं?", answer: "हां, हमारे पास 1-ऑन-1 सत्रों के लिए प्रमाणित पर्सनल ट्रेनर उपलब्ध हैं। अनुकूलित वर्कआउट और पोषण योजनाएं शामिल हैं।" },
      { id: 3, question: "क्या पार्किंग उपलब्ध है?", answer: "हां, सुविधा में ही दोपहिया और चारपहिया वाहनों के लिए पर्याप्त पार्किंग स्थान उपलब्ध है।" },
      { id: 4, question: "क्या मैं FITPASS के माध्यम से बुक कर सकता हूं?", answer: "हां! एम्पायर द जिम FITPASS ऐप पर सूचीबद्ध है। आप सीधे ऐप के माध्यम से अपने सत्र बुक कर सकते हैं।" },
      { id: 5, question: "आप कौन सी सुविधाएं प्रदान करते हैं?", answer: "हम पूरी तरह से एयर कंडीशन्ड हॉल, पार्किंग सुविधा, वॉटर कूलर, लॉकर रूम और तौलिया सेवा प्रदान करते हैं।" },
      { id: 6, question: "क्या ट्रायल सत्र हैं?", answer: "कृपया ट्रायल सत्र की उपलब्धता और विवरण के लिए +91 94667 09410 पर संपर्क करें।" }
    ],
    social: {
      instagram: "https://instagram.com/empirethegym",
      facebook: "https://facebook.com/empirethegym",
      youtube: "https://youtube.com/@empirethegym",
      whatsapp: "https://wa.me/919466709410"
    },
    seo: {
      defaultTitle: "एम्पायर द जिम | एक महाकाव्य साम्राज्य का हिस्सा बनें",
      defaultDescription: "हांसी का प्रमुख फिटनेस गंतव्य। आधुनिक उपकरण, विशेषज्ञ ट्रेनर, अनुशासित माहौल। आज ही महाकाव्य साम्राज्य में शामिल हों!",
      ogImage: "https://empirethegym.com/og-image.jpg"
    },
    heroImages: {
      home: ["/images/hero/hero-1.png", "/images/hero/hero-2.jpeg", "/images/hero/hero-3.jpeg"],
      about: "/images/hero/hero-1.png",
      gallery: "/images/hero/hero-1.png",
      contact: "/images/hero/hero-1.png"
    },
    marqueeText: "शक्ति • अनुशासन • ताकत • साम्राज्य • निरंतरता • मेहनत • परिश्रम • प्राप्ति • परिवर्तन • विजय • ",
    ctaText: "एक महाकाव्य साम्राज्य का हिस्सा बनें",
    fitpassNote: "FITPASS के माध्यम से भी बुक करें"
  }
};

export const gymData = {
  en: gymDataBilingual.en,
  hi: gymDataBilingual.hi
};

export const languageStrings = {
  en: {
    nav: { home: "Home", about: "About", gallery: "Gallery", contact: "Contact" },
    hero: { joinNow: "Join Now", callNow: "Call Now", openingHours: "Opening Hours" },
    about: { knowMore: "Know More", ourStory: "Our Story", mission: "Mission", vision: "Vision", meetOwner: "Meet the Owner", ourTrainers: "Our Trainers", ourValues: "Our Values", whyEmpire: "Why Empire" },
    programs: { title: "Our Programs", viewAll: "View All" },
    whyChoose: { title: "Why Choose Us" },
    stats: { title: "Our Journey in Numbers" },
    amenities: { title: "Amenities" },
    membership: { title: "Membership Plans", popular: "Most Popular", contactForPrice: "Contact for Price" },
    gallery: { title: "Gallery", filterAll: "All", filterEquipment: "Equipment", filterWorkouts: "Workouts", filterTraining: "Training", filterMembers: "Members" },
    testimonials: { title: "What Our Members Say" },
    cta: { button: "Join Now" },
    contact: { title: "Contact Us", formTitle: "Send a Message", name: "Full Name", phone: "Phone Number", email: "Email (Optional)", interestedIn: "Interested In", message: "Message", submit: "Send Message", submitting: "Sending...", success: "Message sent successfully!", error: "Failed to send message. Please try again." },
    contactInfo: { title: "Contact Information", phone: "Phone", whatsapp: "WhatsApp", address: "Address", timings: "Timings", openNow: "Open Now", closed: "Closed", getDirections: "Get Directions" },
    faq: { title: "Frequently Asked Questions" },
    footer: { quickLinks: "Quick Links", followUs: "Follow Us", copyright: "© 2024 Empire The Gym. All rights reserved.", designedBy: "Designed with passion for fitness" },
    language: { en: "EN", hi: "हिन्दी" },
    ui: {
      loading: "Loading...",
      callNow: "Call Now",
      whatsapp: "WhatsApp",
      whatsappUs: "WhatsApp Us",
      closeLightbox: "Close lightbox",
      prevImage: "Previous image",
      nextImage: "Next image",
      openFullSize: "Open full size",
      whatsappMessage: "Hi Empire The Gym, I want to know more about your membership plans."
    }
  },
  hi: {
    nav: { home: "होम", about: "हमारे बारे में", gallery: "गैलरी", contact: "संपर्क" },
    hero: { joinNow: "अभी जॉइन करें", callNow: "अभी कॉल करें", openingHours: "खुलने का समय" },
    about: { knowMore: "और जानें", ourStory: "हमारी कहानी", mission: "हमारा मिशन", vision: "हमारा विजन", meetOwner: "ओनर से मिलें", ourTrainers: "हमारे ट्रेनर्स", ourValues: "हमारे मूल्य", whyEmpire: "क्यों एम्पायर" },
    programs: { title: "हमारे प्रोग्राम्स", viewAll: "सभी देखें" },
    whyChoose: { title: "हमें क्यों चुनें" },
    stats: { title: "संख्याओं में हमारा सफर" },
    amenities: { title: "सुविधाएं" },
    membership: { title: "मेंबरशिप प्लान्स", popular: "सबसे लोकप्रिय", contactForPrice: "कीमत के लिए संपर्क करें" },
    gallery: { title: "गैलरी", filterAll: "सभी", filterEquipment: "उपकरण", filterWorkouts: "वर्कआउट", filterTraining: "ट्रेनिंग", filterMembers: "मेंबर्स" },
    testimonials: { title: "हमारे मेंबर्स क्या कहते हैं" },
    cta: { button: "अभी जॉइन करें" },
    contact: { title: "संपर्क करें", formTitle: "संदेश भेजें", name: "पूरा नाम", phone: "फोन नंबर", email: "ईमेल (वैकल्पिक)", interestedIn: "रुचि है", message: "संदेश", submit: "भेजें", submitting: "भेज रहे हैं...", success: "संदेश सफलतापूर्वक भेजा गया!", error: "संदेश भेजने में विफल। कृपया पुनः प्रयास करें।" },
    contactInfo: { title: "संपर्क जानकारी", phone: "फोन", whatsapp: "व्हाट्सएप", address: "पता", timings: "समय", openNow: "खुला है", closed: "बंद", getDirections: "दिशा प्राप्त करें" },
    faq: { title: "अक्सर पूछे जाने वाले प्रश्न" },
    footer: { quickLinks: "त्वरित लिंक", followUs: "हमें फॉलो करें", copyright: "© 2024 एम्पायर द जिम। सर्वाधिकार सुरक्षित।", designedBy: "फिटनेस के जुनून के साथ डिज़ाइन किया गया" },
    language: { en: "EN", hi: "हिन्दी" },
    ui: {
      loading: "लोड हो रहा है...",
      callNow: "अभी कॉल करें",
      whatsapp: "व्हाट्सएप",
      whatsappUs: "हमें व्हाट्सएप करें",
      closeLightbox: "लाइटबॉक्स बंद करें",
      prevImage: "पिछली छवि",
      nextImage: "अगली छवि",
      openFullSize: "पूर्ण आकार खोलें",
      whatsappMessage: "नमस्ते एम्पायर द जिम, मुझे आपके मेंबरशिप प्लान के बारे में और जानना है।"
    }
  }
};

export const interestedOptions = {
  en: [
    { value: "gym-workout", label: "Gym Workout (Strength/Muscle/Fat Loss)" },
    { value: "abs-training", label: "Abs Training (Core/Posture/Stamina)" },
    { value: "personal-training", label: "Personal Training" },
    { value: "weight-loss", label: "Weight Loss / Muscle Gain" },
    { value: "general", label: "General Enquiry" }
  ],
  hi: [
    { value: "gym-workout", label: "जिम वर्कआउट (ताकत/मांसपेशी/वसा हानि)" },
    { value: "abs-training", label: "एब्स ट्रेनिंग (कोर/मुद्रा/सहनशक्ति)" },
    { value: "personal-training", label: "पर्सनल ट्रेनिंग" },
    { value: "weight-loss", label: "वजन घटाना / मांसपेशी वृद्धि" },
    { value: "general", label: "सामान्य पूछताछ" }
  ]
};
