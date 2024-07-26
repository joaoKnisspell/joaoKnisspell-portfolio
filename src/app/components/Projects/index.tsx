'use client'

import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

import Card from './components/Card'
import { projects } from '@/data'
import SectionTitle from '../SectionTitle'

export function Projects() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.anim-projectCard', {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.projects-wrapper',
        // markers: true,
        start: 'top 50%',
        end: 'bottom 60%',
      },
    })
  }, [])

  return (
    <div className="projects-wrapper mx-auto max-w-[1220px] px-6 md:px-0">
      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        <SectionTitle title="Projetos" />
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => {
            return (
              <Card
                key={index}
                title={project.title}
                desc={project.desc}
                imgPath={project.imgPath}
                links={project.links}
                tags={project.tags}
                className="anim-projectCard group relative flex w-full -translate-y-6 cursor-pointer flex-col justify-between overflow-hidden border border-zinc-300 bg-gray-100 opacity-0 md:flex-row"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
