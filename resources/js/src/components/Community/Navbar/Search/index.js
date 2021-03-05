import Axios from 'axios';
import { FastField } from 'formik';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import Content from './Content';

function Search() {
    const [isOpen,setIsOpen] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [result,setResult] = useState([]);
    const [searchInput,setSearchInput] = useState('');
    const [currentSearchType,setCurrentSearchType] = useState('art');
    const inputRef = useRef();

    if (isOpen) {
        inputRef.current.focus();
    }

    let debounce = null;
    useEffect(() => {
        if (searchInput) {
            setIsLoading(true);
            const getResult = async () => {
                await Axios.get(`/public/api/community/resources/public/search/${searchInput}-${currentSearchType}`).then((response) => {
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
            {/* {isOpen && ( */}
                <div className={classnames('search-overlay',{hide:!isOpen})}>
                    <div className="search-bar">
                        <input className="input" onChange={handleSetSearchInput} ref={inputRef}/>
                        <p className="close" onClick={() => setIsOpen(false)}><i className="fas fa-times"></i></p>
                    </div>
                    <div className={classnames("search-type")}>
                        <p className={classnames('type',{selected:currentSearchType == 'art'})} onClick={() => setCurrentSearchType('art')}>Ảnh</p>
                        <p className={classnames('type',{selected:currentSearchType == 'showcase'})} onClick={() => setCurrentSearchType('showcase')}>Quày</p>
                        <p className={classnames('type',{selected:currentSearchType == 'user'})} onClick={() => setCurrentSearchType('user')}>Người dùng</p>
                    </div>
                    {isLoading ? (
                        <center className="loading-wrapper">
                            <img className="loading" width="50px" height="50px" src="https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif"/>
                        </center>
                    ) : (
                        result && result.length > 0 ? <Content data={result} type={currentSearchType}/> : <h2 className="no-result">Không có kết quả.</h2>
                    )}
                    
                </div>
            {/* )} */}
        </React.Fragment>
    );
}


export default Search;