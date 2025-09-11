import GitHub from "../Logo/githubLogo";
import Google from "../Logo/GoogleLogo";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function LoginForm(){
  return(
    <Card>
        <CardHeader className="text-center">
            <CardTitle className="text-xl">Welcome Back</CardTitle>
            <CardDescription>
                Login with your Google or Github Account
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col gap-4">
                <form>
                    <Button className="w-full" variant={"outline"}>
                        <GitHub className="size-5"/>
                        Login With Github</Button>
                </form>
                <form>
                    <Button className="w-full" variant={"outline"}>
                        <Google className="size-5"/>
                        Login With Google</Button>
                </form>
            </div>
        </CardContent>
    </Card>
  )
}