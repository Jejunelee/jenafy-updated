export const SITE = {
  name: "Jenafy",
  email: "hello@jenafy.com",
  url: "https://jenafy.com",
  app: "https://app.jenafy.com/",
  tagline: "Digital platforms that work",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "What we do" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "How we think" },
] as const;

export const services = [
  {
    number: "01",
    title: "Make the product obvious",
    copy: "If a customer, staff member, or school admin needs a walkthrough, the product is not done. We design the path first.",
  },
  {
    number: "02",
    title: "Build what the business actually runs on",
    copy: "Not a brochure that dies after launch. A platform that matches how you already operate — bookings, enrollments, content, clients, the unglamorous work.",
  },
  {
    number: "03",
    title: "Ship something people can use on Monday",
    copy: "Fast, readable, mobile, and stable. We write the code, connect the data, and leave you with a system — not a folder of files.",
  },
  {
    number: "04",
    title: "Stay after it goes live",
    copy: "Existing clients keep a home here. Updates, hosting, the next feature. The relationship is the product as much as the build.",
  },
] as const;

export const projects = [
  {
    title: "Bea Trinidad",
    type: "beatrinidad.com",
    href: "https://beatrinidad.com",
    copy: "A live digital home for Type Harder Studio: clear structure, motion that serves the story, built so it still works when nobody is babysitting it.",
    image: "/Work/bea-trinidad.jpg",
  },
  {
    title: "CCA Connect",
    type: "ccaconnect.co",
    href: "https://ccaconnect.co",
    copy: "A hospitality platform that connects businesses with food, beverage, and service experts — training, events, and the people who actually run the floor.",
    image: "/Work/cca-connect.jpg",
  },
  {
    title: "Cravings Group",
    type: "cravingsgroup.com",
    href: "https://cravingsgroup.com",
    copy: "Catering, delivery, and venues for a brand that's been feeding gatherings since 1988. The path from craving to booking had to be obvious.",
    image: "/Work/cravings.jpg",
  },
  {
    title: "JSNOC",
    type: "jsnoc.com",
    href: "https://jsnoc.com",
    copy: "Infrastructure operations across South Korea: deployments, datacenter hands, and project delivery that international teams can actually follow.",
    image: "/Work/jsnoc.jpg",
  },
  {
    title: "Reggie Aspiras",
    type: "iamreggieaspiras.com",
    href: "https://iamreggieaspiras.com",
    copy: "Kitchen, recipes, classroom, and products for a chef who's documented Filipino food for four decades — a personal brand that isn't a maze.",
    image: "/Work/reggie-aspiras.jpg",
  },
  {
    title: "PineSheet",
    type: "pine-sheet.com",
    href: "https://pine-sheet.com",
    copy: "A sales dashboard for people who were drowning in Excel. Inventory, expenses, reports — one place sellers can open without a template fight.",
    image: "/Work/pinesheet.jpg",
  },
  {
    title: "ASHA",
    type: "asha.edu.ph",
    href: "https://asha.edu.ph",
    copy: "Asian School of Hospitality Arts: admissions, programs, and a public face that matches training that happens in real hotels and kitchens.",
    image: "/Work/asha.jpg",
  },
  {
    title: "Port",
    type: "Motorbike riders & shops",
    href: null,
    copy: "An app for motorbike riders and shops — the unglamorous ops of a two-wheel network, designed so the next step is obvious on the first open.",
    image: "/Work/port.jpg",
  },
] as const;

export const principles = [
  {
    number: "01",
    title: "It has to work on Monday.",
    copy: "If it only looks right in a deck, it is not finished.",
  },
  {
    number: "02",
    title: "Make the next step obvious.",
    copy: "Every screen should answer: what do I do here, and what happens next?",
  },
  {
    number: "03",
    title: "Sit on the business side of the table.",
    copy: "We design for enrollment, sales, trust, and time saved — not for awards.",
  },
  {
    number: "04",
    title: "Build for the people who stay.",
    copy: "Staff, clients, students, you. The platform has to make sense after we leave the call.",
  },
] as const;

export const tech = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "Supabase",
  "Vercel",
  "Firebase",
  "JavaScript",
  "Tailwind CSS",
  "OpenAI API",
  "Gemini API",
  "Google Cloud",
  "Google Auth",
  "Docker",
] as const;

export const process = [
  { number: "01", name: "LISTEN" },
  { number: "02", name: "MAP" },
  { number: "03", name: "PROVE" },
  { number: "04", name: "DESIGN" },
  { number: "05", name: "BUILD" },
  { number: "06", name: "HAND OFF" },
] as const;

export const marqueeItems = [
  "PLATFORMS THAT WORK",
  "MAKES SENSE",
  "SHIPS",
  "STAYS",
] as const;
