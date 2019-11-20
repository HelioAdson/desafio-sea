import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaBuilding } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa';
import { FaRegBell} from 'react-icons/fa';
import { FaHistory} from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

const StyledNavbar = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    align-items:center;
    border-top-right-radius: 1em;
    border-bottom-right-radius:1em;
    overflow:hidden;
    background:#339ACC;
    min-width:4vw;
    max-width:4vw;
    height:100%;
    min-height:100vh;
    @media (max-width: 768px) {
    min-width:10%;
    max-width:10%;
  }
`;
const Offset0 = styled.div`
    height: 3em;
`;
const Offset1 = styled.div`
    height: 1em;
`;
const SmallButton = styled(Button)`
    &:hover {
    transform: scale(1.2);
    transition: all 1s 1s easy-out;
    }
`;

function Navbar() {
  return (
    <div>
    <StyledNavbar>
    <Offset0/>
    <div className="bg-light" style={{width:"100%",height:"3em"}}></div>

    <Offset0/>
    <SmallButton className="btn btn-light">
    <IconContext.Provider value={{ color: "#5DADEC" }}>
    <div>
    <FaBuilding/>
    </div>
    </IconContext.Provider>
    </SmallButton>

    <Offset1/>
    <SmallButton className="btn btn-light">
    <IconContext.Provider value={{ color: "#5DADEC" }}>
    <div>
    <FaEdit/>
    </div>
    </IconContext.Provider>
    </SmallButton>

    <Offset1/>
    <SmallButton className="btn btn-light">
    <IconContext.Provider value={{ color: "#5DADEC" }}>
    <div>
    <FaNetworkWired/>
    </div>
    </IconContext.Provider>
    </SmallButton>

    <Offset1/>
    <SmallButton className="btn btn-light">
    <IconContext.Provider value={{ color: "#5DADEC" }}>
    <div>
    <FaRegBell/>
    </div>
    </IconContext.Provider>
    </SmallButton>

    <Offset1/>
    <SmallButton className="btn btn-light">
    <IconContext.Provider value={{ color: "#5DADEC" }}>
    <div>
    <FaHistory/>
    </div>
    </IconContext.Provider>
    </SmallButton>

    <Offset1/>
    <SmallButton className="btn btn-light">
    <IconContext.Provider value={{ color: "#5DADEC" }}>
    <div>
    <FaUser/>
    </div>
    </IconContext.Provider>
    </SmallButton>


    </StyledNavbar>
    </div>
  );
}

export default Navbar;
