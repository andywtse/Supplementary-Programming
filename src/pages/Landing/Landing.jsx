//import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main>
      <h1>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
