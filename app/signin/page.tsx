import { redirect } from "next/navigation";
import { SITE } from "@/lib/site";

export default function SignInPage() {
  redirect(SITE.app);
}
