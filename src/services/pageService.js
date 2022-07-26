import * as tokenService from './tokenService'
const SERVER_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/pages`

async function createPage(newPage) {
  const res = await fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(newPage)
  })
	return await res.json()
}

async function createSection(newSection) {
  const res = await fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(newSection)
  })
	return await res.json()
}

async function createCard(newCard) {
  const res = await fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(newCard)
  })
	return await res.json()
}

async function updatePage(page) {
  const res = await fetch(`${SERVER_URL}/${page._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(page)
  })
	return await res.json()
}

async function updateSection(section) {
  const res = await fetch(`${SERVER_URL}/${section._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(section)
  })
	return await res.json()
}

async function updateCard(card) {
  const res = await fetch(`${SERVER_URL}/${card._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(card)
  })
	return await res.json()
}

async function deletePage(pageId) {
  const res = await fetch(`${SERVER_URL}/${pageId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
	return await res.json()
}

async function deleteSection(sectionId) {
  const res = await fetch(`${SERVER_URL}/${sectionId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
	return await res.json()
}

async function deleteCard(cardId) {
  const res = await fetch(`${SERVER_URL}/${cardId}`, {
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

export {
	createPage,
  createSection,
  createCard,
  deletePage,
  deleteSection,
  deleteCard,
  updatePage,
  updateSection,
  updateCard,
  getAll,
}