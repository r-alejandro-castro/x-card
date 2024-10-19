import './App.css'
import XFollowCard from './components/XFollowCard'
import { users } from '../user.json'


export  function App() { 
  return (
    <section className='App'>
      {users.map((user) => (
        <XFollowCard
        key={user.userName}
        userName={user.userName}
        name={user.name}
        isFollowing={user.isFollowing}
        >
          {user.name}
        </XFollowCard>
      ))}
    </section>
  )
}
