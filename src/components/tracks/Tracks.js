import React,{Component} from 'react';
import { Consumer } from '../../Context'

class Tracks extends Component {
    render(){
        return (
            <Consumer>
                {value=>{
                    console.log(value);
                    return (
                    <div className="row">

                    </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Tracks
