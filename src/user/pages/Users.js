import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'Git',
        image: 'https://static.wikia.nocookie.net/kirby/images/4/4e/KatFL_Kirby_artwork.png/revision/latest?cb=20220130163926&path-prefix=en',
        places: 3
    }];

    return (
        <UserList items={USERS} />
    );
}

export default Users; 
