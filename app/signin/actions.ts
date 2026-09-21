"use server";

import { redirect } from "next/navigation";

export async function continueToDashboard() {
  redirect("/signin?pending=1");
}
