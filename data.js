// Coach profiles data
const coaches = [
    {
        id: 1,
        name: "Ken Chung",
        specialty: "Fitness Manager",
        bio: "I may not be able to add years to your life, but I will help add life to those years.",
        focus: ["pain-management", "flexibility-mobility", "functional-strength", "sports-performance", "race-preparation"],
        image: "image/Ken Trainer Profile.jpg",
        experience: "6+ years",
        certifications: ["ACE CPT", "FTI Functional Tools", "Rehab Essentials", "Rehab Masterclass", "Rehab Seniors", "Powerplate Certified", "Spartan Level 1 Coach", "Hyrox Level 1 Coach", "Aerobics Capacity"]
    },
    {
        id: 2,
        name: "Avan Kua",
        specialty: "Senior Coach",
        bio: "No pain, All Gains",
        focus: ["functional-strength", "pre-natal", "pain-management", "flexibility-mobility"],
        image: "image/Avan.jpg",
        experience: "10+ years",
        certifications: ["FISAF CPT", "Functional Patterns level 1", "Pre & Post-partum Certified", "TRX Suspension Certified", "Vipr Certified"]
    },
    {
        id: 3,
        name: "Shazni Yasir",
        specialty: "Senior Trainer",
        bio: "We're a team. Together, we'll find ways that work for you.",
        focus: ["body-transformation", "pain-management", "flexibility-mobility", "race-preparation"],
        image: "https://raw.githubusercontent.com/FreedomThroughMovement/Virgin-Active-Coaches/main/images/Shazni.jpg",
        experience: "5+ years",
        certifications: ["ACE CPT", "Biomedical Science", "Nutrition Dip.", "Women Health & Performance Certified", "ISA Special Population Training", "Rehab Essentials", "Trigger Point Certified", "Aerobics Capacity level 1", "ACE Functional Training Specialist"]
    },
    {
        id: 4,
        name: "Sarah Ong",
        specialty: "Coach",
        bio: "I will guide you with dedication, empowering you to achieve your unique fitness goals.",
        focus: ["body-transformation", "pre-natal", "flexibility-mobility"],
        image: "https://raw.githubusercontent.com/FreedomThroughMovement/Virgin-Active-Coaches/main/images/Sarah%20Ong.jpg",
        experience: "2+ years",
        certifications: ["ACE CPT", "NYP Sports & Wellness Management", "ACE Weight Management Specialist", "ACE Pre & Post Natal Certified"]
    },
    {
        id: 5,
        name: "Xavier Quek",
        specialty: "Coach",
        bio: "I will help convert fitness from being a requirement to being your enjoyment.",
        focus: ["strength-performance", "body-transformation", "functional-strength", "flexibility-mobility"],
        image: "https://raw.githubusercontent.com/FreedomThroughMovement/Virgin-Active-Coaches/main/images/Xavier.jpg",
        experience: "2+ years",
        certifications: ["TBC"]
    },
    {
        id: 6,
        name: "Ryan Faiz",
        specialty: "Coach",
        bio: "Bio coming soon...",
        focus: [],
        image: "https://raw.githubusercontent.com/FreedomThroughMovement/Virgin-Active-Coaches/main/images/Faiz%20Trainer%20Image.jpg",
        experience: "Experience",
        certifications: []
    },
    {
        id: 7,
        name: "Luke Lee",
        specialty: "Coach",
        bio: "Bio coming soon...",
        focus: [],
        image: "https://raw.githubusercontent.com/FreedomThroughMovement/Virgin-Active-Coaches/main/images/Luke%20Trainer%20Profile.jpg",
        experience: "Experience",
        certifications: []
    },
    {
        id: 8,
        name: "Natasha Tan",
        specialty: "Coach",
        bio: "Bio coming soon...",
        focus: [],
        image: "https://raw.githubusercontent.com/FreedomThroughMovement/Virgin-Active-Coaches/main/images/Natasha%20PT%20Profile.jpg",
        experience: "Experience",
        certifications: []
    }
];

// Focus labels for display
const focusLabels = {
    "body-transformation": "Body Transformation",
    "pain-management": "Pain Management",
    "flexibility-mobility": "Flexibility & Mobility",
    "functional-strength": "Functional Strength",
    "strength-performance": "Strength Performance",
    "pre-natal": "Pre-natal",
    "sports-performance": "Sports Performance",
    "race-preparation": "Race Preparation"
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
        clientName: "Client Name",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "Add your testimonial here. Describe your experience working with the coach and your results.",
        date: "2026-01-15"
    }
    // Add more testimonials as they come in
];
