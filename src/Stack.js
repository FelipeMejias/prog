import styled from 'styled-components';
import './App.css';
import { stack } from './conteudo/stack';

export default function Stack() {
  
  return (
      <Resto>
      <Projs>
        {stack.map(s=><Projeto>
          <h1>{s.area}</h1>
          <section>{s.itens.map(i=><p>{i}</p>)}</section>
        </Projeto>)}
      </Projs>
      </Resto>
  );
}

const Resto=styled.div`

height:calc(100% - 70px);width:100%;
justify-content:center;align-items:center;
`
const Projs=styled.div`
height:100%;width:calc(100% - 10px);
padding-top:10px;
flex-direction:column;
overflow:auto;

justify-content:space-evenly;align-items:center;
`
const Projeto=styled.div`
flex-direction:column;
cursor:pointer;padding:10px;
margin-bottom:10px;
width:calc(100% - 20px);
justify-content:center;
border-radius:10px;
color:white;font-size:20px;

h1{font-size:18px;font-weight:500;
    margin:0px 0 10px 0;
  }
section{
height:100%;display:flex;
  p{background:#001759;padding:5px 10px 5px 10px;border-radius:7px;
  margin:0 7px 0 0;font-size:20px;font-weight:500;
  }
}
`