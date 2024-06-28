import Link from "next/link"
import Image from "next/image"

function NavButton({ link, label }: { link: string; label: string }) {
  return (
    <Link href={link}>
      <button className="transition-all cursor-pointer p-4 hover:bg-slate-500 hover:bg-opacity-15 hover:text-sky-400">{label}</button>
    </Link>
  );
}

function Nav() {
  return (
    <div className="hidden md:flex gap-4 justify-evenly items-center font-light tracking-wide">
      <Link
        href="#home"
        className="text-xl tracking-widest font-light transition-all cursor-pointer px-4 py-3 hover:bg-slate-500 hover:bg-opacity-15 hover:text-sky-400"
      >
        Tyler Davies
      </Link>
      <div /><div />
      <NavButton label="About" link="/#about" />
      <NavButton label="Skills" link="/#skills" />
      <NavButton label="Projects" link="/#projects" />
      <NavButton label="Contact" link="/#contact" />
      <NavButton label="Resume" link="/" />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-row-reverse justify-evenly items-center h-full flex-wrap overflow-y-auto" id="home">
      <Image
        src=""
        height={200}
        width={200}
        alt="header image"
        className="profile-image static bg-sky-400"
      />
      <div className="max-w-3xl px-4">
        <p className="text-2xl tracking-wider my-4 font-extralight">Tyler Davies</p>
        <p className="text-2xl tracking-wider my-4 font-extralight text-sky-400">Front End Developer</p>
        <p className="text-xl font-light">I'm a junior web developer with a focus on the front end with UI and UX. I graduated with a Bachelor's in Information Technology and a certificate in Programming in 2023.</p>
      </div>
    </div>
  );
}

function About() {
  return(
    <div className="h-full overflow-y-auto" id="about">
      <h1>About</h1>
      <p>text</p>
    </div>
  );
}

function Skills() {
  return(
    <div className="h-full overflow-y-auto" id="skills">
      <h1>Skills</h1>
      <p>text</p>
      </div>
  );
}

function Projects() {
  return(
    <div className="h-full overflow-y-auto" id="projects">
      <h1>Projects</h1>
      <p>text</p>
      </div>
  );
}

function Contact() {
  return(
    <div className="h-full overflow-y-auto" id="contact">
      <h1>Contact</h1>
      <p>text</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col h-screen max-w-screen-xl mx-auto">
      <Nav />
      <div className="overflow-hidden scroll-smooth h-full">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
