import { Users, Lightbulb, CircleAlert, type LucideIcon } from "lucide-react";
 
export interface ContactTopic {
  icon: LucideIcon;
  title: string;
  description: string;
}
 
// Shared by the hero and the "Partner for a Stronger Africa" banner
export const CONTACT_TOPICS: ContactTopic[] = [
  {
    icon: Users,
    title: "Partnership",
    description: "Collaborate for greater impact.",
  },
  {
    icon: Lightbulb,
    title: "Research Inquiries",
    description: "Access expert research support.",
  },
  {
    icon: CircleAlert,
    title: "General Questions",
    description: "Get answers and assistance.",
  },
];