import * as React from 'react';

function CardMainLists(CardList){
    return(
    <>{console.log(CardList)}
      <div className="cardContent" style={{display:'flex',justifyContent:'space-between',alignItems:'center',maxHeight:'10%',flexWrap:'wrap'}}>
          {CardList}
      </div>
    </>
    )            
  }

  export default CardMainLists;