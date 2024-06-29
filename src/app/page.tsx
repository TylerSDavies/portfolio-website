import Link from "next/link"
import Image from "next/image"

function NavButton({ link, label }: { link: string; label: string }) {
  return (
    <Link href={link}>
      <div className="transition-all cursor-pointer py-4 xl:px-8 hover:bg-slate-500 hover:bg-opacity-15 hover:text-sky-500 z-50">
        {label}
      </div>
    </Link>
  );
}

function Nav() {
  return (
    <div className="flex gap-4 justify-evenly items-center font-light tracking-wide px-2">
      <div className="hidden 2xl:flex" />
      <div className="text-xl tracking-widest font-light transition-all px-4 py-3 hidden 2xl:flex">Tyler Davies</div>
      <div className="hidden 2xl:flex" /><div className="hidden 2xl:flex" />
      <NavButton label="Home" link="/#home" />
      <NavButton label="About" link="/#about" />
      <NavButton label="Skills" link="/#skills" />
      <NavButton label="Projects" link="/#projects" />
      <NavButton label="Contact" link="/#contact" />
      <NavButton label="Resume" link="/" />
      <div className="hidden 2xl:flex" />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center gap-20 items-center h-full flex-wrap overflow-y-auto" id="home">
      <div className="max-w-2xl px-4">
        <p className="text-3xl tracking-wider my-4 font-extralight">Tyler Davies</p>
        <p className="text-2xl tracking-wider my-4 font-extralight text-sky-500">Front End Developer</p>
        <p className="text-xl font-light">I\'m a junior web developer with a focus on the front end with UI and UX. I graduated with a Bachelor\'s in Information Technology and a certificate in Programming in 2023.</p>
      </div>
      <Image
        src="/images/profile-image.jpg"
        height={300}
        width={300}
        alt="header image"
      />
    </div>
  );
}

function About() {
  return(
    <div className="flex justify-evenly items-center h-full overflow-y-auto flex-wrap gap-10" id="about">
      <div className="flex flex-col lg:flex-row gap-20 mx-20">

        <div className="flex flex-col flex-1">
          <h2 className="text-2xl text-sky-500">Education</h2>
          <hr className="mt-2 mb-6"/>
          
          <h3 className="text-xl inline mr-2 text-center">Bachelor\'s of Science in Information Technology</h3>
          <h3 className="text-lg text-center text-gray-500 mb-2">University of Phoenix | 2023</h3>
          <ul className="list-disc pl-5">
            <li>Open Systems Interconnection (OSI) Model</li>
            <li>System Virtualization</li>
            <li>Agile Methodologies (Scrum, Kanban)</li>
            <li>Project Management</li>
            <li>Product Lifecycle</li>
          </ul>

          <hr className="my-6"/>

          <h3 className="text-xl inline mr-2 text-center">Certificate in Computer Programming Logic</h3>
          <h3 className="text-lg text-center text-gray-500 mb-2">University of Phoenix | 2023</h3>
          <ul className="list-disc pl-5">
            <li>Java, Python, HTML, CSS, JS, SQL</li>
            <li>Relational Databases</li>
            <li>Objects and Inheritance</li>
          </ul>

          <hr className="my-6"/>
        </div>

        <div className="flex flex-col flex-1">
          <h2 className="text-2xl text-sky-500 mt-10 lg:mt-0">Experience</h2>
          <hr className="mt-2 mb-6"/>
          
          <h3 className="text-xl inline mr-2 text-center">Datacenter Technician II | Software Developer</h3>
          <h3 className="text-lg text-center text-gray-500 mb-2">Apple Inc. | Jan 2024 - Current</h3>
          <ul className="list-disc pl-5">
            <li>Configuration and QA of routers, switches, printers, scanners, desktop computers, laptops, and more</li>
            <li>Developing internal software to automate configuration tasks, improving efficiency and consistency</li>
            <li>Writing documentation on how to perform job duties as well as how to use software I\'ve developed or helped to develop</li>
          </ul>

          <hr className="my-6"/>
          
          <h3 className="text-xl inline mr-2 text-center">IT Technician | Help Desk</h3>
          <h3 className="text-lg text-center text-gray-500 mb-2">Fantastic Displays | Jun 2019 - Apr 2020</h3>
          <ul className="list-disc pl-5">
            <li>Fixing computer and network-related issues in-office</li>
            <li>Replacing computer hardware and peripherals including monitors, power supplies, and keyboards and mice</li>
            <li>Cutting, running, and crimping Ethernet cables, connecting switches, and configuring local network settings</li>
            <li>Printer, scanner, and network device QA and repair</li>
          </ul>

          <hr className="my-6"/>
        </div>

      </div>
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
    <div className="flex flex-col h-screen max-w-screen-2xl mx-auto">
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
