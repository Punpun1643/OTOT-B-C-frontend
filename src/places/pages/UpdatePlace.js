import React from "react";
import { useParams } from 'react-router-dom';

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import './PlaceForm.css';

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

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        );
    }

    return (
        <form className="place-form">
            <Input 
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title!"
                onInput={() => {}}
                value={identifiedPlace.title}
                valid={true}
            />
            <Input 
                id="description"
                element="textarea"
                type="text"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (minimum 5 characters)!"
                onInput={() => {}}
                value={identifiedPlace.description}
                valid={true}
            />
            <Button type="submit" disabled={true}>
                UPDATE PLACE
            </Button>
        </form>
    );
}

export default UpdatePlace;
