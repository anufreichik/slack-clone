import React, {useEffect, useState} from 'react';
import "./Sidebar.css";
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from "./SidebarOption";
import {
    Add,
    Apps,
    BookmarkBorder,
    Drafts,
    ExpandLess,
    ExpandMore,
    FileCopy,
    Inbox,
    PeopleAlt
} from "@material-ui/icons";
import db from "./firebase";
import {useStateValue} from "./StateProvider";

function Sidebar(props) {
    const [{user}] =useStateValue()
    const [channels, setChannels]=useState([]);

    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc=>({
                id:doc.id,
                name:doc.data().name,
            })
            ))
        ))
    },[])

    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>{user?.email}</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={Inbox} title="Mentioned & reactions"/>
            <SidebarOption Icon={Drafts} title="Saved Items"/>
            <SidebarOption Icon={BookmarkBorder} title="Channel browser"/>
            <SidebarOption Icon={PeopleAlt} title="People & user groups"/>
            <SidebarOption Icon={Apps} title="Apps"/>
            <SidebarOption Icon={FileCopy} title="File browser"/>
            <SidebarOption Icon={ExpandLess} title="Show less"/>
            {/*<SidebarOption title='Youtube'/>*/}
            <hr/>
            <SidebarOption Icon={ExpandMore} title="Show more"/>
            <hr/>
            <SidebarOption Icon={Add} title="Add Channel"  addChannelOption/>
            {/* Connect to DB and list all the channels*/}
            {/* <SidebarOption */}
            {channels.map(channel=>(
                <SidebarOption title={channel.name} key={channel.id} id ={channel.id} />
            ))}
        </div>
    );
}

export default Sidebar;
