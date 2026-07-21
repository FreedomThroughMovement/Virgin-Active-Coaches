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
    }
    // Add more testimonials as they come in
];
