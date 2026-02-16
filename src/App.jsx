import "./App.css";
import DashboardLayout from "./components/DashboardLayout";
import NotificationBanner from "./components/NotificationBanner";
import TabsContainer from "./components/TabsContainer";
import AddDeploymentModal from "./components/AddDeploymentModal";
const INITIAL_VMS = [
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
];

export default function App() {
  const [vms, setVms] = useState(INITIAL_VMS);
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState(null);

  const notify = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAdd = ({ name, location }) => {
    const newVm = {
      id: Date.now(),
      name,
      location,
      status: "stopped",
      cpu: 0,
      memory: 0,
    };
    setVms((prev) => [...prev, newVm]);
    notify(`"${name}" deployed successfully.`);
  };

  const handleDelete = (id) => {
    const vm = vms.find((v) => v.id === id);
    setVms((prev) => prev.filter((v) => v.id !== id));
    notify(`"${vm.name}" removed.`, "warning");
  };

  return (
    <DashboardLayout>
      {notification && (
        <NotificationBanner
          message={notification.message}
          type={notification.type}
          onDismiss={() => setNotification(null)}
        />
      )}
      <TabsContainer
        vms={vms}
        onDelete={handleDelete}
        onOpenModal={() => setShowModal(true)}
      />
      {showModal && (
        <AddDeploymentModal
          onAdd={handleAdd}
          onClose={() => setShowModal(false)}
        />
      )}
    </DashboardLayout>
  );
}
