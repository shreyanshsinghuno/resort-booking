import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'
export default function () {
    return (
    <React.Fragment>
        <Hero hero="roomsHero">
        <Banner title="Our rooms">
            <Link to='/' className="btn-primary" >
return home 
                </Link>
        </Banner>
    </Hero>    
    <RoomContainer/>
    </React.Fragment>
    )
}
