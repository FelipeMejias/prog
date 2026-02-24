import { FaTools } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
export const formacao=[
    {
        curso:'Análise e Desenvolvimento de Sistemas ',
        instituicao:'IBMR',
        data:'2026',
        texto:``,
        emAndamento:true,
        icone:<FaGraduationCap />
    },
    {
        curso:'Desenvolvimento Full-Stack',
        instituicao:'Driven Education',
        data:'2022 - 2023',
        texto:`- Formação intensiva de +1.000h focadas em projetos práticos.
- 30 pessoas/vaga para entrar na minha turma.
- +25 projetos práticos nas tecnologias: HTML, CSS, Javascript (React, Node.js, Typescript e Prisma).
- Fundamentos da engenharia de software: lógica de programação, algoritmos, estrutura de dados, orientação a objetos, arquitetura, otimização, performance e clean code.
- Bancos de dados relacionais e não relacionais com Postgres, Mongo e Redis. 
- Princípios de DevOps com GitHub Actions, Docker e AWS.
- Testes unitários, integração e ponta a ponta com Jest, SuperTest e Cypress.
- Trabalhos em equipe usando metodologias ágeis (Scrum), Git, Slack, Trello, Zoom, colaborando, dando e recebendo feedbacks
- Desenvolvimento de competências comportamentais e habilidades profissionais (soft skills).`,
        emAndamento:false,
        icone:<FaTools/>
    },
    {
        curso:'Engenharia de Produção',
        instituicao:'UFRJ',
        data:'2016 - 2017',
        texto:`- Primeira experiência com a programação, utilizando Python
- Intercâmbio em Universidade de Coimbra, Portugal`,
        emAndamento:false,
        icone:<FaGraduationCap />
    }
]