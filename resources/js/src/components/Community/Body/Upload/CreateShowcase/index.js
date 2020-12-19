import Axios from 'axios';
import { FastField, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import InputField from '../../../../CustomFields/InputField';
import TextareaField from '../../../../CustomFields/TextareaField';
import classnames from 'classnames';

function CreateShowcase() {
    const [artsList,setArtList] = useState([]);
    const [selectedArts,setSelectedArts] = useState([]);
    useEffect(() => {
        const apiToken = localStorage.getItem('authenticatedUserToken');
        const getArtsList = async () => {
            await Axios.get(`/public/api/community/resources/arts?api_token=${apiToken}`).then(response => {
                const {data:{list}} = response;
                setArtList(list);
            }).catch(error => {
                console.log(error.response);
            })
        }

        getArtsList();
    },[]);

    const handleSelectArt = async (artId) => {
        let newSelectedArts = selectedArts;
        if (newSelectedArts.includes(artId)) {
            newSelectedArts = newSelectedArts.filter(selectedId => selectedId !== artId);
        } else {
            newSelectedArts.push(artId);
        }
        setSelectedArts([...newSelectedArts]);
    }

    const initialValues = {
        title:'',
        subheading:'',
        description:'',
        privacy_id:1,
        channel:1,
    }

    return (
        <div className="create-showcase">
            <h1 className="title">Tạo quầy trưng bầy</h1>
            <div className="showcase-form">
                <Formik initialValues={initialValues}>
                    {({handleSubmit}) => {
                        return (
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="split">
                                    <FastField
                                        name="title"
                                        component={InputField}

                                        label="Tiêu đề"
                                        labelClassName="label"
                                        className="text-input"
                                        disabled={false}
                                        placeholder="Tiêu đề" 
                                    />
                                    <FastField
                                        name="subheading"
                                        component={InputField}

                                        label="Tiêu đề phụ"
                                        labelClassName="label"
                                        className="text-input"
                                        disabled={false}
                                        placeholder="Tiêu đề phụ" 
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
                                    formErrorClass="form-error textarea-error"
                                />
                            </form>
                        );
                    }}
                </Formik>
                    {/* <input className="text-input art-search" type="text" placeholder="Tìm tác phẩm"/> */}
                <div className="arts-list">
                    {artsList.length > 0 ? artsList.map((art,index) => (
                        <div className={classnames('art',{selected: selectedArts.includes(art.id)})} key={index} onClick={() => handleSelectArt(art.id)}>
                            <div className="overlay">
                                {selectedArts.includes(art.id) ? <i class="fas fa-check-circle"></i> : <i class="far fa-check-circle"></i>}
                            </div>
                            <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`} />
                        </div>
                    )) : <p>Không có tác phẩm nào</p>}
                </div>
            </div>
        </div>
    );
}

export default CreateShowcase;