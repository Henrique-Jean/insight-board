import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Statcard } from './components/StatCard';
import { statsData } from './data/mockData';
import { OverviewChart } from './components/OverviewChart';
import { RecentSales } from './components/RecentSales';

// 1. Definição da Página de Visão Geral (Overview)
const OverviewPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-slate-800">Dashboard Overview</h1>
    
   
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat, index) => (
        <Statcard 
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          isPositive={stat.isPositive}
          icon={stat.icon}
        />
      ))}
    </div>

 
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div className="col-span-4 bg-white p-6 rounded-xl border border-slate-200 h-[400px]">
        <h3 className="font-semibold text-slate-800 mb-6">Revenue over time</h3>
        <div className="h-[350px] w-full">
         
            <OverviewChart />
        </div>
      </div>

   
      <div className="col-span-3 bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-[450px] overflow-y-auto">
        <div className="mb-6">
            <h3 className="font-semibold text-slate-800">Recent Sales</h3>
            <p className="text-sm text-slate-500">You made 265 sales this month.</p>
        </div>
  
        <RecentSales />
      </div>
      
    </div>
  </div>
);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {/* Rota Inicial (Dashboard) */}
          <Route index element={<OverviewPage />} />
          
          
          <Route path="sales" element={<div>Sales Page (Em breve)</div>} />
          <Route path="users" element={<div>Users Page (Em breve)</div>} />
          <Route path="settings" element={<div>Settings Page (Em breve)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;