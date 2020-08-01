import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext();
// provider and consumer.
// provider allows alll the components in app to access contexts
// consumer access krta hai
//RoomContext.Provider value{} ye kr skte the ke lekin state se karega   
class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    };
    // getData{} jb online import hoga data

    componentDidMount() {
        // this.getData
        let rooms = this.formatData(items)
        console.log(this.state.rooms)
        let featuredRooms = rooms.filter(room =>room.featured===true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
    
            let room= {...item.fields , images,id};
            return room;
        });
        return tempItems;  
    }   

    getRoom = (slug) => {

        let rooms = this.formatData(items)
                let tempRooms = rooms;
                const room = tempRooms.find((room) => room.slug === slug);
                return room;
            }
    render() {
        return (
            <RoomContext.Provider value ={{
                ...this.state,
                getRoom:this.getRoom
                }} >
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;



export function withRoomConsumer(Component) {
    return function ConsumerWrapper (props) {
        return <RoomConsumer>
            {value => <Component {...props } context = {value} />}
        </RoomConsumer>
    }
}
export { RoomConsumer , RoomProvider , RoomContext};