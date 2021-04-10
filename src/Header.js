import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/Help"
import {useStateValue} from "./StateProvider";

function Header(props) {
    const [{user}] =useStateValue()

    return (
        <div className="header">
            <div className="header_left">
                <Avatar
                    className="header_avatar"
                    alt={user?.displayName}
                    src = {user?.photoURL}
                    />
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <AccessTimeIcon/>
                {/* Avatar for loggedin user*/}
                {/* Time icon*/}
            </div>
            <div className="header_search">
                {/*search icon*/}
                <SearchIcon/>
                {/* input*/}
                <input placeholder='Search Messages'/>
            </div>
            <div className="header_right">
                {/*help icon*/}
                <HelpOutlineIcon/>
            </div>
        </div>
    );
}

export default Header;
