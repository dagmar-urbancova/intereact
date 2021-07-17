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
<div>
    {userList.map((postDetail, index) => {
        return <div className="post">
{/*         <p>{postDetail.id}</p>  */}
        <h1>{postDetail.name} </h1>
        <p>@{postDetail.username} </p>
        <p>https://{postDetail.website}</p>
        </div>
})}

</div>

);


}

export default GetList;