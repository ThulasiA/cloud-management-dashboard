import DeploymentItem from "./DeploymentItem";
import { Plus } from "lucide-react";

function DeploymentList({ vms, onDelete, onOpenModal }) {
  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Virtual Machines</h2>
        <button
          onClick={onOpenModal}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 text-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          Create VM
        </button>
      </div>

      {vms.length === 0 ? (
        <div className="text-center text-gray-500 py-8 text-sm">
          No deployments yet. Create one to get started.
        </div>
      ) : (
        <div className="space-y-3">
          {vms.map((vm) => (
            <DeploymentItem key={vm.id} vm={vm} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default DeploymentList;
