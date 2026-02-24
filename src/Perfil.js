import styled from 'styled-components';
import './App.css';
import foto from './imgs/perfil.png';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from 'react';
import { LuCopy } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";

export default function Portfolio() {
  const [copW, setCopW] = useState(false);
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
  function copiarW(){
    navigator.clipboard.writeText('21 984636151').then(() => {
      setCopW(true);setTimeout(() => setCopW(false), 1500)
    })
  };
  return (
      <Resto>
        <Projs>
            <img src={foto}/>
            <section>
                <h1>Felipe Luiz Mejias</h1>
                <h2>Desenvolvedor Full-Stack</h2>
                <aside><FaLocationDot /><p>Rio de Janeiro - Barra da Tijuca</p></aside>
                <div  >
                  <main onClick={()=>window.open(`https://wa.me/5521984636151`, "_blank")} />
                  <IoLogoWhatsapp />
                  <p>21 984636151</p>
                  <BotCop onClick={copiarW}>{copW?<LuCopyCheck />:<LuCopy />}</BotCop>
                  </div>
                <div>
                  <main onClick={()=>{window.open('https://linkedin.com/in/felipeluizmejias', "_blank");}} />
                  <FaLinkedin />
                  <p>linkedin.com/in/felipeluizmejias</p>
                  <BotCop onClick={copiarL}>{copL?<LuCopyCheck />:<LuCopy />}</BotCop>
                </div>
                <div >
                  <main onClick={()=>{window.open('https://mail.google.com/mail/?view=cm&to=felipe.mejias50@gmail.com', "_blank");}} />
                  <IoMdMail />
                  <p>felipe.mejias50@gmail.com</p>
                  <BotCop onClick={copiarE}>{copE?<LuCopyCheck />:<LuCopy />}</BotCop>
                </div>
                <div >
                  <main onClick={() => {
    const link = document.createElement('a')
    link.href = '/curriculo.pdf'
    link.download = 'Curriculo-Felipe-Mejias.pdf'
    link.click()
  }} />
                  <IoMdDownload />
                  <p>Currículo</p>
                </div>
            </section>
        </Projs>
      </Resto>
  );
}

const Resto=styled.div`
max-width:900px;
height:calc(100% - 70px);width:100%;
justify-content:center;align-items:center;
`
const BotCop=styled.button`
position:absolute;right:-45px;
height:40px;width:40px;background:#001759;
color:white;border-radius:50%;
border:0;cursor:pointer;font-size:18px;
justify-content:center;padding-top:7px;
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
max-width:200px;margin:5px 0 10px 0;
width:calc(100% - 340px);
}
section{align-items:center;text-align:center;
height:100%;width:calc(100% - 120px);
  h1{margin:0;font-size:25px;font-weight:400;color:white;
  }
  h2{font-size:22px;font-weight:700;
    margin:3px 0 0px 0;color:white;
  }
    aside{
    display:flex;
    align-items:center;
    justify-content:center;
    color:#103393;font-size:22px;
    margin-top:8px;
    p{
    color:white;font-size:17px;
    margin: 0 5px 0 5px;
      }
  }
  div{
  position:relative;
  margin: 0 auto;
    width: fit-content;
    align-items:center;
    cursor:pointer;
    height:40px;padding:0 10px 0 10px;
    border-radius:20px;
    justify-content:center;
    background:#103393;
    color:white;font-size:22px;
    margin-top:15px;
    main{
    position:absolute;
    height:100%;width:100%;
    border-radius:20px;
    }
    p{
    font-size:17px;
    margin: 0 5px 0 5px;
      }
  }
}
 
`