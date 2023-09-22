"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button";


export default function UserInfo() {
    const { data: session } = useSession();
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setName(session?.user?.name);
        setEmail(session?.user?.email);
    }, [setName, setEmail, session?.user?.name, session?.user?.email]);

    return (
        <div className="flex justify-end m-4">


            <HoverCard>
                <HoverCardTrigger asChild>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 shadow-xl rounded-xl shadow-red-500/50">
                    <div className="flex justify-between space-x-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/vercel.png" />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">@nextjs</h4>
                            <p className="text-sm">
                                {session?.user?.name}
                            </p>
                            <p className="text-sm">
                                {session?.user?.email}
                            </p>
                            <div className="flex items-center pt-2">
                                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                <span className="text-xs text-muted-foreground">
                                    Joined at December
                                </span>
                            </div>
                        </div>
                    </div>
                    <div >
                        <Button
                            onClick={() => { signOut({ callbackUrl: '/' }) }}
                            variant="destructive"
                        >
                            Sign Out
                        </Button>
                    </div>

                </HoverCardContent>
            </HoverCard>
        </div>
    );
}