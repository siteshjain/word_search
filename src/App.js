import { Container } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Info from './components/information/Info';

const App=()=> {
 const [det,setDetails]=useState([]);
  const [word,setWord]=useState("")
  const [data1,setData]=useState("en")
   
  const api1=async()=>{
  
    try{
         const info=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${data1}/${word}`);
        setDetails(info.data);
    }catch(error){console.log(error)}
  }


  
  
  useEffect(()=>{
    api1();
     // eslint-disable-next-line 
  },[word,data1])

  return (
   <>
      <div className="app">
      <Container maxWidth="md" className="contain"> <Header data1={data1} setData={setData} word={word} setWord={setWord}></Header>
        <Info word={word} det={det} data1={data1}> </Info>
        <Footer></Footer>
      </Container>
     
      </div>

   </>
  );
}

export default App;
