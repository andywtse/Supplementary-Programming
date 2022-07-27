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

async function createSection(newSection, pageId) {
  const res = await fetch(`${SERVER_URL}/${pageId}/section`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(newSection)
  })
	return await res.json()
}

async function createCard(newCard,sectionId) {
  const res = await fetch(`${SERVER_URL}/section/${sectionId}/card`, {
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
  const res = await fetch(`${SERVER_URL}/section/${section._id}`, {
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
  const res = await fetch(`${SERVER_URL}/section/card/${card._id}`, {
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
  const res = await fetch(`${SERVER_URL}/section/${sectionId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
	return await res.json()
}

async function deleteCard(cardId) {
  const res = await fetch(`${SERVER_URL}/section/card/${cardId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
	return await res.json()
}

async function getAll() {
  const res = await fetch(`${SERVER_URL}/`)
  return await res.json()
}

async function getSections(id) {
  const res = await fetch(`${SERVER_URL}/${id}`)
  return await res.json()
}

async function getCards(id) {
  const res = await fetch(`${SERVER_URL}/section/${id}`)
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
  getSections,
  getCards,
}