import React from 'react';
import Profile from './Profile.jsx';
import user from './user.json';
import styles from './Profile.module.css';
import Statistics from './Statistics.jsx';
import data from './data.json';
import FriendList from './FriendList.jsx';
import friends from './friends.json';
import TransactionHistory from './TransactionHistory.jsx';
import transactions from './transactions.json';


function App() {
    return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
    <Profile className = 'profile.profile.module.css'>
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    </Profile> 

    <Statistics title="Upload stats" stats={data}/>

    <FriendList friends={friends}/>;

    <TransactionHistory items={transactions} />;

    </div>
    );
};

    
export default App;
