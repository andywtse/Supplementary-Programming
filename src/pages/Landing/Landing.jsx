import PostBoard from "../../components/Posts/PostBoard"

const Landing = ({ user }) => {
  return (
    <main>
      <PostBoard user={user} />
    </main>
  )
}

export default Landing
