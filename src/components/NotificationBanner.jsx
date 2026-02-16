import { X, CheckCircle, AlertCircle } from "lucide-react";

function NotificationBanner({ message, type = "success", onDismiss }) {
  const styles = {
    success: "bg-green-900/60 border-green-500/40 text-green-300",
    warning: "bg-yellow-900/60 border-yellow-500/40 text-yellow-300",
    error: "bg-red-900/60 border-red-500/40 text-red-300",
  };
  const Icon = type === "success" ? CheckCircle : AlertCircle;

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-lg border mb-4 ${styles[type]}`}
    >
      <div className="flex items-center gap-2 text-sm">
        <Icon className="w-4 h-4" />
        {message}
      </div>
      <button
        onClick={onDismiss}
        className="opacity-60 hover:opacity-100 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export default NotificationBanner;
