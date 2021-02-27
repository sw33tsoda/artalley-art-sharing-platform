import Axios from 'axios';
import { FastField } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';
import Content from './Content';

function Search() {
    const [isOpen,setIsOpen] = useState(true);
    const [isLoading,setIsLoading] = useState(false);
    const [result,setResult] = useState([]);
    const [searchInput,setSearchInput] = useState('3');
    const [currentSearchType,setCurrentSearchType] = useState('user');
    let debounce = null;

    console.log(currentSearchType);

    useEffect(() => {
        if (searchInput) {
            setIsLoading(true);
            const getResult = async () => {
                await Axios.get(`/public/api/community/resources/public/search/${searchInput}-${currentSearchType}`).then((response) => {
                    console.log(response.data.result);
                    setResult(response.data.result);
                    setIsLoading(false);
                }).catch((error) => {
                    console.log(error.response);
                });
            }
            getResult();
        }
    },[searchInput,currentSearchType]);

    const handleSetSearchInput = (event) => {
        const {value} = event.target;
        clearTimeout(debounce);
        debounce = setTimeout(() => {
            setSearchInput(value);
        },500);
    }

    return (
        <React.Fragment>
            <p className="search" onClick={() => setIsOpen(true)}><i className="fas fa-search"></i><span className="text">TÌM KIẾM</span></p>
            {isOpen && (
                <div className="search-overlay">
                    <div className="search-bar">
                        <input className="input" onChange={handleSetSearchInput}/>
                        <p className="close" onClick={() => setIsOpen(false)}><i className="fas fa-times"></i></p>
                    </div>
                    <div className={classnames("search-type")}>
                        <p className={classnames('type',{selected:currentSearchType == 'art'})} onClick={() => setCurrentSearchType('art')}>Ảnh</p>
                        <p className={classnames('type',{selected:currentSearchType == 'showcase'})} onClick={() => setCurrentSearchType('showcase')}>Quày</p>
                        <p className={classnames('type',{selected:currentSearchType == 'user'})} onClick={() => setCurrentSearchType('user')}>Người dùng</p>
                    </div>
                    <Content data={result} type={currentSearchType}/>
                </div>
            )}
        </React.Fragment>
    );
}


export default Search;