import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNThhZjAwMWNkZWI2N2JjY2IzZWJmMGM2NDk5ZGI1ZiIsIm5iZiI6MTczMzkxODQ3Mi4wMjcsInN1YiI6IjY3NTk3ZjA4NWMzNjRjNGE2N2ZmZDk5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7-k2ukZOXNkGJnNcrAwC30cnRwJLkUUeOUEWdTMMt8U", // Replace with your actual token
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res); // Log the response to check the data
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-1);
        }}
      />
      {apiData.key ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
      <div className="player-info">
        <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : ""}</p>
        <p>{apiData.name}</p>
        <p>{apiData.time}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
