
import Axios from 'axios';
import { FastField, Formik } from 'formik';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setAnnouncementMessage } from '../../../../../store/community/announcer';
import TextareaField from '../../../../CustomFields/TextareaField';
import { CommentValidation } from '../../../../Validations';

function CommentForm({parentColumn,parentId,refreshList,type}) {
    const dispatch = useDispatch();
    const handleSubmitForm = async (values,{resetForm}) => {
            const resource = (function(){
                switch (type) {
                    case 'comment': return 'comments';
                    case 'reply' : return 'replies';
                }
            })();
            const data = new FormData();
            data.append(type,values.comment);
            data.append(parentColumn,parentId);
            await Axios.post(`/public/api/community/resources/${resource}?api_token=${localStorage.getItem('authenticatedUserToken')}`,data).then(response => {
            dispatch(setAnnouncementMessage({
                message:response.data.message,
                type:'success',
            }));
            resetForm();
            refreshList();
        }).catch(error => {
            dispatch(setAnnouncementMessage({
                message:error.response.data.message,
                type:'danger',
            }));
        })
    }


    return (
        <Formik validationSchema={CommentValidation} initialValues={{comment:''}} onSubmit={handleSubmitForm}>
            {({values,errors,handleSubmit}) => {
                return (
                    <form className="form comment-form" onSubmit={handleSubmit}>
                        <FastField
                            name='comment'
                            component={TextareaField}

                            placeholder="Nhập bình luận..."
                            disabled={false}
                            showError={false}
                        />
                        <div className="controls">
                            {errors.comment && <p className="error">{errors.comment}</p>}
                            <p className="text-count">{values.comment.length}/500</p>
                            <button type="submit" className="button success">Gửi</button>
                        </div>
                    </form>
                )
            }}
        </Formik>
    );
}

export default CommentForm;