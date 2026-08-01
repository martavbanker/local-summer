export interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  numChildren: number;
  childrenAges: string;
  stayDuration: string;
  priorities: string[];
  comments?: string;
}

export interface SpainHighlight {
  id: string;
  name: string;
  region: string;
  description: string;
  highlight: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  forWho: 'Kids' | 'Parents' | 'Family';
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Program' | 'Work & Tech' | 'Housing' | 'Logistics';
}
