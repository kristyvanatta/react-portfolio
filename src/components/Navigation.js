import React, { useState } from 'react';


function Navigation(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <div>
            <ul className="nav nav-tabs">
                {tabs.map((tab) =>(
                    <li
                    className={
                        props.currentPage === tab ? "nav-item is-active" : "nav-item"
                    }
                    key={tab}
                    >
                        <a href={"#" + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                    >
                        {tab}
                    </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}




export default Navigation;