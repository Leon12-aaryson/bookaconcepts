import { 
  Snowflake, 
  Wrench, 
  Plug, 
  Cog, 
  Ambulance, 
  Heart, 
  UserRound, 
  Bed, 
  Zap, 
  FlameKindling, 
  Scissors, 
  Armchair, 
  Paintbrush, 
  Shield, 
  Car, 
  Battery, 
  GraduationCap, 
  Truck, 
  BadgeAlert, 
  HardHat, 
  PackageOpen 
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export const services: Service[] = [
  {
    id: "air-conditioning",
    title: "Air Conditioning & Refrigeration",
    description: "Installation, repair, and maintenance of AC and refrigeration systems for both automotive and commercial use.",
    icon: Snowflake
  },
  {
    id: "vehicle-customization",
    title: "Tour & Safari Vehicle Customization",
    description: "Comprehensive vehicle modification services including pop top roofs, custom seats, spraying, guards, racks, and Landcruiser extensions—perfectly tailored for safari and tourism needs.",
    icon: Car
  },
  {
    id: "vehicle-maintenance-solutions",
    title: "Vehicle Maintenance & Spare Parts",
    description: "Integrated vehicle care solutions offering mechanical and electrical repairs, towing support, and genuine spare parts for all vehicle types.",
    icon: Cog
  },
  {
    id: "generator-services",
    title: "Generator Services",
    description: "Installation, maintenance, and repair of generators for both residential and commercial applications.",
    icon: Plug
  },
  {
    id: "emergency-care-training",
    title: "Emergency Care & Training",
    description: "Reliable ambulance services and certified first aid training for individuals and organizations, ensuring preparedness in medical emergencies.",
    icon: Ambulance
  },
  {
    id: "home-bedside-nursing",
    title: "Home & Bedside Nursing",
    description: "Comprehensive nursing care provided at home or bedside for patients needing personalized attention and medical support.",
    icon: UserRound
  },
  {
    id: "electrical-services",
    title: "General Electrical Services",
    description: "Installation, repair, and maintenance of electrical systems for homes and businesses.",
    icon: Zap
  },
  {
    id: "gas-supply",
    title: "Gas Supply (LPG)",
    description: "Reliable supply of LPG gas for residential and commercial use.",
    icon: FlameKindling
  },
  {
    id: "vocational-training",
    title: "Vocational Trainings",
    description: "Practical vocational training programs in automotive and mechanical fields.",
    icon: GraduationCap
  },
  {
    id: "ppe",
    title: "Personal Protective Equipments",
    description: "Supply of high-quality personal protective equipment for various industries.",
    icon: HardHat
  },
  {
    id: "logistics",
    title: "Logistics",
    description: "Comprehensive logistics solutions for businesses and individuals.",
    icon: PackageOpen
  },
  {
    id: "production",
    title: "Production & Supply",
    description: "Manufacturing and supply of various products tailored to client specifications.",
    icon: Truck
  }
];

export const galleryItems = [
  {
    id: "mechanical",
    title: "Mechanical Services",
    description: "Professional engine repairs and maintenance"
  },
  {
    id: "ac-installation",
    title: "AC Installation",
    description: "Commercial air conditioning systems"
  },
  {
    id: "vehicle-customization",
    title: "Vehicle Customization",
    description: "Safari vehicle modifications"
  },
  {
    id: "auto-electric",
    title: "Auto-Electric",
    description: "Electrical system diagnostics and repairs"
  },
  {
    id: "spraying",
    title: "Vehicle Spraying",
    description: "Professional auto body painting"
  },
  {
    id: "training",
    title: "Vocational Training",
    description: "Hands-on automotive skills training"
  }
];

export const testimonials = [
  {
    id: "1",
    name: "David Mukasa",
    position: "Business Owner, Kampala",
    testimonial: "The air conditioning repair service was exceptional. The technicians were professional, prompt, and solved our cooling issues efficiently. Highly recommended!"
  },
  {
    id: "2",
    name: "Sarah Namukwaya",
    position: "Tour Operator, Entebbe",
    testimonial: "I had my safari vehicle customized with a pop-top roof and tourist seats. The workmanship was outstanding and the service was delivered on time. Very satisfied!"
  },
  {
    id: "3",
    name: "Robert Kizza",
    position: "Farm Manager, Jinja",
    testimonial: "Their mechanical workshop is top-notch! My Landcruiser had complex issues that other workshops couldn't fix, but they diagnosed and repaired everything perfectly."
  }
];
