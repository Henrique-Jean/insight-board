import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { salesChartData } from '../data/mockData';

export function SalesChart() {
    return (
        <div className='h-full w-full'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={salesChartData}
                    margin={{top:10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#e2e8f0' />

                        <XAxis
                            dataKey="name"
                            stroke='#64748b'
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#64748b"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip
                            cursor={{ fill:'#f1f5f9'}}
                            contentStyle={{backgroundColor:'#fff', borderRadius: '8px', border: '1px solid #e2e8f0'}}
                        />

                        <Bar
                            dataKey="value"
                            fill='#3b82f6'
                            radius={[4, 4, 0, 0]}
                            barSize={40}
                        />
                    </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

