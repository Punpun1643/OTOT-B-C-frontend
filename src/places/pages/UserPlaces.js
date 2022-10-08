import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'National University of Singapore',
        description: 'Singapore university located in Kent Ridge',
        imageUrl:'https://eonreality.com/wp-content/uploads/2022/03/NUS-.jpeg',
        address: '21 Lower Kent Ridge Rd, Singapore 119077',
        location: {
            lat: 1.290665504,
            lng: 103.772663576
        },
        creator: 'u1'

    },
    {
        id: 'p2',
        title: 'National University of Singapore',
        description: 'Singapore university located in Kent Ridge',
        imageUrl:'https://eonreality.com/wp-content/uploads/2022/03/NUS-.jpeg',
        address: '21 Lower Kent Ridge Rd, Singapore 119077',
        location: {
            lat: 1.290665504,
            lng: 103.772663576
        },
        creator: 'u2'

    }
];
const UserPlaces = () => {
    return (
        <PlaceList items={DUMMY_PLACES} />
    );
}

export default UserPlaces;
