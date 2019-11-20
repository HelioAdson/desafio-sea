import React,{Component} from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaBuilding, FaFileExcel } from 'react-icons/fa';


const StyledProgressBar = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    text-emphasis: bold;
    max-width:100%;
    min-height:10%;
    max-height:15%;
    margin: 1em 4.2em 1em 2em;
    padding: 2em;
    border-radius:1em;
`;

const SmallButton = styled.button`
    &:hover {
    transform: scale(1.2);
    transition: all 1s 1s easy-out;
    }
    border-radius:0.em;
    background-color:#339ACC;
`;

export default class Progress extends Component{
    render(){
        return (
          <StyledProgressBar className="bg-light">
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary">Concluído</div>
                </div>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary"></div>
                </div>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary"></div>
                </div>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary"></div>
                </div>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary"></div>
                </div>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary"></div>
                </div>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary"></div>
                </div>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary"></div>
                </div>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary"></div>
                </div>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary"></div>
                </div>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary"></div>
                </div>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary"></div>
                </div>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <div>
                <SmallButton className="btn">
                <IconContext.Provider value={{ color: "white" }}>
                <div>
                <FaBuilding/>
                </div>
                </IconContext.Provider>
                </SmallButton>
                <div className="text-primary" >Item 1</div>
                <div className="text-primary"></div>
                </div>
          </StyledProgressBar>
        );
    }
}

