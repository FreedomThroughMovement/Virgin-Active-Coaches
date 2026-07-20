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
        focus: ["body-transformation", "pain-management", "flexibility-mobility", "race-preparation", "women-health"],
        image: "image/Shazni.jpg",
        experience: "5+ years",
        certifications: ["ACE CPT", "Biomedical Science", "Nutrition Dip.", "Women Health & Performance Certified", "ISA Special Population Training", "Rehab Essentials", "Trigger Point Certified", "Aerobics Capacity level 1", "ACE Functional Training Specialist", "Hyrox Level 1 Certified", "Evolt 360 Specialist"]
    },
    {
        id: 4,
        name: "Sarah Ong",
        specialty: "Coach",
        bio: "I will guide you with dedication, empowering you to achieve your unique fitness goals.",
        focus: ["body-transformation", "pre-natal", "flexibility-mobility", "functional-strength", "strength-performance", "women-health"],
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
    "strength-performance": "Strength Performance",
    "women-health": "Women's Health"
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
        date: "2024-01-27"
    },    
    {
        id: 3,
        clientName: "Sungwon Kim",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "I attended Virgin Active Paya Lebar and have had PT sessions with Ken, and it's been a really great experience. Ken's training style is especially good for women: he focuses on slimming the body, improving posture, and creating clean, feminine lines rather than bulky muscles. The sessions are well-structured, effective and tailored to my body type and goals, and they really helped me achieve my dream wedding body. Highly recommend Ken if you're looking to get lean, toned, and sculpted in a healthy way.",
        date: "2026-01-27"
    },
    {
        id: 4,
        clientName: "Gilbert Teo",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "Ken is a great personal trainer. He's very knowledgeable in both fitness and nutrition, hence he's able to help you to achieve your goal. I've seen massive improvement just after a couple of months of training. Highly recommended.",
        date: "2024-01-20"
    },
    {
        id: 5,
        clientName: "Joanne Tay",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "I am writing this review for my personal trainer Ken Chung. I have trained with him for almost 6 months and I can't recommend him highly enough, especially if you are recovering from an injury or dealing with any physical limitations. His knowledge of rehabilitation training is outstanding, and he really take the time to understand your body and tailor every session to your specific needs and progress. /n/n What sets Ken apart is his patience, professionalism, and ability to push you just the right amount withouot ever risking re-injury. I've seen real improvement in both my strength and mobility, ald I always feel supported and safe during workouts. /n/n If you are looking for someone who's not only skilled but also incredibly encouraging and professional, Ken Chung is the one to go to. He has made a huge difference in my recovery journey. I am now stronger and fitter than before.",
        date: "2024-01-27"
    },
    {
        id: 6,
        clientName: "Josi Tan",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "I would like to express my appreciation to Senior Personal Trainer Ken Chung for his expertise and dedication in helping me recover from my shoulder pains and lower back pains that I have been suffering for months. I need to apply pain relieving plaster to my lower back to relieve the pain to help me sleep every night. However, with Ken's friendly and caring approach towards improving flexibility, reducing muscle tension and soreness, I no longer need the pain relieving plasters to sleep at night. I truly appreciate it.",
        date: "2025-01-27"
    },
    {
        id: 7,
        clientName: "Kevin Aubry",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "I have been a member for about 1.5 years and I have been training with Ken for the same time. They have taken care of me and helped me get back from many injuries to my sports while keeping it not boring.",
        date: "2024-01-29"
    },
    {
        id: 8,
        clientName: "Nana Lina",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "I recently had the pleasure of working with Ken at Virgin Active and it was an amazing experience. The trainer was knowledgeable, professional and supportive throughout the entire process. I appreciate the personalized attention and tailored workouts that were designed specifically for my fitness goals and abilities. The trainer also provided helpful guidance on nutrition and lifestyle habits that complimented my fitness routine.",
        date: "2024-01-22"
    },
    {
        id: 9,
        clientName: "R S",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "Had a great time when I was a member; signed up for an physical trainer and worked with Ken. Ken is knowledgeable and his workout plan is very easy-to-follow. He constantly kept me motivated even when I had less time for the gym due to work. Ken is a very meticulous coach and his passion rubbed off on me. I noticed results very quickly and his goal-oriented nature helped my workouts be even more efficient. He is a trainer and a friend; thank you Ken and VA for being a part of my life.",
        date: "2024-01-24"
    },
    {
        id: 10,
        clientName: "Roshan Jayashankar",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "Personal trainer Ken is a standout, with extensive knowledge of fitness and nutrition and a friendly, supportive approach that makes working out a pleasure. Ken takes the time to understand your goals and creates customised workout plans that are challenging but achievable. Whether you're looking to lose weight, build muscle or simply improve your overall fitness, Ken and the Virgin Active gym are a winning combination. Highly recommended!",
        date: "2024-02-01"
    },
    {
        id: 11,
        clientName: "Sarah A",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "Ken was very professional from the beginning, asking about my goals, the health conditions I have and current lifestyle. He then proceeded to do a full body check on me and explained what the numbers indicated about our overall health. He was very detailed in explaining what each exercise is meant to strengthen and was professional in giving adjustments when needed.",
        date: "2025-06-27"
    },
    {
        id: 12,
        clientName: "Viliah Overwater",
        coachId: 1,  // Reference to coach ID
        rating: 5,
        text: "I have been doing weekly PT session with my trainer Ken Chung who uses a functional fitness philosophy to help you achieve your goals.",
        date: "2024-01-29"
    }
    // Add more testimonials as they come in
];
