import React from 'react';

 import onlineicon from '../../Icons/onlineicon.png';
 import closeicon from '../../Icons/closeicon.png';
 import '../InfoBar/InfoBar.css';

const InfoBar =({room})=>
(
    <div className="infoBar">
        <div className="leftInnerContainer">
<img className="onlineIcon" src={onlineicon} alt="online image"></img>
<h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img className="closeIcon" src={closeicon} alt="close image"></img>
</a>
            </div>
    </div>
)

export default InfoBar;