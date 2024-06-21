import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = () => {
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }
  return (
    <div className='title-cards'>
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsRef} onWheel={handleWheel}>
        {
          cards_data.map((cards,index)=>{
           return <div className='cards' key={index}>
            <img src={cards.image} alt="" srcset="" />
            <p>{cards.name}</p> 
           </div>
          })
        }

      </div>
    </div>
  )
}

export default TitleCards