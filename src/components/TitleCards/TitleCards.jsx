import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {
  const cardsRef = useRef()
  const [apiData,setApiData] = useState([])
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjMwNDkwYWU3MzE4M2JmMGQ1ZDMyYzE3YTMxOGEzMCIsInN1YiI6IjYzNzkxMjk2OWVjZjE4MDA3NjcyOWQxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4K1s36bezH8eB3S3M9SNicut8GmD5NTQPPqz7__zgK0'
    }
  };
  
  useEffect(()=>{

fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
.then(response => response.json())
.then(response => setApiData(response.results))
.catch(err => console.error(err));



    cardsRef.current.addEventListener('wheel',(e)=>{
      e.preventDefault()
      cardsRef.current.scrollLeft +=e.deltaY
    })
  },[])
  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {
          apiData.map((card,index)=>{
           return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" srcset="" />
            <p>{card.original_title}</p> 
           </Link>
          })
        }

      </div>
    </div>
  )
}

export default TitleCards