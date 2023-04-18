import * as React from 'react';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CardTemp from './CardTemp'
import CardMainLists from './CardMainLists';
import CardMainCarousel from './CardMainCarousel';

function CardsMain({heading,content,isCarousel,autoplay}){  

    let CardList=[]
    content.forEach((item,index)=>{
      CardList.push(<CardTemp content={content[index]} key={index}/>)
    })
    
    return (      
        <div className="Main" style={{display:'flex',flexDirection:'column',margin:40}}>
          
            <div className="mainContent" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <h1 style={{borderBottom:'1px solid black'}}>{heading}</h1>
                {isCarousel?<div className="navIcons">
                  <Button>
                    <NavigateBeforeIcon/>
                  </Button>
                  <Button>
                    <NavigateNextIcon/>
                  </Button>
                </div>:''}
                
            </div>
            
            {isCarousel?CardMainCarousel(CardList,autoplay):CardMainLists(CardList)}
        </div>

    )
        
       
}

export default CardsMain;