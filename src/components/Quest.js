import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import axios from "axios";
import {navigate } from "@reach/router";

const Formdiv = styled.div`
    display:flex;
    flex-direction:column;
    min-width:55%;
    max-width:55%;
    min-height: 100vh;
    margin: 0em 3em 3em 0em;
    border-radius:1em;
`;

const FormBox = styled.div`
    display:flex;
    flex-direction:column; 
    justify-content:flex-start;
    padding:1em;
`;
const BorderBox = styled.div`
    display:flex;
    justify-content:center;
    padding:1em;
    margin:1em;
    border-radius:1em;
`;
const Basic = () => (
  <Formdiv className="bg-light">
    <Formik
      initialValues={{ nome: '', cpf: '' ,rg:'',dateofbirth:'',cargo:'',sexo:'',EPI:'',
        CA:''}}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
        ) {
          errors.name = 'Invalid name address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (<>
        <BorderBox className="border border-primary">
        <Form>
        <FormBox>
            <div class="form-row">
            <div class="form-group col-lg">
            <label for="inputname">Nome</label>
            <input type="email" class="form-control" id="inputname" placeholder="" />  
            </div>
            </div>
            <div class="form-row">
            <div class="form-group col-lg">
            <label for="inputcpf">CPF</label>
            <input type="email" class="form-control" id="inputcpf" placeholder="" />  
            </div>
            </div>
            <div class="form-row">
            <div class="form-group col-lg">
            <label for="inputrg">RG</label>
            <input type="email" class="form-control" id="inputrg" placeholder="" />  
            </div>
            </div>
        </FormBox>
        </Form>
        <Form>
        <FormBox>
            <div>Sexo</div>
            <div style={{display:"flex",flexDirection:"row",margin:"1em 0em 1.4em 0em"}}>
            <div class="form-check form-check-inline">
    
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
              <label class="form-check-label" for="inlineRadio1">Feminino</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
              <label class="form-check-label" for="inlineRadio2">Masculino</label>
            </div>
            </div>
            <div class="form-row">
            <div class="form-group col-lg">
            <label for="inputdate">Data de Nascimento</label>
            <input type="email" class="form-control" id="inputdate" placeholder="" />  
            </div>
            </div>
            <div class="form-row">
            <div class="form-group col-lg">
            <label for="inputcargo">Cargo</label>
            <input type="email" class="form-control" id="inputcargo" placeholder="" />  
            </div>
            </div>
          </FormBox>  
        </Form>
      </BorderBox>

      <Form>
      <FormBox>
        <BorderBox className="border border-primary" style={{display:"flex",flexDirection:"column"}} >
        <form>
        <div>Quais EPIs o trabalhados usa na atividade?</div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck"/>
              <label class="form-check-label" for="gridCheck">
                O trabalhador não usa EPI
              </label>
            </div>
          </div>

          <div className="border border-primary" style={{borderRadius:"1em",padding:"1em"}} >
          <div class="form-row">
              <div class="form-group col-md-4">
                  <label for="inputState">Selecione a atividade:</label>
                  <select id="inputState" class="form-control">
                    <option selected>Ativ.1</option>
                    <option>Ativ.1</option>
                    <option>Ativ.2</option>
                    <option>Ativ.3</option>
                  </select>
              </div>
          </div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
          <div class="form-row">
              <div class="form-group col-md-10">
                  <label for="inputState">Selecione o EPI:</label>
                  <select id="inputState" class="form-control">
                    <option selected>Calçado de Segurança</option>
                    <option>Luvas de Segurança</option>
                    <option>Cordas</option>
                    <option>Capacete</option>
                  </select>
              </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-7">
            <label for="inputCA">Informe o número de CA:</label>
            <input type="email" class="form-control" id="inputCA" placeholder="9356"/>  
          </div>
          <div>Adicionar EPI</div>
          </div>

          </div>
          </div>
          <div className="border border-primary" style={{display:"flex",justifyContent:"center",width:"100%",padding:"1em",borderRadius:"1em",margin:"1em 0em 1em 0em"}}>
          <div style={{cursor:"pointer"}}>Adicione outra Atividade</div>
          </div>

          <BorderBox className="border border-primary" style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",padding:"1em",borderRadius:"1em",margin:"1em 0em 1em 0em"}}>
          <div>Adicione Atestado de Saúde Ocupacional (opcional)</div>
          <div class="custom-file">
          <input type="file" class="custom-file-input" />
          <label class="custom-file-label" for="validatedCustomFile" data-browse="Selecionar Arquivo">Documento 1.png </label>
          </div>
          </BorderBox>

          <button type="submit" className="btn btn-outline-primary btn-block"  onClick={() => {navigate(`/`)}}>Salvar</button>
        </form>
        </BorderBox>
      </FormBox>
      </Form>


      </>)}
      
    </Formik>
    </Formdiv>
);

export default Basic;