'use client'

import React, { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionTitle from '../SectionTitle'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  function onHandleSubmit(e: FormEvent) {
    e.preventDefault()

    const templateParams = {
      from_name: name,
      message,
      email,
    }

    setLoading(true)

    if (name !== '' && email !== '' && message !== '') {
      emailjs
        .send(
          'service_n353027',
          'template_m3w5hit',
          templateParams,
          'h1TZrQZqmnqSiyMnt',
        )
        .then(() => {
          setName('')
          setEmail('')
          setMessage('')
          console.log('Email enviado!')
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      alert('Todos os campos precisam ser preenchidos!')
      setLoading(false)
    }
  }

  return (
    <div className="icons-wrapper mx-auto flex w-full max-w-2xl flex-col gap-4 px-6 pb-16 md:px-0">
      <SectionTitle title="Contato" />
      <form className="flex w-full flex-col gap-4" onSubmit={onHandleSubmit}>
        <label htmlFor="name">
          <input
            id="name"
            placeholder="Digite seu nome"
            className="w-full border border-zinc-300 p-3 focus:outline focus:outline-yellow-400"
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
          />
        </label>
        <label htmlFor="email">
          <input
            id="email"
            placeholder="Digite seu email"
            className="w-full border border-zinc-300 p-3 focus:outline focus:outline-yellow-400"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            value={email}
          />
        </label>
        <label htmlFor="message">
          <textarea
            id="message"
            placeholder="Digite sua mensagem..."
            className="w-full border border-zinc-300 p-3 focus:outline focus:outline-yellow-400"
            onChange={(e) => setMessage(e.target.value)}
            rows={7}
            required
            value={message}
          />
        </label>

        <button
          type="submit"
          className=" flex w-full items-center justify-center bg-zinc-800 p-3 font-medium text-white"
          style={{
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.8 : 1,
          }}
        >
          {loading ? (
            <div className="flex items-center gap-1">
              <svg
                className="h-5 w-5 animate-spin text-white"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  opacity="0.2"
                />
                <path
                  d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                  fill="currentColor"
                />
              </svg>
              Enviando
            </div>
          ) : (
            'Enviar'
          )}
        </button>
      </form>
    </div>
  )
}
