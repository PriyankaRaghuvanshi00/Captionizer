import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { urlRandomMany } from '../../helper'
import Quotes from '../quotes/quotes'

export default function Random() {
   const [quote, setquote] = useState([])
   const [loading, setloading] = useState(false)
   useEffect(() => {
      setloading(true)
      axios.get(urlRandomMany).then(res => {
         setquote(res.data.results);
         setloading(false)
      })
   }, [])
   return (
      !loading ? <div className='quotes-grid'>
         {quote.length == 0 ? <p>No Quotes Available 😢</p> : quote.map(elem => <Quotes text={elem.content} author={elem.author} rating={elem.rating}></Quotes>)}
      </div> : <p>Loading...</p>
   )
}
