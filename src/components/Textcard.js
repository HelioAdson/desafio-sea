import React from 'react';
import styled from 'styled-components';

const Textdiv = styled.div`
    display:flex;
    text-emphasis: bold;
    min-width:35%;
    max-width:35%;
    max-height:100%;
    margin: 0em 2em 0em 2em;
    padding: 2em 2em 0em 2em ;
    border-radius:1em;
`;

function Textcard(){
  return (
    <Textdiv className="bg-light">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus eu vulputate tempus.    
    </Textdiv>
  );
}

export default Textcard;
