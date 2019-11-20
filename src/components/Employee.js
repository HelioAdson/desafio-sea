import React,{Component} from 'react';
import styled from 'styled-components';
import axios from "axios";
import {navigate } from "@reach/router";
import ToggleButton from 'react-bootstrap/ToggleButton'
import { FaFileExcel } from 'react-icons/fa';

const Emplodiv = styled.div`
    display:flex;
    flex-direction:column;
    min-width:55%;
    max-width:55%;
    max-height: 100vh;
    margin: 0em 3em 3em 0em;
    border-radius:1em;
`;

const Bar = styled.div`
    display:flex;
    padding:1em;
    align-items:center;
    border-start-start-radius:1em;
    border-top-right-radius:1em;
    background-color:#339ACC;
    height:10%;
`;

const AddEmpl = styled.button`
    margin:2em 1em 1em 1em ;
    min-height:10%;
`;

const MiniButton = styled.button`
    margin:0em 1em 1em 1em;
    min-width:25%;
    max-width:25%;
`;

const Emplinfo = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background-color: #D9D6CF;
    border-radius:1em;
    margin:1em;
    max-height:20%;
`;

const DataButton = styled.div`
    background-color:#339ACC;
    border-radius:2em;
    margin:1em 1em 1em 1em;
    min-width:10%;
    max-width:40%;
`;

const LeftFooter = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#339ACC;
    min-width:10%;
    height:100%;
    border-top-right-radius:1em;
    border-bottom-right-radius:1em;
`;

export default class Employee extends Component{
    state = {
      data: [],
      total:0,
      ativos:0
    };

    componentDidMount() {
      axios
        .get("http://localhost:3001/data")
        .then(response => {
          this.setState({ data: this.state.data.concat(response.data)});
          console.log(this.state.data)
        })
        .catch(error => {
          console.error(error);
        });
    }
    ativos = 0
    total = 0
    render(){
      return (
        <Emplodiv className="bg-light">
        
        <Bar>
        <div className="text-light">Funcionário(s)</div>  
        </Bar>

        <AddEmpl className="btn btn-outline-primary" onClick={() => {navigate(`/form`)}}>+ Adicionar Funcionário</AddEmpl>

        <div>
        <MiniButton className="btn btn-outline-primary">Ver apenas ativos</MiniButton>
        <MiniButton className="btn btn-outline-primary">Limpar Filtros</MiniButton>
        </div>

        {this.state.data.map(x => {
          this.state.total = this.state.total + 1
          if (x.atividade == "Ativ 00"){
            this.state.ativos = this.state.ativos + 1
          }

          return (
            <Emplinfo>
            <div style={{padding:"1em"}}>
            <div>{x.name}</div>
            <div>
            <DataButton className="btn">{x.cpf}</DataButton>  
            <DataButton className="btn">{x.atividade}</DataButton>
            <DataButton className="btn">{x.cargo}</DataButton>
            </div>
            </div>
            <LeftFooter className="text-light">
            <div style={{cursor:"pointer"}}>...</div>
            </LeftFooter>
            </Emplinfo>
            );
        })}
        <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
        <div>A estapa está concluída?</div>
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitches"/>
            <label class="custom-control-label" for="customSwitches"></label>
        </div>
        </div>
        </Emplodiv>
      );
    }
}

