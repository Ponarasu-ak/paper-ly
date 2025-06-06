import { useNavigate } from "react-router-dom";
import { ArrowRight, Logo } from "../../../assets";
import { ButtonMui, Input, TextUndeline } from "../../../components";

const SignUp = () => {
  //     const [fullName, setFullName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    // e.preventDefault();
    // Add your sign-up logic here
  };
  return (
    <div>
      <div className="flex flex-col h-screen ">
        {/* Logo */}
        <div
          className="cursor-pointer py-6 px-5 md:px-10   "
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="App Logo" width={110} />
        </div>
        {/* <Navbar/> */}

        {/* Centered Card */}
        <div className=" h-full flex justify-center  items-center px-5 md:px-0 ">
          <div className="flex flex-col gap-5 md:gap-6 border border-gray-200 rounded-md shadow-md py-6 px-7 md:px-8 w-full max-w-sm bg-white">
            {/* Heading */}
            <div className="text-center">
              <div className="text-2xl font-semibold mb-1">
                Create your account
              </div>
              <p className="text-gray-600 text-sm">Sign up to get started</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                // inputLabel="Full Name"
                value={""}
                styles={{ width: "100%", height: "50px" }}
                onChange={() => {}}
                placeholder="Name"
              />
              <Input
                
                value={""}
                styles={{ width: "100%", height: "50px" }}
                onChange={() => {}}
                placeholder="Email"
              />
              <Input
                // inputLabel="Password"
                value={""}
                variant="password"
                styles={{ width: "100%", height: "50px" }}
                onChange={() => {}}
                placeholder="Create a password"
              />
              <Input
                // inputLabel="Password"
                value={""}
                variant="password"
                styles={{ width: "100%", height: "50px" }}
                onChange={() => {}}
                placeholder="Confirm password"
                />
              <div style={{ marginTop: "4px", width: "100%" }}>
                <ButtonMui
                  btnPadding="10px"
                  btnLable="Sign up"
                  btnWidth="100%"
                  btnColor="#000"
                  // btnOnclick={() => navigate("/welcomeuserpage")}
                  btnEndIcon={<ArrowRight strokeColor="#fff" height="18" />}
                />
              </div>
            </form>

            {/* Sign In Link */}
            <div className="text-sm flex justify-center items-center text-gray-700">
              <div> Already have an account?</div>
              <span
                onClick={() => navigate("/signin")}
                className="font-medium text-black ml-1 cursor-pointer"
              >
                <TextUndeline enableHoverEffect text="Sign In" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { SignUp };

