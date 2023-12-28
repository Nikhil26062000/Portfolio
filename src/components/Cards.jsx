import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Cards = ({name , img , desc , link}) => {
  return (
    <div className="w-[350px] sm:w-[300px]">
           <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image="https://picsum.photos/536/354"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className='w-[100%] flex justify-between'>
        <button className="w-[90px] bg-violet-600 text-[12px]  h-[30px] rounded-sm text-white border border-violet-800 font-normal">View Site 💻</button>
        <button className="w-[90px] bg-violet-600 text-[12px]  h-[30px] rounded-sm text-white border border-violet-800 font-normal">Code 🔐</button>
       </div>
      </CardActions>
    </Card>
    </div>
  )
}

export default Cards