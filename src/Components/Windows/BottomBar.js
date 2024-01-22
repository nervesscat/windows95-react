import {useState} from 'react';

function BottomBar(){
    function PressTab(){
        console.log("Tab pressed");
    }

    const [tab1] = useState({name: "Internet Core", icon: "https://via.placeholder.com/50", onClick: PressTab})

    const [tabList, setTabList] = useState([tab1, tab1]);

    return(
        <div className="bottom-bar">
            <div className="tab-button">START</div>
            <div className="separation-y-bar"/>

            <div className="tab-list">
                <Tab props={tabList[0]}/>
            </div>
            <div className='clock'>10:23 PM</div>
        </div>
    )
}

function Tab({props}){
    return(
        <div className="tab-button">
            <div className="tab-icon">
                <img src={props.icon} alt={props.name}/>
            </div>
            <div className="tab-name">
                {props.name}
            </div>
        </div>
    )
}

export default BottomBar;