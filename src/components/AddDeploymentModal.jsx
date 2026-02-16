import { X as CloseIcon } from "lucide-react";

function AddDeploymentModal({ onAdd, onClose }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("On-Premises");

  const handleSubmit = () => {
    if (!name.trim()) return;
    onAdd({ name: name.trim(), location });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-sm border border-slate-600">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">New Deployment</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400 block mb-1">VM Name</label>
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="e.g. api-server-04"
              className="w-full bg-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 border border-slate-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-1">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-slate-700 rounded-lg px-3 py-2 text-sm text-white border border-slate-600 focus:outline-none focus:border-blue-500"
            >
              {["On-Premises", "Cloud-A", "Cloud-B", "Edge"].map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!name.trim()}
            className="flex-1 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-medium transition-colors"
          >
            Deploy
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDeploymentModal;
