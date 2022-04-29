import React from 'react'
import { useRef, useState } from 'react'
import Quotes from '../quotes/quotes';
import "./keyword.css"
import axios from 'axios'
import {
   url, url2
} from "../../helper"

export default function Keyword() {
   const inref = useRef(null);
   const [quote, setquote] = useState([])
   const [loading, setloading] = useState(false)
   const [searched, setsearched] = useState(false)
   const clickhandler = () => {
      setloading(true);
      let x = (inref.current.value);
      if (x != "")
         setsearched(true)
      axios.get(url + x).then(res => {
         console.log(res);
         setloading(false);
         console.log(res.data.results);
         setquote(res.data.results);
      }).catch(err => {
         console.log(err);
      })
   }
   return (
      <div className='keyword'>
         <div className='input-keyword'>
            <input type={'text'} ref={inref} className="input" />
            <div className='submit-btn' onClick={() => clickhandler()}>Submit</div>
         </div>
         <p className="para">Available quotes for keyword :{inref?.current?.value}</p>
         {
            !loading ? <div className='quotes-grid'>
               {quote.length == 0 ? searched ? <p>No Quotes Available 😢</p> : <p>Please type a keyword</p> : quote.map(elem => <Quotes text={elem.content} author={elem.author} rating={elem.rating}></Quotes>)}
            </div> : <p>Loading...</p>
         }
      </div >
   )
}
