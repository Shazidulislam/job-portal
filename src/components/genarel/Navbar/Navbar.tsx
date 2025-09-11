import Image from "next/image";
import Link from "next/link";
// import logo  from "@/public/logo.png"
import logo from "../../../../public/logo.png";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-6">
      <Link href={"/"} className="flex gap-2 justify-center items-center">
        <Image src={logo} alt="Job Marshal" height={40} width={40} />
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Marshal</span>
        </h1>
      </Link>
      {/* login button and  drack & white them  */}
      <div className="flex justify-center gap-3 items-center">
        <ThemeToggle/>
        <Button>Login</Button>
      </div>
    </div>
  );
}
