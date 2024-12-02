'use client'

import GitHubIcon from '../../public/icons/github.svg';
import LinkedInIcon from '../../public/icons/linkedin.png';

export default function App() {
  return (
    <div id="page">
      <div id="container">
        <div id="header" className="section">
          <div id="vertical-center-frame">
            <h1>Tyler Davies</h1>
            <h2>Front End Developer</h2>
            <p>I build computers, write code, design websites, and am constantly striving to learn more.</p>
            <div id="icons">
              <a href="https://github.com/TylerSDavies" target="_blank" rel="noopener noreferrer">
                <img src={GitHubIcon} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/tyler-s-davies/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        <div id="content">
          <div id="about" className="section">
            <h3>About</h3>
            <div className="subsection">
              <p>I'm Tyler, a developer in Phoenix, AZ. Most recently having worked at Apple as a software developer and front-end web developer, I specialized in tools like React to build dynamic and responsive web applications. With over 10 years of professional and educational experience in the tech industry, I have a strong foundation in HTML, CSS, JavaScript, and modern JavaScript frameworks.</p>
              <p>Outside of work, I am continuously working toward further strengthening my abilities and knowledge in both programming and IT. I enjoy digital art, music production and instruments, and trying to stay physically active with running, biking, and going to the gym.</p>
              <p>Thank you for visiting my website! Feel free to browse my projects and reach out for more information about my work.</p>
            </div>
          </div>
          <div id="experience" className="section">
            <h3>Experience</h3>
            <div id="apple" className="subsection">
              <h4>Integration Technician II</h4>
              <h5>Apple | Jan 2024 - Nov 2024</h5>
              <p>Developed internal React and FastAPI-based application to automate device configuration and error checking, racked and cabled server cabinet hardware, created technical documentation, trained and managed teams on multiple projects, performed device break-fix and configuration, and assisted in maintenance and troubleshooting on x-ray equipment</p>
              <div className="skills-frame">
                <div className="label">
                  <p>Device Configuration</p>
                </div>
                <div className="label">
                  <p>React</p>
                </div>
                <div className="label">
                  <p>Python</p>
                </div>
                <div className="label">
                  <p>JavaScript</p>
                </div>
                <div className="label">
                  <p>HTML</p>
                </div>
                <div className="label">
                  <p>CSS</p>
                </div>
                <div className="label">
                  <p>Leadership</p>
                </div>
                <div className="label">
                  <p>Network Configuration</p>
                </div>
              </div>
            </div>
            <div id="fantastic-displays" className="subsection">
              <h4>IT / Help Desk</h4>
              <h5>Fantastic Displays | Jun 2019 - Apr 2020</h5>
              <p>Fixed computer and network issues, replaced peripherals, recorded inventory, laid network cables and switches throughout office spaces, handled shipping/receiving, and other miscellaneous tasks</p>
              <div className="skills-frame">
                <div className="label">
                  <p>Network Configuration</p>
                </div>
                <div className="label">
                  <p>Device Troubleshooting</p>
                </div>
                <div className="label">
                  <p>QA</p>
                </div>
                <div className="label">
                  <p>Time Management</p>
                </div>
                <div className="label">
                  <p>Customer Service</p>
                </div>
              </div>
            </div>
          </div>
          <div id="Projects" className="section">
            <h3>Projects</h3>
            <div id="portfolio-website" className="subsection">
              <h4>Portfolio Website</h4>
              <h5>NextJS-Based Web Application</h5>
              <p>This website was made using the NextJS framework and utilizes a number of tools such as React and Tailwind.</p>
              {/* Image goes here */}
              <p>Many elements on the page are React components, such as the navigation bar, the navigation buttons themselves, labels in the skills section, and more.</p>
              <p>GitHub is my go-to repository host. I have worked across numberous different devices while building this site. Furthermore, the page you are currently viewing is hosted on AWS. Every time a change is pushed to the "main" repository, the live site updates seamlessly on AWS.</p>
            </div>
            <div id="fux" className="subsection">
              <h4>fuX</h4>
              <h5>Chrome Extension</h5>
              <p>fuX is a Chrome extension I made to improve sharing posts from Twitter/X. It utilizes another service called FixUpX, a service that makes Twitter/X posts embed properly in chat services such as Telegram, Discord, Slack, and more.</p>
              {/* Image goes here */}
              <p>The FixUpX button rests beneath every individual post. Clicking it copies the formatted link to your clipboard to make posting elsewhere fast and easy.</p>
              {/* Image goes here */}
            </div>
          </div>
          <div id="Education" className="section">
            <h3>Education</h3>
            <div id="uop" className="subsection">
              <h4>Bachelor of Science in information Technology</h4>
              <h5>University of Phoenix | Nov 2023</h5>
              <ul>
                <li>Open Systems Interconnection (OSI) Model</li>
                <li>System Virtualization</li>
                <li>Agile Methodologies (Scrum, Kanban)</li>
                <li>Project Management</li>
                <li>Product Lifecycle</li>
              </ul>
            </div>
            <div id="comptia" className="subsection">
              <h4>CompTIA A+ Certificate</h4>
              <h5>CompTIA | Oct 2024</h5>
              <ul>
                <li>Hardware Management</li>
                <li>Network Support</li>
                <li>Operating Systems</li>
                <li>Software Support and Troubleshooting</li>
                <li>Device Administration</li>
                <li>Virtualization and Cloud Computing</li>
                <li>Cybersecurity Best Practices</li>
              </ul>
            </div>
            <div id="rcc" className="subsection">
              <h4>Digital Media and Printing Certificate</h4>
              <h5>Riverside City College | May 2020</h5>
              <ul>
                <li>Adobe Photoshop, Illustrator, InDesign, Premier</li>
                <li>Graphic Design</li>
                <li>Color and Composition Theory</li>
                <li>Typography</li>
                <li>Print Productionand Prepress</li>
                <li>Printer Components and Troubleshooting</li>
              </ul>
            </div>
            <div id="codecademy" className="subsection">
              <h4>Full Stack Engineer Certificate</h4>
              <h5>Codecademy | In Progress</h5>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React, Redux</li>
                <li>Node.js, Express</li>
                <li>SQL, Sequelize</li>
                <li>RESTful APIs</li>
                <li>Authentication and Authorization</li>
                <li>Testing and Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
