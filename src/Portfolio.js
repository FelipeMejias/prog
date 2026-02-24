import styled from 'styled-components';
import './App.css';
import { portfolio } from './conteudo/portfolio';

export default function Portfolio() {
  
  return (
      <Resto>
      <Projs>
        {portfolio.map(p=><Projeto onClick={()=>{
          window.open(`https://${p.link}`, "_blank");
        }}>
          <img src={p.img} ></img>
          <section>
            <p>{p.nome}</p>
            <h5>{p.texto}</h5>
            <h6>{p.link}</h6>
          </section>
        </Projeto>)}
      </Projs>
      </Resto>
  );
}

const Resto=styled.div`
max-width:900px;
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
background:${p=>p.inativo?'':'white'};
cursor:pointer;padding:10px;
margin-bottom:10px;
width:calc(100% - 20px);
justify-content:center;
border-radius:10px;
color:black;font-size:20px;
img{
height:80px;margin-right:10px;border-radius:10px;
}
section{
height:100%;width:calc(100% - 80px);
  p{margin:0;font-size:20px;font-weight:500;
  }
  h5{
    margin:10px 0 10px 0;
   font-size:16px;font-weight:300;
  }
  }
  h6{
  margin:0;color:blue;font-size:17px;font-weight:600;
  }
}
`