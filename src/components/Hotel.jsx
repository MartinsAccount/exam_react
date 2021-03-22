import React, { useState } from "react";
import Subscription from "./Subscription";

const Hotel = ({ hotel }) => {
    const [details, setDetails] = useState(false);
    const [subscript, setSubscript] = useState(false);

    return (
        <div>
            <h2>{hotel.name}</h2>
            <button onClick={() => setDetails(!details)}>
                {!details ? "Show more" : "Show less"}
            </button>
            {details && (
                <>
                    <p>
                        {hotel.city} ({hotel.stars})
                    </p>
                    <button onClick={() => setSubscript(!subscript)}>
                        Request more info about {hotel.name}
                    </button>
                </>
            )}
            {subscript && (
                <Subscription
                    close={() => setDetails(false)}
                    dissapear={() => setSubscript(false)}
                    name={hotel.name}
                />
            )}
        </div>
    );
};

export default Hotel;
