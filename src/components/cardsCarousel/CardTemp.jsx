import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function CardTemp({content}){
    return (
        
        <Card sx={{ minHeight:300,maxHeight: 300,width:300,maxWidth:300,backgroundColor:'#fbfafa', margin:3,border:'1px solid black'}} >

          <div style={{display:'flex',justifyContent:'center',alignItem:'center',margin:5}}>
            <CardMedia
              sx={{ height: 200 ,width:200}}
              image={content.image}
              title="green iguana"
              style={{}}
            />
          </div>
          <CardContent>            
            <Typography gutterBottom variant="h6" component="div">
              {content.title}
            </Typography>
            {/* <Typography gutterBottom variant="h6" component="div">
              {content.price} $
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              {content.description}
            </Typography> */}
          </CardContent>
          <CardActions sx={{display:'flex',alignItems:'center'}}>
            <Button size="large"><h5 style={{display:'flex',alignItems:'center',justifyContent:'center'}}><span>Know More </span><NavigateNextIcon sx={{fontSize:18}}/> </h5></Button>
            
          </CardActions>
        </Card>
        
      );
}

export default CardTemp;