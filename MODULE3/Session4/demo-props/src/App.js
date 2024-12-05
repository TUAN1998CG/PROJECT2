import Welcome from './Components/Welcome.js';
import {Infomation} from "./Components/Welcome.js";
import Header from "./Components/PracticeRouter/Header";
import React from "react";
import {Route, Routes} from "react-router-dom";
import List from "./Components/PracticeRouter/List";
import Home from "./Components/PracticeRouter/Home";
import Add from "./Components/PracticeRouter/Add";
import Detail from "./Components/PracticeRouter/detail";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/products'} element={<List/>}></Route>
                <Route path={'/home'} element={<Home/>}></Route>
                <Route path={'/products/add'} element={<Add/>}></Route>
                <Route path={'/products/detail/:id'} element={<Detail/>}></Route>
            </Routes>
        </>
    );
}

export default App;

