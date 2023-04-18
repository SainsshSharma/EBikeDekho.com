import React from 'react'
import CardsMain from '../components/cardsCarousel/CardsMain'

export const Home = ({content}) => {
  return (
    <div>        
        <h1>Home Page</h1>
        <div className="App">      
        {console.log(content)}
          <CardsMain heading="Top selling" content={content.slice(0,20)} isCarousel={false} autoplay={true}/> 
        </div>
    </div>
  )
}
