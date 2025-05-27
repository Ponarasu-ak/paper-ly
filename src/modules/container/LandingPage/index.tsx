import { useNavigate } from "react-router-dom";
import { ArrowRight, Logo } from "../../../assets";
import { ButtonMui, TextUndeline } from "../../../components";

const LandingPage = () => {
  const navigate = useNavigate();

  // const handleNavigation = () => {
  //   navigate("/signin");
  // };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#fff",

      }}
      className="flex flex-col"
    >
      {/* <Navbar enableOverview/> */}
      <div className="flex justify-between items-center px-5 md:px-10 py-6">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} width={110} />
        </div>
        <div>
          <TextUndeline text="Overview" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 md:gap-6 h-full">
        <div
          style={{
            textAlign: "center",
            lineHeight: "1.4",
          }}
          className=" text-6xl    font-extrabold  md:text-7xl md:font-bold"
        >
          Write Your Thoughts,
          <br /> Stay Clear.
        </div>
        <div
          style={{ color: "var(--description)", textAlign: "center" }}
          className="text-lg md:text-2xl font-medium"
        >
          Simple. Your notes, done right.
        </div>
        <div className="mt-6">
          <ButtonMui
            btnLable="Try Paperly"
            btnColor="var(--primary)"
            btnPadding="10px 20px"
            btnVarient="outlined"
            btnRadius="50px"
            btnEndIcon={<ArrowRight />}
            // btnOnclick={handleNavigation}
          />
        </div>
      </div>
    </div>
  );
};

export { LandingPage };

