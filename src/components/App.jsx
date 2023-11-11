import Profile from './Profile/Profile';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', 
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="UPLOAD STATS" stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
