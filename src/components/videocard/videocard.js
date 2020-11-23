import React from "react";
import './videocard.scss'
import Avatar from "@material-ui/core/Avatar";


function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videocard">

            <img className="videocard__image" src={image} alt={image}/>
            <div className="videocard__info">

                <Avatar className="videocard__avatar" alt={channel} src={channelImage}/>

                <div className="videocard__text">
                    <h4 className="videocard__text-title">{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>

        </div>
    )
}

export default VideoCard;
