'use client'

import React, { useLayoutEffect } from 'react'

import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '../SectionTitle'

export default function Skills() {
  const icons = [
    { name: 'HTML', imgPath: 'html.svg' },
    { name: 'CSS', imgPath: 'css.svg' },
    { name: 'JavaScript', imgPath: 'js.svg' },
    { name: 'TypeScript', imgPath: 'ts.svg' },
    { name: 'React.js', imgPath: 'rt.svg' },
    { name: 'Next.js', imgPath: 'nt.svg' },
    { name: 'TailwindCSS', imgPath: 'td.svg' },
    { name: 'Styled-Components', imgPath: 'sc.svg' },
    { name: 'Stitches', imgPath: 'ss.png' },
    { name: 'Firebase', imgPath: 'fb.svg' },
    { name: 'Git', imgPath: 'gt.svg' },
    { name: 'Github', imgPath: 'gth.svg' },
  ]

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.anim-icon', {
      opacity: 1,
      x: 0,
      ease: 'back.out',
      stagger: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.icons-wrapper',
        start: 'top 40%',
        end: 'bottom 50%',
      },
    })
  }, [])

  return (
    <div className="icons-wrapper mx-auto max-w-[1220px] px-6 md:px-0">
      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        <SectionTitle title="Habilidades" />
        <div className="flex w-full flex-wrap items-center justify-center gap-4">
          {icons.map((icon, index) => {
            return (
              <span
                key={index}
                className="anim-icon flex -translate-x-6 items-center gap-1 rounded-full bg-zinc-800 px-3 py-2 text-zinc-50 opacity-0 "
              >
                <img src={`${icon.imgPath}`} className="h-4 w-4" />
                {icon.name}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
