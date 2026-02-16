const ACTIVITY = [
  { id: 1, event: "VM started", status: "success", time: "2 min ago" },
  { id: 2, event: "Health check done", status: "info", time: "15 min ago" },
  { id: 3, event: "Workload deployed", status: "success", time: "1 hour ago" },
  { id: 4, event: "Capacity warning", status: "warning", time: "2 hours ago" },
];

function MonitoringView({ vms }) {
  const statusDot = {
    success: "bg-green-400",
    warning: "bg-yellow-400",
    info: "bg-blue-400",
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total VMs", value: vms.length, color: "text-blue-400" },
          {
            label: "Running",
            value: vms.filter((v) => v.status === "running").length,
            color: "text-green-400",
          },
          { label: "Locations", value: 4, color: "text-purple-400" },
        ].map((stat) => (
          <div key={stat.label} className="bg-slate-800 rounded-lg p-5">
            <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
            <div className={`text-3xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {ACTIVITY.map((a) => (
            <div key={a.id} className="flex items-center gap-3 text-sm">
              <div
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusDot[a.status]}`}
              />
              <span className="flex-1 text-gray-300">{a.event}</span>
              <span className="text-gray-500 text-xs">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MonitoringView;
