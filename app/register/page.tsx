import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function RegisterPage() {




    
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">Create your account</CardTitle>
          <CardDescription className="text-gray-500 mt-2">
            Enter your Name, Email and Password to create your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <form className="space-y-4">
          <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Name
              </Label>
              <Input
                type="name"
                id="name"
                placeholder="name"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email address
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1"
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full mt-2">
              Register
            </Button>
          </form>
          <div className="mt-6 text-center text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-orange-500 hover:underline">
              Login
            </a>
          </div>
        </CardContent>
      </Card>

      
    </main>
  );
}
