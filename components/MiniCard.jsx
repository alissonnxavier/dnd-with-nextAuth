import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function MiniCard({ title, description, image }) {
  return (
    <Card className="w-48 m-2">
      <CardHeader>
        <CardTitle className='w-28 overflow-hidden'>{title}</CardTitle>
        <CardDescription className='w-28 overflow-hidden'>{description}.</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={image}
          height={200}
          width={200}
          alt='Card image'
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
