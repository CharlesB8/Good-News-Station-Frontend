import React from 'react';
import PropTypes from "prop-types";


const FollowersFollowing = ({
    profile: {
        user: { following, followers }
    }
}) => {
    return (
        <div class=''>
            <h1 class='large'>Followers : {followers.length}</h1>
            <h1 class='large'>Following : {following.length}</h1>
           
        </div>
         
    );
};

FollowersFollowing.propTypes = {
    profile: PropTypes.object.isRequired
};

export default FollowersFollowing;