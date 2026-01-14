import React, { useState } from "react";
import { Cloud, Server, Activity, Trash2, Plus } from "lucide-react";

export default function CloudPlatform() {
  const [activeTab, setActiveTab] = useState("compute");
  const [vms, setVms] = useState([
    {
      id: 1,
      name: "web-server-01",
      status: "running",
      cpu: 45,
      memory: 62,
      location: "On-Premises",
    },
    {
      id: 2,
      name: "db-server-01",
      status: "running",
      cpu: 78,
      memory: 85,
      location: "Cloud-A",
    },
    {
      id: 3,
      name: "app-server-01",
      status: "stopped",
      cpu: 0,
      memory: 0,
      location: "Cloud-B",
    },
  ]);

  const [workloads] = useState([
    { location: "On-Premises", count: 145, percentage: 45 },
    { location: "Public Cloud A", count: 89, percentage: 28 },
    { location: "Public Cloud B", count: 62, percentage: 19 },
    { location: "Edge", count: 26, percentage: 8 },
  ]);

  const deleteVm = (id) => {
    setVms(vms.filter((vm) => vm.id !== id));
  };

  const addVm = () => {
    const newId = Math.max(...vms.map((v) => v.id)) + 1;
    setVms([
      ...vms,
      {
        id: newId,
        name: `server-${newId}`,
        status: "stopped",
        cpu: 0,
        memory: 0,
        location: "On-Premises",
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Cloud className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold">Cloud Management Platform</h1>
          </div>
          <p className="text-gray-400 text-sm">
            Hybrid infrastructure management demo
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: "compute", label: "Compute", icon: Server },
            { id: "monitoring", label: "Monitoring", icon: Activity },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
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

        {/* Compute Tab */}
        {activeTab === "compute" && (
          <div className="space-y-4">
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Virtual Machines</h2>
                <button
                  onClick={addVm}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 text-sm transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Create VM
                </button>
              </div>

              <div className="space-y-3">
                {vms.map((vm) => (
                  <div key={vm.id} className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            vm.status === "running"
                              ? "bg-green-400"
                              : "bg-gray-500"
                          }`}
                        />
                        <div>
                          <div className="font-medium">{vm.name}</div>
                          <div className="text-xs text-gray-400">
                            {vm.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => deleteVm(vm.id)}
                          className="p-2 bg-red-900/50 hover:bg-red-900 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400 mb-1">CPU</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-slate-600 rounded-full h-1.5">
                            <div
                              className="bg-blue-500 h-1.5 rounded-full"
                              style={{ width: `${vm.cpu}%` }}
                            />
                          </div>
                          <span>{vm.cpu}%</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">Memory</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-slate-600 rounded-full h-1.5">
                            <div
                              className="bg-purple-500 h-1.5 rounded-full"
                              style={{ width: `${vm.memory}%` }}
                            />
                          </div>
                          <span>{vm.memory}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Monitoring Tab */}
        {activeTab === "monitoring" && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-1">Total VMs</div>
                <div className="text-3xl font-bold text-blue-400">
                  {vms.length}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {vms.filter((v) => v.status === "running").length} running
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-1">Locations</div>
                <div className="text-3xl font-bold text-purple-400">4</div>
                <div className="text-xs text-gray-500 mt-1">All healthy</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-1">Workloads</div>
                <div className="text-3xl font-bold text-green-400">322</div>
                <div className="text-xs text-gray-500 mt-1">Across clouds</div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {[
                  { time: "2 min ago", event: "VM started", status: "success" },
                  {
                    time: "15 min ago",
                    event: "Health check completed",
                    status: "info",
                  },
                  {
                    time: "1 hour ago",
                    event: "Workload deployed",
                    status: "success",
                  },
                  {
                    time: "2 hours ago",
                    event: "Capacity warning",
                    status: "warning",
                  },
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        activity.status === "success"
                          ? "bg-green-400"
                          : activity.status === "warning"
                          ? "bg-yellow-400"
                          : "bg-blue-400"
                      }`}
                    />
                    <span className="flex-1">{activity.event}</span>
                    <span className="text-gray-500 text-xs">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
