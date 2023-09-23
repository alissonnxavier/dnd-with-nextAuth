"use client";

import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button"
import DropZone from '@/components/DropZone';

import React, { useCallback, useState } from 'react'


const FormExample = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="Title" className="w-60">Email</Label>
            <Input
                type="text"
                id="Title"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
                placeholder="Title"
            />
            <Label htmlFor="Description" className="w-60 mt-4">Description</Label>
            <Input
                className=""
                type="text"
                id="Title"
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}
                placeholder="Description"
            />
            <DropZone />
            <Button
                variant='link'
                className="
                bg-indigo-500
                hover:opacity-75
                text-white
                rounded-xl
               ">Send</Button>

        </div>
    )
}

export default FormExample