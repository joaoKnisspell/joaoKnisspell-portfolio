import React from 'react'
import { GraduationCap, Cpu, Code2, Lightbulb, Layout } from 'lucide-react'

export const experiencesData = [
  {
    id: 1,
    title: 'Unisinos - Análise e Desenvolvimento de Sistemas',
    locale: 'Porto Alegre - RS',
    desc: 'O curso visa preparar os alunos para projetar, desenvolver, e manter sistemas de software e aplicativos. Os principais tópicos abordados nesta área incluem: Programação, Banco de Dados, Desenvolvimento Web, Engenharia de Software, Segurança da Informação, Sistemas Operacionais, Projeto e Desenvolvimento de Software entre outros.',
    date: 'Janeiro 2022 - Dezembro 2023',
    icon: React.createElement(GraduationCap),
  },

  {
    id: 2,
    title: 'Colégio Israelita Brasileiro - Suporte de TI',
    locale: 'Porto Alegre - RS',
    desc: 'Durante o estágio, adquiri habilidades valiosas no atendimento de professores e alunos. Isso incluiu solucionar problemas técnicos e responder a chamados de suporte pessoalmente. Participei da configuração e manutenção de computadores, impressoras e outros dispositivos de hardware.',
    date: 'Outubro 2022 até Março 2023',
    icon: React.createElement(Cpu),
  },

  {
    id: 3,
    title: 'Digital Business - Estagiário em Desenvolvimento Web',
    locale: 'Porto Alegre - RS',
    desc: 'Durante o estágio, tive a oportunidade de aprimorar minhas habilidades em programação front-end, trabalhando com tecnologias fundamentais, como HTML, CSS e JavaScript. Além disso, adquiri experiência na criação de animações interativas usando a biblioteca GSAP (GreenSock Animation Platform). Isso incluiu a animação de elementos da página, transições suaves e efeitos visuais atraentes para melhorar a experiência do usuário.',
    date: 'Abril 2023 até Junho 2023',
    icon: React.createElement(Lightbulb),
  },

  {
    id: 4,
    title: 'Floricultura Pareci - Website',
    locale: 'Porto Alegre - RS',
    desc: 'No mês de agosto de 2023, tive a chance de liderar o desenvolvimento do site da Floricultura Pareci, localizada em Porto Alegre. Para concretizar esse projeto, empreguei um conjunto de ferramentas de alta qualidade, incluindo HTML, CSS e JavaScript (com React.js), aliados ao poderoso sistema de backend Firebase.',
    date: 'Agosto 2023',
    icon: React.createElement(Layout),
  },

  {
    id: 5,
    title: 'Digital Business - Web Designer Junior',
    locale: 'Porto Alegre - RS',
    desc: 'Após completar dois meses de estágio, tive o privilégio de ser efetivado na empresa. Isso me proporcionou uma oportunidade incrível para continuar aprimrando minhas habilidades em HTML, CSS, JavaScript e GSAP. Durante esse período, também adquiri experiência valiosa em projetar e implementar layouts responsivos, assegurando que os sites fossem visualmente cativantes e funcionais em diversos dispositivos, incluindo desktops, tablets e smartphones.',
    date: 'Junho 2023 até Novembro 2023',
    icon: React.createElement(Code2),
  },
]

export const projects = [
  {
    title: 'Sistema Bix',
    desc: 'A aplicação Bix é um sistema de cadastro que desenvolvi para que os usuários(admin) possam realizar o cadastro de empresas e funcionários, além disso, caso o usuário tenha um cadastro de convidado ele terá acesso apenas para a visualização destes dados. ',
    tags: ['TypeScript', 'React.js', 'TailwindCSS', 'Firebase'],
    links: [
      'https://bix-project-jknisspell.vercel.app/SignIn',
      'https://github.com/joaoKnisspell/bix-project-jknisspell',
    ],
    imgPath: '/bix.jpg',
  },
  {
    title: 'Next Bucks',
    desc: 'O Next Bucks é uma aplicação que desenvolvi com o objetivo de auxiliar seus usuários a terem um controle mais eficaz de suas finanças. Com ele, você pode criar e remover transações, além de estabelecer, editar e eliminar metas financeiras de acordo com suas necessidades.',
    tags: ['TypeScript', 'Next.js', 'TailwindCSS', 'Firebase'],
    links: [
      'https://next-bucks.vercel.app/',
      'https://github.com/joaoKnisspell/next-bucks',
    ],
    imgPath: '/nextBucks.jpg',
  },

  {
    title: 'Book Shop',
    desc: 'A Book Shop é um aplicativo simulando um e-commerce de livros, com página inicial, páginas dinâmicas para cada livro e uma seção de notícias da loja. Também integrei a API do Stripe para simular a realização fictícia de compras.',
    tags: ['TypeScript', 'Next.js', 'Stripe API', 'StitchesCSS'],
    links: [
      'https://book-store-git-main-joaoknisspell.vercel.app/',
      'https://github.com/joaoKnisspell/book-shop',
    ],
    imgPath: '/bookShop.jpg',
  },

  {
    title: 'Snack Studio',
    desc: 'O Snack Studio é uma aplicação na qual os usuários podem visualizar informações sobre filmes populares, futuros lançamentos e os filmes mais bem avaliados. A aplicação possui páginas dinâmicas com informações sobre cada filme.',
    tags: ['TypeScript', 'Next.js', 'TMDB API', 'TailwindCSS'],
    links: [
      'https://snack-studio.vercel.app/',
      'https://github.com/joaoKnisspell/snack-studio',
    ],
    imgPath: '/snackStudio.jpg',
  },
]
