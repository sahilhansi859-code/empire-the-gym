export const PHONE = '+91 94667 09410'
export const PHONE_CLEAN = '919466709410'
export const WHATSAPP_MESSAGE = 'नमस्ते! एम्पायर द जिम'
export const WHATSAPP_URL = `https://wa.me/${PHONE_CLEAN}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
export const TEL_URL = `tel:${PHONE}`

export const gymKnowledge = {
  name: { en: 'Empire The Gym', hi: 'एम्पायर द जिम' },
  slogan: { en: 'Be The Part Of An Epic Empire', hi: 'Be The Part Of An Epic Empire' },
  owner: { en: 'Ramandeep Singh', hi: 'रमनदीप सिंह' },
  ownerTitle: { en: 'Owner and trainer', hi: 'ओनर और ट्रेनर' },
  address: {
    en: 'Near Royal Kids School, Bajriya Chowk, Laal Sadak, Hansi, Hisar, Haryana - 125033 (also listed as Plot No. 103/7, Laal Sadak, Hansi).',
    hi: 'रॉयल किड्स स्कूल के पास, बजरिया चौक, लाल सड़क, हांसी, हिसार, हरियाणा - 125033 (प्लॉट नं. 103/7, लाल सड़क, हांसी के नाम से भी दर्ज)।'
  },
  timing: {
    en: 'Monday to Saturday 5:30 AM to 10:00 PM. Sunday closed. Evenings from 5 PM are usually the busiest.',
    hi: 'सोमवार से शनिवार सुबह 5:30 से रात 10:00 बजे तक। रविवार बंद। शाम 5 बजे से आमतौर पर सबसे ज़्यादा भीड़ रहती है।'
  },
  timingRaw: {
    weekdays: { open: '05:30', close: '22:00', days: [1, 2, 3, 4, 5, 6] },
    sundayClosed: true
  },
  contact: { phone: PHONE, whatsapp: WHATSAPP_URL },
  programs: {
    en: 'Gym Workout (muscle gain, fat loss, strength training). Abs Training (core strength, posture, stamina).',
    hi: 'जिम वर्कआउट (मसल गेन, फैट लॉस, स्ट्रेंथ ट्रेनिंग)। एब्स ट्रेनिंग (कोर स्ट्रेंथ, पोस्चर, स्टैमिना)।'
  },
  facilities: {
    en: 'Air conditioned hall, parking, water cooler.',
    hi: 'एयर कंडीशन्ड हॉल, पार्किंग, वॉटर कूलर।'
  },
  strengths: {
    en: 'Modern equipment, knowledgeable trainers, disciplined and motivating atmosphere, affordable fees.',
    hi: 'आधुनिक उपकरण, जानकार ट्रेनर, अनुशासित और प्रेरणादायक माहौल, किफायती फीस।'
  },
  fitpass: {
    en: 'Members can book sessions at the gym through the FITPASS app.',
    hi: 'मेंबर FITPASS ऐप के ज़रिए जिम में सेशन बुक कर सकते हैं।'
  },
  join: {
    en: `Visit the gym during timings, call or WhatsApp ${PHONE}, or book through FITPASS.`,
    hi: `जिम के समय में आकर विज़िट करें, ${PHONE} पर कॉल या वॉट्सऐप करें, या FITPASS से बुक करें।`
  },
  website: {
    en: 'Pages: Home, About, Gallery and Contact. The Contact page has a form, map and timings.',
    hi: 'पेज: होम, अबाउट, गैलरी और कॉन्टैक्ट। कॉन्टैक्ट पेज पर फॉर्म, मैप और समय की जानकारी है।'
  },
  notConfirmed: {
    en: `As per our information (please confirm by calling ${PHONE}): a 5,000+ sq ft space with cardio, stretching, aerobics and crossfit zones; imported cardio machines and a deadlift platform; female-only batches; workout plans, diet charts and supplements.`,
    hi: `हमारी जानकारी के अनुसार (कृपया ${PHONE} पर कॉल करके पुष्टि करें): 5,000+ वर्ग फुट जगह जिसमें कार्डियो, स्ट्रेचिंग, एरोबिक्स और क्रॉसफिट ज़ोन; इम्पोर्टेड कार्डियो मशीनें और डेडलिफ्ट प्लेटफॉर्म; केवल महिलाओं के बैच; वर्कआउट प्लान, डाइट चार्ट और सप्लीमेंट्स।`
  },
  notAvailable: {
    trainerNames: {
      en: `Trainer names are not available. For details, please call or WhatsApp ${PHONE}.`,
      hi: `ट्रेनर्स के नाम उपलब्ध नहीं हैं। जानकारी के लिए कृपया ${PHONE} पर कॉल या वॉट्सऐप करें।`
    },
    femaleBatch: {
      en: `Female batch timing is not available. Please call or WhatsApp ${PHONE}.`,
      hi: `महिला बैच का समय उपलब्ध नहीं है। कृपया ${PHONE} पर कॉल या वॉट्सऐप करें।`
    },
    trial: {
      en: `Trial class policy is not available. Please call or WhatsApp ${PHONE}.`,
      hi: `ट्रायल क्लास की नीति उपलब्ध नहीं है। कृपया ${PHONE} पर कॉल या वॉट्सऐप करें।`
    },
    offers: {
      en: `Information about offers is not available. Please call or WhatsApp ${PHONE}.`,
      hi: `ऑफर्स की जानकारी उपलब्ध नहीं है। कृपया ${PHONE} पर कॉल या वॉट्सऐप करें।`
    }
  }
}

export function buildOverview(lang) {
  const l = lang === 'hi' ? 'hi' : 'en'
  const k = gymKnowledge
  if (l === 'hi') {
    return `${k.name.hi} — ${k.slogan.hi}\nओनर: ${k.owner.hi} (${k.ownerTitle.hi})\nपता: ${k.address.hi}\nसमय: ${k.timing.hi}\nफोन/व्हाट्सऐप: ${PHONE}\nप्रोग्राम: ${k.programs.hi}\nसुविधाएं: ${k.facilities.hi}\nखासियत: ${k.strengths.hi}\nFITPASS: ${k.fitpass.hi}\nजॉइन कैसे करें: ${k.join.hi}`
  }
  return `${k.name.en} — ${k.slogan.en}\nOwner: ${k.owner.en} (${k.ownerTitle.en})\nAddress: ${k.address.en}\nTiming: ${k.timing.en}\nPhone/WhatsApp: ${PHONE}\nPrograms: ${k.programs.en}\nFacilities: ${k.facilities.en}\nStrengths: ${k.strengths.en}\nFITPASS: ${k.fitpass.en}\nHow to join: ${k.join.en}`
}

export function buildKnowledgeText() {
  return `Name: Empire The Gym (एम्पायर द जिम). Slogan: Be The Part Of An Epic Empire.
Owner and trainer: Ramandeep Singh (रमनदीप सिंह).
Address: Near Royal Kids School, Bajriya Chowk, Laal Sadak, Hansi, Hisar, Haryana - 125033 (also listed as Plot No. 103/7, Laal Sadak, Hansi).
Timing: Monday to Saturday 5:30 AM to 10:00 PM. Sunday closed. Evenings from 5 PM are usually the busiest. Also answer "is it open now" using IST.
Phone and WhatsApp: ${PHONE}.
Programs: Gym Workout (muscle gain, fat loss, strength training). Abs Training (core strength, posture, stamina).
Facilities: air conditioned hall, parking, water cooler.
Strengths: modern equipment, knowledgeable trainers, disciplined and motivating atmosphere, affordable fees.
FITPASS: members can book sessions at the gym through the FITPASS app.
How to join: visit the gym during timings, call or WhatsApp ${PHONE}, or book through FITPASS.
Website: pages Home, About, Gallery and Contact; the Contact page has a form, map and timings.
Not confirmed (share only with "as per our information, please confirm by calling ${PHONE}"): a 5,000+ sq ft space with cardio, stretching, aerobics and crossfit zones; imported cardio machines and a deadlift platform; female-only batches; workout plans, diet charts and supplements.
Not available (say so politely and give the number once): trainer names, female batch timing, trial class policy, offers.`
}
