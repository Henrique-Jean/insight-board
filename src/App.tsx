import { BrowserRouter, Routes, Route } from "react-router-dom";
import {DashboardLayout} from './layouts/DashboardLayout';

const OverviewPage = () => (
  <div>
    <h1 className="text-2xl font-bold text-slate-800 mb-4">Overview Dashboard</h1>
    <div className="grid grid-cols-3 gap-4">
      <div className="h-32 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">Card 1</div>
      <div className="h-32 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">Card 2</div>
      <div className="h-32 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">Card 3</div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="sales" element={<div>Sales Page</div>} />
          <Route path="users" element={<div>Users Page</div>} />
          <Route path="settings" element={<div>Settings page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;