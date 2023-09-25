"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from "axios";
import { Button } from "./ui/button";
import { useEffect, useState, FormEvent, EventHandler } from "react";
import GetCards from '@/components/helpers/GetCards';
import { RingLoader } from 'react-spinners';

const CardPreview = () => {

  let cards = GetCards();
  console.log(cards.length);
  if (cards.length == 0) {
    return (
      <div className="flex justify-center items-center mt-40">
        <RingLoader color="#fc0335" size={250} />
      </div>
    )
  }

  return (
    <>

      <div >

        {cards?.data?.data?.map((card) => (
          <div key={card._id}>
            <p>{card.title}</p>
            <p>{card.id}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default CardPreview