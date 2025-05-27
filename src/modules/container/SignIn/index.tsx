import { useNavigate } from "react-router-dom";
import { ArrowRight, Logo } from "../../../assets";
import { ButtonMui, Input, TextUndeline } from "../../../components";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Add your login logic here
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Logo */}
      <div className="cursor-pointer py-6 px-5 md:px-10  " onClick={() => navigate("/")}>
        <img src={Logo} alt="App Logo" width={140} />
      </div>
      {/* <Navbar/> */}

      {/* Centered Card */}
      <div  className=" h-full  flex justify-center items-center  px-4">
        <div className="flex flex-col gap-6 border border-gray-200 rounded-md shadow-md px-6 py-10 w-full max-w-sm">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-semibold mb-1">Welcome back!</h1>
            <p className="text-gray-600 text-sm">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input
              inputLabel="Email"
              value={"email"}
              styles={{ width: "100%", height: "50px" }}
              onChange={() => {}}
              placeholder="you@example.com"
            />
            <Input
              inputLabel="Password"
              value={"password"}
              variant="password"
              styles={{ width: "100%", height: "50px" }}
              onChange={() => {}}
              placeholder="Enter your password"
            />
            <div style={{ marginTop: "16px", width: "100%" }}>
              <ButtonMui
                btnPadding="10px"
                btnLable="Sign In"
                btnWidth="100%"
                btnColor="#000"
                btnOnclick={()=> navigate("/welcomeuserpage")}
                btnEndIcon={<ArrowRight strokeColor="#fff" height="18" />}
              />
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="text-sm text-center text-gray-700 flex  justify-center ">
            <div>Don’t have an account?</div>
            <span
              className="font-medium text-black ml-1 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              <TextUndeline enableHoverEffect text="Sign Up" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SignIn };

