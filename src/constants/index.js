import {
  UserPlus,
  Clock,
  Clock as ShiftClock,
  CircleCheck,
  MessageCircle,
  BellRing,
  TrendingUp,
  HardDrive,
  LayoutGrid,
  MessageSquareHeart,
  Megaphone,
  createLucideIcon
} from "lucide-react";

export const Youtube = createLucideIcon("youtube", [
  ["path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17", key: "1q2vi4" }],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
]);

export const APP_NAME = "MODAL";
export const APP_DESC = "Library & Coaching Management Software";
export const YOUTUBE_LINK = "https://www.youtube.com/@modal-software";
export const DEMO_VIDEO_LINK = "https://www.youtube.com/watch?v=rK_LcPeyf78";
export const DOWNLOAD_LINK = "https://github.com/modalapp/desktop/releases/download/assets/modal-installer.zip";
export const VC_REDIST_LINK = "https://aka.ms/vs/17/release/vc_redist.x86.exe";
export const CONTACT_PHONE = "+91 95808 15767";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" }
];

export const FEATURES = [
  {
    title: "Student Admission",
    titleHindi: "नए छात्र का एडमिशन करना",
    description: "Add new students quickly with a simple admission process.",
    icon: UserPlus
  },
  {
    title: "Fee Collection",
    titleHindi: "समय पर फीस जमा करना",
    description: "Check and collect fees on time with a clear and reliable record system.",
    icon: CircleCheck
  },
  {
    title: "Track Due Fee Students",
    titleHindi: "बकाया फीस वाले छात्रों को ट्रैक करना",
    description: "Track students with pending fees and send timely reminders for payment.",
    icon: Clock
  },
  {
    title: "WhatsApp Integration",
    titleHindi: "व्हाट्सऐप इंटीग्रेशन",
    description: "Send fee receipts, due fee reminders, and greeting messages directly via WhatsApp.",
    icon: MessageCircle
  },
  {
    title: "Shift & Timing Management",
    titleHindi: "शिफ्ट और टाइमिंग को मैनेज करना",
    description: "Manage multiple shifts with their respective fees and timings.",
    icon: ShiftClock
  },
  {
    title: "Seat Management",
    titleHindi: "सीट चैक और मैनेज करना",
    description: "Manage and track seat availability for each shift with a clear visual overview.",
    icon: LayoutGrid
  },
  {
    title: "Income & Expense Tracking",
    titleHindi: "इनकम व एक्सपैन्स को ट्रैक करना",
    description: "Track your daily income and expenses with clear insights.",
    icon: TrendingUp
  },
  {
    title: "Cloud Backup",
    titleHindi: "गूगल ड्राइव पर डाटा बैकअप करना",
    description: "Automatically back up data securely to Google Drive",
    icon: HardDrive
  },
  {
    title: "Broadcast Messages",
    titleHindi: "मैसेज ब्रॉडकास्ट करना",
    description: "Send messages, media, and special offers to all students at once via WhatsApp.",
    icon: Megaphone
  }
];

export const PRICING_PLANS = [
  {
    name: "Trial Month",
    price: "₹300",
    originalPrice: "₹350",
    discount: "₹50 OFF",
    period: " (One time only)",
    features: [
      "Full Feature Access",
      "Support via Phone/Chat",
      "5-day full refund if not satisfied",
      "One-time purchase only (1st Month)",
      "After trial, yearly plan applies"
    ]
  },
  {
    name: "Yearly",
    price: "₹3,000",
    originalPrice: "₹3,500",
    discount: "₹500 OFF",
    period: "/ year",
    recommended: true,
    features: [
      "Best Value",
      "Free Updates",
      "Priority Support",
      "No Hidden Charges",
      "Everything in Trial Plan"
    ]
  }
];

export const SYSTEM_REQUIREMENTS = [
  "Windows 10 or Windows 11",
  "Internet Connection for WhatsApp & Backup",
  "Minimum 4GB RAM Recommended"
];

export const HERO_TEXT = {
  headingPart1: "All-in-One ",
  headingHighlight: "Library & Coaching",
  headingPart2: " Management Software",
  subheading: "Manage admissions, track fees, send reminders on WhatsApp, and handle daily operations — all from one simple dashboard.",
  btn1: "Modal Download",
  btn2: "VC C++ Download",
  dashboardAlt: "MODAL Dashboard Interface"
};

export const FEATURES_TEXT = {
  subtitle: "Features That Save Your Time",
  title: "Everything you need to run your institute.",
  description: "From student admissions to automated WhatsApp reminders, MODAL handles your daily work so you can focus on growing your institute."
};

export const PRICING_TEXT = {
  subtitle: "Simple Pricing",
  // title: "Start with a trial, then continue yearly.",
  description: "Choose your plan and get started — no hidden charges.",
  mostPopular: "Most Popular",
  systemRequirementsTitle: "System Requirements"
};

export const NAVBAR_TEXT = {
  demoBtn: "Software Demo",
  logoAlt: "MODAL Logo"
};

export const FOOTER_TEXT = {
  contactTitle: "Contact",
  address: "Orai, Uttar Pradesh, India",
  youtubeLinkText: "YouTube Channel",
  linksTitle: "Links",
  rights: `© ${new Date().getFullYear()} MODAL Software. All rights reserved.`
};
