import React from 'react'

export default function SectionTitle(props: { title: string }) {
  return (
    <h3 className="mt-4 text-center text-2xl font-semibold text-black md:mb-4 md:mt-0 md:text-3xl">
      {props.title}
    </h3>
  )
}
