import React from 'react'
import Pokedex from './Pokedex'
import './index.css'
export default function App() {
    return (
        <React.Fragment className='main'>
           <header> 
                <h1>Pokedex</h1>
            </header>
            <Pokedex className='pokedex'/>
        </React.Fragment>
    )
}
