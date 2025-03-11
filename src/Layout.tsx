import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

function Layout({ children, showSidebar = false }: LayoutProps) {
  return (
    <div className="flex h-screen p-2 gap-2">
      {showSidebar ? (
        <aside className="w-72 h-full bg-gray-900 text-white p-4">
          Sidebar
        </aside>
      ) : null}
      <main className="flex-1 bg-gray-300 p-4">{children}</main>
    </div>
  );
}

export default Layout;
