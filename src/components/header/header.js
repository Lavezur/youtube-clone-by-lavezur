import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './header.scss';
import { Link } from "react-router-dom";


function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">

            <div className="header__menu">
                <MenuIcon/>
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
                        alt="YouTube-logo"
                    />
                </Link>

            </div>

            <div className="header__input">
                <input
                    onChange={e => setInputSearch(e.target.value)}
                    value={inputSearch}
                    className="header__input-input"
                    type="text"
                    placeholder="Search"
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>
            </div>

            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar
                /*className="header__icon"*/
                alt="Avatar"
                src="https://yobte.ru/uploads/posts/2019-11/cherep-64-foto-14.jpg"
            />
            </div>

        </div>
    );
}

export default Header;
