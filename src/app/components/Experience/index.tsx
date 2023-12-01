'use client'

import Card from './components/Card'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

import { experiencesData } from '@/data'
import SectionTitle from '../SectionTitle'

export default function Experience() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.anim-card-right', {
      duration: 0.8,
      opacity: 1,
      x: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.exp-wrapper',
        start: 'top 60%',
        end: 'bottom 85%',
        // markers: true,
        scrub: true,
      },
    })
  }, [])

  return (
    <div className="exp-wrapper mx-auto flex max-w-2xl flex-col gap-8 px-6 text-center md:px-0">
      <SectionTitle title="Experiências" />
      {experiencesData.map((ele) => {
        return (
          <Card
            icon={ele.icon}
            date={ele.date}
            key={ele.id}
            title={ele.title}
            locale={ele.locale}
            desc={ele.desc}
            className="anim-card-right flex w-full -translate-x-14 flex-col items-start rounded-lg border border-gray-300 p-4 text-start text-zinc-600 opacity-0 shadow-lg  md:p-8"
          />
        )
      })}
    </div>
  )
}
