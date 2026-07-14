// Coach profiles data
const coaches = [
    {
        id: 1,
        name: "John Smith",
        specialty: "Personal Trainer",
        bio: "With over 8 years of experience in fitness training, John specializes in helping clients achieve their body composition goals through a combination of strength training and nutrition coaching.",
        goals: ["weight-loss", "strength"],
        image: "https://via.placeholder.com/280x280?text=Coach+John",
        experience: "8+ years",
        certifications: ["NASM CPT", "ISSN-SNS"],
        email: "john@virginactive.com",
        phone: "+65 1234 5678"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        specialty: "Cardio & Endurance Coach",
        bio: "Sarah is passionate about building cardiovascular fitness and has trained numerous clients for marathons and endurance events. Her dynamic approach makes training both effective and enjoyable.",
        goals: ["cardio", "weight-loss"],
        image: "https://via.placeholder.com/280x280?text=Coach+Sarah",
        experience: "6+ years",
        certifications: ["ACE CPT", "Running Coach Certification"],
        email: "sarah@virginactive.com",
        phone: "+65 1234 5679"
    },
    {
        id: 3,
        name: "Marcus Lee",
        specialty: "Strength & Power Coach",
        bio: "Marcus focuses on functional strength and power development. He's experienced with athletes and anyone looking to build serious muscle and strength.",
        goals: ["strength", "sports"],
        image: "https://via.placeholder.com/280x280?text=Coach+Marcus",
        experience: "10+ years",
        certifications: ["CSCS", "NASM CPT", "Powerlifting Specialist"],
        email: "marcus@virginactive.com",
        phone: "+65 1234 5680"
    },
    {
        id: 4,
        name: "Emily Chen",
        specialty: "Flexibility & Mobility Specialist",
        bio: "Emily combines yoga, pilates, and mobility training to help clients improve flexibility, reduce pain, and enhance overall movement quality.",
        goals: ["flexibility"],
        image: "https://via.placeholder.com/280x280?text=Coach+Emily",
        experience: "7+ years",
        certifications: ["Yoga Instructor", "Pilates Instructor", "Mobility Coach"],
        email: "emily@virginactive.com",
        phone: "+65 1234 5681"
    },
    {
        id: 5,
        name: "David Kumar",
        specialty: "Nutrition & Lifestyle Coach",
        bio: "David works with clients to develop sustainable nutrition plans and healthy lifestyle habits. He believes in a holistic approach to health and wellness.",
        goals: ["nutrition", "weight-loss"],
        image: "https://via.placeholder.com/280x280?text=Coach+David",
        experience: "9+ years",
        certifications: ["RD", "Nutrition Coach", "Lifestyle Coach"],
        email: "david@virginactive.com",
        phone: "+65 1234 5682"
    },
    {
        id: 6,
        name: "Lisa Wong",
        specialty: "Sports Performance Coach",
        bio: "Lisa specializes in training athletes to enhance their sport-specific performance. She uses evidence-based training methods and biomechanical analysis.",
        goals: ["sports", "strength"],
        image: "https://via.placeholder.com/280x280?text=Coach+Lisa",
        experience: "8+ years",
        certifications: ["CSCS", "Sports Performance Specialist", "ACE CPT"],
        email: "lisa@virginactive.com",
        phone: "+65 1234 5683"
    }
];

// Goal labels for display
const goalLabels = {
    "weight-loss": "Weight Loss",
    "strength": "Strength Training",
    "cardio": "Cardio & Endurance",
    "flexibility": "Flexibility & Mobility",
    "nutrition": "Nutrition",
    "sports": "Sports Performance"
};
