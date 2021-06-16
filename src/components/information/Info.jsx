import React from 'react'
import './info.css'
const Info = ({word,det,data1}) => {
//   const audioLink=det[0].phonetics[0].audio;
  console.log(det);


  
    return (
        
        <div className="information">
             { 
                 word===""?(<span className="span1">Detail Meaning of Word</span>):
                 (
                    det.map((detail)=>detail.meanings.map((itm)=>
                         itm.definitions.map((define)=>{
                           return(
                             
                           <div className="define1">
                         
                            {(<span><b>Meaning : </b><p>{define.definition}</p></span>)}
                               {
                                   (
                                  define.example&&( <span><b>Example : </b><p>{define.example}</p></span>)
                                   )
                               }
                               {
                                   define.synonyms&&(
                                    <span ><b>Synonyms : </b><div>{define.synonyms.map((syn)=><div className="syn1">{syn}</div>)}</div></span>
                                     )
                               }
                             <br/>
                         </div>
                        )
                       })
                     ))
                 )
             }
            
        </div>
     )
}

export default Info
