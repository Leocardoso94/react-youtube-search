import React, { Component } from 'react';
import VideoListItem from './video_list_item';
class VideoList extends Component {
    render() {
        const onVideoSelect = this.props.onVideoSelect
        const videosItems = this.props.videos.map(video =>
            <VideoListItem
                onVideoSelect={onVideoSelect}
                key={video.etag}
                video={video}
            />);

        return (
            <ul className="col-md-4 list-group">
                {videosItems}
            </ul>
        );
    }
}

export default VideoList;