import PostBoard from "../../components/Posts/PostBoard"

const Landing = ({ user }) => {
  return (
    <main id="scrollbar">
      <PostBoard user={user} />
    </main>
  )
}

export default Landing
