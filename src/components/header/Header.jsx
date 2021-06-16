import { MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import datas from '../data/data'
import './header.css'
const Header = ({data1,setData,word,setWord}) => {

    const handleCCahnge=(e)=>{
        setData(e);
        setWord("");
    }
    return (
        <div>
        <div className="main">
            <h2>{word ?word:"Word Search"}</h2>
          
          <div className="option">
              <TextField id="standard-basic"  className="search" label="Type Word" autoComplete="off" value={word} onChange={(e)=>setWord(e.target.value)}/>
               <TextField id="standard-select-currency" className="select" value={data1} onChange={(e)=>handleCCahnge(e.target.value)} select label="Language" >
               {
                   datas.map((e)=>{
                   return  <MenuItem key={e.label} value={e.label}>{e.value}</MenuItem>
                   })
               }
                   
               </TextField>
               
          </div>
        </div>
            
        </div>
    )
}

export default Header
