import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingMask from "./components/LoadingMask";
import Hotel from "./components/Hotel";

const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const result = await fetch("api/hotels");
        const jsonData = await result.json();

        setData(jsonData);
        setLoading(false);
    };

    return (
        <div className="App">
            {loading ? (
                <LoadingMask />
            ) : (
                data.map((hotel, index) => <Hotel key={index} hotel={hotel} />)
            )}
        </div>
    );
};

export default App;
