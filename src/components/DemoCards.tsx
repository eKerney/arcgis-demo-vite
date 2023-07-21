import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';


export default function DemoCards( { demoCardData, demoCardCallback }) {
    // revisit later may not need new function on top of demoCardCallback
    const setDemoCallback = target => {
        // console.log(target.target.title)
        demoCardCallback(target.target.title)
    }
  
  const renderDemoCards = () => {
    return (
        <>
        {demoCardData.map(d => (
        <Box style={{width:300, position: 'absolute', left: '50%', top: '50%',
                    marginLeft: d.position.marginLeft, marginTop: d.position.marginTop, opacity: 0.9}}
        key={d.name}
        sx={{ zIndex: 'tooltip', boxShadow: 9 }}
        >
        <Card sx={{ maxWidth: 320 }}>
          <CardActionArea onClick={setDemoCallback}>
            <CardMedia
              title={d.name}   
              component="img"
              height="140"
              image={d.imagePath}
              alt={d.altText}
            />
            <CardContent>
              <Typography title={d.name} gutterBottom variant="h5" component="div">{d.name}</Typography>
              <Typography title={d.name} variant="body2" color="text.secondary">{d.desc}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      ))}
      </>
    )
  }

  return (
    <> 
      {renderDemoCards()}
    </>
  )
}
