"use server";
import { db } from "@/db/index";
import { users } from "@/db/schema";

export async function insertOneUser(name: string, passDrugTest: boolean) {
  await db.insert(users).values({ name: name, passDrugTest: passDrugTest });
}
