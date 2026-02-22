export interface NavItem {
  labelKey: "projects" | "about";
  href: string;
}

export const navigationItems: NavItem[] = [
  { labelKey: "projects", href: "/projects" },
  { labelKey: "about", href: "/about" },
];
