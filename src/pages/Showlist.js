import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card.js';




const Showlist = () => {
  const [data,setData] = useState([]);
    useEffect(()=>{
        const fetchdata =  async ()=>{
            try{
                const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
                setData(res.data);
            }catch(err){
                console.log(err.message);
            };
        }
        fetchdata();
    },[]);

    console.log(data);
  return (
    
    <div className='showlist'>
    <h1 class="heading">Show Listings</h1>
   <div>
        <ul className='wrapper'>
           
            {data.map(show =>(
                 <li key={show.id}>
                    <Card detail={show.show}/>
                 </li>
            ))}

        </ul>
   </div></div>
  )
}

export default Showlist