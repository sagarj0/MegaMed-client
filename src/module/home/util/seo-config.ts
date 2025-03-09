import { SeoConfig } from "@/helper/hooks/useSeoConfig";
import { HomeUrl } from "./url";

export const seoConfig: Required<{ [key in keyof typeof HomeUrl]: SeoConfig[string] }> = {
  home: { title: "Home", description: "Welcome to the homepage of MegaMed, your trusted medical resource." },
  about: { title: "About", description: "Learn more about MegaMed, our mission, and our team." },
  mentors: { title: "Mentors", description: "Meet our experienced mentors who guide and support our community." },
  contact: { title: "Contact", description: "Get in touch with us for any inquiries or support." },
  profile: { title: "Profile", description: "View and manage your personal profile and settings." },
  test: { title: "Test", description: "Access and take various medical tests available on our platform." },
  root: { title: "Home", description: "Welcome to the homepage of MegaMed, your trusted medical resource." },
};
