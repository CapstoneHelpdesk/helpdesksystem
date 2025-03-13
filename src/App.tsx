import { Sidebar, SidebarProvider } from "./components/ui/sidebar"; // Pastikan path benar
import DashboardAdmin from "./components/DashboardAdmin";

export default function App() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar variant="floating" collapsible="icon">
          <div className="p-4">📂 Files</div>
          <div className="p-4">⚙️ Settings</div>
          <div className="p-4">📊 Reports</div>
        </Sidebar>
        <DashboardAdmin />
      </div>
    </SidebarProvider>
  );
}
