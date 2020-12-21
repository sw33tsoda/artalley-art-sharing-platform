import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAnnouncementMessage, setAnnouncementMessage } from '../../../store/community/announcer';
import PropTypes from 'prop-types';

Announcement.propTypes = {
    timeout: PropTypes.number.isRequired,
}

Announcement.defaultProps = {
    timeout: 5,
}

function Announcement({timeout}) {
    const announcement = useSelector(state => state.community_announcement);
    const dispatch = useDispatch();
    if (announcement.message !== '') {
        setTimeout(() => {
            dispatch(removeAnnouncementMessage());
        },timeout * 1000);
    }

    return (
        announcement.message && <div className="announcement">
            <p className="message">
                {announcement.type == 'success' ? <i className='fas fa-check-circle success-icon'></i> : <i className='fas fa-times-circle'></i>}
                {/* <span className="from">Thông báo : </span> */}
                {announcement.message}
            </p>
        </div>
    );
}

export default Announcement;