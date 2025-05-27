import { Link } from "react-router-dom";
import { ButtonMui } from "../../../components";

const Splash = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-black gap-4 relative">
      <h1 className="text-[80px] font-bold">404</h1>
      <p className="text-3xl font-serif font-semibold">Look like you're lost</p>
      <p className="text-center mt-2 text-sm">
        We're sorry, but the page you're looking for is not available.
      </p>
      <Link to="/">
        <div className="mt-4">
          <ButtonMui btnLable="Go Home" />
        </div>
      </Link>
    </div>
  );
};

export { Splash };
