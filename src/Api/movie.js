import store from 'store'
import jsonp from 'jsonp'

function getMovie(id) {
  let allMovie = store.get('movie')
  if (!allMovie) allMovie = {}
  return new Promise((resolve, reject) => {
    if (!id) {
      resolve(allMovie)
      return
    }
    if (allMovie[id]) {
      setTimeout(() => {
        resolve(allMovie[id])
      }, 300)
    } else {
      reject(false)
    }
  })
}
function getRemoteInfo(id) {
  let url = `http://api.douban.com/v2/movie/subject/${id}`
  return new Promise((resolve, reject) => {
    jsonp(url, null, (err, data) => {
      if (err) reject(err)
      console.log(data)
      resolve(data)
    })
  })
}
function newMovie(movie) {
  let id = movie.id
  let name = movie.name
  let link = movie.link
  let info = movie.info
  let rating = movie.rating
  let ratingContent = movie.ratingContent
  let summary = movie.summary
  let time = movie.time

  let allMovie = store.get('movie')
  if (!allMovie) allMovie = {}
  allMovie[id] = {
    name,
    link,
    info,
    rating,
    ratingContent,
    summary,
    time
  }
  console.log(allMovie[id])
  store.set('movie', allMovie)
  return new Promise(resolve => resolve(true))
}

export {
  getMovie,
  getRemoteInfo,
  newMovie
}