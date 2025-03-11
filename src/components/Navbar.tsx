interface NavbarProps {
  setSelectedNavbar: (menu: string) => void;
}

function Navbar({ setSelectedNavbar }: NavbarProps) {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Aplikasi</h1>
      <div className="space-x-4">
        <button
          onClick={() => setSelectedNavbar("Dashboard")}
          className="px-3 py-1 bg-blue-700 rounded"
        >
          Dashboard
        </button>
        <button
          onClick={() => setSelectedNavbar("Settings")}
          className="px-3 py-1 bg-blue-700 rounded"
        >
          Settings
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
