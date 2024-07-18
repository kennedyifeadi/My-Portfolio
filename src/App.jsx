import React from "react";
import Nav from "./components/nav";

const App = () =>{
    return (
        <div className="w-full h-[100dvh] overflow-x-hidden bg-[#1C1C1C] relative flex flex-col">
            <h1 className="text-red-500">hello world</h1>
            <Nav/>
        </div>
    );
};

export default App;