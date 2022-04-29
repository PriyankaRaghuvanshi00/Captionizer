import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import "./body.css"
import axios from 'axios'
import { urlRandomOne } from "../../helper"

export default function Body() {
   const [quote, setquote] = useState("loading...")
   useEffect(() => {
      axios.get(urlRandomOne).then(res => {
         setquote(res.data.content);
      })
   }, [])

   return (
      <div className='body'>
         <div className='image'></div>
         <p>{quote}</p>
      </div>
   )
}
