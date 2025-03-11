interface SidebarProps {
  selectedNavbar: string;
  setSelectedSidebar: (menu: string) => void;
}

function Sidebar({ selectedNavbar, setSelectedSidebar }: SidebarProps) {
  const menus = {
    Dashboard: ["Home", "Reports", "Statistics"],
    Settings: ["Profile", "Preferences", "Security"],
  };

  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">{selectedNavbar}</h2>
      <ul className="space-y-2">
        {menus[selectedNavbar as keyof typeof menus]?.map((menu, index) => (
          <li key={index}>
            <button
              onClick={() => setSelectedSidebar(menu)}
              className="block w-full text-left p-2 rounded hover:bg-gray-700"
            >
              {menu}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
