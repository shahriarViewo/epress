import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | OnePrint Vendor Dashboard",
  description: "Create a new OnePrint vendor account",
};

export default function SignUp() {
  return <SignUpForm />;
}
