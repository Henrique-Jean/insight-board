import { Users, DollarSign, ShoppingCart, TrendingUp, type LucideIcon } from 'lucide-react';



export interface StatCardData {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export interface SalesData {
  name: string;
  value: number;
}


export interface User {
  id: string;
  name: string;
  email: string;
  role: string;     
  status: 'Active' | 'Pending' | 'Inactive';
  lastActive: string;
}

export const statsData: StatCardData[] = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    isPositive: true,
    icon: DollarSign,
  },
  {
    title: "Subscriptions",
    value: "+2350",
    change: "+180.1% from last month",
    isPositive: true,
    icon: Users,
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19% from last month",
    isPositive: true,
    icon: ShoppingCart,
  },
  {
    title: "Active Now",
    value: "+573",
    change: "-201 since last hour",
    isPositive: false,
    icon: TrendingUp,
  },
];

export const salesChartData: SalesData[] = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 2100 },
  { name: 'Mar', value: 800 },
  { name: 'Apr', value: 1600 },
  { name: 'May', value: 900 },
  { name: 'Jun', value: 1700 },
];


export const allUsersData: User[] = [
  { id: "1", name: "Olivia Martin", email: "olivia.martin@email.com", role: "Admin", status: "Active", lastActive: "2 mins ago" },
  { id: "2", name: "Jackson Lee", email: "jackson.lee@email.com", role: "Member", status: "Inactive", lastActive: "4 hours ago" },
  { id: "3", name: "Isabella Nguyen", email: "isabella.nguyen@email.com", role: "Developer", status: "Pending", lastActive: "1 day ago" },
  { id: "4", name: "William Kim", email: "will@email.com", role: "Member", status: "Active", lastActive: "5 mins ago" },
  { id: "5", name: "Sofia Davis", email: "sofia.davis@email.com", role: "Designer", status: "Active", lastActive: "1 hour ago" },
  { id: "6", name: "Lucas Costa", email: "lucas@email.com", role: "Developer", status: "Inactive", lastActive: "2 days ago" },
  { id: "7", name: "Emma Wilson", email: "emma@email.com", role: "Manager", status: "Pending", lastActive: "3 hours ago" },
  { id: "8", name: "James Bond", email: "007@email.com", role: "Admin", status: "Active", lastActive: "Just now" },
];


export const recentUsersData = allUsersData.slice(0, 3);