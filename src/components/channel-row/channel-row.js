import React from 'react';
import './channel-row.scss';
import {Avatar} from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({image, Channel, verified, subs, noOfVideos, description}) {
    return (
        <div className="channel-row">
            <Avatar className="channel-row__logo" alt={Channel} src={image}/>
            <div className="channel-row__text">
                <h4>
                    {Channel} {verified && <VerifiedIcon className="channel-row__verified"/>}
                </h4>
                <p>
                    {subs} subscribers • {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow;
