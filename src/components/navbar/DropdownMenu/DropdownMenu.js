import React, { useState, useEffect, useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as CogIcon } from '../../../img/icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../../img/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../../img/icons/arrow.svg';



// context api
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import {
    Brightness2,
    EnhancedEncryption,
    ExitToApp, Feedback,
    Help, Language,
    Lock,
    Mail,
    Report,
    Subtitles,
    ViewList
} from "@mui/icons-material";

const DropdownMenu = () => {
    // const [{ user }, dispatch] = useStateValue();
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    function DropIteamImage(props) {
        return (
            <a href="/#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    // function DropIteamImageImage(props) {
    //     return (
    //         <a href="/#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
    //         <img src={props.image} alt="pic" className="icon-profile" />
    //         {props.children}
    //         <br/>
    //         See your profile
    //         </a>
    //     );
    // }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}
        >
            <div className="menu">
                {/* <DropIteamImage>My Profile</DropIteamImage> */}
                {/*<DropIteamImageImage image={user.photoURL}>{user.displayName}</DropIteamImageImage>*/}

                <hr className="hrTag" />
                <DropIteamImage
                    leftIcon={<Feedback />}
                >Give Feedback</DropIteamImage>
                <hr className="hrTag" />

                <DropIteamImage
                    leftIcon={<CogIcon />}
                    rightIcon={<ChevronIcon />}
                    goToMenu="settings"
                >Settings & Privacy</DropIteamImage>

                <DropIteamImage
                    leftIcon={<Help/>}
                    rightIcon={<ChevronIcon />}
                    goToMenu="help"
                >Help & Support</DropIteamImage>

                <DropIteamImage
                    leftIcon={<Brightness2 />}
                >Dark Mode</DropIteamImage>

                <DropIteamImage
                    leftIcon={<ArrowIcon />}
                >Switch to Classic Facebook</DropIteamImage>

                <DropIteamImage
                    leftIcon={<ExitToApp />}
                >Log Out</DropIteamImage>
            </div>
        </CSSTransition>

        <CSSTransition
            in={activeMenu === 'settings'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}
        >
            <div className="menu">
                <DropIteamImage goToMenu="main" leftIcon={<ArrowIcon />}>
                    <h2>Settings & Privacy</h2>
                </DropIteamImage>
                <DropIteamImage leftIcon={<CogIcon />}>Settings</DropIteamImage>
                <DropIteamImage leftIcon={<EnhancedEncryption />}>Privacy Checkup</DropIteamImage>
                <DropIteamImage leftIcon={<Lock />}>Privacy Shortcuts</DropIteamImage>
                <DropIteamImage leftIcon={<ViewList />}>Activity Log</DropIteamImage>
                <DropIteamImage leftIcon={<Subtitles />}>News Feed Preferences</DropIteamImage>
                <DropIteamImage leftIcon={<Language />}>Language</DropIteamImage>
            </div>
        </CSSTransition>

        <CSSTransition
            in={activeMenu === 'help'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}
        >
            <div className="menu">
                <DropIteamImage goToMenu="main" leftIcon={<ArrowIcon />}>
                    <h2>Help & Support</h2>
                </DropIteamImage>
                <DropIteamImage leftIcon={<Help />}>Help Center</DropIteamImage>
                <DropIteamImage leftIcon={<ChatBubbleIcon />}>Help Community</DropIteamImage>
                <DropIteamImage leftIcon={<Mail />}>Support Inbox</DropIteamImage>
                <DropIteamImage leftIcon={<Report />}>Report a Problem</DropIteamImage>
            </div>
        </CSSTransition>
      </div>
    );
}

export default DropdownMenu;