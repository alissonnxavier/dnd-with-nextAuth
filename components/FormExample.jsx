"use client";

import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import React, { useCallback, useState } from 'react'


const FormExample = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [base64, setBase64] = useState([]);

    const handleDrop = useCallback((files) => {
        let i = 0;
        let images = [];
        while (i < files.length) {
            const reader = new FileReader();
            const file = files[i];
            reader.onload = (e) => {
                images.push(e.target.result);
            }
            i++
            reader.readAsDataURL(file);
        }
        setBase64(images);

    }, [])

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop
    });

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const handleSubmit = () => {
        const res = axios.post('api/form', {
            title,
            description,
            image: base64,
        }).then((resolve, reject) => {
            try {
                toast.success(resolve.data.message, {
                    style: {
                        border: '3px solid #713200',
                        padding: '16px',
                        color: '#713200',
                        background: '#23eb73',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                });
            } catch {
                console.log(reject);
            }
        });
    }

    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="Title" className="w-60">Title</Label>
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

            {/* DropZone here */}
            <section
                className="
            border-dashed 
            border-2 
            border-sky-500
            rounded-lg
            p-4
            m-4
            shadow-lg shadow-cyan-500/50
            hover:shadow-md hover:shadow-cyan-500/50
        ">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                <aside>
                    {base64 === '' ? '' : <h4 className='text-sky-500 mt-5'>Image droped</h4>}
                    <ul>{files}</ul>
                    <ul className='flex justify-center m-6'>
                        {base64.length === 0 ? '' :
                            base64.map((image, index) => (
                                <div 
                                key={index}
                                className="flex"
                                >
                                    <Image
                                        className="p-1"
                                        key={index}
                                        src={image}
                                        height={200}
                                        width={200}
                                        alt='uploaded image'
                                    />
                                </div>
                            ))

                        }
                    </ul>
                </aside>
            </section>

            {/*     */}

            <Button
                onClick={handleSubmit}
                variant='link'
                className="
                bg-indigo-500
                hover:opacity-75
                text-white
                rounded-xl
               ">Send</Button>
            <Toaster />
        </div>
    )
}

export default FormExample