import { Cloud } from "lucide-react";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <Cloud className="w-7 h-7 text-blue-400" />
            <h1 className="text-2xl font-bold">Cloud Management Platform</h1>
          </div>
          <p className="text-gray-400 text-sm pl-10">
            Hybrid infrastructure management demo
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
