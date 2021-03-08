import React from 'react';
import Content from './Content';
import TopNav from './TopNav';

function Dashboard({setSideBarToggle}) {
    return (
        <div className="dashboard">
            <TopNav setSideBarToggle={setSideBarToggle}/>
            <Content/>
        </div>
    );
}

export default Dashboard;