import Link from "next/link"
import Image from "next/image"

function Nav() {
  function NavButton({ link, label }: { link: string; label: string }) {
    return (
      <Link href={link}>
        <div className="transition-all text-2xl lg:text-sm cursor-pointer py-4 xl:px-8 hover:text-sky-500 z-50">
          {label}
        </div>
      </Link>
    );
  }
  return (
    <div className="flex gap-4 justify-center 2xl:justify-evenly items-center font-light tracking-wide px-2 flex-wrap bg-slate-900 lg:bg-transparent">
      <div className="hidden xl:flex" />
      
      <div className="text-xl tracking-widest font-light transition-all px-4 py-3 hidden lg:flex">Tyler Davies</div>
      
      <div className="hidden lg:flex" /><div className="hidden lg:flex" />
      
      <div className="flex gap-0 lg:gap-4 flex-wrap">
        <div className="flex flex-row gap-4 w-full justify-evenly lg:max-w-fit">
          <NavButton label="Home" link="/#home" />
          <NavButton label="About" link="/#about" />
          <NavButton label="Skills" link="/#skills" />
        </div>
        <div className="flex flex-row gap-4 w-full justify-evenly lg:max-w-fit">
          <NavButton label="Projects" link="/#projects" />
          <NavButton label="Contact" link="/#contact" />
          <NavButton label="Resume" link="/" />
        </div>
        <div className="hidden xl:flex" />
      </div>

    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col-reverse 2xl:flex-row justify-end lg:justify-center gap-10 lg:gap-20 items-center h-full overflow-y-auto" id="home">
      <div className="max-w-2xl p-4">
        <p className="text-4xl lg:text-2xl tracking-wider my-4 font-extralight text-center lg:text-left">Tyler Davies</p>
        <p className="text-2xl tracking-wider my-4 font-light text-center lg:text-left text-sky-500">Front End Developer</p>
        <p className="text-xl font-light mx-2 xs:mx-10 md:mx-20 lg:mx-0 transition-all">I'm a junior web developer with a focus on the front end with UI and UX. I graduated with a Bachelor's in Information Technology and a certificate in Programming in 2023.</p>
      </div>
      <Image
        src="/images/profile-image.jpg"
        height={300}
        width={300}
        alt="header image"
        className="profile-image mt-5 lg:mt-0"
      />
    </div>
  );
}

function About() {
  return(
    <div className="flex justify-evenly items-center h-full overflow-y-auto flex-wrap gap-10" id="about">
      <div className="flex flex-col lg:flex-row gap-20 mx-5 xs:mx-10 sm:mx-20 md:mx-40 lg:mx-10 xl:mx-20 transition-all">

        <div className="flex flex-col flex-1">
          <h2 className="text-center lg:text-left text-2xl text-sky-500 mt-10 lg:mt-0">Education</h2>
          <hr className="mt-2 mb-6"/>
          
          <h3 className="text-xl inline mr-2 text-center">Bachelor's of Science in Information Technology</h3>
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
          <h2 className="text-center lg:text-left text-2xl text-sky-500">Experience</h2>
          <hr className="mt-2 mb-6"/>
          
          <h3 className="text-xl inline mr-2 text-center">Datacenter Technician II | Software Developer</h3>
          <h3 className="text-lg text-center text-gray-500 mb-2">Apple Inc. | Jan 2024 - Current</h3>
          <ul className="list-disc pl-5">
            <li>Configuration and QA of routers, switches, printers, scanners, desktop computers, laptops, and more</li>
            <li>Developing internal software to automate configuration tasks, improving efficiency and consistency</li>
            <li>Writing documentation on how to perform job duties as well as how to use software I've developed or helped to develop</li>
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
  function SkillBubble({ text }: {text: string}) {
    return <div className="bg-fuchsia-400 text-slate-900 dark:text-white dark:bg-slate-800 lg:dark:text-fuchsia-500 px-4 py-2 text-md lg:text-2xl">{text}</div>
  }
  return(
    <div className="flex flex-col h-full overflow-y-auto items-center justify-center lg:mx-10" id="skills">

      <div className="flex flex-col mx-5 xs:mx-10 sm:mx-20 md:mx-40 2xl:mx-0 my-10 lg:w-full max-w-screen-xl">
        <h3 className="text-2xl text-sky-500 text-center lg:text-left">Front End</h3>
        <hr className="my-4" />
        <div className="flex flex-row flex-wrap gap-2 justify-start lg:justify-start">
          <SkillBubble text="HTML" />
          <SkillBubble text="JavaScript" />
          <SkillBubble text="TypeScript" />
          <SkillBubble text="CSS" />
          <SkillBubble text="Tailwind" />
          <SkillBubble text="Figma" />
          <SkillBubble text="Responsive Design" />
          <SkillBubble text="UI/UX" />
          <SkillBubble text="ReactJS" />
          <SkillBubble text="NextJS" />
          <SkillBubble text="AWS Amplify" />
        </div>
      </div>

      <div className="flex flex-col mx-5 xs:mx-10 sm:mx-20 md:mx-40 2xl:mx-0 my-10 lg:w-full max-w-screen-xl">
        <h3 className="text-2xl text-sky-500 text-center lg:text-left">Back End</h3>
        <hr className="my-4" />
        <div className="flex flex-row flex-wrap gap-2 justify-start lg:justify-start">
          <SkillBubble text="NodeJS" />
          <SkillBubble text="Java" />
          <SkillBubble text="Python" />
          <SkillBubble text="C#" />
          <SkillBubble text="SQL" />
          <SkillBubble text="REST APIs" />
        </div>
      </div>

      <div className="flex flex-col mx-5 xs:mx-10 sm:mx-20 md:mx-40 2xl:mx-0 my-10 lg:w-full max-w-screen-xl">
        <h3 className="text-2xl text-sky-500 text-center lg:text-left">Miscellaneous</h3>
        <hr className="my-4" />
        <div className="flex flex-row flex-wrap gap-2 justify-start lg:justify-start">
          <SkillBubble text="GitHub" />
          <SkillBubble text="OSI Model" />
          <SkillBubble text="Agile" />
          <SkillBubble text="Scrum" />
          <SkillBubble text="Kanban" />
        </div>
      </div>

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
    <div className="flex flex-col h-screen max-w-screen-2xl mx-auto bg-white dark:bg-transparent">
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
