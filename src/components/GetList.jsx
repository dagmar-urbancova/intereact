import React from 'react';
import PropTypes from 'prop-types';

GetList.propTypes = {

    userList: PropTypes.array,
};
GetList.defaultProps = {
userList: [],

};

function GetList(props) {
const { userList } = props;
return (
<ul className='post-list'>
    {userList.map(post => (
        <li key={post.id}> {post.name} @{post.username} https://{post.website} </li>

    ))}

</ul>

);


}

export default GetList;