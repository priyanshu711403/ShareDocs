import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
   return (
      <div className="grid grid-cols-3">
         <div className="border rounded-lg p-5 m-auto grid-span-1">
            <p>
               test username- :"test"
               <br />
               password-"test"
            </p>
         </div>
         <main className="auth-page grid-span-2">
            <SignIn />
         </main>
      </div>
   );
};
export default SignInPage;
