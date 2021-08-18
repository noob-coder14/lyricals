import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export const Lyrics = props => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(
        `track.lyrics.get?track_id=${props.match.params.id}&apikey=0c81b427865d4b0d0190b967630e3f0d`
      )
      .then(res => {
        let lyrics = res.data.lyrics;
        setLyrics({ lyrics });
        

        return axios.get(
          `track.get?track_id=${props.match.params.id}&apikey=0c81b427865d4b0d0190b967630e3f0d`);
      })
      .then(res => {
        let track = res.data.track;
        setTrack({ track });
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);
//   console.log(track);

    return (
      <>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track_name} by{" "}
            <span className="text-secondary">{track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics_body}</p>
          </div>
        </div>

        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.album_id}
          </li>
          {/* <li className="list-group-item">
            <strong>Song Genre</strong>:{" "}
            {track.primary_genres.music_genre_list.length === 0
              ? "NO GENRE AVAILABLE"
              : track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name}
          </li> */}
          <li className="list-group-item">
            <strong>Explicit Words</strong>:{" "}
            {track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li className="list-group-item">
            <strong>Release Date</strong>:{" "}
            <Moment format="MM/DD/YYYY">
              {track.first_release_date}
            </Moment>
          </li>
        </ul>
      </>
    );
};
