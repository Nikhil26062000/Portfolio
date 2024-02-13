import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

const Cards = ({ name, img, desc, link1 ,link2 }) => {
  return (
    <div className="w-[350px] sm:w-[300px] px-2 py-2 ">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="50"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className="w-[100%] flex justify-between">
            
            <a href={link1}>
            <button className="w-[90px] bg-violet-600 text-[12px]  h-[30px] rounded-sm text-white border border-violet-800 font-normal">
              View Demo 💻
            </button>
            </a>
           

            <a href={link2}>
            <button className="w-[90px] bg-violet-600 text-[12px]  h-[30px] rounded-sm text-white border border-violet-800 font-normal">
              Code 🔐
            </button>
            </a>  
            
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
