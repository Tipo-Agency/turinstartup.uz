import { LucideIcon } from "lucide-react";

export type Language = 'ru' | 'uz' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface DirectionItem {
  id: string;
  icon: LucideIcon;
  // Title and description are now looked up via translation keys, 
  // but for the mapped array we usually combine data with content.
  // In this implementation, we map over the translation array directly.
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  idea: string;
  stage: string;
}
