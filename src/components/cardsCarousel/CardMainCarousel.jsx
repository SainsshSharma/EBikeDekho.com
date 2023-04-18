import * as React from 'react';
import Slider from 'react-slick';
function CardMainCarousel(CardList,autoplay){

    const [autoPlay,setAutoPlay]=React.useState();

    var settings={
      className: "center",
      infinite: false,
      centerPadding: "60px",
      dots: true,
      autoplay:autoPlay,
      autplayspeed:100,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      swipeToSlide: true,
      
      afterChange: function(index) {
        console.log(
          
        );
      }
    }
    React.useEffect(()=>{
        setAutoPlay(autoplay);
    },[])
    return(        
      <div className="slickCarousel">
        {console.log(autoPlay)}
        <Slider {...settings}>
          {CardList}
        </Slider>
        
      </div>
    )
  }

  export default CardMainCarousel;