import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/learns`


async function create(newLearnData) {
  const res = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body:  JSON.stringify(newLearnData)
  })
  return res.json()
}

async function update(learn) {
  const res = await fetch(`${BASE_URL}/${learn._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(learn)
  })
	return await res.json()
}

async function getLearns() {
  const res = await fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return res.json()
}

async function deleteLearns(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
	return await res.json()
}

export { 
  create, 
  getLearns, 
  update, 
  deleteLearns }
