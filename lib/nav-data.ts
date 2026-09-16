export type NavLink = {
  label: string;
  href: string;
};

export type NavDropdown = {
  label: string;
  href: string;
  items: NavLink[];
};

export type NavItem = NavLink | NavDropdown;

export function isDropdown(item: NavItem): item is NavDropdown {
  return "items" in item;
}

// Stage 2 — Dr. Maya Reynolds navigation
export const primaryNav: NavItem[] = [
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    items: [
      { label: "Anxiety & Panic Therapy", href: "#anxiety" },
      { label: "Trauma Therapy", href: "#trauma" },
      { label: "Burnout & Perfectionism", href: "#burnout" },
    ],
  },
  { label: "Our Office", href: "#office" },
  { label: "Contact", href: "#contact" },
];

export const footerNav: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#office" },
  { label: "Contact", href: "#contact" },
];

export const footerServices: NavLink[] = [
  { label: "Anxiety & Panic Therapy", href: "#anxiety" },
  { label: "Trauma Therapy", href: "#trauma" },
  { label: "Burnout & Perfectionism", href: "#burnout" },
];
