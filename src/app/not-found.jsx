import Link from "next/link";
import { TbFaceIdError } from "react-icons/tb";

const Error404 = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-4">
      <TbFaceIdError size={100} className="text-primary" />
      <h2 className="text-4xl font-semibold">Page Not Found!</h2>
      <Link href={"/"} className="btn btn-primary btn-outline">
        Go Home
      </Link>
    </div>
  );
};

export default Error404;
