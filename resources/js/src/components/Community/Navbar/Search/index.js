import React, { useState } from 'react';

function Search() {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <React.Fragment>
            <p className="search" onClick={() => setIsOpen(true)}><i className="fas fa-search"></i><span className="text">TÌM KIẾM</span></p>
            {isOpen && (
                <div className="search-overlay">
                    <h1>unused</h1>
                </div>
            )}
        </React.Fragment>
    );
}


export default Search;