

import { 
  Zap, 
  Leaf, 
  Bot, 
  Building2, 
  DraftingCompass, 
  Car, 
  Wallet, 
  Scale, 
  Copyright, 
  Calculator, 
  Users, 
  Wrench, 
  Factory,
  Globe,
  Recycle
} from "lucide-react";

export const ICONS = {
  directions: [
    Car,
    Zap,
    Leaf,
    Bot,
    Building2,
    DraftingCompass
  ],
  benefits: [
    Wallet,
    Scale,
    Copyright, 
    Calculator, 
    Users, 
    Wrench, 
    Factory
  ]
};

export const CONTACT_INFO = {
  email: "salom@tutrinstartups.uz",
  phone: "+998 90 175 67 07",
  logoUrl: "https://turin.uz/wp-content/uploads/2024/03/Logo-Eng-vertical-blue.png"
};

// --- PROJECTS / RESIDENTS ---
export const PROJECTS = [
  {
    name: "Yaxshi",
    url: "https://www.yaxshi.link/",
    logoUrl: "https://www.yaxshi.link/_next/image?url=%2Flogos%2Fyaxshi-logo-for-green.png&w=3840&q=85",
    fallbackIcon: null
  },
  {
    name: "EcoMobile",
    url: "https://www.ecomobile.world/",
    logoUrl: null,
    fallbackIcon: Car // Electric Transport
  },
  {
    name: "Wynd Energy",
    url: "https://wynd.energy/",
    logoUrl: "https://wynd.energy/wp-content/uploads/2024/02/Samsara-logo-01.png",
    fallbackIcon: null
  },
  {
    name: "Economad",
    url: "https://economad.world/",
    logoUrl: null,
    fallbackIcon: Recycle // Ecology
  }
];

// --- GOOGLE SHEETS CONFIGURATION ---
export const GOOGLE_SHEETS_CONFIG = {
  // ⚠️ ВАЖНО: Вставьте сюда URL вашего Google Web App Script
  // Инструкция:
  // 1. Создайте Google Sheet -> Extensions -> Apps Script
  // 2. Вставьте код doPost (см. инструкцию в чате)
  // 3. Deploy -> New Deployment -> Web App -> Access: "Anyone"
  // 4. Скопируйте URL (заканчивается на /exec)
  scriptUrl: "https://script.google.com/macros/s/AKfycbxgEWQ1GTV9nxs1mvihIbrelS-l8SzTrZ26witgPcCNtW2ca7QMw0SGmcLsc7zuBfWR6A/exec"
};