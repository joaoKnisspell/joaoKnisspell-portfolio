'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import SectionTitle from './SectionTitle'

export function AboutMe() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.anim-about-up', {
      duration: 0.8,
      opacity: 1,
      y: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.about-wrapper',
        start: 'top 60%',
        end: 'bottom 70%',
      },
    })
  }, [])

  return (
    <div className="about-wrapper mx-auto max-w-[1220px] px-6 text-justify md:px-0 md:text-center">
      <div className="mx-auto flex max-w-2xl flex-col gap-4 text-zinc-600">
        <SectionTitle title="Sobre mim" />
        <p className="anim-about-up translate-y-6 opacity-0 dark:text-zinc-400 md:text-lg">
          Insatisfeito durante minha graduação em Educação Física, tomei a
          decisão de fazer uma mudança de carreira e perseguir meu sonho de
          trabalhar com tecnologia. Após assistir a aulas de programação no
          YouTube por um mês, tive a certeza de que encontraria felicidade em
          minha carreira como programador. A partir desse momento, intensifiquei
          meu compromisso com os estudos e entrei em meu primeiro bootcamp em
          fevereiro de 2022. Esse programa focou principalmente em{' '}
          <strong>HTML, CSS e JavaScript,</strong> embora fosse um bootcamp
          full-stack. As principais tecnologias que utilizo atualmente incluem{' '}
          <strong>
            React, Next.js, TypeScript, TailwindCSS, GSAP e Firebase.
          </strong>{' '}
          Estou atualmente buscando oportunidades como Desenvolvedor Front-End
          React.
        </p>
        <p className=" anim-about-up translate-y-6 opacity-0 dark:text-zinc-400 md:text-lg">
          Quando não estou codificando, desfruto da prática de esportes, passo
          tempo com minha família e assisto a séries e animes. Além disso, tenho
          um grande interesse em aprender coisas novas, especialmente
          relacionadas ao meu desenvolvimento pessoal.
        </p>
      </div>
    </div>
  )
}
