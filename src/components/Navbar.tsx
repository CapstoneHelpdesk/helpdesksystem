import { useState, useEffect, JSX } from "react";
import { FaPaperPlane, FaClock, FaCheckCircle } from "react-icons/fa";

interface NavbarProps {
  activeNavbar: number;
  setActiveNavbar: (nav: number) => void;
}

function Navbar({ activeNavbar, setActiveNavbar }: NavbarProps) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const NavItem = ({
    label,
    isActive,
  }: {
    label: string;
    isActive: boolean;
  }) => (
    <a
      href="#"
      className={`relative w-fit h-fit px-2.5 py-2 transition-all duration-300 group ${
        isActive ? "text-[#3D8BFD]" : ""
      }`}
    >
      <p className="text-sm font-medium group-hover:text-[#3D8BFD]">{label}</p>
      <span
        className={`absolute left-0 bottom-0 w-full h-[3px] bg-[#3D8BFD] group-hover:scale-x-100  transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
      ></span>
    </a>
  );
  const categories = ["Semua", "Kawalan", "Terhangat"];
  const TicketStatus = ({
    icon,
    label,
    count,
    color,
    href,
    isNew, // Tambahkan properti isNew
  }: {
    icon: JSX.Element;
    label: string;
    count: number;
    color: string;
    href: string;
    isNew?: boolean; // Properti opsional
  }) => {
    return (
      <a
        href={href}
        className="relative w-[120px] px-2.5 py-2 flex flex-row gap-3 items-center justify-start transition-all duration-300 group focus:text-[var(--color)] focus:scale-95"
        style={{ "--color": color } as React.CSSProperties}
      >
        <span className="text-lg transition-all duration-300 group-hover:text-[var(--color)] group-focus-within:text-[var(--color)]">
          {icon}
        </span>
        <div className="flex flex-col">
          <p className="text-sm font-medium transition-all duration-300 group-hover:text-[var(--color)] group-focus-within:text-[var(--color)]">
            {label}
          </p>
          <p className="text-base font-semibold flex items-center">
            {count}
            {isNew && (
              <span className="ml-2 bg-[var(--color)] text-white text-xs px-2 py-[2px] rounded-full group-focus-within:hidden">
                baru
              </span>
            )}
          </p>
        </div>
        <span className="absolute bottom-[-1px] w-full h-[3px] bg-[var(--color)] scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 transition-transform duration-300"></span>
      </a>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scroll ke bawah → Navbar menghilang
        setShowNavbar(false);
      } else {
        // Scroll ke atas → Navbar muncul
        setShowNavbar(true);
      }

      // Cek apakah user masih di bagian atas halaman
      setIsTop(currentScrollY <= 10);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      {activeNavbar === 1 && (
        <div
          className={`fixed w-full h-[64px] flex justify-center transition-all duration-300 ${
            showNavbar
              ? "translate-y-0 backdrop-blur-[5px] shadow-lg"
              : "-translate-y-full backdrop-blur-none shadow-none"
          } `}
        >
          <div className="w-full min-w-[320px] max-w-[1140px] h-full px-[32px] bg-transparent flex justify-between items-center">
            <div className="w-fit h-full flex items-center">
              <a
                href=""
                className="w-[140px] h-[48px] bg-gray-900 rounded-[16px] max-[320px]:w-[70px]"
              ></a>
            </div>
            <div className="w-fit h-full flex gap-4 items-center">
              <button
                className="w-fit h-full flex items-center bg-yellow-500 px-4 py-2"
                onClick={() => setActiveNavbar(1)}
              >
                Nav1
              </button>
              <button
                className="w-fit h-full flex items-center bg-green-500 px-4 py-2"
                onClick={() => setActiveNavbar(2)}
              >
                Nav2
              </button>
              <button
                className="w-fit h-full flex items-center bg-blue-500 px-4 py-2"
                onClick={() => setActiveNavbar(3)}
              >
                Nav3
              </button>
              <div className="w-fit h-full flex items-center">
                <a
                  href=""
                  className="w-fit bg-[#3D8BFD] px-[24px] py-[12px] rounded-[8px] hover:bg-white transition-all duration-300 group"
                >
                  <p className="text-base text-white font-medium group-hover:text-[#3D8BFD]">
                    MASUK
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeNavbar === 2 && (
        <div
          className={`fixed w-full h-fit pt-2 flex flex-col gap-2 items-center transition-all duration-300  ${
            showNavbar
              ? "-translate-y-[0%] backdrop-blur-[5px] shadow-lg"
              : "-translate-y-[35%] backdrop-blur-[5px] shadow-lg"
          } ${isTop ? "backdrop-blur-none shadow-none" : ""}`}
        >
          <div className="w-full min-w-[320px] max-w-[1148px] h-16 px-8 bg-transparent flex gap-4 justify-between items-center transition-all duration-300">
            <div className="w-fit h-full flex items-center">
              <a
                href=""
                className="w-[140px] h-12 bg-white rounded-2xl max-[320px]:w-[70px]"
              ></a>
            </div>
            <input
              type="text"
              className="w-full max-w-[720px] border-2 px-4 py-2 rounded-3xl shadow-[0_0_15px_rgba(255,255,255,0.5)] border-white text-sm outline-none bg-transparent placeholder-white text-white transition-all duration-300 
    hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] focus:shadow-[0_0_15px_rgba(255,255,255,1)]"
              placeholder="Search id / content / reporter"
            />
            <div className="w-fit h-full flex gap-4 items-center">
              <button
                className="w-fit h-full flex items-center bg-yellow-500 px-4 py-2"
                onClick={() => setActiveNavbar(1)}
              >
                Nav1
              </button>
              <button
                className="w-fit h-full flex items-center bg-green-500 px-4 py-2"
                onClick={() => setActiveNavbar(2)}
              >
                Nav2
              </button>
              <button
                className="w-fit h-full flex items-center bg-blue-500 px-4 py-2"
                onClick={() => setActiveNavbar(3)}
              >
                Nav3
              </button>
              <div className="w-fit h-full flex items-center">
                <a
                  href=""
                  className="w-8 h-8 bg-[#3D8BFD] rounded-2xl hover:bg-white transition-all duration-300 group"
                ></a>
                <a
                  href=""
                  className="w-8 h-8 bg-[#3D8BFD] rounded-2xl hover:bg-white transition-all duration-300 group hidden md:block"
                ></a>
              </div>
            </div>
          </div>
          <div className="w-full min-w-[320px] max-w-[1148px] bg-transparent flex gap-4 justify-between items-center">
            <div className="w-full flex items-center">
              <div className="w-full h-[130px] px-4 bg-white rounded-t-2xl grid grid-rows-2 ">
                <div></div>
                <div className="w-full flex flex-row items-end justify-between">
                  <div className="flex flex-row">
                    {categories.map((category, index) => (
                      <NavItem
                        key={index}
                        label={category}
                        isActive={index === null}
                      />
                    ))}
                  </div>
                  <div className="flex flex-row">
                    <TicketStatus
                      icon={<FaPaperPlane />}
                      label="Diverifikasi"
                      count={3}
                      color="#D23F35"
                      href="#"
                      isNew={false} // Menampilkan badge "baru"
                    />
                    <TicketStatus
                      icon={<FaClock />}
                      label="Diproses"
                      count={3}
                      color="#D2B335"
                      href="#"
                      isNew={true} // Menampilkan badge "baru"
                    />
                    <TicketStatus
                      icon={<FaCheckCircle />}
                      label="Selesai"
                      count={3}
                      color="#5CD235"
                      href="#"
                      isNew={true} // Menampilkan badge "baru"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeNavbar === 3 && (
        <div
          className={`fixed w-full h-[64px] flex justify-center transition-all duration-300 ${
            showNavbar
              ? "translate-y-0 backdrop-blur-[5px] shadow-lg"
              : "-translate-y-full backdrop-blur-none shadow-none"
          } ${isTop ? "backdrop-blur-none shadow-none" : ""}`}
        >
          <div className="w-full min-w-[320px] max-w-[1140px] h-full px-[32px] bg-transparent flex justify-between items-center">
            <div className="w-fit h-full flex items-center">
              <a
                href=""
                className="w-[140px] h-[48px] bg-gray-900 rounded-[16px] max-[320px]:w-[70px]"
              ></a>
            </div>
            <div className="w-fit h-full flex gap-4 items-center">
              <button
                className="w-fit h-full flex items-center bg-yellow-500 px-4 py-2"
                onClick={() => setActiveNavbar(1)}
              >
                Nav1
              </button>
              <button
                className="w-fit h-full flex items-center bg-green-500 px-4 py-2"
                onClick={() => setActiveNavbar(2)}
              >
                Nav2
              </button>
              <button
                className="w-fit h-full flex items-center bg-blue-500 px-4 py-2"
                onClick={() => setActiveNavbar(3)}
              >
                Nav3
              </button>
              <div className="w-fit h-full flex items-center">
                <a
                  href=""
                  className="w-fit bg-[#3D8BFD] px-[24px] py-[12px] rounded-[8px] hover:bg-white transition-all duration-300 group"
                >
                  <p className="text-base text-white font-medium group-hover:text-[#3D8BFD]">
                    MASUK
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

// interface NavbarProps {
//   setSelectedNavbar: (menu: string) => void;
// }

// function Navbar({ setSelectedNavbar }: NavbarProps) {
//   return (
//     <nav className="bg-blue-500 text-white p-4 flex justify-between">
//       <h1 className="text-lg font-bold">Aplikasi</h1>
//       <div className="space-x-4">
//         <button
//           onClick={() => setSelectedNavbar("Dashboard")}
//           className="px-3 py-1 bg-blue-700 rounded"
//         >
//           Dashboard
//         </button>
//         <button
//           onClick={() => setSelectedNavbar("Settings")}
//           className="px-3 py-1 bg-blue-700 rounded"
//         >
//           Settings
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
