import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Search from "../pages/search/Search";
import List from "../pages/list/List";
import Article from "../pages/article/Article";
import Widget from "../pages/widget/Widget";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<Search />} />
            <Route path="/list" element={<List />} />
            <Route path="/article" element={<Article />} />
            <Route path="/widget" element={<Widget />} />
        </Routes>
    );
}

export default Router;