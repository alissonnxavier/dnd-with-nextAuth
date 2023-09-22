import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";



const page = async () => {
    if(signOut()){
        return (
            redirect('/')
        )
    }
    }
    

export default page;