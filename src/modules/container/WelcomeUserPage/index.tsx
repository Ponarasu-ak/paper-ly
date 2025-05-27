import { PlusIcon } from "../../../assets";
import { ButtonMui, Navbar } from "../../../components";
import { WelcomeCard } from "../../../components/WelcomeCard";
import { newFeatures } from "../../../utils/constants";

const WelcomeUserPage = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      {/* <DashboardNavBar /> */}
      <Navbar enableSettingAndProfile />
      <div className=" flex flex-col gap-5 justify-between h-full pt-24  px-4">
        {/* Main Heading */}
        <div className=" px-4 ">
          <p className=" text-2xl md:text-5xl text-center leading-tight font-bold mb-3">
            Hi Naveen, Welcome to NoteBook
          </p>
          <p className="text-sm md:text-lg text-center text-gray-500 font-medium">
            Notebook is a simple and convenient tool for writing, organizing,
            and storing notes.
            <br />
            It helps users keep track of ideas, and important information in one
            place.
          </p>
        </div>

        {/* Feature Cards */}
        <div className=" flex gap-7 justify-center flex-wrap ">
          {newFeatures.map((el: any, index: number) => (
            <WelcomeCard
              icon={el.icon}
              title={el.header}
              description={el.subtext}
              key={index}
            />
          ))}
        </div>

        {/* Floating Action Button */}
        <div className="flex justify-center pb-3 items-center ">
          <ButtonMui
            btnRadius="25px"
            btnStartIcon={
              <PlusIcon strokeColor="#fff" height="20" width="20" />
            }
            btnLable="Create New Notebook"
          />
        </div>
      </div>
    </div>
  );
};

export { WelcomeUserPage };
