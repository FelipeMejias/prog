import styled from 'styled-components';
import './App.css';
import { formacao } from './conteudo/formacao';

export default function Formacao() {

  return (
      <Resto>
      <Projs>
        {formacao.map(f=><Projeto>
        {f.emAndamento?<h4>Em andamento</h4>:<></>}
        <article>
            {f.icone}
            <section>
                <h1>{f.curso}</h1>
                <h5>{f.instituicao}</h5>
                <h6>{f.data}</h6>
            </section>
        </article>
        {!f.texto?<></>:
                f.texto.split(`\n`).map(l=><p>{l}</p>)}
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
;align-items:center;
`
const Projeto=styled.div`
background:${p=>p.inativo?'':'white'};
cursor:pointer;padding:10px;
flex-direction:column;position:relative;
margin-bottom:10px;
width:calc(100% - 20px);
justify-content:center;
border-radius:10px;
color:black;font-size:45px;

img{
height:120px;margin-right:10px;border-radius:10px;
}
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
  margin:0 0 5px 0;color:gray;font-size:17px;font-weight:600;
  }
  
}
  h4{background:#16a00c;position:absolute;right:5px;bottom:5px;
  border-radius:20px;margin:0;color:white;
  font-size:17px;font-weight:600;padding:5px 10px 5px 10px;
  }
  p{margin:0;font-size:14px;font-weight:300;
  }
`