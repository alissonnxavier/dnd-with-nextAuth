import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Register() {


  return <RegisterForm />;
}