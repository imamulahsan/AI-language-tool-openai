import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Summary from "./pages/Summary";
import Grammar from './pages/Grammar';
import Keyword from './pages/Keyword';
import Translation from './pages/Translation';
import Lesson from './pages/Lesson';
import Direction from './pages/Direction';
import Emoji from './pages/Emoji';
import Mood from './pages/Mood';
import Rap from './pages/Rap';
import Tweet from './pages/Tweet';
import Product from './pages/Product';
import Code from './pages/Code';

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/summary" element={<Summary />} />
        <Route path= "/grammar" element={<Grammar/>} />
        <Route path='/keyword' element={<Keyword/>} />
        <Route path='/translation' element={<Translation/>} />
        <Route path='/lesson' element={<Lesson/>} />
        <Route path='/direction' element={<Direction/>} />
        <Route path='/emoji' element={<Emoji/>} />
        <Route path='/mood' element={<Mood/>} />
        <Route path='/rap' element={<Rap/>} />
        <Route path='/tweet' element={<Tweet/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/code' element={<Code/>} />
      </Routes>

    </ThemeProvider>
      
    </>
  );
}

export default App;
