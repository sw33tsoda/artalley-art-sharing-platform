import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAnnouncerMessage } from '../../../store/admin/announcer';

function Announcer() {
    const announcer = useSelector(state => state.admin_announcer);
    const dispatch = useDispatch();
    if (announcer.message) {
        setTimeout(() => {
            const action = removeAnnouncerMessage();
            dispatch(action);
        },5000);
    }

    return (
        <div className="announcer">
            {announcer.message && <div className="message"><p><span>Thông báo từ Server</span> - {announcer.message}</p></div>}
        </div>
    );
}

export default Announcer;