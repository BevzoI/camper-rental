import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { camperActions } from '../store/slices/camperSlice';
import { Camper } from './Camper';
import { Loader } from '../Loader/Loader';

const Campers = () => {
    const { campers, loading } = useSelector((state) => state.campers);
    const dispatch = useDispatch();
    const [displayedCampers, setDisplayedCampers] = useState(4);

    useEffect(() => {
        dispatch(camperActions.getAll());
    }, [dispatch]);

    const showMoreCampers = () => {
        setDisplayedCampers(campers.length);
    };

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {campers.slice(0, displayedCampers).map((camper) => (
                        <Camper camper={camper} key={camper._id} />
                    ))}
                    {displayedCampers < campers.length && (
                        <button onClick={showMoreCampers}>Load more</button>
                    )}
                </>
            )}
        </div>
    );
};

export { Campers };