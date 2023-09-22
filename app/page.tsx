import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  //@ts-ignore
  const session = await getServerSession(authOptions);
  
    return (
      <main>
        <LoginForm />
      </main>
    );

}