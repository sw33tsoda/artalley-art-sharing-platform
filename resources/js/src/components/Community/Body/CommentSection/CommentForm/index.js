
import Axios from 'axios';
import { FastField, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAnnouncementMessage } from '../../../../../store/community/announcer';
import TextareaField from '../../../../CustomFields/TextareaField';
import { CommentValidation, ReplyValidation } from '../../../../Validations';

function CommentForm({parentColumn,parentId,refreshList,type,action,initialValues,setAction}) {
    const dispatch = useDispatch();
    const [isSubmitting,setIsSubmitting] = useState(false);
    const handleSubmitForm = (values,{resetForm}) => {
        setIsSubmitting(true);
        // console.log(parentColumn,parentId,refreshList,type,action,initialValues,setAction);
        const resource = (function(){
            switch (type) {
                case 'comment': return 'comments';
                case 'reply' : return 'replies';
            }
        })();
        const formData = new FormData();
        (async function(data,values,type,action) {
            // console.log(type,action);
            if (action == 'edit') {
                data.append(type,values[type]);
                data.append('_method','PATCH');
                return await Axios.post(`/public/api/community/resources/${resource}/${parentId}?api_token=${localStorage.getItem('authenticatedUserToken')}`,data);
            }
            data.append(type,values[type]);
            data.append(parentColumn,parentId);
            return await Axios.post(`/public/api/community/resources/${resource}?api_token=${localStorage.getItem('authenticatedUserToken')}`,data);
        })(formData,values,type,action).then(response => {
            dispatch(setAnnouncementMessage({
                message:response.data.message,
                type:'success',
            }));
            // if (action == undefined) {
                // }
            resetForm();
            refreshList();
            if (setAction) {
                setAction(null,'clear',null);
            }
            // console.log(resetForm,refreshList,setAction);
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
                    // console.log(values,errors);
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