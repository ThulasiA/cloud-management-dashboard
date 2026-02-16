import DeploymentList from "./DeploymentList";
import MonitoringView from "./MonitoringView";
import { Server, Activity } from "lucide-react";
import { useState } from "react";

function TabsContainer({ vms, onDelete, onOpenModal }) {
  const [activeTab, setActiveTab] = useState("compute");

  const tabs = [
    { id: "compute", label: "Compute", icon: Server },
    { id: "monitoring", label: "Monitoring", icon: Activity },
  ];

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 text-sm ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-gray-300 hover:bg-slate-700"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "compute" && (
        <DeploymentList
          vms={vms}
          onDelete={onDelete}
          onOpenModal={onOpenModal}
        />
      )}
      {activeTab === "monitoring" && <MonitoringView vms={vms} />}
    </div>
  );
}

export default TabsContainer;
