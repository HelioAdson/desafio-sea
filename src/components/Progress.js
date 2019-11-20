import React,{Component} from 'react';
import styled from 'styled-components';
import ProgButton from './ProgButton';


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
export default class Progress extends Component{
    render(){
        return (
          <StyledProgressBar className="bg-light">
                <ProgButton item={"Item 1"} status={""}/>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <ProgButton item={"Item 1"} status={""}/>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <ProgButton item={"Item 1"} status={""}/>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <ProgButton item={"Item 1"} status={""}/>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <ProgButton item={"Item 1"} status={""}/>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <ProgButton item={"Item 1"} status={""}/>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <ProgButton item={"Item 1"} status={""}/>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <ProgButton item={"Item 1"} status={""}/>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <ProgButton item={"Item 1"} status={""}/>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <ProgButton item={"Item 1"} status={""}/>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <ProgButton item={"Item 1"} status={""}/>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <ProgButton item={"Item 1"} status={""}/>
                <div className="text-primary" style={{paddingBottom:"1em"}}> - - - - - </div>
                <ProgButton item={"Item 1"} status={""}/>
          </StyledProgressBar>
        );
    }
}

