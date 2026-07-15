// Coach profiles data
const coaches = [
    {
        id: 1,
        name: "Ken Chung",
        specialty: "Fitness Manager",
        bio: "I may not be able to add years to your life, but I will help add life to those years.",
        focus: ["pain-management", "flexibility-mobility", "functional-strength", "sports-performance", "race-preparation", "senior-training"],
        image: "image/Ken Trainer Profile.jpg",
        experience: "6+ years",
        certifications: ["ACE CPT", "FTI Functional Tools", "Rehab Essentials", "Rehab Masterclass", "Rehab Seniors", "Powerplate Certified", "Spartan Level 1 Coach", "Hyrox Level 1 Coach", "Aerobics Capacity", "Evolt 360 Specialist"]
    },
    {
        id: 2,
        name: "Avan Kua",
        specialty: "Senior Coach",
        bio: "No pain, All Gains",
        focus: ["functional-strength", "pre-natal", "pain-management", "flexibility-mobility","senior-training"],
        image: "image/Avan.jpg",
        experience: "10+ years",
        certifications: ["FISAF CPT", "Functional Patterns level 1", "Pre & Post-partum Certified", "TRX Suspension Certified", "Vipr Certified", "Evolt 360 Specialist"]
    },
    {
        id: 3,
        name: "Shazni Yasir",
        specialty: "Senior Coach",
        bio: "We're a team. Together, we'll find ways that work for you.",
        focus: ["body-transformation", "pain-management", "flexibility-mobility", "race-preparation"],
        image: "image/Shazni.jpg",
        experience: "5+ years",
        certifications: ["ACE CPT", "Biomedical Science", "Nutrition Dip.", "Women Health & Performance Certified", "ISA Special Population Training", "Rehab Essentials", "Trigger Point Certified", "Aerobics Capacity level 1", "ACE Functional Training Specialist", "Hyrox Level 1 Certified", "Evolt 360 Specialist"]
    },
    {
        id: 4,
        name: "Sarah Ong",
        specialty: "Coach",
        bio: "I will guide you with dedication, empowering you to achieve your unique fitness goals.",
        focus: ["body-transformation", "pre-natal", "flexibility-mobility"],
        image: "image/Sarah.jpg",
        experience: "2+ years",
        certifications: ["ACE CPT", "NYP Sports & Wellness Management", "ACE Weight Management Specialist", "ACE Pre & Post Natal Certified", "Evolt 360 Specialist"]
    },
    {
        id: 5,
        name: "Xavier Quek",
        specialty: "Coach",
        bio: "I will help convert fitness from being a requirement to being your enjoyment.",
        focus: ["strength-performance", "body-transformation", "functional-strength", "flexibility-mobility"],
        image: "image/Xavier.jpg",
        experience: "2+ years",
        certifications: ["NCSF CPT", "Evolt 360 Certified"]
    },
    {
        id: 6,
        name: "Ryan Faiz",
        specialty: "Coach",
        bio: "Stronger. Healthier. Confident. I'll guide you to move better, perform better and live stronger.",
        focus: ["body-transformation", "strength-performance", "race-preparation", "senior-training"],
        image: "image/Faiz.jpg",
        experience: "2+ years",
        certifications: ["ACE CPT", "ACE Senior Fitness Specialist", "ACE Weight Management Specialist", "ACE Fitness Nutrition Specialist", "ACE Corrective Exercise Specialist", "Evolt 360 Specialist"]
    },
    {
        id: 7,
        name: "Luke Lee",
        specialty: "Coach",
        bio: "Never try, never know. Just ask yourself: Does our energy resonate?",
        focus: ["functional-strength", "hybrid-performance", "flexibility-mobility"],
        image: "image/Luke.jpg",
        experience: "2+ years",
        certifications: ["ACE CPT", "NASM CPT", "Functional Tools Coach", "Corrective Strategy Level 1", "Kettlebell level 1", "Weightlifting Foundations"]
    },
    {
        id: 8,
        name: "Natasha Tan",
        specialty: "Coach",
        bio: "Consistency Beats Perfection.",
        focus: ["flexibility-mobility", "body-transformation", "strength-performance"],
        image: "image/Natasha.jpg",
        experience: "2+ years",
        certifications: ["NCSF CPT", "Barre Certified", "Evolt 360 Certified"]
    }
];

// Focus labels for display
const focusLabels = {
    "body-transformation": "Body Transformation",

    "flexibility-mobility": "Flexibility & Mobility",
    "functional-strength": "Functional Strength",
    "hybrid-performance": "Hybrid Performance",
    "hyrox": "Hyrox",
    "nutrition": "Nutrition",
    "pain-management": "Pain Management",
    "pre-natal": "Pre-Natal",
    "race-preparation": "Race Preparation",
    "senior-training": "Senior Training",
    "sports-performance": "Sports Performance",
    "strength-performance": "Strength Performance"
};

// Main contact information for the facility
const mainContact = {
    email: "ken.chung@virginactive.com.sg",
    phone: "+65 6911 0580",
    address: "1 Paya Lebar, #04-06, #04-07, #04-08, Singapore 408533"
};

// Testimonials data (for future use)
const testimonials = [
    {
        id: 1,
        clientName: "Alexis Ageorges",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "What really sets this gym apart is the personal trainer i work with: Ken. He's an expert in rehab and has helped me overcome a range of issues with my knees, lower back and shoulder. I'd highly recommend this gym and my trainer to anyone looking for a supportive and knowledgeable environment to achieve their fitness goals.",
        date: "2024-01-25"
    },
    {
        id: 2,
        clientName: "Christie Kamala",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "As a senior citizen, I was hesitant to work out at the gym myself. After meeting Ken Chung, I was motivated to have personal training with him. He Patiently trained me 1-2 tines a week for 1 year. He helped me with my strength, mobility and balance issues by teaching me suitable exercises to improve in these areas. He is very knowledgeable, friendly and encouraging. He also taught me how to use the various gym machines properly so that I could work out safely on my own. I am grateful for his help and motivation in helping me to become stronger, fitter and to move more confidently.",
        date: "2026-01-27"
    }
    // Add more testimonials as they come in
];
