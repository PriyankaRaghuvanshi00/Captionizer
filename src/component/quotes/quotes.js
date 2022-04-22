import React from 'react'
import "./quotes.css"

export default function Quotes({ text, author, rating }) {
   return (
      <div className='quote'>
         {/* <p>{rating}</p> */}
         <div className='quote-child'>
            <h3 className='quote-h3'>{text}</h3>
            <p>{'~' + author}</p>
         </div>
      </div>
   )
}
