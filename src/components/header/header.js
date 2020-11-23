import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './header.scss';


function Header() {
    return (
        <div className="header">

            <div className="header__menu">
                <MenuIcon/>
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
                    alt="YouTube-logo"
                />
            </div>

            <div className="header__input">
                <input className="header__input-input" type="text" placeholder="Search"/>
                <SearchIcon className="header__inputButton"/>
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
