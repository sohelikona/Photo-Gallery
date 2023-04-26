// import React from 'react';
// import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material';
// import { PhotoCamera } from '@mui/icons-material';
// import createMuiTheme from './styles';


// const App = () => {
//   const classes = createMuiTheme()
//   return (
//     <>
    
//       <CssBaseline />
//       <AppBar position='relative' gutterBottom>
//         <Toolbar>
//           <PhotoCamera className={classes.icon} />
//           <Typography variant='h6'>
//             Photo Album
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <main>
//         <div className={classes.container}>
//           <Container maxWidth="sm">
//               <Typography variant="h2" align='center' color="textPrimary" gutterBottom>
//                 Photo Album
//               </Typography>
//              <Typography variant="h5" align='center' color="textSecondary" paragraph>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere illo in autem corporis! Nostrum, at cumque libero fugiat, velit voluptatem officiis fugit totam facilis molestiae temporibus eaque facere maiores quidem.
//              </Typography>
//                   <div  className={classes.buttons}>
//                     <Grid container spacing={2} justify="center" >
//                         <Grid item>
//                           <Button variant='contained' color="primary"> 
//                               See my photos
//                           </Button>
//                         </Grid>
//                         <Grid item>
//                           <Button variant='outlined' color="primary"> 
//                               Secondary action
//                           </Button>
//                         </Grid>
//                     </Grid>
//                   </div>
              
//           </Container>
//         </div>
//         <Container className={classes.cardGrid} maxWidth="md">
//             <Grid container spacing={4}>
//               <Grid item>
//                 <Card className={classes.card}>
//                   <CardMedia
//                       className={classes.cardMedia}
//                       image="https://source.unsplash.com/ramdom"
//                       title="Image title"
//                   />
//                   <CardContent className={classes.cardContent}>
//                       <Typography gutterBottom variant="h5">
//                           Heading
//                       </Typography>
//                       <Typography>
//                         This is a media card. You can use this section to describe the content.
//                       </Typography>
//                   </CardContent>
//                   <CardActions>
//                       <Button size='small' color='primary'>View</Button>
//                       <Button size='small' color='primary'>Edit</Button>

//                   </CardActions>
//                 </Card>
//               </Grid>
//             </Grid>
//         </Container>
//       </main>
//     </>
//   );
// }

// export default App;





import React from 'react'
import { IconButton } from '@material-ui/core';

import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material'
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const App = () => {
  return (

    <>
    
        <CssBaseline />
        <AppBar position='relative'/>
            <Toolbar>
              <IconButton>
              <PhotoCamera />
              </IconButton>
              <Typography variant="h6">
                Photo Album
              </Typography>
            </Toolbar>
    
    </>
 
  )
}

export default App













