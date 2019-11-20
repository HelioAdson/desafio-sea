import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Textcard from '../components/Textcard';
import Progress from '../components/Progress';
import Basic from '../components/Quest';

const Backdiv = styled.div`
    display:flex;
    flex-direction:row;
    background-color: #D9D6CF;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`;

function Form(props){
    return (

        <Backdiv>
        <Navbar/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <Progress/>
        <div style={{display:"flex",flexDirection:"row"}}>
        <Textcard/>
        <Basic/>
        </div>
        </div>
        </Backdiv> 
    );
}
export default Form;