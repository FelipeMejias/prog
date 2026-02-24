import styled from 'styled-components';
import './App.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Menu() {
  const navigate=useNavigate()
  const {pathname}=useLocation()
  return (
      <Cab>
        <Opcao selec={pathname==`/stack`} onClick={()=>navigate(`/stack`)}>Stack</Opcao>
        <Opcao selec={pathname==`/portfolio`} onClick={()=>navigate(`/portfolio`)}>Portfólio</Opcao>
        <Opcao selec={pathname==`/`} onClick={()=>navigate(`/`)}>Perfil</Opcao>
        <Opcao selec={pathname==`/formacao`} onClick={()=>navigate(`/formacao`)}>Formação</Opcao>
        <Opcao selec={pathname==`/experiencia`} onClick={()=>navigate(`/experiencia`)}>Experiência</Opcao>
      </Cab>
  );
}

const Cab=styled.div`
background:#103393;
height:70px;width:100%;
justify-content:center;align-items:center;
color:white;font-size:20px;padding:0 10px 0 10px;
`
const Opcao=styled.div`
background:#103393;border-radius:10px;
cursor:pointer;
height:50px;width:20%;
justify-content:center;align-items:center;
color:${p=>p.selec?'#103393':'white'};
background-color:${p=>p.selec?'white':'transparent'};
font-size:15px;
`
