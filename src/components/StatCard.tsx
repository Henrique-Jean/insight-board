import { type LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
    icon: LucideIcon;
}

export function Statcard({ title, value, change, isPositive, icon: Icon }: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200, shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-slate-500">{title}</p>
                <Icon className="h-4 w-4 text-slate-400" />
            </div>
            

            <div>
                <div className="text-2xl font-bold text-slate-900">{value}</div>
                <p className={`text-xs ${isPositive ? 'text-emerald-500' : 'text-red-500'} flex items-center mt-1`}>
                {change}
                </p>
            </div>
        </div>
    );
}