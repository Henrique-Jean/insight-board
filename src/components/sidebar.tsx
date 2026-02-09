import { LayoutDashboard, BarChart3, Users, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/'},
    { icon: BarChart3, label: 'Sales', path: '/sales' },
    { icon: Users, label: 'Users', path: '/users'},
    { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar () {
    return (
        <aside className="w-64 bg-white border-r border-slate-200 h-screen flex flex-col">
            <div className="p-6 flex items-center gap-2 border-b border-slate-100">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    IB 
                
                </div>

                <span className="text-xl font-bold text-slate-800">InsightBoard</span>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({isActive}) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                isActive
                                    ? 'bg-blue-50 text-blue-600 font-medium'
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                            }`
                        }
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </NavLink>
                
                ))}
            </nav>

            <div className="p-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200" />
                    <div>
                        <p className="text-sm font-medium text-slate-700">Admin User</p>
                        <p className="text-xs text-slate-500">admin@insight.com</p>
                    </div>
                </div>
            </div>
            </aside>

        );
    }



