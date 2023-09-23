import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

function DropZone(props) {

    const [base64, setBase64] = useState('');
    const [preview, setPreview] = useState('');

    const handleDrop = useCallback((files) => {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setBase64(e.target.result);
        }

        const result = reader.readAsDataURL(file);
        setPreview(result);
    }, [])

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop
    });

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
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
                {base64 === ''? '': <h4 className='text-sky-500 mt-5'>Image droped</h4>}
                <ul>{files}</ul>
                <ul>
                    {base64 === '' ? '' :
                        <Image
                            src={base64}
                            height={100}
                            width={100}
                            alt='uploaded image'
                        />}
                </ul>
            </aside>
        </section>
    );
}

export default DropZone;