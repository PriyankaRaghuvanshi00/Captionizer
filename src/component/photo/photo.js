import React, { useEffect, useState } from 'react'
import Quotes from '../quotes/quotes'
import "./photo.css"
import axios from 'axios'

export default function Photo() {
   const [selectedFile, setSelectedFile] = useState()
   const [preview, setPreview] = useState()
   const [loading, setloading] = useState(false)
   const [quote, setquote] = useState([])
   const [searched, setsearched] = useState(false)

   useEffect(() => {
      setloading(true);
      if (!selectedFile) {
         setloading(false)
         setPreview(undefined)
         return
      }
      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
   }, [selectedFile])


   const onSelectFile = e => {
      setsearched(true)
      if (!e.target.files || e.target.files.length === 0) {
         setSelectedFile(undefined)
         setloading(false);
         return
      }
      setSelectedFile(e.target.files[0])
   }
   const ClickHandler = () => {
      setloading(true);
      setPreview(false)
      const file = new FormData();
      file.append('image', selectedFile, selectedFile.name)
      axios.post("", file).then(res => {
         setquote(res?.data?.results);
         setloading(false);
      }).catch(err => {
         setloading(false)
         return err
      });
   }
   return (
      <div className='photo'>
         <div className='file'>
            <input type="file" className="custom-file-input" onChange={onSelectFile} />
            <div className='submit-btn' onClick={ClickHandler}>Submit</div>
         </div>
         {loading && selectedFile ? <div className='upload-pic' style={{ backgroundImage: `url('${preview}')` }}></div>
            : <div className='quotes-grid'>
               {quote.length == 0 ? searched ? <p>No Quotes Available 😢</p> : <p>Please Upload image</p> : quote.map(elem => <Quotes text={elem.content} author={elem.author} rating={elem.rating}></Quotes>)}
            </div>}
      </div >
   )
}
