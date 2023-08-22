import React from "react";
import { Box, Typography,useTheme, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import SummarizeIcon from '@mui/icons-material/Summarize';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import KeyIcon from '@mui/icons-material/Key';
import TranslateIcon from '@mui/icons-material/Translate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


const Homepage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box p={2}>
        <Card sx={{ 
          width: 275,
          boxShadow: 2,
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

      </Box>
      <Box p={2}>

      <Card sx={{ 
          width: 275,
          boxShadow: 2,
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

     
        
      </Box>
      <Box p={2}>
      <Card sx={{ 
          width: 275,
          boxShadow: 2,
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
      </Box>
      <Box p={2}>

      <Card sx={{ 
          width: 275,
          boxShadow: 2,
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
        
      </Box>
      <Box p={2}>

      <Card sx={{ 
          width: 275,
          boxShadow: 2,
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
        
        
      </Box>

      <Box p={2}>

      <Card sx={{ 
          width: 275,
          boxShadow: 2,
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
        
        
      </Box>

      <Box p={2}>

      <Card sx={{ 
          width: 275,
          boxShadow: 2,
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
        
        
      </Box>
    </Box>
  </>

    

    
  )
}

export default Homepage