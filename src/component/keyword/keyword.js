import React from 'react'
import { useRef, useState } from 'react'
import Quotes from '../quotes/quotes';
import "./keyword.css"

export default function Keyword() {
   const inref = useRef(null);
   const [quote, setquote] = useState([])
   const [loading, setloading] = useState(false)
   const clickhandler = () => {
      setloading(true);
      console.log(inref.current.value);
      const quote2 = [{
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
      ];
      setloading(false);
      setquote(quote2)
   }
   return (
      <div className='keyword'>
         <div className='input-keyword'>
            <input type={'text'} ref={inref} className="input" />
            <div className='submit-btn' onClick={() => clickhandler()}>Submit</div>
         </div>
         <p className="para">Available quotes for keyword :{inref?.current?.value}</p>
         {
            !loading && <div className='quotes-grid'>
               {quote.length == 0 ? <p>upload image</p> : quote.map(elem => <Quotes text={elem.text} author={elem.author} rating={elem.rating}></Quotes>)}
            </div>
         }
      </div >
   )
}
