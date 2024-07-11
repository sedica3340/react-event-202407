import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
    console.log("home!");

    return (
        <>
            <p>
                <h1>My Home Page</h1>
                <Outlet />
            </p>
        </>
    );
};

export default Home;
