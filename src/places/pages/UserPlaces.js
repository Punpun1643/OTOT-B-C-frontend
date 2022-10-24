import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory} from 'react-router-dom';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import PlaceList from '../components/PlaceList';
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from '../../shared/hooks/http-hook';

const UserPlaces = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [ loadedPlaces, setLoadedPlaces ] = useState();

    const userId = useParams().userId;
    const history = useHistory();

    const placeDeletedHandler = deletedPlaceId => {
        setLoadedPlaces(prevPlaces => {
            prevPlaces.filter(place => place.id !== deletedPlaceId);
        })
    }

    useEffect(() => {
        const fetchPlaces = async () => {
            
            try {
                const responseData = await sendRequest(`http://localhost:8000/api/places/user/${userId}`, 'GET', null, {
                    Authorization: 'Bearer ' + auth.token
                });
                setLoadedPlaces(responseData.places);
            } catch (err) {}
        }
        fetchPlaces();
    }, [sendRequest, userId]);

    const returnHandler = () => {
        history.push('/')
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={returnHandler} />
            {isLoading && (
                <div className="center">
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />}
        </React.Fragment>
    );
}

export default UserPlaces;
