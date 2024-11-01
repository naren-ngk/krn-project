import { GridPattern } from '@/components/ui/Grid'
import { VelocityScroll } from '@/components/ui/Marquee';
import React from 'react'

function Hero() {
    return (
        <div className='w-full'>
            <GridPattern />
            <div className='flex justify-center items-center'>
                <VelocityScroll className={'text-[100vh] font-medium tracking-[-70px] leading-none text-white transform scale-y-150'} text={'THINK BIG.'} />
            </div>
        </div>
    );
}

export default Hero