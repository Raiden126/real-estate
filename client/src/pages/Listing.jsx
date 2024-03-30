import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const Listing = () => {
    SwiperCore.use([Navigation])
    const [listing, setlisting] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)
    const params = useParams()
    useEffect(() => {
        const fetchListing = async () => {
            try {
                setloading(true)
                const res = await fetch(`/api/listing/get/${params.listingId}`)
                const data = await res.json();
                if(data.success === false) {
                    setloading(false)
                    seterror(true)
                    return;
                }
                setlisting(data); 
                setloading(false)
                seterror(false)
            } catch (error) {
                setloading(false)
                seterror(true)
            }
            
        }

        fetchListing();
    }, [params.listingId])

  return (
    <main>
        {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
        {error && <p className='text-center my-7 text-2xl'>Something went wrong</p>}
        {listing && !loading && !error && <>
        <Swiper navigation>
            {listing.imageUrls.map((url) => (
                <SwiperSlide key={url}>
                    <div className='h-[300px]' style={{background: `url(${url}) center no-repeat`, backgroundSize: 'cover'}}></div>
                </SwiperSlide>
            ))}
        </Swiper>
        </>}
    </main>
  )
}

export default Listing