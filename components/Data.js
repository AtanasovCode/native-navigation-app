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


const stylesDescription = [];

const batteryDescription = [];

const capabilitiesDescription = [];

const powerDescription = [];


export { data };