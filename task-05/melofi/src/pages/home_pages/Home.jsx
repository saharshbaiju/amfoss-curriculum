
import Background from "../../components/background/Background";
import Sidebar from "../../components/sidebar/Sidebar";
import TopPanel from "../../components/toppanel/TopPanel";
import Cards from "../../components/cards/Card";
import Recentlyplayed from "../../components/middlemenu/Recentlyplayed";
import { useState,useRef } from "react";
// import Artistfollowing from "../../components/middlemenu/Artistfollowing";
import Mainplayer from "../../components/musicplayers/Mainplayer";
import Globalplayer from "../../components/musicplayers/Globalplayer";
function HomeMain() {

    
    // const songData = [
    //     {
    //         "id": 1,
    //         "img": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    //         "songname": "Midnight City",
    //         "author": "M83"
    //     },
    //     {
    //         "id": 2,
    //         "img": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&fit=crop",
    //         "songname": "Starboy",
    //         "author": "The Weeknd"
    //     },
    //     {
    //         "id": 3,
    //         "img": "https://images.unsplash.com/photo-1459749411177-042180ce673c?w=400&h=400&fit=crop",
    //         "songname": "Levitating",
    //         "author": "Dua Lipa"
    //     },
    //     {
    //         "id": 4,
    //         "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    //         "songname": "Bohemian Rhapsody",
    //         "author": "Queen"
    //     },
    //     {
    //         "id": 5,
    //         "img": "https://images.unsplash.com/photo-1514525253344-f81bcc007151?w=400&h=400&fit=crop",
    //         "songname": "Blinding Lights",
    //         "author": "The Weeknd"
    //     },
    //     {
    //         "id": 6,
    //         "img": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&h=400&fit=crop",
    //         "songname": "Heat Waves",
    //         "author": "Glass Animals"
    //     },
    //     {
    //         "id": 7,
    //         "img": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
    //         "songname": "Stay",
    //         "author": "The Kid LAROI"
    //     },
    //     {
    //         "id": 8,
    //         "img": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop",
    //         "songname": "Circles",
    //         "author": "Post Malone"
    //     }
    // ];

    // useEffect(()=>{
    //   fetch("http://127.0.0.1:5000/songdata")
        // .then(res => res.json())
        // .then(data => setDetails(data))
        // .catch(err => console.error(err))
    // },[])
    const [Details, setDetails] = useState([]);
    const [Active_tab, setActive_tab] = useState("home");
    const [player_status,set_player_status] = useState(false);
    const [currentSong,setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const audioElem = useRef(null);

    return (
        <div className="full">
            <Background />
            <Sidebar onNavigate ={setActive_tab}/>
            <div className="content">

         
              <TopPanel setDetails={setDetails} />
              <Globalplayer song={currentSong} isplaying={isPlaying} setisplaying={setIsPlaying} audioElem={audioElem}/>

              {
                !player_status && (
                <>
                  <Cards details={Details} set_player_function={set_player_status} setcurrentsong = {setCurrentSong}/>
                  {Active_tab === "home" && <Recentlyplayed heading="Recently Played" songdata={Details} set_player_function={set_player_status} setcurrentsong = {setCurrentSong}/>}
                  {/* {Active_tab === "artist" && <Artistfollowing />} */}
                </>
                )
              }
              {
                player_status && (
                  <>
                    <Mainplayer set_player_function={set_player_status} song={currentSong} audioElem = {audioElem} isplaying={isPlaying} setisplaying={setIsPlaying}/>
                  </>
                )
              }
          </div>



        </div>
        


    )

}

export default HomeMain

