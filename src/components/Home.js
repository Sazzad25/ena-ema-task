import React from 'react';
import Navbar from './Navbar';
import Section1 from './Section1';
import SearchBar from './SearchBar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <SearchBar />
            <Section1 />
        </div>
    );
};

export default Home;