import React,{Component} from 'react'
export const SongContext = React.createContext();

export class ProviderComp extends Component {
    state = {
        track_list: [
            { track : { track_name: 'abc' } },
            { track : { track_name: 'xyz' } }
        ],
        heading: 'Top 10 Tracks'
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