import { Users, DollarSign, ShoppingCart, TrendingUp, type LucideIcon } from "lucide-react";

export interface StatCardData {
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
    icon: LucideIcon;
}

export interface SalesData {
    name: string;
    values: number;
}

export interface RecentUser {
    id: string;
    name: string;
    email: string;
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
        value: "2350",
        change: "+180.1% from Last month",
        isPositive: true,
        icon: Users,
    },
    {
        title: "sales",
        value: "+12,234",
        change: "+19 from Last month",
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
    { name: 'Jan', values: 1200 },
    { name: 'Feb', values: 2100 },
    { name: 'Mar', values: 800 },
    { name: 'Apr', values: 1600 },
    { name: 'May', values: 900 },
    { name: 'Jun', values: 1700 },
];

export const recentUsersData: RecentUser[] = [
    {
        id: "1",
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        status: "Active",
        lastActive: "2 mins ago"
  },
  {
        id: "2",
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        status: "Inactive",
        lastActive: "4 hours ago"
  },
    {
        id: "3",
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        status: "Pending",
        lastActive: "1 day ago"
    },
];