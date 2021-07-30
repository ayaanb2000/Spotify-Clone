import React from 'react'
import "./Body.css";
import Header from "./Header";
import {useDataLayerValue} from "./DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "./SongRow";


function Body({spotify}) {
    const[{discover_weekly},dispatch] = useDataLayerValue();

    const playPlaylist = (id) => {
        spotify.play({
            context_uri: `spotify:playlist:2gS31AAyEhDYAwlnUFmQBq`,
          }).then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify.play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body_Info">
                <img  src={discover_weekly?.images[0].url} alt="artist"/>
                <div className="body_Infotext">
                     <strong>PLAYLIST</strong>
                     <h2>Discover weeky</h2>
                     <p>{discover_weekly?.discription}</p>
                </div>
            </div>
            <div class="body_songs">
                <div className="body_Icons">
                    <PlayCircleFilledIcon className="body_Shuffle" onClick={playPlaylist}/>
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon/>
                </div>
                {discover_weekly?.tracks.items.map(item =>(
                  
                     <SongRow playSong={playSong} track = {item.track}/>
                ))}
            </div>
             
        </div>
    );
}

export default Body
