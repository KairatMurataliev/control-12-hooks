import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./Routes";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <Layout>
            <Routes/>
        </Layout>
    );
}

export default App;
