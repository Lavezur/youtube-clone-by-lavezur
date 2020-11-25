import React from 'react';
import './search-page.scss';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../channel-row/channel-row";

function SearchPage() {
    return (
        <div className="search-page">
            <div className="search-page__filter">
                <TuneOutlinedIcon/>
                <h2 className="search-page__title">FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image="https://avatars.mds.yandex.net/get-zen_doc/34175/pub_5a9eaaaf77d0e6ac2b07132e_5a9eab16581669f24190a7c1/scale_1200"
                Channel="Someone"
                verified
                subs="99.7M"
                noOfVideos="212"
                description="Just simple channel about world"
            />
        </div>
    )
}

export default SearchPage;
