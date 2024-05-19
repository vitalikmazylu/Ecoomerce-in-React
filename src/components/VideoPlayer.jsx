import ReactPlayer from 'react-player';
import videoFile from '../assets/video.mp4'

const VideoPlayer = () => {
	return <ReactPlayer url={videoFile} controls={true} width='100%' height='100%' />;
};

export default VideoPlayer;
