import React, { useState } from 'react';

function Search() {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <React.Fragment>
            <p className="search" onClick={() => setIsOpen(true)}><i className="fas fa-search"></i><span className="text">TÌM KIẾM</span></p>
            {isOpen && (
                <div className="search-overlay">
                    <div className="search-bar">
                        <input className="input"/>
                        <p className="close" onClick={() => setIsOpen(false)}><i className="fas fa-times"></i></p>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}


export default Search;