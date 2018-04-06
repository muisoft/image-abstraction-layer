
import express from 'express'

import {SearchHistory} from '../model/searchHistory'
import { BingSearch } from '../bing/bingSearch'

const router= express.Router()

router.get('/api/search/:query', (req, res) => {
  let query = req.params.query
  let offset = req.query.offset || 4
  let when = Math.round(new Date().getTime() / 1000)
 
  BingSearch(query, offset)
    .then( data => {
      let images = getImages(data)
      res.status(200).json(images) 
    })
    .catch( error => 
      res.status(500).json({'error': error})
    ) 
  
  saveSearch(when, query)
})

router.get('/api/latest', (req, res) => {
    getLatestSearches(res)
})

const getImages = (images) => {
   return images.value.map((img, i) => {
        return {
            'alt': img.name, 
            'contentUrl': img.contentUrl, 
            'hostPageUrl': img.hostPageUrl
        }
     })
}
const getLatestSearches = (res) => {
  return SearchHistory
      .find({}) 
      .select({_id: 0, when: 1, query: 1 })
      .then((data) => {
         res.status(200).json(data)
      })
}
const saveSearch = (when, query) => {
  return new SearchHistory({when, query}).save()
}
export default router;
