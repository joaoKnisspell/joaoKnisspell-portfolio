import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'
import Experience from './components/Experience'
import { Projects } from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex flex-col gap-6 md:gap-16">
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}
