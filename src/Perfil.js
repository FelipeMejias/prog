import styled from 'styled-components';
import './App.css';
import foto from './imgs/perfil.png';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from 'react';
import { FaCopy } from "react-icons/fa";
export default function Portfolio() {
  const [copL, setCopL] = useState(false);
  const [copE, setCopE] = useState(false);
  function copiarL(){
    navigator.clipboard.writeText('linkedin.com/in/felipeluizmejias').then(() => {
      setCopL(true);setTimeout(() => setCopL(false), 1500)
    })
  };
  function copiarE(){
    navigator.clipboard.writeText('felipe.mejias50@gmail.com').then(() => {
      setCopE(true);setTimeout(() => setCopE(false), 1500)
    })
  };
  
  return (
      <Resto>
        <Projs>
          <article>
            <img src={foto}/>
            <section>
                <h1>Felipe Luiz Mejias</h1>
                <h2>Desenvolvedor Full-Stack</h2>
                <div><FaLocationDot /><p>Rio de Janeiro - Barra da Tijuca</p></div>
                <div><IoLogoWhatsapp /><p>21 984636151</p></div>
                <div>
                  <FaLinkedin />
                  <p>linkedin.com/in/felipeluizmejias</p>
                  <BotCop onClick={copiarL}>
                    {copL?'Copiado!':'Copiar'}
                  </BotCop>
                </div>
                <div>
                  <IoMdMail />
                  <p>felipe.mejias50@gmail.com</p>
                  <BotCop onClick={copiarE}>
                    {copE?'Copiado!':'Copiar'}
                  </BotCop>
                </div>
            </section>
        </article>
          
        </Projs>
      </Resto>
  );
}

const Resto=styled.div`
height:calc(100% - 70px);width:100%;
justify-content:center;align-items:center;
`
const BotCop=styled.button`
height:30px;background:black;
color:white;border-radius:15px;
border:0;cursor:pointer;
justify-content:center;
align-items:center;
`
const Projs=styled.div`
height:100%;width:calc(100% - 10px);
padding:10px;
flex-direction:column;
overflow:auto;
align-items:center;
img{
border-radius:50%;
max-width:220px;
width:calc(100% - 340px);
}

article{
width:100%;display:flex;align-items:center;
}
section{margin-left:10px;
height:100%;width:calc(100% - 120px);
  h1{margin:0;font-size:25px;font-weight:400;color:white;
  }
  h2{font-size:22px;font-weight:700;
    margin:7px 0 0px 0;color:white;
  }
  div{
    align-items:center;
    color:#103393;font-size:22px;
    margin-top:12px;
    p{
    color:white;font-size:17px;
    margin: 0 5px 0 5px;
      }
  }
}
 
`