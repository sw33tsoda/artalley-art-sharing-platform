import Axios from 'axios';
import { FastField, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import InputField from '../../../../CustomFields/InputField';
import TextareaField from '../../../../CustomFields/TextareaField';
import SelectField from '../../../../CustomFields/SelectField';
import classnames from 'classnames';
import { ShowcaseValidation } from '../../../../Validations';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHistory } from 'react-router-dom';
import { setAnnouncementMessage } from '../../../../../store/community/announcer';

function CreateShowcase() {
    const [artsList,setArtsList] = useState({
        list:[],
        page:1,
        hasMore:true,
        maxPage:0,
        totalArts:null,
    });
    const [selectedArts,setSelectedArts] = useState([]);
    const [optionsList,setOptionsList] = useState({
        artChannels:[],
        privacies:[],
    });
    const {id:userId} = useSelector(state => state.auth.authenticatedUser);
    const [loading,setLoading] = useState(true);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        const getArtsList = async () => {
            await Axios.get(`/public/api/community/resources/arts?api_token=${localStorage.getItem('authenticatedUserToken')}&page=1`).then(response => {
                // console.log(response);
                setLoading(false);
                setArtsList({
                    ...artsList,
                    page:response.data.list.current_page,
                    list:response.data.list.data,
                    maxPage:response.data.list.last_page,
                    totalArts:response.data.list.total,
                    hasMore:true,
                });
            }).catch(error => {
                console.log(error.response);
            })
        }
        const getSelectionListOptions = async () => {
            await Axios.get('/public/api/community/resources/interface/upload-select-list').then(response => {
                const {data:{art_channels,privacies}} = response;
                setOptionsList({
                    artChannels:art_channels,
                    privacies:privacies,
                });
            }).catch(error => {
                console.log(error.response);
            });
        }
        
        getSelectionListOptions();
        getArtsList();
    },[userId]);

    const fetchMoreArtsData = async () => {
        if (artsList.maxPage > artsList.page) {
            setLoading(true);
            await Axios.get(`/public/api/community/resources/arts?api_token=${localStorage.getItem('authenticatedUserToken')}&page=${artsList.page + 1}`).then(response => {
                setArtsList({
                    ...artsList,
                    list:artsList.list.concat(response.data.list.data),
                    page:response.data.list.current_page,
                });
                setLoading(false);
            }).catch(error => {
                console.log(error.response);
            })
        } else {
            setArtsList({
                ...artsList,
                hasMore:false,
            })
        }
    }

    const handleSelectArt = (artId) => {
        let newSelectedArts = selectedArts;
        if (newSelectedArts.includes(artId)) {
            newSelectedArts = newSelectedArts.filter(selectedId => selectedId !== artId);
        } else {
            newSelectedArts.push(artId);
        }
        setSelectedArts([...newSelectedArts]);
    }

    const handleClearSelectedArts = () => {
        const newSelectedArts = [];
        setSelectedArts([...newSelectedArts]);
    }

    const initialValues = {
        title:'',
        subheading:'',
        description:'',
        privacy:1,
        channel:1,
    }

    const handleSubmitForm = async (values) => {
        const apiToken = localStorage.getItem('authenticatedUserToken');
        // Xử lý Data chuẩn bị gửi đi
        const data = new FormData();
        for (const key in values) {
            data.append(key,values[key]);
        }
        data.append('art_ids_list',selectedArts);
        await Axios.post(`/public/api/community/resources/showcases?api_token=${apiToken}`,data).then(response => {
            dispatch(setAnnouncementMessage({
                message:response.data.message,
                type:'success',
            }));
            history.push('/public/community/management');
        }).catch(error => {
            dispatch(setAnnouncementMessage({
                message:error.response.data.message,
                type:'danger',
            }));
        });
    }

    return (
        <div className="create-showcase">
            <h1 className="title">Tạo quầy trưng bầy</h1>
            <div className="showcase-form">
                <Formik initialValues={initialValues} validationSchema={ShowcaseValidation} onSubmit={handleSubmitForm}>
                    {({handleSubmit,isSubmitting}) => {
                        return (
                            <form className="form" onSubmit={handleSubmit}>
                                <div className={classnames('button-group',{hide: selectedArts.length == 0})}>
                                        <button className='submit button success' type="submit">{isSubmitting ? (
                                            <React.Fragment>
                                                <i className="fas fa-circle-notch fa-spin"></i>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <i className="fas fa-rocket"></i>
                                            </React.Fragment>
                                        )} </button>
                                    </div>
                                <div className="split">
                                    <FastField
                                        name="title"
                                        component={InputField}

                                        label="Tiêu đề"
                                        labelClassName="label"
                                        className="text-input"
                                        disabled={false}
                                        placeholder="Tiêu đề" 
                                        // formErrorClass="form-error textarea-error"
                                    />
                                    <FastField
                                        name="subheading"
                                        component={InputField}

                                        label="Tiêu đề phụ"
                                        labelClassName="label"
                                        className="text-input"
                                        disabled={false}
                                        placeholder="Tiêu đề phụ"
                                        // formErrorClass="form-error textarea-error"
                                    />
                                </div>

                                <FastField
                                    name='description'
                                    component={TextareaField}

                                    label="Mô tả"
                                    labelClassName="label"
                                    className="text-input"
                                    disabled={false}
                                    placeholder="Nhập mô tả (không bắt buộc)"
                                    // formErrorClass="form-error textarea-error"
                                />

                                <div className="split">
                                    {optionsList.privacies.length > 0 && <FastField
                                        name='privacy'
                                        component={SelectField}

                                        label="Ai có thể xem"
                                        labelClassName="label"
                                        className="text-input"
                                        disabled={false}
                                        options={optionsList.privacies}
                                        // placeholder="Nhập mô tả (không bắt buộc)"
                                        // formErrorClass="form-error textarea-error"
                                    />}

                                    {optionsList.artChannels.length > 0 && <FastField
                                        name='channel'
                                        component={SelectField}

                                        label="Kênh ảnh"
                                        labelClassName="label"
                                        className="text-input"
                                        disabled={false}
                                        options={optionsList.artChannels}
                                        // placeholder="Nhập mô tả (không bắt buộc)"
                                        // formErrorClass="form-error textarea-error"
                                    />}
                                </div>
                            </form>
                        );
                    }}
                </Formik>
                <div className="arts-list">
                    {/* <div className="filter">
                        <input className="text-input art-search" type="text" placeholder="Tìm tác phẩm"/>
                        {selectedArts.length > 0 && <button className="button danger clear-selected-arts" onClick={handleClearSelectedArts}>Bỏ chọn</button>}
                    </div> */}
                    <InfiniteScroll
                        dataLength={artsList.list && artsList.list.length}
                        next={fetchMoreArtsData}
                        hasMore={artsList.hasMore}
                        className='list'
                    >
                        {artsList.list.length > 0 ? artsList.list.map((art,index) => (
                            <div className={classnames('art',{selected: selectedArts.includes(art.id)})} key={index} onClick={() => handleSelectArt(art.id)}>
                                <div className="overlay">
                                    {selectedArts.includes(art.id) ? <i className="fas fa-check-circle"></i> : <i className="far fa-check-circle"></i>}
                                </div>
                                <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`} />
                            </div>
                        )) : <p>Không có tác phẩm nào</p>}
                    </InfiniteScroll>

                    {loading && (
                        <center className="loading-wrapper">
                            <img className="loading" src="https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif"/>
                        </center>
                    )}

                    {artsList.totalArts == artsList.list.length && (
                        <div className="scroll-end">
                            <p className="text">
                                Chẳng còn gì để xem :)
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CreateShowcase;