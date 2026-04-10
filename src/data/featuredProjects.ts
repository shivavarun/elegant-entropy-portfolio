export interface FeaturedProject {
  title: string;
  link?: string;
  role: string;
  description: string;
  highlights: string[];
  previewImage: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Elan Accessories",
    link: "https://elanaccessories.in",
    role: "Lead UI/UX Designer & Full-Stack Developer",
    description: "Designed and developed a premium, high-performance e-commerce platform. Focused on a sleek, visually engaging interface that highlights product details while maintaining lightning-fast page load speeds to reduce cart abandonment.",
    highlights: [
      "Custom UI/UX",
      "Mobile-first responsiveness",
      "Optimized backend architecture"
    ],
    previewImage: "/previews/elan-accessories.png"
  },
  {
    title: "Warrior Sports India",
    link: "https://warriorsportsindia.com",
    role: "Lead Developer & UI/UX Designer",
    description: "Built a dynamic, custom e-commerce solution for a fast-growing sports brand. Required a robust CMS structure and an intuitive product categorization system for a wide variety of sporting goods.",
    highlights: [
      "Clean user flow for conversions",
      "Custom components for brand authority",
      "Highly scalable digital foundation"
    ],
    previewImage: "/previews/warrior-sports.png"
  },
  {
    title: "Pashu Rakshak Sangh",
    link: "https://www.pashurakshaksangh.org/",
    role: "Full-Stack Web Developer & Designer",
    description: "Developed a community-focused digital platform designed to drive engagement, clearly communicate the organization's mission, and build instant trust with visitors.",
    highlights: [
      "Accessible and user-friendly layout",
      "Dedicated trust-building sections",
      "Fast and lightweight codebase"
    ],
    previewImage: "/previews/pashu-rakshak.png"
  },
  {
    title: "Villa Ortiga",
    link: "https://www.villaortiga.com",
    role: "Lead UI/UX Designer & Full-Stack Developer",
    description: "Designed and developed a premium interior design and luxury furniture brand website. Built to reflect the studio's high-end aesthetic with immersive visuals, elegant typography, and a seamless project showcase experience.",
    highlights: [
      "Luxury brand identity & UI",
      "Immersive project gallery",
      "End-to-end design + build showcase"
    ],
    previewImage: "/previews/villa-ortiga.png"
  },
  {
    title: "Sajag Sports",
    link: "https://www.sajagsports.store/",
    role: "Full-Stack Developer & UI/UX Designer",
    description: "Built a fully functional e-commerce and service booking platform for a badminton-focused sports brand. Integrated same-day racquet stringing bookings, product listings, and a clean service catalogue for Pune's sports community.",
    highlights: [
      "Service booking integration",
      "E-commerce with real-time inventory",
      "Mobile-first performance optimization"
    ],
    previewImage: "/previews/sajag-sports.png"
  },
  {
    title: "Paw Pariwar",
    link: "https://www.pawpariwar.org/",
    role: "Full-Stack Web Developer & Designer",
    description: "Developed a heartfelt, impact-driven platform for an animal welfare NGO based in Noida. Focused on clear storytelling, donation flows, and building trust to convert visitors into long-term supporters.",
    highlights: [
      "Donation & volunteer CTA flows",
      "Impact-focused storytelling layout",
      "Lightweight and fully accessible"
    ],
    previewImage: "/previews/paw-pariwar.png"
  }
];
