const Globalplayer = ({song,isplaying,setisplaying,audioElem}) => {
    if (!song) return <audio ref={audioElem} />;
    return(
    <>
        <audio src={song.previewUrl} ref={audioElem}></audio>
    </>
    )
}
 
export default Globalplayer;