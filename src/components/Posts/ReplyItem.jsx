const ReplyItem = ({ reply }) => {
console.log(reply)
  return (
    <>
    <h1>{reply.content}</h1>
    </>
  );
};

export default ReplyItem;