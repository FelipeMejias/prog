import styled from 'styled-components';
import './App.css';
import { experiencia } from './conteudo/experiencia';

export default function Experiencia() {

  return (
      <Resto>
      <Projs>
        {experiencia.map(e=><Projeto>
            <article>
                {e.icone}
                <section>
                    <h1>{e.nome}</h1>
                    <h5>{e.modo}</h5>
                    <h6>{e.data}</h6>
                </section>
            </article>
            {!e.texto?<></>:
                    e.texto.split(`\n`).map(l=><p>{l}</p>)}
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
align-items:center;
`
const Projeto=styled.div`
background:${p=>p.inativo?'':'white'};
cursor:pointer;padding:10px;
margin-bottom:10px;
flex-direction:column;
width:calc(100% - 20px);
justify-content:center;
border-radius:10px;
color:black;font-size:45px;
article{
width:100%;display:flex;
}
section{margin-left:10px;
height:100%;width:calc(100% - 120px);
  h1{margin:0;font-size:20px;font-weight:500;
  }
  h5{font-size:18px;font-weight:400;
    margin:5px 0 0px 0;
  }
  h6{
  margin:0 0 5px 0;color:blue;font-size:17px;font-weight:600;
  }
  
}
  p{margin:0;font-size:14px;font-weight:300;
  }
`