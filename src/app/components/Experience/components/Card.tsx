import { Calendar } from 'lucide-react'
import React, { ComponentProps } from 'react'

type CardProps = ComponentProps<'article'> & {
  title: string
  locale: string
  desc: string
  date: string
  icon: React.ReactElement
}

export default function Card({
  title,
  locale,
  desc,
  date,
  icon,
  ...props
}: CardProps) {
  return (
    <article {...props}>
      <div className="flex w-full items-start justify-between">
        <div className="flex flex-col">
          <h4 className="font-bold">{title}</h4>
          <span className="text-sm font-semibold">{locale}</span>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 p-1.5 shadow-lg md:p-0">
          {icon}
        </div>
      </div>

      <p className="pt-2 text-sm md:text-base">{desc}</p>
      <div className="mt-3 flex items-center gap-2 text-xs">
        <Calendar className="h-5 w-5" />
        <span>{date}</span>
      </div>
    </article>
  )
}
