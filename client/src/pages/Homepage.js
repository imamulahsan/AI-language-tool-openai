import React from "react";
import { Typography,useTheme, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import SummarizeIcon from '@mui/icons-material/Summarize';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import KeyIcon from '@mui/icons-material/Key';
import TranslateIcon from '@mui/icons-material/Translate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DirectionsIcon from '@mui/icons-material/Directions';
import SchoolIcon from '@mui/icons-material/School';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TwitterIcon from '@mui/icons-material/Twitter';
import CodeIcon from '@mui/icons-material/Code';
import Grid from '@mui/material/Grid';


const Homepage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
    <Grid
      container
      spacing={4}
      justify="center"
    >
      <Grid xs display="flex" justifyContent="center" alignItems="center" p={2} marginTop={5} marginLeft={2.5} marginRight={1}>
        <Card sx={{ 
          width: 275,
          boxShadow: 2,
          borderRadius: 5,
          height: 250,
          "&:hover": {
            border: 3,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },

         }} 
        onClick={() => navigate("/summary")}>
        <CardContent>
          <SummarizeIcon style={{ fontSize: 80 }} sx={{ color: theme.palette.background.alt }}/>
        <Typography variant="h3" component="div">
          Text Summarization
        </Typography>
        <Typography variant="body2">
        Simplify text to a level appropriate for a second-grade student.
          <br />
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" onClick={() => navigate("/summary")}>Explore</Button>
        </CardActions>
        </Card>

      </Grid>
      <Grid xs display="flex" justifyContent="center" alignItems="center" p={2} marginTop={5} marginLeft={1} marginRight={1}>

      <Card sx={{ 
          width: 275,
          boxShadow: 2,
          borderRadius: 5,
          height: 250,
          "&:hover": {
            border: 3,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },

         }} 
        onClick={() => navigate("/summary")}>
        <CardContent>
          <MenuBookIcon style={{ fontSize: 80 }} sx={{ color: theme.palette.background.alt }}/>
        <Typography variant="h3" component="div">
          Grammar Correction
        </Typography>
        <Typography variant="body2">
        Convert ungrammatical statements into standard English.
          <br />
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" onClick={() => navigate("/summary")}>Explore</Button>
        </CardActions>
        </Card>  
        
      </Grid>
      <Grid xs display="flex" justifyContent="center" alignItems="center" p={2} marginTop={5} marginLeft={1} marginRight={1}>
      <Card sx={{ 
          width: 275,
          boxShadow: 2,
          borderRadius: 5,
          height: 250,
          "&:hover": {
            border: 3,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },

         }} 
        onClick={() => navigate("/summary")}>
        <CardContent>
          <KeyIcon style={{ fontSize: 80 }} sx={{ color: theme.palette.background.alt }}/>
        <Typography variant="h3" component="div">
          Keyword Extractor
        </Typography>
        <Typography variant="body2">
        Extract keywords from a block of text.
          <br />
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" onClick={() => navigate("/summary")}>Explore</Button>
        </CardActions>
        </Card>
      </Grid>
      <Grid xs display="flex" justifyContent="center" alignItems="center" p={2} marginTop={5} marginLeft={1} marginRight={1}>

      <Card sx={{ 
          width: 275,
          boxShadow: 2,
          borderRadius: 5,
          height: 250,
          "&:hover": {
            border: 3,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },

         }} 
        onClick={() => navigate("/summary")}>
        <CardContent>
          <TranslateIcon style={{ fontSize: 80 }} sx={{ color: theme.palette.background.alt }}/>
        <Typography variant="h3" component="div">
          Translation
        </Typography>
        <Typography variant="body2">
        Translate natural language text.
          <br />
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" onClick={() => navigate("/summary")}>Explore</Button>
        </CardActions>
        </Card>
        
      </Grid>
      <Grid xs display="flex" justifyContent="center" alignItems="center" p={2} marginTop={5} marginLeft={1} marginRight={1}>

      <Card sx={{ 
          width: 275,
          boxShadow: 3,
          borderRadius: 5,
          height: 250,
          "&:hover": {
            border: 2,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },

         }} 
        onClick={() => navigate("/summary")}>
        <CardContent>
          <SchoolIcon style={{ fontSize: 80 }} sx={{ color: theme.palette.background.alt }}/>
        <Typography variant="h3" component="div">
        Lesson plan writer
        </Typography>
        <Typography variant="body2">
        Generate a lesson plan for a specific topic.
          <br />
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" onClick={() => navigate("/summary")}>Explore</Button>
        </CardActions>
        </Card>       
      </Grid>

      <Grid xs display="flex" justifyContent="center" alignItems="center" p={2} marginTop={5} marginLeft={1} marginRight={1}>

      <Card sx={{ 
          width: 275,
          boxShadow: 3,
          borderRadius: 5,
          height: 250,
          "&:hover": {
            border: 2,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },

         }} 
        onClick={() => navigate("/summary")}>
        <CardContent>
          <DirectionsIcon style={{ fontSize: 80 }} sx={{ color: theme.palette.background.alt }}/>
        <Typography variant="h3" component="div">
          Turn by tun directions
        </Typography>
        <Typography variant="body2">
        Convert natural language to turn-by-turn directions.
          <br />
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" onClick={() => navigate("/summary")}>Explore</Button>
        </CardActions>
        </Card>     
      </Grid>

      <Grid xs display="flex" justifyContent="center" alignItems="center" p={2} marginTop={5} marginLeft={2.5} marginRight={1}>

      <Card sx={{ 
          width: 275,
          boxShadow: 3,
          borderRadius: 5,
          height: 250,
          "&:hover": {
            border: 2,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },

         }} 
        onClick={() => navigate("/summary")}>
        <CardContent>
          <EmojiEmotionsIcon style={{ fontSize: 80 }} sx={{ color: theme.palette.background.alt }}/>
        <Typography variant="h3" component="div">
          Emoji Chatbot
        </Typography>
        <Typography variant="body2">
        Generate conversational replies using emojis only.
          <br />
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" onClick={() => navigate("/summary")}>Explore</Button>
        </CardActions>
        </Card>       
      </Grid>

      <Grid xs display="flex" justifyContent="center" alignItems="center" p={2} marginTop={5} marginLeft={1} marginRight={1}>

      <Card sx={{ 
          width: 275,
          boxShadow: 3,
          borderRadius: 5,
          height: 250,
          "&:hover": {
            border: 2,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },

         }} 
        onClick={() => navigate("/summary")}>
        <CardContent>
          <ColorLensIcon style={{ fontSize: 80 }} sx={{ color: theme.palette.background.alt }}/>
        <Typography variant="h3" component="div">
        Mood to color
        </Typography>
        <Typography variant="body2">
        Turn a text description into a color.
          <br />
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" onClick={() => navigate("/summary")}>Explore</Button>
        </CardActions>
        </Card>  
      </Grid>

      <Grid xs display="flex" justifyContent="center" alignItems="center" p={2} marginTop={5} marginLeft={1} marginRight={1}>

      <Card sx={{ 
          width: 275,
          boxShadow: 3,
          borderRadius: 5,
          height: 250,
          "&:hover": {
            border: 2,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },

         }} 
        onClick={() => navigate("/summary")}>
        <CardContent>
          <MusicNoteIcon style={{ fontSize: 80 }} sx={{ color: theme.palette.background.alt }}/>
        <Typography variant="h3" component="div">
          Rap Battle Writer
        </Typography>
        <Typography variant="body2">
        Generate a rap battle between two characters.
          <br />
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" onClick={() => navigate("/summary")}>Explore</Button>
        </CardActions>
        </Card> 
      </Grid>

      <Grid xs display="flex" justifyContent="center" alignItems="center" p={2} marginTop={5} marginLeft={1} marginRight={1}>

      <Card sx={{ 
          width: 275,
          boxShadow: 3,
          borderRadius: 5,
          height: 250,
          "&:hover": {
            border: 2,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },

         }} 
        onClick={() => navigate("/summary")}>
        <CardContent>
          <TwitterIcon style={{ fontSize: 80 }} sx={{ color: theme.palette.background.alt }}/>
        <Typography variant="h3" component="div">
          Tweet Classifier
        </Typography>
        <Typography variant="body2">
        Detect sentiment in a tweet.
          <br />
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" onClick={() => navigate("/summary")}>Explore</Button>
        </CardActions>
        </Card>     
      </Grid>

      <Grid xs display="flex" justifyContent="center" alignItems="center" p={2} marginTop={5} marginLeft={1} marginRight={1}>

      <Card sx={{ 
          width: 275,
          boxShadow: 3,
          borderRadius: 5,
          height: 250,
          "&:hover": {
            border: 2,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },

         }} 
        onClick={() => navigate("/summary")}>
        <CardContent>
          <ShoppingCartIcon style={{ fontSize: 80 }} sx={{ color: theme.palette.background.alt }}/>
        <Typography variant="h3" component="div">
          Product Review Classifier
        </Typography>
        <Typography variant="body2">
        Classify user reviews based on a set of tags.
          <br />
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" onClick={() => navigate("/summary")}>Explore</Button>
        </CardActions>
        </Card>  
      </Grid>

      <Grid xs display="flex" justifyContent="center" alignItems="center" p={2} marginTop={5} marginLeft={1} marginRight={1}>

      <Card sx={{ 
          width: 275,
          boxShadow: 3,
          borderRadius: 5,
          height: 250,
          "&:hover": {
            border: 2,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },

         }} 
        onClick={() => navigate("/summary")}>
        <CardContent>
          <CodeIcon style={{ fontSize: 80 }} sx={{ color: theme.palette.background.alt }}/>
        <Typography variant="h3" component="div">
          Explain Code
        </Typography>
        <Typography variant="body2">
        Explain a complicated piece of code.
          <br />
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" onClick={() => navigate("/summary")}>Explore</Button>
        </CardActions>
        </Card>
      </Grid>
    </Grid>
  </>
  )
}

export default Homepage