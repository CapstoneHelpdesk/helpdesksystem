import { useState, useEffect, useRef } from "react";
import {
  FaPaperPlane,
  FaClock,
  FaCheckCircle,
  FaPencilAlt,
  FaBell,
} from "react-icons/fa";
import TabMenu from "./TabMenu";

interface NavbarProps {
  activeNavbar: number;
  setActiveNavbar: (nav: number) => void;
}

function Navbar({ activeNavbar, setActiveNavbar }: NavbarProps) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const lastScrollY = useRef(0);
  const [activeStatus, setActiveStatus] = useState("");

  const tickets = [
    { id: 1, status: "Diverifikasi", title: "Tiket 1" },
    { id: 2, status: "Diproses", title: "Tiket 2" },
    { id: 3, status: "Selesai", title: "Tiket 3" },
    { id: 4, status: "Diproses", title: "Tiket 4" },
  ];

  // const TabUmumList = [
  //   {
  //     label: "Semua",
  //     icon: null,
  //     color: "#3D8BFD",
  //   },
  //   {
  //     label: "Kawalan",
  //     icon: null,
  //     color: "#3D8BFD",
  //   },
  //   {
  //     label: "Terhangat",
  //     icon: null,
  //     color: "#3D8BFD",
  //   },
  // ];

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

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setShowNavbar(currentScrollY < lastScrollY.current);
          setIsTop(currentScrollY <= 10);
          lastScrollY.current = currentScrollY;

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {activeNavbar === 1 && (
        <div
          className={`fixed w-full h-[64px] bg-[#084a83]/30 flex justify-center transition-all duration-300 translate-y-0 backdrop-blur-[5px] shadow-lg `}
        >
          <div className="w-full min-w-[320px] max-w-[1140px] h-full px-[32px] bg-transparent flex justify-between items-center">
            <a
              href=""
              className="w-[140px] h-[48px] bg-gray-900 rounded-[16px] max-[320px]:w-[70px]"
            ></a>

            <a
              href=""
              className="w-fit h-fit px-4 py-2 bg-[#3D8BFD] rounded-[8px] hover:bg-white transition-all duration-300 group"
            >
              <p className="text-base text-white font-medium group-hover:text-[#3D8BFD]">
                Masuk
              </p>
            </a>
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
              className={`w-full min-w-[320px] max-w-[1148px] h-[48px]  px-8 bg-transparent flex gap-4 justify-between items-center transition-all duration-300 max-[441px]:px-4 ${
                showNavbar ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <a
                href=""
                className="w-[140px] h-12 bg-white rounded-2xl max-[441px]:hidden"
              ></a>
              <div className="w-full max-w-[720px] flex flex-row items-center justify-between border-2 px-2 py-2 bg-white rounded-3xl shadow-[0_0_15px_rgba(255,255,255,0.5)] text-sm outline-none text-black transition-all duration-300 overflow-hidden hover:shadow-[0_0_15px_rgba(255,255,255,1)] hover:border-[#084A83]/50 focus:shadow-[0_0_15px_rgba(255,255,255,1)] focus:border-[#084A83]">
                <FaBell className="w-8 h-6 text-[#3D8BFD] hover:text-white transition-all duration-300 min-[441px]:hidden group" />
                <input
                  type="text"
                  className="w-full px-4"
                  placeholder="Search id / content / reporter"
                  onFocus={(e) => e.target.select()}
                />
                <a
                  href=""
                  className="w-10 h-8 bg-[#3D8BFD] rounded-2xl hover:bg-white transition-all duration-300 min-[441px]:hidden group"
                ></a>
              </div>
              <div className="w-fit h-full flex gap-4 items-center max-[441px]:hidden">
                <div className="w-fit h-full flex items-center">
                  <a href="" className="w-6 h-6 bg-white flex items-center">
                    <FaBell className="w-8 h-6" />
                  </a>
                  <a
                    href=""
                    className="w-8 h-8 bg-[#3D8BFD] rounded-[8px] hover:bg-white transition-all duration-300 group"
                  ></a>
                </div>
              </div>
            </div>
            {/* <div className="w-full min-w-[320px] max-w-[1148px] bg-transparent flex gap-4 items-center">
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
            </div> */}
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
