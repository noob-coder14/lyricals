import React,{Component} from 'react';
import { Consumer } from '../../Context'
import Track from './Track';

class Tracks extends Component {
    render(){
        return (
            <Consumer>
                {value=>{
                    const {track_list, heading} = value;
                    console.log(value);
                    return (
                    <>
                    <h3 className="text-center mb-4">{heading}</h3>
                    <div className="row">
                        {track_list.map(item=>(
                            <Track track={item.track} key={item.track.track_id}/>
                        ))}
                    </div>
                    </>
                    )
                }}
            </Consumer>
        )
    }
}

export default Tracks
