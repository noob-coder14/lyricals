import React, { useContext } from "react";
import { SongContext } from "../../Context";
import Track from "../tracks/Track";

const Tracks = () => {
    const [state] = useContext(SongContext);
    const { track_list, heading } = state;
      return (
        <>
          <h3 className="text-center mb-4">{heading}</h3>
          <div className="row">
            {track_list.map(item => (
              <Track key={item.track.track_id} track={item.track} />
            ))}
          </div>
        </>
      );
    
  };
  
  export default Tracks;
