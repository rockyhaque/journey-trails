import DestinationDetails from '@/components/draft/DestinationDetails';
import Login from '@/components/draft/Login';
import ModernDetails from '@/components/draft/ModernDetails';
import ModernLogin from '@/components/draft/ModernLogin';
import Signup from '@/components/draft/Signup';
import React from 'react';

const DemoPage = () => {
    return (
        <div>
            <h1 className='text-xl font-bold text-center'>Demo Testing Page</h1>
            <br />
            <Login />
            <br />
            <Signup />
            <br />
            <DestinationDetails />
            <br />
            <ModernLogin />
            <br />
            <ModernDetails />

        </div>
    );
};

export default DemoPage;