import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';
import React from 'react';
import FeaturedPlaceCards from '../Cards/FeaturedPlaceCards';

const FeaturedPlace = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-12'>
            <SectionHeading title="Featured Place" description="" />
            Featured Place 
            <FeaturedPlaceCards />

        </div>
    );
};

export default FeaturedPlace;