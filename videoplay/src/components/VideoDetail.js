import react from "react";

const VideoDetail = ({video}) =>{
    if(!video) {
        return <div>Loading...</div>;
    };

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}` //aqui vai puxar direto o id do video e vai passar como argumento quando for solicitado 
    
    return( 
        <div>
            <div className="ui embed">
                <iframe tittle="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        );
};

export default VideoDetail;