import Image from "next/image";
import Link from "next/link";
// import logo  from "@/public/logo.png"
import logo from "../../../../public/logo.png";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { auth, signOut } from "@/app/utils/auth";
export default async function Navbar() {
  const session = await auth()
  return (
    <div className="flex justify-between items-center py-6">
      <Link href={"/"} className="flex gap-2 justify-center items-center">
        <Image src={logo} alt="Job Marshal" height={40} width={40} />
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Spark</span>
        </h1>
      </Link>
      {/* login button and  drack & white them  */}
      <div className="flex justify-center gap-3 items-center">
        <ThemeToggle/>
       {
        session ? <form action={async()=>{
           "use server";
           await signOut({redirectTo:"/"})
        }}>
           <Button className="text-white cursor-pointer">Logout</Button>
        </form> :  <Link href={"/signin"} className={buttonVariants({variant:"outline" , size:"lg" })}>Login</Link>
       }

       
      </div>
    </div>
  );
}
