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
    id: "mechanical-workshop",
    title: "General Mechanical Workshop",
    description: "Complete mechanical services including diagnostics, repairs, and maintenance for all vehicle types.",
    icon: Wrench
  },
  {
    id: "generator-services",
    title: "Generator Services",
    description: "Installation, maintenance, and repair of generators for both residential and commercial applications.",
    icon: Plug
  },
  {
    id: "spare-parts",
    title: "Genuine Spare Parts",
    description: "Supply of high-quality, genuine spare parts for all vehicle makes and models.",
    icon: Cog
  },
  {
    id: "ambulance-services",
    title: "Ambulance Services",
    description: "Professional and reliable ambulance services for emergency medical transportation.",
    icon: Ambulance
  },
  {
    id: "first-aid-training",
    title: "First Aid Trainings",
    description: "Comprehensive first aid training programs for individuals and organizations.",
    icon: Heart
  },
  {
    id: "home-care-nursing",
    title: "Home Based Care Nursing",
    description: "Professional nursing care services provided in the comfort of your home.",
    icon: UserRound
  },
  {
    id: "bedside-nursing",
    title: "Bed Side Nursing",
    description: "Specialized nursing care for patients requiring constant bedside attention.",
    icon: Bed
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
    id: "pop-top-roof",
    title: "Pop Top Roof Cut",
    description: "Professional roof modification services for vehicles, especially for safari and tourism.",
    icon: Scissors
  },
  {
    id: "tourist-vehicle-seats",
    title: "Tourist Vehicle Seats",
    description: "Custom seating solutions for tourism and safari vehicles.",
    icon: Armchair
  },
  {
    id: "spraying",
    title: "Spraying",
    description: "Professional vehicle painting and spraying services with quality finishes.",
    icon: Paintbrush
  },
  {
    id: "guards-racks",
    title: "Guards & Racks",
    description: "Custom fabrication of vehicle guards and roof racks for enhanced functionality.",
    icon: Shield
  },
  {
    id: "landcruiser-extension",
    title: "Landcruiser Extension",
    description: "Specialized Landcruiser modification services for extended functionality.",
    icon: Car
  },
  {
    id: "auto-electric",
    title: "Auto-Electric",
    description: "Electrical system diagnosis, repair, and maintenance for all vehicle types.",
    icon: Battery
  },
  {
    id: "vocational-training",
    title: "Vocational Trainings",
    description: "Practical vocational training programs in automotive and mechanical fields.",
    icon: GraduationCap
  },
  {
    id: "towing-service",
    title: "Towing/Breakdown Service",
    description: "24/7 towing and breakdown assistance for stranded vehicles.",
    icon: Truck
  },
  {
    id: "driving-license",
    title: "Driving License Processing",
    description: "Assistance with driving license processing, extension, and renewal.",
    icon: BadgeAlert
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
