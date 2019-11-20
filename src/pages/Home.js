import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Textcard from '../components/Textcard';
import Progress from '../components/Progress';
import Employee from '../components/Employee'

const Backdiv = styled.div`
    display:flex;
    flex-direction:row;
    background-color: #D9D6CF;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`;

function Home(props){
    return (

        <Backdiv>
        <Navbar/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <Progress/>
        <div style={{display:"flex",flexDirection:"row"}}>
        <Textcard/>
        <Employee/>   
        </div>
        </div>
        </Backdiv> 
    );
}
export default Home;