import {
  CircleDollarSign,
  Clock3,
  CreditCard,
  Download,
  FileCheck2,
  FileText,
  Headphones,
  LayoutDashboard,
  Plane,
  ReceiptText,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "requests", label: "My Requests", icon: Plane },
  { id: "documents", label: "Document Center", icon: FileText },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "travelers", label: "Traveler Profiles", icon: UsersRound },
  { id: "support", label: "Support", icon: Headphones },
];

export const activeRequest = null;

export const statusSteps = [
  { id: "review", label: "รอตรวจสอบ", description: "เจ้าหน้าที่ตรวจคำขอ", icon: ShieldCheck, state: "done" },
  { id: "payment", label: "รอชำระเงิน", description: "ยืนยันใบเสนอราคา", icon: CircleDollarSign, state: "active" },
  { id: "processing", label: "กำลังดำเนินการ", description: "จัดเตรียมเอกสาร", icon: Clock3, state: "upcoming" },
  { id: "download", label: "ดาวน์โหลดเอกสาร", description: "พร้อมใช้ยื่นวีซ่า", icon: Download, state: "upcoming" },
];

export const documentVault = [];

export const summaryCards = [
  { label: "Active requests", value: "0", icon: Plane, tone: "bg-blue-50 text-blue-600" },
  { label: "Payment pending", value: "0", icon: ReceiptText, tone: "bg-orange-50 text-accent-orange" },
  { label: "Ready documents", value: "0", icon: FileCheck2, tone: "bg-emerald-50 text-[#22C55E]" },
];

export const travelerProfiles = [];

export const tabHeaders = {
  dashboard: { title: "Dashboard Overview", desc: "ติดตามคำขอเอกสารยื่นวีซ่า ชำระเงิน และดาวน์โหลดไฟล์ที่ทีม BKK AIR จัดเตรียมไว้ให้" },
  requests: { title: "My Requests", desc: "จัดการและติดตามสถานะคำขอรับบริการทั้งหมดของคุณ" },
  documents: { title: "Document Center", desc: "ศูนย์รวมเอกสารประกอบการยื่นวีซ่า ดาวน์โหลดไฟล์ PDF ได้ที่นี่" },
  billing: { title: "Billing & Invoices", desc: "ตรวจสอบยอดชำระ แจ้งโอนเงิน และดาวน์โหลดใบเสร็จรับเงิน/ใบกำกับภาษี" },
  travelers: { title: "Traveler Profiles", desc: "จัดการข้อมูลผู้เดินทางเพื่อความรวดเร็วในการสร้างคำขอครั้งต่อไป" },
  support: { title: "Help & Support", desc: "ติดต่อทีมงาน BKK AIR หรือค้นหาคำตอบที่คุณต้องการ" },
  profile: { title: "Profile Settings", desc: "จัดการข้อมูลส่วนตัว ที่อยู่จัดส่งเอกสาร และข้อมูลใบกำกับภาษี" },
};
