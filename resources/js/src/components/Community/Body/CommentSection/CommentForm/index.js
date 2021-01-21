
import Axios from 'axios';
import { FastField, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAnnouncementMessage } from '../../../../../store/community/announcer';
import TextareaField from '../../../../CustomFields/TextareaField';
import { CommentValidation, ReplyValidation } from '../../../../Validations';

function CommentForm({renewInfo,addNew,parentColumn,parentId,refreshList,type,action,initialValues,setAction}) {
    const dispatch = useDispatch();
    const [isSubmitting,setIsSubmitting] = useState(false);
    const handleSubmitForm = (values,{resetForm}) => {
        console.log(values);
        setIsSubmitting(true);
        const resource = (function(){
            switch (type) {
                case 'comment': return 'comments';
                case 'reply' : return 'replies';
            }
        })();
        const formData = new FormData();
        (async function(data,values,type,action) {
            data.append(type,values[type]);
            if (action == 'edit') {
                data.append('_method','PATCH');
                return await Axios.post(`/public/api/community/resources/${resource}/${parentId}?api_token=${localStorage.getItem('authenticatedUserToken')}`,data);
            }
            data.append(parentColumn,parentId);
            return await Axios.post(`/public/api/community/resources/${resource}?api_token=${localStorage.getItem('authenticatedUserToken')}`,data);
        })(formData,values,type,action).then(response => {
            console.log(response.data);
            dispatch(setAnnouncementMessage({
                message:response.data.message,
                type:'success',
            }));
            if (action == 'edit') {
                renewInfo(response.data.renew);
            }
            if (action == 'add' && type == 'reply') {
                addNew(response.data.new_reply);
            }
            if (type == 'comment') {
                refreshList();
            }
            if (setAction) {
                setAction(null,'clear',null);
            }
        }).catch(error => {
            dispatch(setAnnouncementMessage({
                message:error.response.data.message,
                type:'danger',
            }));
        }).then(() => {
            setIsSubmitting(false);
        });
    }


    return (
        isSubmitting ? (
            <center className="loading-wrapper">
                <img className="loading" src="https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif"/>
            </center>
        ) : (
            <Formik validationSchema={type == 'comment' ? CommentValidation : ReplyValidation} initialValues={(function(values) {
                if (values) { 
                    return values;
                }
                const initialValues = {};
                initialValues[type] = '';
                return initialValues;
            })(initialValues)} onSubmit={handleSubmitForm}>
                {({values,errors,handleSubmit}) => {
                    return (
                        <form className="form comment-form" onSubmit={handleSubmit}>
                            <FastField
                                name={type}
                                component={TextareaField}
    
                                placeholder="Nhập bình luận..."
                                disabled={false}
                                showError={false}
                            />
                            <div className="controls">
                                {errors[type] && <p className="error">{errors[type]}</p>}
                                <p className="text-count">{values[type].length}/500</p>
                                <button type="submit" className="button success">{action == 'edit' ? 'Sửa':'Gửi'}</button>
                            </div>
                        </form>
                    )
                }}
            </Formik>
        )
    );
}

export default CommentForm;