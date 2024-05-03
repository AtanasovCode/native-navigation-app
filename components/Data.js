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

//mtb link = { uri: 'https://images.unsplash.com/photo-1668106249278-cba50127e361?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RyaWMlMjBtb3VudGFpbiUyMGJpa2V8ZW58MHwxfDB8fHwy' };
//city link = { uri: 'https://images.unsplash.com/photo-1704902629374-8e8c366e474f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGVsZWN0cmljJTIwY2l0eSUyMGJpa2V8ZW58MHwxfDB8fHwy' };
// fold link = { uri: 'https://images.unsplash.com/photo-1590273018519-ba2db69e124c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGVsZWN0cmljJTIwYmlrZXxlbnwwfDF8MHx8fDI%3D' };
// moped link = { uri: 'https://images.unsplash.com/photo-1627631498315-3116f6484188?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };
// cargo link = { uri: 'https://images.unsplash.com/photo-1593929976216-f746e488aa45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };
// fatTire link = { uri: 'https://images.unsplash.com/photo-1625304844069-3e9708f55755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGVsZWN0cmljJTIwYmlrZXxlbnwwfDF8MHx8fDI%3D' };



const mtb = require('../assets/images/styles/mtb.jpg');
const city = require('../assets/images/styles/city.jpg');
const fold = require('../assets/images/styles/fold.jpg');
const moped = require('../assets/images/styles/moped.jpg');
const cargo = require('../assets/images/styles/cargo.jpg');
const fatTire = require('../assets/images/styles/fatTire.jpg');


const styleData = [
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

const batteryData = [
    {
        title: "Battery Types",
        description: "Most e-bikes use Lithium-ion (Li-ion) batteries. These are lightweight, rechargeable, and offer good range. However, some older models might use Nickel-Metal Hydride (NiMH) batteries, which are heavier and have a shorter lifespan."
    },
    {
        title: "Voltage (V)",
        description: "Voltage (V) indicates the battery's electrical power. Common voltages for e-bikes are 36V, 48V, and 72V. Higher voltage generally translates to more power and higher top speeds, but also affects weight and range."
    },
    {
        title: "Capacity (Ah)",
        description: "Capacity (Ah) refers to the battery's energy storage. Higher capacity (Ah) means longer range on a single charge. This is especially important if you plan on longer rides."
    },
    {
        title: "Watt-hours (Wh)",
        description: "Watt-hours (Wh) is a combination of voltage and capacity (V x Ah). It represents the total energy stored in the battery. Higher Wh translates to longer range."
    },
    {
        title: "Range",
        description: "Range is the estimated distance you can travel on a single charge. It depends on various factors like battery capacity, terrain, and your riding style. Most e-bikes offer a range between 20-100 miles."
    },
    {
        title: "Charging Time",
        description: "Charging time varies depending on the battery size and charger. Typically, a full charge can take anywhere from 2 to 8 hours."
    },
    {
        title: "Battery Life",
        description: "E-bike batteries have a limited lifespan and degrade over time. This depends on usage and charging habits. With proper care, a good quality e-bike battery can last for 3-5 years."
    },
    {
        title: "Removable Battery",
        description: "Many e-bikes come with removable batteries. This allows for easy charging at home or on the go. You can also invest in a spare battery for extended rides."
    }
]

const cityStreet = require('../assets/images/capabilities/city.jpg');
const offRoad = require('../assets/images/capabilities/offRoad.jpg');
const mountainTerrain = require('../assets/images/capabilities/mountain.jpg');
const beachRiding = require('../assets/images/capabilities/beach.jpg');


const capabilitiesData = [
    {
        title: "Commuting & City Streets",
        description: "Commuting and city streets are ideal for most e-bikes. They typically involve paved surfaces with moderate inclines. Comfort and maneuverability are key features to consider. E-bikes with moderate power levels (250W - 500W) are sufficient for navigating city traffic.",
        image: cityStreet
    },
    {
        title: "Off-road & Trails",
        description: "Off-road trails and paths present a challenge with unpaved surfaces, bumps, and potential inclines. E-bikes with wider, knobby tires, suspension systems, and higher power levels (500W+) are better suited for handling rough terrain. Consider features like disc brakes for improved stopping power on loose surfaces.",
        image: offRoad
    },
    {
        title: "Hilly Terrain & Mountains",
        description: "Hilly terrain and mountain paths involve frequent steep inclines and descents. E-bikes with powerful motors (750W+), high capacity batteries, and robust suspension systems are recommended for conquering these challenging climbs. Ensure your e-bike has good braking systems for safe descents.",
        image: mountainTerrain
    },
    {
        title: "Beach Riding",
        description: "Beach riding presents a unique challenge with sand and potentially saltwater exposure. E-bikes with wide, fat tires specifically designed for sand are ideal. Consider features like corrosion-resistant components if you plan on frequent beach rides.",
        image: beachRiding
    }
]

const powerData = [
    {
        title: "Hub Motor",
        description: "Hub motors are located within the front or rear wheel of the e-bike. They are generally more affordable and simpler to install than mid-drive motors. Hub motors offer consistent power delivery and are well-suited for flat terrain and commuting. However, they can affect the weight distribution of the bike and may feel less natural when pedaling on hills.",
        image: "hubMotor"
    },
    {
        title: "Mid-Drive Motor",
        description: "Mid-drive motors are positioned near the pedals, integrating with the drivetrain of the bike. This provides a more natural riding experience with smoother power delivery and better climbing ability. Mid-drive motors are generally more efficient than hub motors and offer better weight distribution for handling. However, they can be more expensive and require a compatible frame design.",
        image: "midDriveMotor"
    },
    {
        title: "Motor Power Options",
        description: "E-bike motors come in various power levels, typically measured in watts (W). The ideal power for you depends on your riding style and terrain. Here's a breakdown of the 4 most common options:",
        image: "motorPower"
    },
    {
        title: "250W",
        description: "250W motors are the most common type for low-speed e-bikes (limited to 20-25 mph depending on regulations). They are lightweight, quiet, and efficient for commuting and city riding. However, they may struggle with steeper inclines."
    },
    {
        title: "500W",
        description: "500W motors offer a good balance of power and efficiency. They provide significant assistance for climbing hills and navigating moderate off-road trails, while still being suitable for commuting."
    },
    {
        title: "750W",
        description: "750W motors are ideal for riders who tackle steeper hills and require more power. They can offer higher speeds (depending on regulations) and greater assistance on off-road adventures."
    },
    {
        title: "1000W+ High-Power Motors",
        description: "For riders seeking maximum power and speed (where permitted by law), 1000W+ motors provide exceptional performance. They can handle very challenging terrain and offer higher top speeds. However, they drain batteries faster, may be heavier, and could have higher maintenance requirements. Regulations around high-power motors can vary by region, so be sure to check local laws."
    }
]


export { data, powerData, capabilitiesData, batteryData, styleData };