import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";

import avater from "../../assets/default-avatar.jpg";
const hipHopSongs = [
  {
    title: "Lose Yourself",
    artist: "Eminem",
    album: "8 Mile Soundtrack",
    length: "5:26",
  },
  {
    title: "Juicy",
    artist: "The Notorious B.I.G.",
    album: "Ready to Die",
    length: "5:02",
  },
  {
    title: "N.Y. State of Mind",
    artist: "Nas",
    album: "Illmatic",
    length: "4:53",
  },
  {
    title: "Still D.R.E.",
    artist: "Dr. Dre ft. Snoop Dogg",
    album: "2001",
    length: "4:30",
  },
  {
    title: "Empire State of Mind",
    artist: "Jay-Z ft. Alicia Keys",
    album: "The Blueprint 3",
    length: "4:36",
  },
  {
    title: "Gin and Juice",
    artist: "Snoop Dogg",
    album: "Doggystyle",
    length: "3:31",
  },
  {
    title: "It Was a Good Day",
    artist: "Ice Cube",
    album: "The Predator",
    length: "4:20",
  },
  {
    title: "Dear Mama",
    artist: "Tupac Shakur",
    album: "Me Against the World",
    length: "4:39",
  },
  {
    title: "Humble",
    artist: "Kendrick Lamar",
    album: "DAMN.",
    length: "2:57",
  },
  {
    title: "Hotline Bling",
    artist: "Drake",
    album: "Views",
    length: "4:27",
  },
  {
    title: "Big Pimpin'",
    artist: "Jay-Z ft. UGK",
    album: "Vol. 3... Life and Times of S. Carter",
    length: "4:43",
  },
  {
    title: "Can't Tell Me Nothing",
    artist: "Kanye West",
    album: "Graduation",
    length: "4:32",
  },
  {
    title: "Gold Digger",
    artist: "Kanye West ft. Jamie Foxx",
    album: "Late Registration",
    length: "3:28",
  },
  {
    title: "Forgot About Dre",
    artist: "Dr. Dre ft. Eminem",
    album: "2001",
    length: "3:42",
  },
  {
    title: "99 Problems",
    artist: "Jay-Z",
    album: "The Black Album",
    length: "3:55",
  },
  {
    title: "All of the Lights",
    artist: "Kanye West",
    album: "My Beautiful Dark Twisted Fantasy",
    length: "4:59",
  },
  {
    title: "Still Not a Player",
    artist: "Big Pun ft. Joe",
    album: "Capital Punishment",
    length: "3:56",
  },
  {
    title: "Shook Ones Part II",
    artist: "Mobb Deep",
    album: "The Infamous",
    length: "5:26",
  },
  {
    title: "Ms. Jackson",
    artist: "OutKast",
    album: "Stankonia",
    length: "4:30",
  },
  {
    title: "C.R.E.A.M.",
    artist: "Wu-Tang Clan",
    album: "Enter the Wu-Tang (36 Chambers)",
    length: "4:12",
  },
];
const index = () => {
  const [wrapperHeight, setWrapperHeight] = React.useState("");
  React.useEffect(() => {
    //to calculate height of tabble wrapper
    const tableWrapper = document.getElementById("songs-wrapper");
    const height =
      window.innerHeight - tableWrapper.getBoundingClientRect().top;
    setWrapperHeight(`${height}px`);
  }, []);
  const data = useSelector((state) => state.ui.partyTab);
  return (
    <div id="party-container">
      <figure
        style={{
          backgroundImage: `linear-gradient(to right, var(--tab-dark-color) , ${data.img.avgColor})`,
        }}
      >
        <img id="cover-art" src={data.img.src} />
        <div className="info1">
          <h6>Party by 21Chozyn</h6>
          <h2>Rhythm Revival</h2>
          <h6>75 songs</h6>
        </div>
        <div className="info2">
          <p>21 people listening</p>
          <div className="avatars">
            <div className="avatar-container">
              <img src={avater} alt="avatar" />
            </div>
            <div className="avatar-container">
              <img src={avater} alt="avatar" />
            </div>
            <div className="avatar-container">
              <img src={avater} alt="avatar" />
            </div>
          </div>
          <div className="btn1">join the party</div>
        </div>
      </figure>
      <div id="songs-wrapper" style={{ height: wrapperHeight }}>
        <div id="header">
          <h4>#</h4>
          <h4>Title</h4>
          <h4>Artist</h4>
          <h4>Album</h4>
          <h4>Length</h4>
        </div>

        {hipHopSongs.map((song, index) => {
          return (
            <div key={index} className="song">
              <span>{index + 1}</span>
              <span>{song.title}</span>
              <span>{song.artist}</span>
              <span>{song.album}</span>
              <span>{song.length}</span>
              <div key={index} className="progress-bar" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
