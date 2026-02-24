import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa6";

export const experiencia=[
    {
        nome:'Professor de Programação',
        modo:'Autônomo',
        data:'2023',
        texto:`Atuo a 3 anos como professor de programação. Trabalhei com diferentes linguagens, dentre elas:
-Javascript (ReactJs e NodeJs)
-Python (Pandas)
-Java (POO)
-SQL`,
        emAndamento:true,
        icone:<BsFillBriefcaseFill />
    },
    {
        nome:'ETH Global Hackaton',
        modo:'Competição',
        data:'2025',
        texto:`Finalista com um projeto de tradução de vídeos por uma API de Inteligência Artificial`,
        emAndamento:false,
        icone:<FaMedal />
    },
    {
        nome:'Projeto Cartrack',
        modo:'Freelancer',
        data:'2023',
        texto:`Desenvolvi um programa em NodeJs para capturar viagens de +200 veículos/dia por uma API e salvar em banco de dados SQL. Para visualização personalizada de dados, desenvolvi um front-end em ReactJs consumindo o banco interno da empresa.`,
        emAndamento:false,
        icone:<BsFillBriefcaseFill />
    },
]