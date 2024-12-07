'use client'

import Image from 'next/image';
import { inherits } from 'util';

export default function App() {
  return (
    <div id="page">
      <div id="container">
        <div id="header" className="section">
          <div id="vertical-center-frame">
            <Image src="/images/profile.jpg" alt="Profile Picture" width={200} height={200} style={{borderRadius: "20px"}}/>
            <h1>Tyler Davies</h1>
            <h2>Full Stack Developer</h2>
            <p>I build computers, write code, design websites, and am constantly striving to learn more.</p>
            <div id="icons">
              <a href="https://github.com/TylerSDavies" target="_blank" rel="noopener noreferrer" className="icon-frame">
                <svg width="98" height="96" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" className="svg-icon">
                  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/tyler-s-davies/" target="_blank" rel="noopener noreferrer" className="icon-frame">
                <svg width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1 2.83783C1 2.35041 1.19363 1.88295 1.53829 1.53829C1.88295 1.19363 2.35041 1 2.83783 1H21.1611C21.4025 1 21.6415 1.04754 21.8644 1.1399C22.0874 1.23226 22.29 1.36763 22.4607 1.53829C22.6313 1.70895 22.7667 1.91155 22.8591 2.13452C22.9514 2.3575 22.999 2.59648 22.999 2.83783V21.1611C22.999 21.4025 22.9514 21.6415 22.8591 21.8644C22.7667 22.0874 22.6313 22.29 22.4607 22.4607C22.29 22.6313 22.0874 22.7667 21.8644 22.8591C21.6415 22.9514 21.4025 22.999 21.1611 22.999H2.83783C2.35041 22.999 1.88295 22.8053 1.53829 22.4607C1.19363 22.116 1 21.6486 1 21.1611V2.83783ZM9.70792 9.38711H12.687V10.884C13.1164 10.0232 14.2168 9.24961 15.8699 9.24961C19.0387 9.24961 19.7908 10.9628 19.7908 14.1063V19.9283H16.5826V14.8222C16.5826 13.0321 16.1532 12.0224 15.061 12.0224C13.5463 12.0224 12.9161 13.1109 12.9161 14.8222V19.9283H9.70792V9.38711ZM4.20818 19.7908H7.41637V9.24961H4.20818V19.7908ZM7.87468 5.81227C7.87468 6.08311 7.82133 6.3513 7.71769 6.60152C7.61404 6.85174 7.46212 7.0791 7.27061 7.27061C7.0791 7.46212 6.85174 7.61404 6.60152 7.71769C6.3513 7.82133 6.08311 7.87468 5.81227 7.87468C5.54144 7.87468 5.27325 7.82133 5.02303 7.71769C4.7728 7.61404 4.54545 7.46212 4.35393 7.27061C4.16242 7.0791 4.01051 6.85174 3.90686 6.60152C3.80322 6.3513 3.74987 6.08311 3.74987 5.81227C3.74987 5.26529 3.96716 4.74071 4.35393 4.35393C4.74071 3.96716 5.26529 3.74987 5.81227 3.74987C6.35926 3.74987 6.88384 3.96716 7.27061 4.35393C7.65739 4.74071 7.87468 5.26529 7.87468 5.81227Z"/>
                </svg>
              </a>
              <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="icon-frame">
                <svg fill="currentColor" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M426.667,0H85.333c-14.114,0-25.6,11.486-25.6,25.6v460.8c0,14.114,11.486,25.6,25.6,25.6h341.333
                    c14.114,0,25.6-11.486,25.6-25.6V25.6C452.267,11.486,440.781,0,426.667,0z M249.941,70.741c3.243-3.157,8.875-3.157,12.117,0
                    c0.768,0.853,1.365,1.792,1.792,2.816c0.427,1.024,0.683,2.133,0.683,3.243c0,2.304-0.853,4.437-2.475,6.059
                    c-1.621,1.613-3.755,2.475-6.059,2.475c-1.109,0-2.219-0.256-3.243-0.683c-1.024-0.427-1.963-1.024-2.816-1.792
                    c-1.621-1.621-2.475-3.755-2.475-6.059C247.467,74.581,248.405,72.354,249.941,70.741z M213.333,68.267h8.533
                    c4.71,0,8.533,3.814,8.533,8.533s-3.823,8.533-8.533,8.533h-8.533c-4.71,0-8.533-3.814-8.533-8.533
                    S208.623,68.267,213.333,68.267z M213.333,102.4H256c4.71,0,8.533,3.814,8.533,8.533s-3.823,8.533-8.533,8.533h-42.667
                    c-4.71,0-8.533-3.814-8.533-8.533S208.623,102.4,213.333,102.4z M264.533,145.067c0,2.304-0.853,4.437-2.475,5.973
                    c-1.621,1.698-3.755,2.56-6.059,2.56c-2.304,0-4.437-0.862-6.059-2.56c-1.621-1.536-2.475-3.669-2.475-5.973
                    c0-1.109,0.256-2.219,0.683-3.243c0.427-1.024,1.024-1.963,1.792-2.816c3.243-3.157,8.875-3.157,12.117,0
                    c0.768,0.853,1.365,1.792,1.792,2.816C264.277,142.848,264.533,143.957,264.533,145.067z M213.333,136.533h8.533
                    c4.71,0,8.533,3.814,8.533,8.533s-3.823,8.533-8.533,8.533h-8.533c-4.71,0-8.533-3.814-8.533-8.533
                    S208.623,136.533,213.333,136.533z M213.333,170.667H256c4.71,0,8.533,3.814,8.533,8.533s-3.823,8.533-8.533,8.533h-42.667
                    c-4.71,0-8.533-3.814-8.533-8.533S208.623,170.667,213.333,170.667z M119.467,68.267H179.2c4.71,0,8.533,3.814,8.533,8.533
                    s-3.823,8.533-8.533,8.533h-59.733c-4.71,0-8.533-3.814-8.533-8.533S114.756,68.267,119.467,68.267z M119.467,136.533H179.2
                    c4.71,0,8.533,3.814,8.533,8.533s-3.823,8.533-8.533,8.533h-59.733c-4.71,0-8.533-3.814-8.533-8.533
                    S114.756,136.533,119.467,136.533z M162.133,401.067h-42.667c-4.71,0-8.533-3.814-8.533-8.533c0-4.719,3.823-8.533,8.533-8.533
                    h42.667c4.71,0,8.533,3.814,8.533,8.533C170.667,397.252,166.844,401.067,162.133,401.067z M204.8,401.067h-8.533
                    c-4.71,0-8.533-3.814-8.533-8.533c0-4.719,3.823-8.533,8.533-8.533h8.533c4.71,0,8.533,3.814,8.533,8.533
                    C213.333,397.252,209.51,401.067,204.8,401.067z M272.384,429.909c-0.427,1.024-1.024,1.954-1.792,2.816
                    c-1.621,1.613-3.755,2.475-6.059,2.475c-1.109,0-2.219-0.256-3.243-0.683c-1.024-0.427-1.963-1.024-2.816-1.792
                    c-0.768-0.862-1.365-1.792-1.792-2.816c-0.427-1.024-0.683-2.133-0.683-3.243c0-2.219,0.939-4.446,2.475-6.059
                    c2.389-2.389,6.144-3.157,9.301-1.792c1.024,0.427,1.963,1.024,2.816,1.792c1.536,1.613,2.475,3.84,2.475,6.059
                    C273.067,427.776,272.811,428.885,272.384,429.909z M256,392.533c0-4.719,3.823-8.533,8.533-8.533h25.6
                    c4.71,0,8.533,3.814,8.533,8.533c0,4.719-3.823,8.533-8.533,8.533h-25.6C259.823,401.067,256,397.252,256,392.533z
                    M324.267,435.2h-25.6c-4.71,0-8.533-3.814-8.533-8.533s3.823-8.533,8.533-8.533h25.6c4.71,0,8.533,3.814,8.533,8.533
                    S328.977,435.2,324.267,435.2z M384,435.2h-25.6c-4.71,0-8.533-3.814-8.533-8.533s3.823-8.533,8.533-8.533H384
                    c4.71,0,8.533,3.814,8.533,8.533S388.71,435.2,384,435.2z M384,401.067h-59.733c-4.71,0-8.533-3.814-8.533-8.533
                    c0-4.719,3.823-8.533,8.533-8.533H384c4.71,0,8.533,3.814,8.533,8.533C392.533,397.252,388.71,401.067,384,401.067z
                    M392.533,358.4H119.467c-4.71,0-8.533-3.814-8.533-8.533s3.823-8.533,8.533-8.533h273.067c4.71,0,8.533,3.814,8.533,8.533
                    S397.244,358.4,392.533,358.4z M110.933,273.067c0-4.719,3.823-8.533,8.533-8.533h42.667c4.71,0,8.533,3.814,8.533,8.533
                    c0,4.719-3.823,8.533-8.533,8.533h-42.667C114.756,281.6,110.933,277.786,110.933,273.067z M187.733,273.067
                    c0-4.719,3.823-8.533,8.533-8.533h8.533c4.71,0,8.533,3.814,8.533,8.533c0,4.719-3.823,8.533-8.533,8.533h-8.533
                    C191.556,281.6,187.733,277.786,187.733,273.067z M384,298.667c4.71,0,8.533,3.814,8.533,8.533s-3.823,8.533-8.533,8.533h-59.733
                    c-4.71,0-8.533-3.814-8.533-8.533s3.823-8.533,8.533-8.533H384z M332.8,273.067c0-4.719,3.823-8.533,8.533-8.533h8.533
                    c4.71,0,8.533,3.814,8.533,8.533c0,4.719-3.823,8.533-8.533,8.533h-8.533C336.623,281.6,332.8,277.786,332.8,273.067z
                    M375.467,273.067c0-1.109,0.256-2.219,0.683-3.243c0.427-1.109,1.024-1.963,1.792-2.816c3.157-3.157,8.875-3.157,12.117,0
                    c0.768,0.853,1.365,1.792,1.792,2.816c0.512,1.024,0.683,2.133,0.683,3.243c0,1.109-0.171,2.219-0.683,3.243
                    c-0.427,1.024-1.024,1.954-1.792,2.816c-1.621,1.613-3.755,2.475-6.059,2.475c-1.109,0-2.219-0.256-3.243-0.683
                    c-1.024-0.427-1.963-1.024-2.816-1.792c-0.768-0.862-1.365-1.792-1.792-2.816C375.723,275.285,375.467,274.176,375.467,273.067z
                    M307.2,281.6h-42.667c-4.71,0-8.533-3.814-8.533-8.533c0-4.719,3.823-8.533,8.533-8.533H307.2c4.71,0,8.533,3.814,8.533,8.533
                    C315.733,277.786,311.91,281.6,307.2,281.6z M264.533,298.667h25.6c4.71,0,8.533,3.814,8.533,8.533s-3.823,8.533-8.533,8.533
                    h-25.6c-4.71,0-8.533-3.814-8.533-8.533S259.823,298.667,264.533,298.667z M392.533,238.933H119.467
                    c-4.71,0-8.533-3.814-8.533-8.533s3.823-8.533,8.533-8.533h273.067c4.71,0,8.533,3.814,8.533,8.533
                    S397.244,238.933,392.533,238.933z M401.067,179.2c0,4.719-3.823,8.533-8.533,8.533S384,183.919,384,179.2v-40.866
                    c0-18.825-15.309-34.133-34.133-34.133c-18.825,0-34.133,15.309-34.133,34.133V179.2c0,4.719-3.823,8.533-8.533,8.533
                    s-8.533-3.814-8.533-8.533v-40.866c0-19.285,10.726-36.096,26.513-44.826c-5.82-6.127-9.446-14.353-9.446-23.45
                    c0-18.816,15.309-34.125,34.133-34.125h0.017c9.105,0,17.673,3.55,24.115,9.993C380.45,52.378,384,60.945,384,70.059
                    c0,9.097-3.627,17.323-9.446,23.45c15.787,8.73,26.513,25.54,26.513,44.826V179.2z"/>
                  <path d="M349.884,53.001h-0.017c-9.412,0-17.067,7.646-17.067,17.058c0,9.412,7.654,17.067,17.067,17.067
                    c9.412,0,17.067-7.654,17.067-17.067c0-4.557-1.775-8.841-5.001-12.066C358.716,54.775,354.432,53.001,349.884,53.001z"/>
                </svg>
              </a>
              <a href="mailto:contact@tylerdavies.org" target="_blank" rel="noopener noreferrer" className="icon-frame">
                <svg height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <polygon fill="currentColor" class="st0" points="512,295.199 445.92,226.559 512,169.6"/>
                  <polygon fill="currentColor" class="st0" points="66.16,226.559 0,295.279 0,169.6"/>
                  <path fill="currentColor" class="st0" d="M512,357.6v63.199c0,15.281-12.4,27.682-27.68,27.682H27.68c-15.281,0-27.68-12.4-27.68-27.682V357.6
                    l98.959-102.721L212,352.238c11.76,10.082,27.359,15.682,44,15.682c16.641,0,32.32-5.6,44.08-15.682l112.959-97.359L512,357.6z"/>
                  <path fill="currentColor" class="st0" d="M512,91.119v27.68l-241.442,208c-7.76,6.72-21.359,6.72-29.119,0L0,118.799v-27.68
                    c0-15.279,12.398-27.6,27.68-27.6H484.32C499.6,63.519,512,75.84,512,91.119z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div id="content">
          <div id="about" className="section">
            <h3>About</h3>
            <div className="subsection">
              <p>I&apos;m Tyler, a developer in Phoenix, AZ. Most recently having worked at Apple as a software developer and front-end web developer, I specialized in tools like React to build dynamic and responsive web applications. With over 10 years of professional and educational experience in the tech industry, I have a strong foundation in HTML, CSS, JavaScript, and modern JavaScript frameworks.</p>
              <p>Outside of work, I am continuously working toward further strengthening my abilities and knowledge in both programming and IT. I enjoy digital art, music production and instruments, and trying to stay physically active with running, biking, and going to the gym.</p>
              <p>Thank you for visiting my website! Feel free to browse my projects and reach out for more information about my work.</p>
            </div>
          </div>
          <div id="experience" className="section">
            <h3>Experience</h3>
            <div id="microsoft" className="subsection">
              <h4>Datacenter Technician</h4>
              <h5>Microsoft | Dec 2024 - Current</h5>
              <p>Racking, stacking, cabling, dressing, and transporting server cabinets/rack, offering white-glove service per Microsoft standards.</p>
              <div className="skills-frame">
                <div className="label">
                  <p>Rack/Stack</p>
                </div>
                <div className="label">
                  <p>Server Hardware</p>
                </div>
                <div className="label">
                  <p>Fiber</p>
                </div>
                <div className="label">
                  <p>Data Center Operations</p>
                </div>
                <div className="label">
                  <p>Cable Dressing</p>
                </div>
              </div>
            </div>
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
            <div id="device-config-automation" className="subsection">
              <h4>Device Configuration Automation Utility</h4>
              <h5>React, FastAPI, and WebPack Browser-Based Utility</h5>
              <p>I led development on an internal-use tool at Apple to streamline configuration and QA of devices such as thermal printers.</p>
              <p>Built with a combination of React, FastAPI, and WebPack, the utility ran as a web application that could interact with the local network. It got around browser security restrictions by also running a full FastAPI-based back end on the local machine. The web application would send HTTP requests to the back end. The back end would use its wider range of permissions to perform actions on the local machine and network, and would interact back and forth between aforementioned devices and the web app client.</p>
              <p>The front end was developed with the React JavaScript framework, the back end with the FastAPI Python framework, and it was all condensed into a single easily-distributable executable through the use of WebPack and PyInstaller.</p>
              <div style={{display: "flex", gap: "5px", alignItems: "center", justifyContent: "center", padding: "20px 0"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                  <div style={{border: "1px solid #9499ad", padding: "5px 10px"}}>
                    <h4>Front End</h4>
                    <p>React<br/>JavaScript<br/>HTML<br/>CSS</p>
                  </div>
                  <div style={{border: "1px solid #9499ad", padding: "5px 10px"}}>
                    <h4>Back End</h4>
                    <p>FastAPI<br/>Python<br/></p>
                  </div>
                </div>
                <h4 style={{textAlign: "center", width: "fit-content", padding: "2px"}}>→</h4>
                <div style={{display: "flex", flexDirection: "column"}}>
                  <div style={{border: "1px solid #9499ad", padding: "5px 10px"}}>
                    <h4>WebPack</h4>
                    <p>Front End<br/>Back End</p>
                  </div>
                </div>
                <h4 style={{textAlign: "center", width: "fit-content", padding: "2px"}}>→</h4>
                <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                  <div style={{border: "1px solid #9499ad", padding: "5px 10px"}}>
                    <h4>Distributable</h4>
                  </div>
                </div>
              </div>
              <p>With the use of GitHub, there was total control over versioning and builds of the program could be distributed with ease.</p>
            </div>
            <div id="portfolio-website" className="subsection">
              <h4>Portfolio Website</h4>
              <h5>NextJS-Based Web Application</h5>
              <p>This website was made using the NextJS framework and utilizes a number of tools such as React and Tailwind.</p>
              <Image src="/images/portfolio-01.jpg" alt="VSCode Screenshot" width={600} height={600} style={{padding: "10px 0"}}/>
              <p>Many elements on the page are React components, such as the navigation bar, the navigation buttons themselves, labels in the skills section, and more.</p>
              <Image src="/images/portfolio-02.jpg" alt="Figma Screenshot" width={600} height={600} style={{padding: "10px 0"}}/>
              <p>GitHub is my go-to repository host. I have worked across numberous different devices while building this site. Furthermore, the page you are currently viewing is hosted on AWS. Every time a change is pushed to the &quot;main&quot; repository, the live site updates seamlessly on AWS.</p>
            </div>
            <div id="fux" className="subsection">
              <h4>fuX</h4>
              <h5>Chrome Extension</h5>
              <p>fuX is a Chrome extension I made to improve sharing posts from Twitter/X. It utilizes another service called FixUpX, a service that makes Twitter/X posts embed properly in chat services such as Telegram, Discord, Slack, and more.</p>
              <div style={{padding: "10px 0", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "space-apart"}}>
                <Image src="/images/fuX-01.jpg" alt="fuX-01" width={600} height={600} style={{minWidth: "200px", flex: 1}}/>
                <Image src="/images/fuX-02.jpg" alt="fuX-02" width={600} height={600} style={{minWidth: "200px", flex: 1}}/>
              </div>
              <p>The FixUpX button rests beneath every individual post. Clicking it copies the formatted link to your clipboard to make posting elsewhere fast and easy.</p>
            </div>
          </div>
          <div id="Education" className="section">
            <h3>Education</h3>
            <div id="uop" className="subsection">
              <h4>Bachelor of Science in information Technology</h4>
              <h5>University of Phoenix | Nov 2023</h5>
              <ul style={{width: "100%"}}>
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
              <ul style={{width: "100%"}}>
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
              <ul style={{width: "100%"}}>
                <li>Adobe Photoshop, Illustrator, InDesign, Premier</li>
                <li>Graphic Design</li>
                <li>Color and Composition Theory</li>
                <li>Typography</li>
                <li>Print Production and Prepress</li>
                <li>Printer Components and Troubleshooting</li>
              </ul>
            </div>
            <div id="codecademy" className="subsection">
              <h4>Full Stack Engineer Certificate</h4>
              <h5>Codecademy | In Progress</h5>
              <ul style={{width: "100%"}}>
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
