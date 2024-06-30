import React from 'react';
import friends from './friends.json';
import FriendList from './FriendList';

function FriendListItem ({avatar}, {name}, {isOnline}) {
    return (
        <li className="item">
            <span className="status"></span>
            <img className="avatar" src="" alt="UserAvatar" width="48" />
            <p className="name"></p>
        </li>
);}

export default FriendListItem;