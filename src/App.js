import styled from 'styled-components';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';
import Menu from './Menu';
import Formacao from './Formacao';
import Experiencia from './Experiencia';
import Perfil from './Perfil';
import Stack from './Stack';

export default function App() {
  return (
  <BrowserRouter>
    <Tela>
      <Menu/>
      <Routes>
        <Route path='/stack' element={<Stack/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/' element={<Perfil/>}/>
        <Route path='/formacao' element={<Formacao/>}/>
        <Route path='/experiencia' element={<Experiencia/>}/>
      </Routes>
    </Tela>
  </BrowserRouter>
  );
}
const Tela=styled.div`
display:flex;
background:#2e5cdb;
height:100dvh;width:100vw;
flex-direction:column;align-items:center;
div{
display:flex;
box-sizing:border-box;
}
`
