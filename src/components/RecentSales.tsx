import { recentUsersData } from "../data/mockData";

export function RecentSales () {
    return (
        <div className="space-y-8">
            {recentUsersData.map((user) => (
                <div key={user.id} className="flex items-center">

                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                        <span className="text-xs font-bold text-blue-700">
                            {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>
                    
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none text-slate-800">{user.name}</p>
                        <p className="text-sm text-slate-500">{user.email}</p>
                    </div>

                    <div className="ml-auto font-medium text-slate-800">
                        +$1,999.00
                    </div>
                </div>   
            ))}
        </div>
    );
}