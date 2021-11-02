import react from "react";
import VideoItem from "./VideoItem";


const VideoList = ({videos, onVideoSelect}) => {
    // props.videos
    //Função que irá mapear cada video do array e renderizar na tela
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video = {video} />; //passando o video que estou mapeando e passando como prop para esse componente

    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;