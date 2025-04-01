import { useState, useEffect, ReactNode } from "react";
import {
  FaPaperPlane,
  FaClock,
  FaCheckCircle,
  FaPencilAlt,
} from "react-icons/fa";

interface NavbarProps {
  activeNavbar: number;
  setActiveNavbar: (nav: number) => void;
}

function Navbar({ activeNavbar, setActiveNavbar }: NavbarProps) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeStatus, setActiveStatus] = useState("");

  const tickets = [
    { id: 1, status: "Diverifikasi", title: "Tiket 1" },
    { id: 2, status: "Diproses", title: "Tiket 2" },
    { id: 3, status: "Selesai", title: "Tiket 3" },
    { id: 4, status: "Diproses", title: "Tiket 4" },
  ];

  const TabUmumList = [
    {
      label: "Semua",
      icon: null,
      color: "#3D8BFD",
    },
    {
      label: "Kawalan",
      icon: null,
      color: "#3D8BFD",
    },
    {
      label: "Terhangat",
      icon: null,
      color: "#3D8BFD",
    },
  ];

  const TabStatusList = [
    {
      label: "Diverifikasi",
      icon: <FaPaperPlane />,
      color: "#D23F35",
      hasCount: true,
      isNew: true,
    },
    {
      label: "Diproses",
      icon: <FaClock />,
      color: "#D2B335",
      hasCount: true,
      isNew: false,
    },
    {
      label: "Selesai",
      icon: <FaCheckCircle />,
      color: "#5CD235",
      hasCount: true,
      isNew: true,
    },
  ];

  const TabMenu = ({
    icon,
    label,
    count,
    color,
    isNew,
    isActive,
    onClick,
    newClass = "",
  }: {
    icon: ReactNode | null;
    label: string;
    count?: number;
    color: string;
    isNew?: boolean;
    isActive: boolean;
    onClick: () => void;
    newClass?: string;
  }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 701);

    useEffect(() => {
      const handleResize = () => setIsDesktop(window.innerWidth >= 701);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isDesktop ? (
      <button
        onClick={onClick}
        className={`relative py-2 flex flex-row gap-3 items-center cursor-pointer transition-all duration-300 group 
        ${
          isActive ? "text-[var(--color)] scale-95" : "text-gray-700"
        } ${newClass}`}
        style={{ "--color": color } as React.CSSProperties}
      >
        {icon && (
          <span
            className={`text-lg group-hover:text-[var(--color)] transition-all duration-300 ${
              isActive ? "text-[var(--color)]" : ""
            }`}
          >
            {icon}
          </span>
        )}
        <div className="flex flex-col">
          <p
            className={`text-sm font-medium group-hover:text-[var(--color)] transition-all duration-300 ${
              isActive ? "text-[var(--color)]" : ""
            }`}
          >
            {label}
          </p>
          {count !== undefined && (
            <p className="text-base font-semibold flex flex-row items-center">
              {count}
              {isNew && (
                <span className="ml-2 bg-[var(--color)] text-white text-xs px-2 py-[2px] rounded-full">
                  baru
                </span>
              )}
            </p>
          )}
        </div>
        <span
          className={`absolute bottom-[-1px] w-full h-[3px] bg-[var(--color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 
          ${isActive ? "scale-x-100" : "scale-x-0"}`}
        ></span>
      </button>
    ) : (
      <button
        onClick={onClick}
        className={`relative py-2 flex flex-col items-center cursor-pointer transition-all duration-300 group 
      ${
        isActive ? "text-[var(--color)] scale-95" : "text-gray-700"
      } ${newClass}`}
        style={{ "--color": color } as React.CSSProperties}
      >
        <div className="flex flex-row gap-2 items-center">
          {icon && (
            <span
              className={`text-lg group-hover:text-[var(--color)] transition-all duration-300 ${
                isActive ? "text-[var(--color)]" : ""
              }`}
            >
              {icon}
            </span>
          )}
          {count !== undefined && (
            <p className="text-base font-semibold flex flex-row items-center">
              {count}
              {isNew && (
                <span className="ml-2 bg-[var(--color)] text-white text-xs px-2 py-[2px] rounded-full">
                  baru
                </span>
              )}
            </p>
          )}
        </div>
        {icon ? (
          <p
            className={`text-sm font-medium group-hover:text-[var(--color)] transition-all duration-300 ${
              isActive ? "text-[var(--color)]" : ""
            } ${showNavbar ? "block" : "hidden"}`}
          >
            {label}
          </p>
        ) : (
          <p
            className={`text-sm font-medium group-hover:text-[var(--color)] transition-all duration-300 ${
              isActive ? "text-[var(--color)]" : ""
            } `}
          >
            {label}
          </p>
        )}
        <span
          className={`absolute bottom-[-1px] w-full h-[3px] bg-[var(--color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 
        ${isActive ? "scale-x-100" : "scale-x-0"}`}
        ></span>
      </button>
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
          className={`fixed w-full h-[64px] bg-[#084a83]/30 flex justify-center transition-all duration-300 translate-y-0 backdrop-blur-[5px] shadow-lg `}
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
        <div className="w-full bg-white shadow-md flex flex-col justify-between">
          <div
            className={`fixed w-full h-fit pt-2 bg-[#084a83]/30 flex flex-col gap-2 items-center backdrop-blur-[5px] shadow-lg transition-all duration-300 ${
              showNavbar
                ? "-translate-y-[0%]"
                : "-translate-y-[30%] max-[701px]:-translate-y-[43%] max-[441px]:-translate-y-[46%]"
            }`}
          >
            <div
              className={`w-full min-w-[320px] max-w-[1148px] h-fit px-8 bg-transparent flex gap-4 justify-between items-center transition-all duration-300 ${
                showNavbar ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <a
                href=""
                className="w-[140px] h-12 bg-white rounded-2xl max-[320px]:w-[70px]"
              ></a>
              <input
                type="text"
                className="w-full max-w-[720px] border-2 px-4 py-2 bg-white rounded-3xl shadow-[0_0_15px_rgba(255,255,255,0.5)] text-sm outline-none text-black transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,1)] hover:border-[#084A83]/50 focus:shadow-[0_0_15px_rgba(255,255,255,1)] focus:border-[#084A83]"
                placeholder="Search id / content / reporter"
                onFocus={(e) => e.target.select()}
              />
              <div className="w-fit h-full flex gap-4 items-center">
                <button
                  className="w-fit h-full flex items-center bg-yellow-500 px-4 py-2"
                  onClick={() => setActiveNavbar(1)}
                >
                  Nav1
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
            <div className="w-full min-w-[320px] max-w-[1148px] bg-transparent flex gap-4 items-center">
              <div className="w-full px-4 pt-4 bg-white rounded-t-2xl flex flex-col max-[321px]:grid-rows-1">
                <div className="w-full h-fit flex flex-row items-center justify-between max-[701px]:hidden">
                  <div className="text-2xl font-medium">LAPORAN</div>
                  <a
                    href=""
                    className="w-fit h-fit px-4 py-2 bg-[#3D8BFD] border-2 border-[#3D8BFD] rounded-[8px] hover:bg-white hover:border-2 transition-all duration-300 group"
                  >
                    <p className="text-base text-white font-medium flex gap-3 items-center group-hover:text-[#3D8BFD]">
                      <span className="text-lg">
                        <FaPencilAlt />
                      </span>
                      Buat Laporan
                    </p>
                  </a>
                </div>
                <div className="w-full h-fit flex flex-row justify-between max-[441px]:justify-center max-[769px]:pb-2">
                  <div className="flex flex-row">
                    {TabUmumList.map((TabUmum) => {
                      return (
                        <TabMenu
                          key={TabUmum.label}
                          icon={TabUmum.icon || null}
                          label={TabUmum.label}
                          color={TabUmum.color}
                          isActive={activeStatus === TabUmum.label}
                          onClick={() => setActiveStatus(TabUmum.label)}
                          newClass="w-fit px-2.5 justify-center"
                        />
                      );
                    })}
                  </div>
                  <div className="flex flex-row max-[701px]:hidden">
                    {TabStatusList.map((TabUmum) => {
                      const count = TabUmum.hasCount
                        ? tickets.filter(
                            (ticket) => ticket.status === TabUmum.label
                          ).length
                        : undefined;

                      return (
                        <TabMenu
                          key={TabUmum.label}
                          icon={TabUmum.icon || null}
                          label={TabUmum.label}
                          color={TabUmum.color}
                          isActive={activeStatus === TabUmum.label}
                          onClick={() => setActiveStatus(TabUmum.label)}
                          newClass="w-[120px]"
                          {...(TabUmum.hasCount
                            ? { count, isNew: TabUmum.isNew }
                            : {})}
                        />
                      );
                    })}
                  </div>
                  <div className="flex flex-row min-[701px]:hidden max-[441px]:hidden">
                    <a
                      href=""
                      className="w-fit h-fit px-4 py-2 bg-[#3D8BFD] border-2 border-[#3D8BFD] rounded-[8px] hover:bg-white hover:border-2 transition-all duration-300 group"
                    >
                      <p className="text-base text-white font-medium flex gap-3 items-center group-hover:text-[#3D8BFD]">
                        <span className="text-lg">
                          <FaPencilAlt />
                        </span>
                        Buat Laporan
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`fixed right-1 items-center justify-center min-[441px]:hidden transition-all duration-300 ${
              showNavbar ? "bottom-[72px]" : "bottom-[52px]"
            }`}
          >
            <a
              href=""
              className={`h-[44px] px-4 py-2 bg-[#3D8BFD] border-2 border-[#3D8BFD] rounded-[8px] text-white flex gap-3 items-center hover:bg-white hover:border-2 transition-all duration-300 group ${
                showNavbar ? "w-[163px]" : "w-[53px] "
              }`}
            >
              <span className="text-lg">
                <FaPencilAlt />
              </span>
              <p
                className={`text-base text-white font-medium items-center whitespace-nowrap group-hover:text-[#3D8BFD] transition-all duration-300 ${
                  showNavbar ? "block" : "hidden"
                }`}
              >
                Buat Laporan
              </p>
            </a>
          </div>
          <div
            className={`fixed w-full pb-2 bottom-0 bg-white min-[701px]:hidden transition-all duration-300 ${
              showNavbar ? "h-[68px]" : "h-[48px]"
            }`}
          >
            <div className="w-full flex flex-row items-center justify-center">
              {TabStatusList.map((TabUmum) => {
                const count = TabUmum.hasCount
                  ? tickets.filter((ticket) => ticket.status === TabUmum.label)
                      .length
                  : undefined;

                return (
                  <TabMenu
                    key={TabUmum.label}
                    icon={TabUmum.icon || null}
                    label={TabUmum.label}
                    color={TabUmum.color}
                    isActive={activeStatus === TabUmum.label}
                    onClick={() => setActiveStatus(TabUmum.label)}
                    newClass="w-[120px]"
                    {...(TabUmum.hasCount
                      ? { count, isNew: TabUmum.isNew }
                      : {})}
                  />
                );
              })}
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
