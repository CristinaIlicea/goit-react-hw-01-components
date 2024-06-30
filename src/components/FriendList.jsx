import React from 'react';
import friends from './friends.json';
import FriendListItem from './FriendListItem.jsx';
import styles from './Profile.module.css';

function FriendList ({friends}) {
    return (
        <ul className="fist">
            <FriendList friends = {friends} />;
</ul>
    );
};
export default FriendList;