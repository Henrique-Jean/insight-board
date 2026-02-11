import { SalesChart } from "../components/SalesChart";
import { Download } from "lucide-react";

const recentTrasations = [
    { id: "TRX-9871", user: "Olivia Martin", date: "Today, 2:00 PM", amount: "+$1,999.00", status: "Success" },
    { id: "TRX-9872", user: "Jackson Lee", date: "Today, 1:00 PM", amount: "+$39.00", status: "Processing" },
    { id: "TRX-9873", user: "Isabella Nguyen", date: "Yesterday", amount: "+$299.00", status: "Success" },
    { id: "TRX-9874", user: "William Kim", date: "Yesterday", amount: "+$99.00", status: "Failed" },
    { id: "TRX-9875", user: "Sofia Davis", date: "3 days ago", amount: "+$39.00", status: "Success" },
];

export function SalesPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Sales & Analytics</h1>
                    <p className="text-slate-500"> Monitor your financial performace</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium">
                    <Download size={18} />
                    Export Report
                </button>
            </div>

            <div className="grid gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-[400px]">
                    <h3 className="font-semibold text-slate-800 mb-6">Monthly Revenue</h3>
                    <div className="h-[320px] w-full">
                        <SalesChart />
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <h3 className="font-semibold text-slate-800">Recent Transactions</h3>
                    </div>
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Transaction ID</th>
                                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Customer</th>
                                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Amount</th>
                                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {recentTrasations.map((trx) => (
                                <tr key={trx.id} className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">{trx.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-800">{trx.user}</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">{trx.date}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-emerald-600">{trx.amount}</td>
                                    <td className="px-6 py-4 text-right">
                                        <span className={`text-xs font-medium px-2 py-1 rounded-full border $ {  trx.status === 'Success' ? 'bg-emerald-50 text-emerald-700 border-emerald-700' : 
                                            trx.status === 'Processing' ? 'bg-amber-50 text-amber-700 border-amber-700' : 
                                            'bg-red-50 text-red-700 border-red-100'
                                        }`}>
                                            {trx.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}