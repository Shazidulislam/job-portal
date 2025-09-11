import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import LoginForm from "@/components/forms/LoginForm";
export default function SignIn() {
  return (
    <div className="flex min-h-screen w-screen justify-center items-center">
      <div className="w-full max-w-sm flex flex-col gap-6 ">
        <Link href={"/"} className="flex gap-2 items-center  self-center ">
          <Image src={logo} alt="Job Marshal" className="size-10" />
          <h1 className="text-2xl font-bold">
            Job<span className="text-primary">Spark</span>
          </h1>
        </Link>
        <LoginForm/>
      </div>
    </div>
  );
}
