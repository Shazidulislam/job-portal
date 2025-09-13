import { auth, signIn } from "@/app/utils/auth";
import GitHub from "../Logo/githubLogo";
import Google from "../Logo/GoogleLogo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SubmitButton from "../genarel/SubmitButton";
import { redirect } from "next/navigation";

export default async function LoginForm() {

    const session = await auth()
    if(session?.user){
       return redirect("/")
    }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome Back</CardTitle>
        <CardDescription>
          Login with your Google or Github Account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <form
            action={async () => {
              "use server";
              await signIn("github", {
                redirectTo: "/",
              });
            }}
          >
            <SubmitButton
              variant="outline"
              width={"w-full"}
              text="Login With Github"
              icon={<GitHub />}
            />
          </form>
          <form>
            <SubmitButton
              variant="outline"
              width={"w-full"}
              text="Login With Google"
              icon={<Google />}
            />
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
