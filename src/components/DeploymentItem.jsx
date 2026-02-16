import { Trash2 } from "lucide-react";

function DeploymentItem({ vm, onDelete }) {
  return (
    <div className="bg-slate-700/50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-2 h-2 rounded-full ${vm.status === "running" ? "bg-green-400" : "bg-gray-500"}`}
          />
          <div>
            <div className="font-medium text-sm">{vm.name}</div>
            <div className="text-xs text-gray-400">{vm.location}</div>
          </div>
        </div>
        <button
          onClick={() => onDelete(vm.id)}
          className="p-2 bg-red-900/40 hover:bg-red-900/70 rounded transition-colors"
        >
          <Trash2 className="w-4 h-4 text-red-400" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        {[
          { label: "CPU", value: vm.cpu, color: "bg-blue-500" },
          { label: "Memory", value: vm.memory, color: "bg-purple-500" },
        ].map((m) => (
          <div key={m.label}>
            <div className="text-gray-400 mb-1">{m.label}</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-slate-600 rounded-full h-1.5">
                <div
                  className={`${m.color} h-1.5 rounded-full`}
                  style={{ width: `${m.value}%` }}
                />
              </div>
              <span className="text-xs w-8 text-right">{m.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeploymentItem;
