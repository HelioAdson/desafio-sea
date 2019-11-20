import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaBuilding, FaFileExcel } from 'react-icons/fa';


const SmallButton = styled.button`
    &:hover {
    transform: scale(1.2);
    transition: all 1s 1s easy-out;
    }
    border-radius:0.em;
    background-color:#339ACC;
`;

export default function ProgButton(props){
        return (<>
            <div style={{display:"flex",flexDirection:"column"}}>
                    <SmallButton className="btn">
                    <IconContext.Provider value={{ color: "white" }}>
                    <div>
                    <FaBuilding/>
                    </div>
                    </IconContext.Provider>
                    </SmallButton>
                    <div className="text-primary" >{props.item}</div>
                    <div className="text-primary">{props.status}</div>
            </div>        
        </>);
}
