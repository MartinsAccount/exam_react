import React, { useState } from "react";
import LoadingMask from "./LoadingMask";

const Subscription = ({ name, dissapear, close }) => {
    const [disabled, setDisabled] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [response, setResponse] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = (e) => {
        setInputValue(e.target.value);

        if (
            e.target.value.indexOf("@") > 0 &&
            e.target.value.indexOf(".") > 0
        ) {
            setDisabled(false);
        }
    };

    const postFetch = () => {
        setLoading(true);
        close();
        fetch("api/hotels/subscribe", {
            method: "post",
            body: JSON.stringify({
                email: inputValue,
                name: name,
            }),
        })
            .then((resp) => {
                setResponse(true);
                setLoading(false);
            })
            .catch((err) => setError(true))
            .finally(() => setTimeout(dissapear, 5000));
    };

    return (
        <div>
            {!response && !loading ? (
                <>
                    <input onChange={validate} type="text" />
                    <button onClick={postFetch} disabled={disabled}>
                        Submit
                    </button>
                </>
            ) : loading ? (
                <LoadingMask />
            ) : inputValue === "a@b.c" &&
              name === "Hotel Curabitur suscipit suscipit" ? (
                <p>Already subscribed</p>
            ) : (
                <p>Subscribed</p>
            )}
        </div>
    );
};

export default Subscription;
