import React, {useState} from 'react'
import {useEffect} from 'react'

// import SearchBox from "./SearchBox"
// import PokeList from "./PokeList"


export default function Pokedex() {
    const [search,setsearch]=useState("");
    const [submit,setsubmit]=useState("");

    const [name,Setname]=useState();
    const [weight,Setweight]=useState(0);
    const [height,Setheight]=useState(0);
    const [id,Setid]=useState();
    const [stats,Setstats]=useState({hp:0,attack:0,defense:0,special_attack:0,special_defense:0 ,speed:0});
    const [image,Setimage]=useState();
    const [type,Settype]=useState();
    
    const onSubmits=(event)=>{
        event.preventDefault();
        setsubmit(search);
    };

    const inputEvent=(event)=>{
        setsearch(event.target.value);
    };

    useEffect(()=>{
        const url="https://pokeapi.co/api/v2/pokemon/"+String(submit);
        fetch(url)
           .then(Response=>Response.json())
           .then(data=>{
                // Setloading(false)
               Setname(data.name);
               Setweight(data.weight);
               Setheight(data.height);
               Settype(data.types[0].type.name);
               Setstats({hp:data.stats[0].base_stat,
                attack:data.stats[1].base_stat,
                defense:data.stats[2].base_stat,
                special_attack:data.stats[3].base_stat,
                special_defense:data.stats[4].base_stat,
                speed:data.stats[5].base_stat})
               Setid(data.id);
               fetch('https://pokeres.bastionbot.org/images/pokemon/'+String(data.id)+'.png')
               .then(response=>Setimage(response.url))
           })
            .catch(error=>{console.log(error)
            })
    },[submit]);



    return (
        <>
          <form>
            <input type="text" 
            placeholder="Search..." 
            onChange={inputEvent} 
            value={search}
            ></input>

            <button onClick={onSubmits} type="submit">Submit</button> 
           </form>
           
           <div className='container'>
               <div>
                Name:{name}<br/>
                Weight:{weight}lb<br/>
                Height:{height}ft<br/>
                Id:{id}<br/>
                type:{type}<br/>
                <h1>Stats</h1>
                hp:{stats.hp}<br/>
                attack:{stats.attack}<br/>
                defense:{stats.defense}<br/>
                special_attack:{stats.special_attack}<br/>
                special_defense:{stats.special_defense}<br/>
                speed:{stats.speed}<br/>
                </div>

                <img src={image} alt=""/>
            </div>
        </>            

    
    )
}
