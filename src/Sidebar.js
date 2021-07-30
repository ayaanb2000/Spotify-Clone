import React from 'react';
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from "./DataLayer";
import { getTokenFromUrl } from "./spotify";



function Sidebar() {
    const[{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img src="https://martechtoday.com/wp-content/uploads/cld-assets/spotify-logo-1920x1080_fouoik.jpg" alt="sidebar_logo" class="sidebar_logo" />
             
             <SidebarOptions Icon={HomeIcon} title="Home"/>
             <SidebarOptions Icon={SearchIcon} title="Search"/>
             <SidebarOptions Icon={LibraryMusicIcon} title="Your Library"/>
             <br/>
            <strong className="sidebar_title"> PLAYLISTS</strong>
            <br/>
             <hr/>

             {playlists?.items?.map(playlist =>(
                
                 <SidebarOptions title={playlist.name}/>

             ))}
             
                    
         </div>
    );
}

export default Sidebar
