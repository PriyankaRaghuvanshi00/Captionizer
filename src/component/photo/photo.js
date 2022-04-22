import React, { useEffect, useState } from 'react'
import Quotes from '../quotes/quotes'
import "./photo.css"
export default function Photo() {
   const [selectedFile, setSelectedFile] = useState()
   const [preview, setPreview] = useState()
   const [loading, setloading] = useState(false)
   const quote = [{
      text: 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking',
      author: 'wow',
      rating: 'hehe',
   }, {
      text: 'The creation of a thousand forests is in one acorn.',
      author: 'Ralph Waldo Emerson',
      rating: ''
   }, {
      text: 'Of all man’s works of art, a cathedral is greatest. A vast and majestic tree is greater than that.',
      author: ' Henry Ward Beecher',
      rating: ''
   }, {
      text: 'Learn character from trees, values from roots and change from leaves',
      author: 'Tasneern Harneed',
      rating: ''
   },
   ]
   useEffect(() => {
      setloading(true);
      setTimeout(() => {
         setloading(false)
      }, 2000);
      if (!selectedFile) {
         setPreview(undefined)
         return
      }
      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
   }, [selectedFile])

   const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
         setSelectedFile(undefined)
         return
      }
      setSelectedFile(e.target.files[0])
   }
   return (
      <div className='photo'>
         <div className='file'>
            <input type="file" className="custom-file-input" onChange={onSelectFile} />
            <div className='submit-btn'>Submit</div>
         </div>
         {loading && selectedFile && <div className='upload-pic' style={{ backgroundImage: `url('${preview}')` }}></div>}
         {!loading && <div className='quotes-grid'>
            {quote.length == 0 ? <p>upload image</p> : quote.map(elem => <Quotes text={elem.text} author={elem.author} rating={elem.rating}></Quotes>)}
         </div>}
      </div >
   )
}
