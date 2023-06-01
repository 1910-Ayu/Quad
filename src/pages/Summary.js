import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Summary = () => {
   
    const [show,setShow] = useState({show:{
        image:{
            original:""
        },
        name:"",
        summary:""

    }});
   
        const params = useParams();

    useEffect(()=>{
        
        const fetchdata = async ()=>{
            try{
                
                const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
                const data = res.data;
                console.log(data);
               
                const ss = data.find((element) => element.show.id === parseInt(
                params.id));
                console.log(ss.show);
                setShow( state => ({...state,show:ss.show}));
            }catch(err){
                console.log(err.message);
            };
        }
        fetchdata();
    
    });
    
  return (
    <div className="temp">
       <div className="card">
       <img src={show.show.image.original} class="card__image" />
    <div className="card__body">
       <h2 className="card__title">{show.show.name}</h2>
       <p className="card__description">{show.show.summary}</p>
 
    </div>
     </div>
    </div>
  )
}

export default Summary