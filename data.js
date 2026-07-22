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
        focus: ["body-transformation", "strength-performance", "race-preparation", "senior-training", "nutrition"],
        image: "image/Faiz.jpg",
        experience: "2+ years",
        certifications: ["ACE CPT", "ACE Senior Fitness Specialist", "ACE Weight Management Specialist", "ACE Fitness Nutrition Specialist", "ACE Corrective Exercise Specialist", "Evolt 360 Specialist"]
    },
    {
        id: 7,
        name: "Luke Lee",
        specialty: "Coach",
        bio: "It's all about improving on what's been and making it better for what's to come.",
        focus: ["functional-strength", "hybrid-performance", "flexibility-mobility", "sports-performance", "strength-performance"],
        image: "image/Luke.jpg",
        experience: "10+ years",
        certifications: ["ACE CPT", "NASM CPT", "Functional Tools Coach", "Corrective Strategy Level 1", "Kettlebell level 1", "Weightlifting Foundations", "Zumba B1 Instructor"]
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
    },
    {
        id: 24,
        clientName: "Japneet",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I used to find the gym intimidating, but Sarah has completely changed the way I look at exercise. From day one, she's made me feel comfortable, supported, and confident in what I'm doing. She somehow manages to find muscles I didn't even know existed (which I usually discover the next day), and she's always making sure I'm activating the right ones. If I'm not, she's quick to tweak the exercise so it actually works for my body. One of the things I appreciate most is how well she knows when to encourage me and when to push me just a little beyond what I think I'm capable of. Thanks to her, I'm now lifting weights I never imagined I'd be able to—and we've both had plenty of laughs celebrating those little wins along the way.I actually enjoy going to the gym now, which is something I never thought I'd say! If you're looking for a trainer who's knowledgeable, encouraging, and knows how to make hard work genuinely enjoyable, I couldn't recommend Sarah more. Thank you, Sarah, for believing in me, cheering me on, and making every session something I look forward to!",
        date: "2026-07-20"
    },
    {
        id: 25,
        clientName: "Audrey",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "Not sure if I had Sarah as my PT or to bully me into becoming my strongest self. She’s helped me become stronger, leaner, fitter, and most importantly, confident and motivated in exercising outside PT sessions. Thank you for pushing me when I needed it, keeping me accountable, and making every session something I actually would look forward to. The sweat and soreness are 100% worth it.",
        date: "2026-07-20"
    },
    {
        id: 26,
        clientName: "Eilynn",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "Sarah makes me look forward to every workout! She always knows how to encourage me when I feel like giving up, and her positive reinforcement really keeps me going. She also pays close attention to my form throughout each session, making sure I’m exercising safely and effectively. Whenever I bring up any fitness concerns or challenges, she offers realistic, practical solutions that fit my lifestyle instead of one-size-fits-all advice. On top of that, she shares helpful tips and exercises I can do at home, which has made it much easier to stay consistent outside of our sessions. Highly recommend her to anyone looking for a knowledgeable, supportive, and encouraging trainer!",
        date: "2026-07-20"
    },
    {
        id: 27,
        clientName: "Siti",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "Having you as my PT has been one of the best decisions I've made. You're fun, funny, and always bring such positive energy to every session. More than helping me get stronger physically, you've taught me to be a fighter in real life. Thank you for always listening without judging, believing in me even when I doubted myself, and constantly motivating me to keep going. I'm truly grateful for everything you've done for me!",
        date: "2026-07-20"
    },
    {
        id: 28,
        clientName: "Shi Min",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "Sarah is professional, patient, and always willing to answer all of my questions. Every session with her is enjoyable, and she always encourages me to challenge myself and do better. I’m so thankful for her support and guidance!",
        date: "2026-07-20"
    },
    {
        id: 29,
        clientName: "Abigail",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I've had a positive experience training with Sarah. She explains exercises clearly, is attentive to questions, and makes sure I understand the proper technique. Her sessions are well-organized, and she pays close attention to any pain or discomfort, adjusting exercises when needed. I appreciate her thoughtful and professional approach.",
        date: "2026-07-20"
    },
    {
        id: 30,
        clientName: "Eliza",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "Sarah is an amazing personal trainer! She’s warm, friendly, & incredibly patient, always taking the time to teach me how to use each machine correctly, making sure I feel confident with every exercise. She’s been supportive in helping me work towards my body goals, & every session is something I genuinely look forward to. We always have great chats, & she’s such a fun person to be around. If you’re looking for a trainer who’s knowledgeable, encouraging, & makes working out enjoyable, I’d definitely recommend Sarah!",
        date: "2026-07-20"
    },
    {
        id: 31,
        clientName: "Ally",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "It has been a pleasure training with Sarah! I first came to her for postnatal recovery and some very real “carrying-a-baby-all-day” shoulder pain. Fast forward to today, my core is much stronger, my shoulder pain is gone, and I’ve discovered muscles I didn’t know existed! Sarah has a great balance of knowing when to push me beyond what I think I can do, while always adjusting the programme based on how my body is feeling that day. She’s also incredibly easy to talk to, so I never hesitate to discuss my goals or preferences, and she always tailors the sessions accordingly. Most importantly, she somehow makes every workout enjoyable. The hour flies by with plenty of laughs, and it feels more like a fun challenge than a typical gym session. I actually look forward to training each week, which is something I never thought I’d say. Highly recommend Sarah to anyone looking for a trainer who is knowledgeable, supportive, and genuinely makes fitness enjoyable!",
        date: "2026-07-20"
    },
    {
        id: 32,
        clientName: "Yifan",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I have been training with Sarah for almost a year. Knowing my physical issues such as knee pain and neck pain, Sarah has customised PT plans to help strengthen relevant muscles, reduce pain and improve my general health. Training with her is such a delight as she is positive, professional, caring and always encouraging. Truly a great PT and grateful to have her!",
        date: "2026-07-20"
    },
    {
        id: 33,
        clientName: "Olivia",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I started training with Sarah because I wanted more structure in my workouts. Left on my own, I'd just do things haphazardly, but she gave me a clear programme that kept me progressing towards my strength goals. I've been training with Sarah for over a year now, and she's great at knowing when to push and when to adapt. One of my biggest milestones was hitting a 100kg deadlift. I was aiming to get there by the end of the year, but I achieved it in 3 months. That showed me how much a well-planned, consistent programme can make a difference. I'd definitely recommend Sarah to beginners, busy people, or women who feel intimidated by the gym. She made strength training feel approachable and showed me that you don't need fancy workouts, just consistency and the right guidance.",
        date: "2026-07-20"
    },
    {
        id: 34,
        clientName: "Deepika",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "Sarah is someone I’m grateful for …a trainer who didn’t just focus on reps, but on rebuilding confidence. She’s pushed me beyond what I thought were my limits, challenged my excuses, and helped me show up stronger - physically and mentally. This journey back to fitness feels different because of her belief, consistency, and the quiet way she keeps raising the bar. Big shoutout to her for making strength feel achievable again!",
        date: "2026-07-20"
    },
    {
        id: 35,
        clientName: "Linda",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I’ve had a great experience training with Sarah. She’s attentive, knowledgeable, and always ensures my form is correct while tailoring each session to my goals. Her encouragement and dedication keep me motivated, and I highly recommend her to anyone looking for a supportive and professional personal trainer.",
        date: "2026-07-20"
    },
    {
        id: 36,
        clientName: "Agnes",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I've been training with Sarah since May, and the difference has been huge. I came to her with a knee problem that made everyday movements uncomfortable, and she took the time to really understand the issue and build a program around it — focusing on strengthening my core to support my knees properly. Since then, I feel so much less pain when I squat or walk down stairs, something I honestly didn't think would improve this much. Sarah is knowledgeable, patient, and clearly cares about doing things safely and correctly rather than just pushing hard for the sake of it. Highly recommend her if you're dealing with an injury or just want a trainer who actually pays attention to your body.",
        date: "2026-07-20"
    },
    {
        id: 37,
        clientName: "Verina",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I've been training with her since Feb and it's been great all around. She personalizes every session based on how I'm feeling, pushes me to work hard, and really knows her stuff on technique-all while being genuinely friendly and easy to talk to. I feel noticeably stronger and am so much more confident in the gym now.",
        date: "2026-07-20"
    },
    {
        id: 38,
        clientName: "Chu Tong Meloni",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "Sarah is incredibly attentive to detail and always ensures that every movement is performed with the correct form and posture. She will patiently explains each exercise, provides clear guidance, and corrects even the smallest mistakes to make sure you’re targeting the right muscles safely and effectively. As a beginner, I found her coaching style very reassuring and easy to follow. I would definitely recommend her to anyone looking for a knowledgeable and supportive trainer, plus she’s super friendly and chatty as well :)",
        date: "2026-07-20"
    },
    {
        id: 39,
        clientName: "Xinzi",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I've been training with my personal trainer Sarah for a year and a half now and I've really enjoyed the sessions. She's incredibly personable, encouraging, and genuinely dedicated to helping her clients achieve their goals. Every session is well-planned, motivating, and tailored to my progress, which keeps me challenged while building my confidence. Since training with her, I've noticed improvement in my overall strength and fitness. She consistently pushes me to do my best while making each workout enjoyable. Her positive attitude and commitment make every session something I look forward to. I highly recommend her to anyone looking for a knowledgeable, supportive, and motivating personal trainer! =)",
        date: "2026-07-20"
    },
    {
        id: 40,
        clientName: "Ang Ming Xiang",
        coachId: 6,  // Reference to coach ID
        rating: 5,
        text: "A special shout-out goes to my personal trainer, Ryan. From day one, he's been incredibly encouraging, patient, and committed to helping me become a better version of myself. He knows when to push me beyond what I think I'm capable of, while always making sure my technique and progress come first. His positive attitude, professionalism, and genuine belief in his clients make every training session something I look forward to. On days when motivation is low, Ryan somehow always finds the right words to keep me going.",
        date: "2026-07-21"
    },
    {
        id: 41,
        clientName: "Derick Teo",
        coachId: 3,  // Reference to coach ID
        rating: 5,
        text: "I've been training with Shazni since July 2023, and it's been one of the best decisions I've made for my health. Over that time, I've lost more than 10kg, built real muscle, and feel genuinely better about myself day to day. What's made a difference is the consistency and the way the sessions are tailored to where I actually am, not some generic programme. She pushes me when I need it, adjusts when I'm struggling, and has kept me motivated across nearly two years, which says a lot given how easy it is to fall off. The progress speaks for itself, but the encouragement and genuine care behind it are what kept me coming back. If you are on the fence about getting a personal trainer here, I'd recommend Shazni without hesitation. Highly worth it.",
        date: "2026-07-22"
    },
    {
        id: 42,
        clientName: "Priscilla",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I’ve been training with Sarah for a while now, and I genuinely look forward to every session. She strikes the perfect balance between pushing me hard and making the workouts enjoyable. I’m almost always aching after our sessions, which is a clear sign that she knows exactly how to challenge me and help me progress. What I appreciate most is her strong focus on proper form and technique. She pays close attention to every movement, making sure exercises are performed correctly and safely rather than just chasing heavier weights or more reps. This attention to detail has helped me build confidence, avoid injuries, and get much more out of my workouts. Beyond being a great trainer, she is also an incredibly warm, friendly, and encouraging person. She creates a comfortable environment where it’s easy to ask questions, learn, and stay motivated. Her positive energy makes even the toughest sessions enjoyable. I would highly recommend her to anyone looking for a knowledgeable, dedicated, and genuinely caring personal trainer.",
        date: "2026-07-21"
    },
    {
        id: 43,
        clientName: "Cheryl",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I started training with Sarah as a postpartum mum with one simple goal—to get stronger. I had very little muscle mass, suffered from frequent back and shoulder pain, and was generally weak and prone to injuries. More than anything, I wanted to be strong enough to carry and keep up with my young child. Sarah was incredibly patient and always took the time to make sure my form was correct before progressing to heavier weights. Since I have diastasis recti, she also tailored my core exercises to ensure they were safe and appropriate. I really appreciated that she respected the level of commitment I could realistically make and never pressured me. Instead, she created workouts that were achievable, enjoyable, and still challenged me to improve. The biggest compliment I can give Sarah is that I’m still strength training on my own today. She completely changed my mindset towards the gym—from something I dreaded to something I genuinely enjoy and look forward to. I’m so much stronger, more confident, and no longer feel as easily injured. I’m really grateful for her guidance and would happily recommend her to anyone looking for a patient, knowledgeable, and encouraging trainer.",
        date: "2026-07-21"
    },
    {
        id: 44,
        clientName: "Ting Xiang",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I’ve been training with Sarah for 6 months, and I couldn’t have asked for a better PT. She is incredibly encouraging and always knows exactly how to motivate me. Whenever I’m about to give up or feel like I can’t finish a set, she’ll remind me, “You can do it!” and cheer me on through those last few reps. Her encouragement has helped me push past my limits and build more confidence in myself. What I appreciate even more is that she genuinely cares about my progress, even outside of our scheduled training sessions. Whenever I see her at the gym on my own training days and have questions about an exercise or whether my form is correct, she’s always happy to help. She takes the time to check my posture, correct my technique, and make sure I’m training safely and effectively. Sarah is not only knowledgeable but also patient, supportive, and passionate about helping her trainee succeed. I highly recommend her to anyone looking for a trainer who will motivate you, guide you, and make your fitness journey enjoyable.",
        date: "2026-07-21"
    },
    {
        id: 45,
        clientName: "Camillia",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I've been training with Sarah for almost a year now, and I honestly couldn't recommend her more. I came into the gym as a complete beginner with very little confidence around weights, as well as a history of recurring back issues. From day one, she's taken the time to understand my issues, work closely with my physiotherapist's recommendations, and adapt every workout to suit exactly what my body needs. She never just tells me what exercise to do—she always makes sure I'm activating the right muscles, checks in on how I'm feeling that day, and adjusts movements if I'm experiencing any pain or discomfort. It's clear she's incredibly knowledgeable and genuinely cares about helping her clients train safely while still making progress. I've gone from being intimidated by the weights section and having no confidence in the gym to lifting more than double what I started with on exercises like the bench press. Sarah has a great way of breaking everything down into manageable steps, which made the gym feel far less overwhelming as a beginner. More importantly, I genuinely feel stronger than I ever have before. Beyond her expertise, she's also incredibly kind, encouraging and patient. She knows when to push me, but she's also understanding when my body needs something different. She's never rushed a session and has often given me extra time when I've needed it. It's a rare balance of being supportive, attentive and motivating all at once.",
        date: "2026-07-21"
    },
    {
        id: 46,
        clientName: "Jaclyn",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "Sarah is patient and encouraging. She makes her sessions for a gym noob like me less torturous and more fun by engaging in cheerful banter in between reps. Brilliant.",
        date: "2026-07-22"
    },
    {
        id: 47,
        clientName: "Danielle",
        coachId: 4,  // Reference to coach ID
        rating: 5,
        text: "I have been with Virgin Active for years now. The gym floor at PLQ is clean and easy to navigate. The staff is helpful. I don't like workout alone so l enjoy their group classes especially Grid. I also started personal training a year ago, which really helps me breakthrough with strength than I could ever by myself - shoutout to my trainer Sarah. Overall highly recommended if you're like me who prefer to workout with a group/company.",
        date: "2026-07-22"
    },
    {
        id: 48,
        clientName: "Alvin Chiam",
        coachId: 5,  // Reference to coach ID
        rating: 5,
        text: "I’ve been training with Xavier Quek for almost two years, and looking back, it was one of the best decisions I’ve made for my fitness journey. When I first started, my goal was actually quite simple. I just wanted to build a better upper body so that I would look better in clothes, especially having broader shoulders and a more defined chest. After about a year of consistent training, I could really see the changes. My shoulders have become noticeably broader, my overall body shape has improved, and although my chest is still a work in progress (which I know takes time), the difference compared to before I started is huge. More importantly, I’ve become much more confident in myself. What really sets Xavier apart is that he doesn’t just follow a standard training plan. As my body changed, he constantly adjusted my workouts and advised me on what areas I should focus on to achieve the best overall physique. Even though my original goal was just to improve my upper body, he tailored a balanced programme that suited me much better. Xavier is incredibly patient and knowledgeable. He always takes the time to explain every exercise and correction until I truly understand it. There were many times I struggled to feel the correct muscle engagement, but he never got frustrated. Instead, he patiently guided me until I got it right. He’s also very motivating and encouraging. He knows when to push me to work harder, but he also knows when my body has reached its limit and never forces me to overdo it. I really appreciate that balance because it keeps training challenging while still feeling safe. What impressed me even more is that his coaching doesn’t stop when the PT session ends. Whenever he sees me training on my own, he’ll still come over to correct my form, give me tips, or offer advice. He also shares nutrition guidance and explains what foods would better support my goals. It genuinely feels like he cares about my progress rather than just the PT sessions. Beyond being an excellent trainer, Xavier is friendly, approachable, and easy to talk to. Every session is enjoyable because we can have a good chat while still staying focused on training. He creates an environment where I always feel comfortable asking questions, no matter how basic they may seem. One of the most memorable moments during my journey was being awarded Best Trainee of the Month. I honestly never imagined I could achieve something like that before I started training. It gave me a real sense of accomplishment, and I truly believe I wouldn’t have reached that milestone without Xavier’s guidance, encouragement, and belief in me. If you’re looking for a trainer who is knowledgeable, patient, motivating, genuinely cares about your progress, and knows how to tailor a programme specifically for you, I highly recommend Xavier Quek. Whether your goal is to build muscle, improve your physique, or simply become a healthier and more confident version of yourself, you’ll be in great hands.",
        date: "2026-07-20"
    },
    {
        id: 49,
        clientName: "Frederick",
        coachId: 5,  // Reference to coach ID
        rating: 5,
        text: "Xavier provides me with a highly personalised training experience. He takes time to understand my goals, adapts each session to my abilities, and helps me progress at a comfortable pace. He's patient, knowledgeable, and explains every exercise clearly to ensure proper technique for best results. He also offers practical nutrition advice and reviews my Evolt results in detail, giving me confidence that I'm making steady progress towards my health goals.",
        date: "2026-07-20"
    },
    {
        id: 50,
        clientName: "Sharif",
        coachId: 5,  // Reference to coach ID
        rating: 5,
        text: "I’ve had a very positive experience training with Xavier. He is knowledgeable, patient, and attentive, and he always takes the time to explain each exercise clearly and correct my form. The training sessions are well structured, challenging, and tailored to my fitness level and goals. He is also encouraging and motivating without making the sessions feel overwhelming. Since training with him, I have become more confident in the gym and have noticed improvements in my strength and overall fitness. I would highly recommend him to anyone looking for a dedicated, supportive, and professional personal trainer.",
        date: "2026-07-20"
    },
    {
        id: 51,
        clientName: "SP",
        coachId: 5,  // Reference to coach ID
        rating: 5,
        text: "I trained with Xavier for the last few months and it has been a really positive experience. He is very observant and consistent, and always pays close attention to form each session. He gives clear and practical feedback on how to move properly and which muscle groups to activate, which made a real difference over time. I also really appreciated how respectful he always was, and how willing he was to adjust himself / training to suit my preferences. He creates a comfortable and supportive environment, and it was motivating to have progress tracked and acknowledged. I have seen steady and meaningful improvements and would definitely recommend Xavier to anyone looking for a professional and considerate personal trainer.",
        date: "2026-07-21"
    },
    {
        id: 52,
        clientName: "Adam",
        coachId: 5,  // Reference to coach ID
        rating: 5,
        text: "I’ve been training consistently with personal trainers for over seven years and have worked with Xavier for the past two-plus years. What sets him apart is his deep understanding of the human body structure and how to tailor training to individual needs and goals. Xavier is highly adaptable. Depending on the sports and activities I’m doing in a given week, he’s able to quickly adjust my programme to focus on the right muscle groups and recovery needs. He also has multiple exercise alternatives for the same muscle group, allowing him to find the most effective and comfortable option on any given day. What I value most is his long-term approach. He plans several months ahead, progressively adjusting weights, reps, and intensity based on my goals while always prioritising injury prevention. He’s also very knowledgeable when it comes to managing muscle aches and minor injuries, ensuring training remains productive without unnecessary risk. Beyond the technical aspects, Xavier is positive, encouraging, and reliable, which makes sessions enjoyable and something I genuinely look forward to. At the same time, he sets high expectations and brings a level of intensity that motivates you to show up prepared, well-rested, and ready to put in the work. I’d highly recommend Xavier to anyone looking for a knowledgeable, adaptable, and professional trainer who is invested in helping clients achieve long-term results safely and effectively.",
        date: "2026-07-21"
    },
    {
        id: 53,
        clientName: "Kelly",
        coachId: 5,  // Reference to coach ID
        rating: 5,
        text: "I have trained with Xavier for a little over a year and continue to have a great experience each session. He is professional, highly knowledgeable about fitness, and genuinely invested in helping me achieve my fitness goals. Every session is well planned, and there is progression that is clearly visible. For example, this is seen from the increasing weights or complexity in exercises. Xavier provides clear guidance and is willing to try different methods to ensure I understand what I am supposed to do for the particular exercise, while keeping the workouts motivating and enjoyable. He is also knowledgable as he informs me about the reason we are performing each exercise and the muscle group it targets or the goal. Since training with Xavier, I've increased my muscle mass, reduced my body fat percentage, and improved my cardio fitness quicker. The last point makes everyday activities much easier. Beyond the results, he has given me the confidence and skills to work out safely on my own instead of relying solely on our sessions. There's always something new to learn from him. I highly recommend Xavier to anyone looking for a dedicated, encouraging, and knowledgeable personal trainer.",
        date: "2026-07-21"
    },
    {
        id: 54,
        clientName: "Megan E. Lim",
        coachId: 5,  // Reference to coach ID
        rating: 5,
        text: "I have been training with Xavier for roughly eight months, and it has been a truly transformative experience. When I started, I wanted to get into shape, and Xavier helped me achieve that in ways I did not expect. What really set Xavier apart was how supportive he was throughout the entire journey. He made me feel completely at ease by encouraging me to talk openly about my goals, my concerns, and how I was feeling each session. That openness allowed me to trust him fully, which made every session more productive and enjoyable. He also gave me the courage to be more proactive about my fitness. I started going to the gym more often, whether for his sessions or on my own, and that confidence has made all the difference. Throughout our sessions, he taught me a wide range of practical and effective ways to stay fit beyond just the exercises we did together. He explained the reasoning behind each movement and routine, so I now have a much better understanding of how to train safely and effectively on my own. Safety has always been a top priority for Xavier. He consistently corrected my form, ensured I was using the equipment properly, and reminded me to listen to my body. Because of his guidance, I have built confidence in the gym and avoided injuries. I would highly recommend Xavier to anyone looking for a knowledgeable, patient, and genuinely supportive personal trainer. The progress I have made over the past eight months speaks for itself, and I am grateful for everything he has taught me.",
        date: "2026-07-21"
    },
    {
        id: 55,
        clientName: "Hanif Hasan",
        coachId: 5,  // Reference to coach ID
        rating: 5,
        text: "Xavier has been a great personal trainer — truly one of the best I could have asked for. Beyond his expertise, he is incredibly friendly, patient, and understanding. He is highly professional, deeply knowledgeable in his field, and has a natural gift for motivation. Even on days when I doubted myself, he encouraged me to push through that final rep when I genuinely didn’t think I could. His coaching style strikes the perfect balance between genuine encouragement and clear, effective guidance. He knows exactly how to challenge me in a way that feels supportive rather than overwhelming, which is exactly what I needed. I feel incredibly fortunate to have trained with him, and he was an excellent instructor throughout our sessions. I would wholeheartedly recommend Xavier to anyone — young or old — who is ready to take that first step toward their fitness goals. You couldn’t ask for a better trainer.",
        date: "2026-07-21"
    },
    {
        id: 56,
        clientName: "Pat",
        coachId: 5,  // Reference to coach ID
        rating: 5,
        text: "I joined Virgin Active a couple of years ago and I was so blessed to be coached by Xavier my very special Personal Trainer and Sensei 🙏🙏🙏🙏🙏 We used to do back to back sessions and I loved loved loved every minute of it. All the muscles received the best training possible in the safest way possible. The exercises were always new exciting and challenging (this the way I like it). Xavier is very experienced and was always able to design programs to improve my form, endurance and strength. Xavier is not only a Senior  PT he is truly a Master and my Sensei Thank you Sensei for all your support and dedication",
        date: "2026-07-22"
    },
    {
        id: 57,
        clientName: "Andrew Patrick",
        coachId: 5,  // Reference to coach ID
        rating: 5,
        text: "I switched to Virgin Active a year ago and engaged Personal Trainer Xavier to help me fix my muscle imbalances and other issues. Thanks to his guidance, I’ve seen major improvements in stability, symmetry, and functional strength. Movements that previously felt uncomfortable or uneven are now smooth and controlled. My overall training performance has improved because my body is finally working in balance. Xavier has shown strong technical knowledge of biomechanics and corrective exercises. He is also reliable, punctual, and fully engaged during every session. Look no further if you want to achieve your fitness goals - Move to Virgin Active and look for Xavier!",
        date: "2026-07-22"
    }
    // Add more testimonials as they come in
];
