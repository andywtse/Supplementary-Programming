import * as tokenService from './tokenService'
const SERVER_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`

async function create(newPostData) {
  console.log(newPostData)
  const res = await fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(newPostData)
  })
	return await res.json()
}

async function update(post) {
  const res = await fetch(`${SERVER_URL}/${post._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(post)
  })
	return await res.json()
}

async function deletePost(id) {
  const res = await fetch(`${SERVER_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
	return await res.json()
}

async function getAll() {
  const res = await fetch(`${SERVER_URL}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return await res.json()
}

async function createReply(newReplyData, id) {
  const res = await fetch(`${SERVER_URL}/${id}/replies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(newReplyData)
  })
	return await res.json()
}

export {
	create,
  update,
  getAll,
  deletePost,
  createReply
}