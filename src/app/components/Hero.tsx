'use client'

import { gsap } from 'gsap'
import { ArrowDown, ArrowDownToLine, Github, Linkedin } from 'lucide-react'
import { useLayoutEffect } from 'react'

export function Hero() {
  useLayoutEffect(() => {
    const t1 = gsap.timeline({ delay: 0.3 })

    t1.to('.anim-hand', {
      duration: 0.5,
      ease: 'power2.out',
      opacity: 1,
    })

    // wave animation
    const t2 = gsap.timeline({ repeat: 2, repeatDelay: 0.8, delay: 0.3 })
    t2.to('.anim-hand', {
      duration: 0.5,
      ease: 'power2.out',
      rotate: '70deg',
    })
    t2.to('.anim-hand', {
      duration: 0.5,
      ease: 'power2.out',
      rotate: '0deg',
      delay: 0.1,
    })

    gsap.to('.anim-more', { duration: 0.8, opacity: 1, delay: 1.5 })
    const t3 = gsap.timeline({ repeat: 3, repeatDelay: 0.8, delay: 2.7 })
    t3.to('.anim-arrow', { duration: 0.5, y: 5 })
    t3.to('.anim-arrow', { duration: 0.5, y: 0, delay: 0.2 })
  }, [])

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1220px] flex-col items-center justify-center gap-6 px-6 md:gap-4 md:px-0">
      <img
        className="mb-4 h-40 w-40  rounded-full shadow-lg md:h-44 md:w-44"
        src="/f3.png"
        alt=""
      />
      <div className="flex items-center gap-2">
        <h1 className=" text-2xl font-bold  md:text-4xl">
          Desenvolvedor Front-End
        </h1>
        <span className="anim-hand -rotate-0 text-2xl md:text-4xl">👋</span>
      </div>
      <p className="max-w-2xl  text-justify text-zinc-600  md:text-center md:text-xl">
        Olá, Eu sou o João Knisspell. Desenvolvedor front-end apaixonado pela
        criação de aplicações interativas e experiências para a web. Meu foco é
        React(Next.js).
      </p>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <a
          href="/JOAO_KNISSPELL_CV.pdf"
          download
          className="group flex  items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100  md:px-6 md:py-3 md:text-base"
        >
          Baixar CV{' '}
          <ArrowDownToLine className="h-4 w-4 text-zinc-400 group-hover:text-yellow-400" />
        </a>
        <div className="flex gap-4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/joaoknisspell/"
            className=" cursor-pointer rounded-full border border-zinc-400 px-2 py-2 shadow-lg "
          >
            <Linkedin
              fill="true"
              className="h-4 w-4 text-zinc-800  md:h-5 md:w-5"
            />
          </a>
          <a
            target="_blank"
            href="https://github.com/joaoKnisspell"
            className=" cursor-pointer rounded-full border border-zinc-400 px-2 py-2 shadow-lg "
          >
            <Github
              fill="true"
              className="h-4 w-4 text-zinc-800  md:h-5 md:w-5"
            />
          </a>
        </div>
      </div>

      <div className="flex items-center gap-2 text-zinc-600  md:mt-16">
        Deslize para ver mais{' '}
        <ArrowDown className="anim-arrow h-5 w-5 text-zinc-800 " />
      </div>
    </div>
  )
}
