import React,{Component} from 'react'
import axios from 'axios'

export const SongContext = React.createContext();
export class ProviderComp extends Component {
    state = {
        track_list: [],
        heading: 'Top 10 Tracks'
    };

    componentDidMount(){
        axios.get(`chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1&apikey=0c81b427865d4b0d0190b967630e3f0d`)
            .then(res=> {
                // console.log(res.data);
                this.setState({track_list: res.data.message.body.track_list})})
            .catch(err=> console.log(err))
    }

    render() {
        return (
            <SongContext.Provider value={this.state}>
                {this.props.children}
            </SongContext.Provider>
        )
    }
}

export const Consumer = SongContext.Consumer;