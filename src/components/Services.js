import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
    state = {
        services : [
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:'Jesse Pinkman was originally slated to be written out by the 9th episode. During the hiatus caused by the writers strike, creator Vince Gilligan, impressed by Aaron Pauls portrayal of Jesse, decided to reinstate the character.'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info :'It was Vince Gilligans decision to finish the show in season 5. He didnt want to make the mistake many successful shows make by running too long until the quality decreases.'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info :'RJ Mitte has cerebral palsy in real life. His case is much milder than Walt Juniors. He had to learn to walk with crutches and slow down his speech to play the part.'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info :'Walter was originally written to be 40 years old. AMC felt that 40 was too young for Walter to have a mid-life crisis and requested his age change to 50.'
            }    
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='Services'/>
                <div className="services-center">
                { this.state.services.map((item,index)=> {
                    return <article key ={index} className ="services">
                        <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                    </article>
                })}
                    </div>
                </section>
        )
    }
}
