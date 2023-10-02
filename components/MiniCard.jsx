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
import CardStack from '@/components/cardmotion';


export default function MiniCard({ title, description, images }) {

  return (
    <Card className="w-48 m-2">
      <CardHeader>
        <CardTitle className='w-28 overflow-hidden'>{title}</CardTitle>
        <CardDescription className='w-28 overflow-hidden'>{description}.</CardDescription>
      </CardHeader>
      <CardContent>
        <div >
          <CardStack />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
