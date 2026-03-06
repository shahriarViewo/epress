import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | OnePrint Vendor Dashboard",
  description: "Sign in to your OnePrint vendor account",
};

export default function SignIn() {
  return <SignInForm />;
}
