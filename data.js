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
        text: "I am writing this review for my personal trainer Ken Chung. I have trained with him for almost 6 months and I can't recommend him highly enough, especially if you are recovering from an injury or dealing with any physical limitations. His knowledge of rehabilitation training is outstanding, and he really take the time to understand your body and tailor every session to your specific needs and progress. What sets Ken apart is his patience, professionalism, and ability to push you just the right amount withouot ever risking re-injury. I've seen real improvement in both my strength and mobility, ald I always feel supported and safe during workouts. If you are looking for someone who's not only skilled but also incredibly encouraging and professional, Ken Chung is the one to go to. He has made a huge difference in my recovery journey. I am now stronger and fitter than before.",
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
    },
    {
        id: 13,
        clientName: "Esther Lim",
        coachId: 2,  // Reference to coach ID
        rating: 5,
        text: "There's a lot of fear and misinformation surrounding working out while pregnant. I want to share my journey because I feel that working out using functional patterns methodology with Avan has made all the difference in my journey. Not only did I experience zero pain while pregnant (No back pain, no round ligament pain, no incontinence etc, but I also didn't feel like my bump hindered my mobility until the final few weeks. It has also made all the difference in my post c-section recovery and I felt 100% back to normal after 6-7 weeks. No Diastasis recti, core weakness or fascial restrictions from the formation of scar tissue post major surgery). At 3 weeks post c-section, I started doing gentle exercises and lots of active stretching. So if you're looking for a certified prenatal/postnatal trainer, or even someone who can fix your pain or dysfunctions, Avan does wonders.",
        date: "2022-03-02"
    },
    {
        id: 14,
        clientName: "Jesiree Ologar",
        coachId: 2,  // Reference to coach ID
        rating: 5,
        text: "I was diagnosed with osteopenia in my hips over a year ago, and with the help of my personal trainer, Avan Kua, my osteopenia is now gone and I've gained 8.2% muscle. He's patient, really checks your form, and just knows his stuff when it comes to training.",
        date: "2025-11-20"
    },
    {
        id: 15,
        clientName: "Lynette Tan",
        coachId: 2,  // Reference to coach ID
        rating: 5,
        text: "When I entered my 50s, I realized how crucial it was to stay fit and healthy. In 2019, I joined PLQ Virgin Active and started training with Avan as my personal trainer. From day one, he has been incredibly professional, customizing every exercise movements to align with my goals, focusing on full-body mobility, strength and muscle mass building. Avan's patience and support got me started and made me enjoy every workout session. Today, I'm proud of the progress I've made - my increased strength and transformed muscle definition are a testament to Avan's dedication. I couldn't have achieved these results without him!",
        date: "2025-06-19"
    },
    {
        id: 16,
        clientName: "Joan Cheong",
        coachId: 2,  // Reference to coach ID
        rating: 5,
        text: "I have much to thank for a pre-natal personal trainer, Avan! I've decided to engage him for my 2nd pregnancy after experiencing the loss of muscles and strength from my 1st pregnancy. I was initially mildly worried that I will be too weak to even begin something like while being pregnant or worse, if it affects my baby. But Avan was very knowledgeable with pre-natal training, shared a lot of tips and knowledge about how to keep my core tight, most importantly, protect the baby during the sessions. He adjusted the intensity based on my progress and how my body felt each session, and had an incredible capability in teaching me how to engage the right muscle groups for each exercise. It's one story to tell you what muscle to use for an exercise, and a totally different thing being able to exactly tell you HOW to engage that muscle in your body. He also focused on dynamic moves and strength training to support day-to-day movement and lifestyle. Truly holistic wealth and fitness! I am thankful for this experience and the knowledge I've gained from it. Would recommend Avan 1000%!",
        date: "2025-12-06"
    },
    {
        id: 17,
        clientName: "Roziana Cindy",
        coachId: 2,  // Reference to coach ID
        rating: 5,
        text: "I've been training at VA for the past year, with Avan as my personal trainer throughout, and it's been a great experience! I really enjoy his coaching style, especially his focus on functional training. He's knowledgeable, motivating, and always ensures my form is correct while tailoring each session to my needs. He truly goes the extra mile for his clients, and it really shows. Honestly, he's one of the main reasons I've stayed consistent with the gym. Highly recommend Avan if you're looking for a trainer who genuinely cares about your progress.",
        date: "2026-07-09"
    },
    {
        id: 18,
        clientName: "Egor Saltykov",
        coachId: 2,  // Reference to coach ID
        rating: 5,
        text: "Working with Coach Avan has been a game-changer for my fitness journey, especially during recovery and post-op rehabilitation. Avan's expertise and personalized approach have helped me regain strength and mobility faster than I expected. He tailors each session to my progress, ensuring a safe and effective recovery process. The gym itself is always spotless, creating a comfortable and motivating environment. The staff are incredibly friendly and welcoming, making each visit a positive experience. Highly recommend Avan.",
        date: "2025-06-19"
    },
    {
        id: 19,
        clientName: "Ren Yi",
        coachId: 7,  // Reference to coach ID
        rating: 5,
        text: "The variation of exercises has kept training sessions enjoyable and satisfying when objectives are met. Sometimes, Luke will vary the tempo and exercises to match my energy levels. He's sensitive to my ability for the day. Under his program, I have managed to lose some weight and achieve an improved fitness level.",
        date: "2026-06-01"
    },
    {
        id: 20,
        clientName: "Chiara Giuliani",
        coachId: 6,  // Reference to coach ID
        rating: 5,
        text: "I have trained with Ryan for a few months and honestly really enjoyed it! He's knowledgeable, patient and good at pushing you without making it feel intimidating. Sessions always feel tailored to what I needed and I could really see the progress over time. Also just very easy to talk to, which makes a big difference when you're training regularly - totally recommended!",
        date: "2026-05-01"
    },
    {
        id: 21,
        clientName: "Fiona Foo",
        coachId: 6,  // Reference to coach ID
        rating: 5,
        text: "I've trained with Ryan for about 3 months and had a great experience. He's patient, friendly and very attentive during workouts. He observes my form closely and customizes exercises to suit my needs, especially since my upper body is weaker and I'm working on building strength. He also shares useful knowledge to help with muscle building. Highly recommend Ryan to anyone looking for a supportive and knowledgeable PT.",
        date: "2026-05-10"
    },
    {
        id: 22,
        clientName: "Kerstin Schulze",
        coachId: 6,  // Reference to coach ID
        rating: 5,
        text: "Recently, I booked Ryan for personal training sessions to get back into training after a long break (Busy with business and kid). It was a great experience as he tailored the sessions to my availability, adjusting away from machines to smaller free weight so I could exercise at home rather than not doing anything at all because I cannot make it to the gym itself. It was definitely a great help to be more motivated again to train more.",
        date: "2026-06-25"
    },
    {
        id: 23,
        clientName: "Enos Koh",
        coachId: 6,  // Reference to coach ID
        rating: 5,
        text: "I trained with Ryan and have only great things to say about him. He is very professional and is great at figuring out maximum working weight and reps dynamically; almost like an algorithm! As such, workouts feel extremely tailored to how your body is feeling on the day, with you getting the best workout every session. Ryan is also a very ethical person, he never upsells additional sessions if you really don't need it, and is focused instead on helping you achieve your goals. High recommended!",
        date: "2026-07-20"
    }
    // Add more testimonials as they come in
];
