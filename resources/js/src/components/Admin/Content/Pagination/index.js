import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    links: PropTypes.array.isRequired,
    pageChange: PropTypes.func.isRequired,
}

Pagination.defaultProps = {
    links: [],
    pageChange: null,
}

function Pagination(props) {
    const { links,pageChange } = props;

    // Chuyển trang
    const change = async (pageUrl) => {
        if (!pageUrl) return;
        pageChange(pageUrl);
    }

    return (
        <div className="pagination">
            {links.map((link,index) => (
                <a href="# " key={index} onClick={() => change(link.url)} className={`${link.active && 'active'}`}>
                    {index == 0 ? "Trước" : index == links.length - 1 ? "Sau" : link.label}
                </a>
            ))}
        </div>
    );
}

export default Pagination;