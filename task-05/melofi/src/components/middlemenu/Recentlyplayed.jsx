import Cardlong from "../cards/Cardlong";

const Recentlyplayed = ({heading,songdata,set_player_function, setcurrentsong}) => {
    // const songData = [
  // {
  //   id: 1,
  //   img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
  //   songname: "Midnight City",
  //   author: "M83"
  // },
  // {
  //   id: 2,
  //   img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&fit=crop",
  //   songname: "Starboy",
  //   author: "The Weeknd"
  // },
  // {
  //   id: 3,
  //   img: "https://images.unsplash.com/photo-1459749411177-042180ce673c?w=400&h=400&fit=crop",
  //   songname: "Levitating",
  //   author: "Dua Lipa"
  // },
  // {
  //   id: 4,
  //   img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
  //   songname: "Bohemian Rhapsody",
  //   author: "Queen"
  // },
  // {
  //   id: 5,
  //   img: "https://images.unsplash.com/photo-1514525253344-f81bcc007151?w=400&h=400&fit=crop",
  //   songname: "Blinding Lights",
  //   author: "The Weeknd"
  // },
  // {
  //   id: 6,
  //   img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&h=400&fit=crop",
  //   songname: "Heat Waves",
  //   author: "Glass Animals"
  // },
  // {
  //   id: 7,
  //   img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
  //   songname: "Stay",
  //   author: "The Kid LAROI"
  // },
  // {
  //   id: 8,
  //   img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop",
  //   songname: "Circles",
  //   author: "Post Malone"
  // }
// ];
    return ( 
      <div className="recentlyplayed">
        <h1>{heading}</h1>
        <Cardlong details={songdata} set_player_function={set_player_function} setcurrentsong = {setcurrentsong}/>
      </div>
        
     );
}
 
export default Recentlyplayed;