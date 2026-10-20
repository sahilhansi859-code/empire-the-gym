export const gymData = {
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
    {
      id: 1,
      name: "Member Name",
      role: "Regular Member",
      text: "Amazing gym with great equipment and motivating atmosphere. Trainers are very knowledgeable and helpful. Highly recommended!",
      rating: 5,
      avatar: null
    },
    {
      id: 2,
      name: "Member Name",
      role: "Fitness Enthusiast",
      text: "Best gym in Hansi! Clean, well-maintained, and the trainers really care about your progress. The AC hall is a game changer in summer.",
      rating: 5,
      avatar: null
    },
    {
      id: 3,
      name: "Member Name",
      role: "Beginner",
      text: "Joined as a complete beginner and the trainers guided me perfectly. Affordable fees and great community. Love this place!",
      rating: 5,
      avatar: null
    }
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
    {
      id: 1,
      question: "What are the gym timings?",
      answer: "We are open Monday to Saturday from 5:30 AM to 10:00 PM. Sunday is closed."
    },
    {
      id: 2,
      question: "Do you offer personal training?",
      answer: "Yes, we have certified personal trainers available for 1-on-1 sessions. Custom workout and nutrition plans included."
    },
    {
      id: 3,
      question: "Is there parking available?",
      answer: "Yes, we have ample parking space for both two-wheelers and four-wheelers right at the facility."
    },
    {
      id: 4,
      question: "Can I book via FITPASS?",
      answer: "Yes! Empire The Gym is listed on the FITPASS app. You can book your sessions directly through the app."
    },
    {
      id: 5,
      question: "What amenities do you provide?",
      answer: "We offer a fully air-conditioned hall, parking facility, water cooler, locker rooms, and towel service."
    },
    {
      id: 6,
      question: "Do you have trial sessions?",
      answer: "Please contact us at +91 94667 09410 for trial session availability and details."
    }
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
    home: "/images/hero/hero.jpg",
    about: "/images/hero/hero-about.jpg",
    gallery: "/images/hero/hero-gallery.jpg",
    contact: "/images/hero/hero-contact.jpg"
  },
  marqueeText: "STRENGTH • DISCIPLINE • POWER • EMPIRE • CONSISTENCY • GRIND • HUSTLE • ACHIEVE • TRANSFORM • DOMINATE • ",
  ctaText: "Be The Part Of An Epic Empire",
  fitpassNote: "Also bookable via FITPASS"
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
    cta: { title: "Be The Part Of An Epic Empire", button: "Join Now" },
    contact: { title: "Contact Us", subtitle: "Get in touch with us", formTitle: "Send a Message", name: "Full Name", phone: "Phone Number", email: "Email (Optional)", interestedIn: "Interested In", message: "Message", submit: "Send Message", submitting: "Sending...", success: "Message sent successfully!", error: "Failed to send message. Please try again." },
    contactInfo: { title: "Contact Information", phone: "Phone", whatsapp: "WhatsApp", address: "Address", timings: "Timings", openNow: "Open Now", closed: "Closed", getDirections: "Get Directions" },
    faq: { title: "Frequently Asked Questions" },
    footer: { quickLinks: "Quick Links", followUs: "Follow Us", copyright: "© 2024 Empire The Gym. All rights reserved.", designedBy: "Designed with passion for fitness" },
    language: { en: "EN", hi: "हिन्दी" }
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
    cta: { title: "एक महान साम्राज्य का हिस्सा बनें", button: "अभी जॉइन करें" },
    contact: { title: "संपर्क करें", subtitle: "हमसे जुड़ें", formTitle: "संदेश भेजें", name: "पूरा नाम", phone: "फोन नंबर", email: "ईमेल (वैकल्पिक)", interestedIn: "रुचि है", message: "संदेश", submit: "भेजें", submitting: "भेज रहे हैं...", success: "संदेश सफलतापूर्वक भेजा गया!", error: "संदेश भेजने में विफल। कृपया पुनः प्रयास करें।" },
    contactInfo: { title: "संपर्क जानकारी", phone: "फोन", whatsapp: "व्हाट्सएप", address: "पता", timings: "समय", openNow: "खुला है", closed: "बंद", getDirections: "दिशा प्राप्त करें" },
    faq: { title: "अक्सर पूछे जाने वाले प्रश्न" },
    footer: { quickLinks: "त्वरित लिंक", followUs: "हमें फॉलो करें", copyright: "© 2024 एम्पायर द जिम। सर्वाधिकार सुरक्षित।", designedBy: "फिटनेस के जुनून के साथ डिज़ाइन किया गया" },
    language: { en: "EN", hi: "हिन्दी" }
  }
};

export const interestedOptions = [
  { value: "gym-workout", label: "Gym Workout (Strength/Muscle/Fat Loss)" },
  { value: "abs-training", label: "Abs Training (Core/Posture/Stamina)" },
  { value: "personal-training", label: "Personal Training" },
  { value: "weight-loss", label: "Weight Loss / Muscle Gain" },
  { value: "general", label: "General Enquiry" }
];