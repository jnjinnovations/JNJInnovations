export interface AuditLogEntry {
  id: string;
  timestamp: string;
  type: 'info' | 'success' | 'warn' | 'system';
  message: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  nodeName: string;
  description: string;
  longDescription: string;
  iconName: string;
}

export interface ConsultingPhase {
  number: string;
  title: string;
  shortDesc: string;
  duration: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  businessName: string;
  serviceOfInterest: string;
  message: string;
}
