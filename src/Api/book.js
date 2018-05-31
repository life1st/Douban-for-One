import store from 'store'
import jsonp from 'jsonp'

function getBook(id) {
  let allBooks = store.get('book')
  if (!allBooks) allBooks = {}
  return new Promise((resolve, reject) => {
    if (!id) {
      setTimeout(() => {
        resolve(allBooks)
      }, 300)
      return
    }
    if (allBooks[id]) {
      setTimeout(() => {
        resolve(allBooks[id])
      }, 300)
    } else {
      reject(false)
    }
  })
}
function getRemoteBook(id) {
  let url = `https://api.douban.com/v2/book/${id}`
  return new Promise((resolve, reject) => {
    jsonp(url, null, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
function newBook(book) {
  let id = book.id
  let name = book.name
  let link = book.link
  let info = book.info
  let rating = book.rating
  let ratingContent = book.ratingContent
  let summary = book.summary
  let time = book.time

  let allBooks = store.get('book')
  if (!allBooks) allBooks = {}
  allBooks[id] = {
    name,
    link,
    info,
    rating,
    ratingContent,
    summary,
    time
  }
  store.set('book', allBooks)

  return new Promise(resolve => resolve(true))
}

export {
  getBook,
  newBook,
  getRemoteBook
}