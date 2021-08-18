import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SongContext } from "../../Context";

const Search = () => {
  const [state, setState] = useContext(SongContext);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=0c81b427865d4b0d0190b967630e3f0d`
      )
      .then(res => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, heading: "Search Results" });
      })
      .catch(err => console.log(err));
  }, [trackTitle]);

  const findTrack = e => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = e => {
    setUserInput(e.target.value);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music" /> Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5 mt-3" type="submit">
          Get Track Lyrics
        </button>
      </form>
    </div>
  );
};

export default Search;