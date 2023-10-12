import { Github, Globe } from 'lucide-react'
import React, { ComponentProps } from 'react'

type CardProps = ComponentProps<'article'> & {
  title: string
  desc: string
  imgPath: string
  tags: string[]
  links: string[]
}

export default function Card({
  title,
  desc,
  imgPath,
  links,
  tags,
  ...props
}: CardProps) {
  return (
    <article {...props}>
      <div className="flex max-w-full flex-col gap-4 self-center p-4 md:max-w-[50%] md:px-5 md:py-5">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className="text-sm text-zinc-600">{desc}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="rounded-full bg-zinc-800 px-3 py-1.5 text-xs  text-white"
              >
                {tag}
              </span>
            )
          })}
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a
            target="_blank"
            className="group flex items-center gap-1 text-sm"
            href={links[0]}
          >
            <Globe className="h-4 w-4" />
            Deploy
          </a>
          <a
            target="_blank"
            className="group flex items-center gap-1 text-sm"
            href={links[1]}
          >
            <Github className="h-4 w-4" />
            Repositório
          </a>
        </div>
      </div>
      <div
        className="relative h-[200px] w-full rounded-t-lg bg-cover bg-left-top shadow-2xl duration-300 group-hover:-rotate-6 group-hover:scale-110 md:absolute md:-right-40 md:top-8 md:h-full md:w-[28.25rem]"
        style={{ backgroundImage: `url(${imgPath})` }}
      ></div>
    </article>
  )
}
