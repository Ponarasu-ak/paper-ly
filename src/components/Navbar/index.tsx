import React from "react";
import { Logo } from "../../assets";
import { ProfileDrawer } from "../ProfileDrawer";

interface Navbarprops {
  enableOverview?: boolean;
  enableSettingAndProfile?: boolean;
}

const Navbar: React.FC<Navbarprops> = ({}) => {
  // const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  // const [showProfileMenu, setShowProfileMenu] = useState(false);

  // const settingsRef = useRef<any>(null);
  // const profileRef = useRef<any>(null);

  // Detect clicks outside dropdowns
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       settingsRef.current &&
  //       !settingsRef.current.contains(event.target as Node)
  //     ) {
  //       setShowSettingsMenu(false);
  //     }

  //     if (
  //       profileRef.current &&
  //       !profileRef.current.contains(event.target as Node)
  //     ) {
  //       setShowProfileMenu(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);
  return (
    <div className="flex fixed w-full top-0 bg-white justify-between items-center max-h-80 px-3 md:px-10 py-6">
      <div className="cursor-pointer">
        <img src={Logo} width={140} />
      </div>
      <div className="flex items-center gap-6">
        {/* Settings Dropdown */}
        {/* <div ref={settingsRef} className="relative cursor-pointer">
          <div onClick={() => setShowSettingsMenu((prev) => !prev)}>
            <Badge
              label="Settings"
              iconFront={<Settings height="16" width="16" />}
            />
          </div>

          {showSettingsMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 transition cursor-pointer">
                  Feedback
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 transition cursor-pointer">
                  Need Help?
                </li>
              </ul>
            </div>
          )}
        </div> */}

        <ProfileDrawer />

        {/* Profile Dropdown */}
        {/* <div ref={profileRef} className="relative cursor-pointer">
          <div onClick={() => setShowProfileMenu((prev) => !prev)}>
            <img src={ProfileAvatar} height="40px" width="40px" alt="" />
          </div>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-72 bg-white border rounded shadow-lg z-10 p-4 text-center">
              <img
                src="/your-profile-image-path.png"
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto"
              />
              <p className="mt-3 text-lg font-semibold text-gray-800">
                Ponarasu
              </p>
              <p className="text-sm text-gray-500 mb-3">
                ponarasu.ak@gmail.com
              </p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                View Profile
              </button>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export { Navbar };

