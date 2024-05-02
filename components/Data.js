import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const powerCover = { uri: 'https://images.unsplash.com/photo-1669965691237-e8fea18b09e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWJpa2UlMjBiYXR0ZXJ5fGVufDB8MXwwfHx8Mg%3D%3D' };
const styleCover = { uri: 'https://images.unsplash.com/photo-1636013607379-bff5b3cbeb01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEVsZWN0cmljJTIwQmlrZXxlbnwwfDF8MHx8fDI%3D' };
const batteryCover = { uri: 'https://images.unsplash.com/photo-1631067454185-94158b4aefb5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };
const capabilitiesCover = { uri: 'https://images.unsplash.com/photo-1642986951087-9e1c0ade1b1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fEVsZWN0cmljJTIwQmlrZXxlbnwwfDF8MHx8fDI%3D' };

const data = [
    {
        id: 1,
        name: 'E-Bike Styles',
        icon: <MaterialCommunityIcons name="bike-fast" size={36} color="#ffffff" />,
        title: "Different Types of E-Bike Styles",
        description: "From foldable to moped style, e-bikes come in all shapes and sizes.",
        uri: styleCover,
        type: "styles",
    },
    {
        id: 2,
        name: 'Battery and Power',
        icon: <Entypo name="battery" size={36} color="#ffffff" />,
        title: "Batteries and how they affect power",
        description: "The battery is the most important component of any e-bike.",
        uri: batteryCover,
        type: "battery",
    },
    {
        id: 3,
        name: 'E-Bike Capabilities',
        icon: <MaterialCommunityIcons name="road-variant" size={36} color="#ffffff" />,
        title: "Where Can You Take Your E-Bike?",
        description: "From flat asphalt to the steepest of hills, there is an e-bike for every occasion.",
        uri: capabilitiesCover,
        type: "capabilities",
    },
    {
        id: 4,
        name: 'Power Options',
        icon: <Ionicons name="speedometer" size={36} color="#ffffff" />,
        title: "Types of Power Options for E-Bikes",
        description: "250W, 750W, 1000W, what do all of these mean?",
        uri: powerCover,
        type: "power",
    },
];

const mtb = { uri: 'https://images.unsplash.com/photo-1668106738119-f01ae9efbcfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RyaWMlMjBtb3VudGFpbiUyMGJpa2V8ZW58MHwwfDB8fHwy' };
const city = { uri: 'https://images.unsplash.com/photo-1620802051782-725fa33db067?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };
const fold = { uri: 'https://images.unsplash.com/photo-1629334697871-16eb3935db52?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };
const moped = { uri: 'https://images.unsplash.com/photo-1618897224084-8b5e94258a74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };
const cargo = { uri: 'https://images.unsplash.com/photo-1607980909568-cde775c48cdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cmljJTIwYmlrZSUyMGNhcmdvfGVufDB8MHwwfHx8Mg%3D%3D' };
const fatTire = { uri: 'https://images.unsplash.com/photo-1635560019796-e256b3737dc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };

const styleData = [
    {
        title: "What kind of difference does it make?",
        description: "Different styles of e-bikes offer different pros and cons. Knowing what bike type suits you the best may be the difference between having fun riding and having a bad time on the bike",
        image: null,
    },
    {
        title: "Mountain E-Bike",
        description: "Built for conquering tough terrain, E-MTBs boast sturdy suspension systems, wide knobby tires for gripping loose surfaces, and powerful motors to tackle steep climbs. They often have lower handlebars for a more aggressive riding posture.",
        usefulFor: "Off-road adventures, tackling trails, mountain biking enthusiasts, riders who want a challenge with an extra boost.",
        image: mtb,
    },
    {
        title: "City E-Bike",
        description: "Designed for comfort and practicality in urban environments, city e-bikes prioritize a relaxed, upright riding position. They commonly feature fenders, a chain guard, a rack for bags, and puncture-resistant tires.",
        usefulFor: "Commuting, running errands, casual riding on paved paths, riders who value comfort and practicality.",
        image: city,
    },
    {
        title: "Folding E-Bikes",
        description: "These champions of convenience fold compactly for easy storage and portability. Perfect for urban dwellers with limited space or those who combine cycling with public transportation. Folding e-bikes typically have smaller wheels for a more compact size when folded.",
        usefulFor: "Short commutes, apartment living, combining cycling with public transport, riders who prioritize easy storage and portability.",
        image: fold,
    },
    {
        title: "Moped-Style E-Bikes",
        description: "Offering a motorcycle-like look with a step-through frame, pedals, and a comfortable motorbike-style seat, moped e-bikes often have powerful motors and larger batteries for extended range. They prioritize cruising comfort and a more upright riding position.",
        usefulFor: "Cruising around town, leisure riding, riders who prefer a moped aesthetic and comfortable seating.",
        image: moped,
    },
    {
        title: "Fat Tire E-Bike",
        description: "These feature super-wide tires that provide exceptional stability and traction on challenging terrains like sand, snow, or mud. Fat tires also offer a smoother ride due to their increased natural suspension.",
        usefulFor: " Riding on loose surfaces (sand, snow, mud), beach cruising, riders who prioritize stability and a comfortable ride on uneven terrain.",
        image: fatTire,
    },
    {
        title: "Cargo E-Bike",
        description: "Built to haul heavy loads, cargo e-bikes boast longtail frames or large front/rear baskets for carrying groceries, kids, or other cargo. They are a great alternative to car trips for errands or family outings, offering significant cargo capacity.",
        usefulFor: "Replacing car trips for errands and hauling cargo, active families, businesses making deliveries.",
        image: cargo,
    },
];

const batteryData = [];

const capabilitiesData = [];

const powerData = [];


export { data, powerData, capabilitiesData, batteryData, styleData  };