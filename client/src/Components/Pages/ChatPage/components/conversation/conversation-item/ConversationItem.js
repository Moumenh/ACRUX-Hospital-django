import React from 'react';
import {connect} from "react-redux"

import './ConversationItem.scss';

const ConversationItem = ({name,image}) => {

    return (
        <div className='conversation' >
            <img src={"https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"} alt="" />
            <div className="title-text">{name}</div>
            <div className="conversation-message">
               LATEST TEXT
            </div>
        </div>
    );
}

const mapStateToProps=({user:{image}})=>{
    return {
        image
    }
}
export default connect(mapStateToProps)(ConversationItem);