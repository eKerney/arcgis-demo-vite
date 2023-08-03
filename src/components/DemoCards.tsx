import { useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import { AppContext } from '../contexts/AppStore';

export default function DemoCards( { demoCardData }) {
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);

    useEffect(() => {
        console.log('democards', appContext);
    }, [appContext])
  
  const renderDemoCards = () => {
    return (
        <>
        {demoCardData.map(d => (
        <Box style={{width:300, position: 'absolute', left: '50%', top: '50%',
                    marginLeft: d.cardPosition.marginLeft, marginTop: d.cardPosition.marginTop, opacity: 0.9}}
        key={d.name}
        sx={{ zIndex: 'tooltip', boxShadow: 9 }}
        >
        <Card sx={{ maxWidth: 320 }}>
          <CardActionArea onClick={((event) => appDispatch({ type: 'demoType', payload: event.target.title})) }>
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
