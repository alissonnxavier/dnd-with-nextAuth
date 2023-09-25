import FormExample from '@/components/FormExample'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <div
                className='
            flex 
            w-full
            mt-52
            items-center 
            justify-center
            align-middle
        '>
                <FormExample />
            </div>
        </>
    )
}

export default page