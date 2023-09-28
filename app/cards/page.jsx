
import Navbar from '@/components/Navbar';
import CardPreview from '@/components/CardPreview';

const page = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center'>
                <CardPreview />
            </div>
        </>
    )
}

export default page