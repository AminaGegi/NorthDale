import React from 'react';

const StoriesItem = (props) => {
    return (
        <div style={{
            backgroundImage: `url(${props.imgSrc})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}
             className='w-24 h-40 rounded-lg flex align-items-end text-white justify-content-center'>
            <p className='my-2'> История </p>
        </div>
    );
};

export default StoriesItem;