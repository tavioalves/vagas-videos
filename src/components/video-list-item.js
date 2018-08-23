import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  
  return (
    <li onClick={() => onVideoSelect(video)} className="video-list-item">
      <div className="flex">
        <div className="item-img">
          <img src={imageUrl} alt="" className="media-object"/>
        </div>
        <div className="item-info">
          <div className="item-title">{video.snippet.title}</div>
          <div className="item-publishedTime">{video.snippet.publishedAt}</div>
          <div className="item-viewCount">{video.statistics.viewCount}</div>
        </div>
      </div>
      <hr />
    </li>
  );
}

export default VideoListItem;