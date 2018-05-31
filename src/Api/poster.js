import store from 'store'

function getPoster(id) {
  let allPost = store.get('poster')
  if (!allPost) allPost = {}
  return new Promise((resolve, reject) => {
    if (!id) {
      resolve(allPost)
    }
    if (allPost[id]) {
      setTimeout(() => {
        resolve(allPost[id])
      }, 300)
    } else {
      reject(false)
    }
  })
}

function newPoster(poster) {
  let id = poster.id
  let title = poster.title
  let content = poster.content
  let time = poster.time

  let allPost = store.get('poster')
  if (!allPost) allPost = {}
  allPost[id] = {
    title,
    content,
    time
  }
  store.set('poster', allPost)

  return new Promise(resolve => resolve(true))
}

function deletePoster(id) {
  let allPost = store.get('poster')
  return new Promise((resolve, reject) => {
    if (allPost[id]) {
      delete allPost[id]
      store.set('poster', allPost)
      resolve(true)
    } else {
      reject(false)
    }
  })

}

export {
  getPoster,
  newPoster,
  deletePoster
}