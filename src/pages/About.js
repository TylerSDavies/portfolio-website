/* eslint-disable react/no-unescaped-entities */
import PageContainer from "@/components/PageContainer";

export default function About() {
    return (
        <PageContainer>
            <div className="flex flex-col xl:flex-row md:gap-16">
                <div style={{flex: 1}}>
                    <h2 className="text-center text-sky-300">Education</h2>
                    <hr className="my-4" />
                    <h4 className="text-center">Bachelor's of Science in Information Technology</h4>
                    <p className="text-gray-400 font-light text-center mb-4">University of Phoenix | 2023</p>
                    <ul>
                        <li>Open Systems Interconnection (OSI) Model</li>
                        <li>System Virtualization</li>
                        <li>Agile Methodologies (Scrum, Kanban)</li>
                        <li>Project Management</li>
                        <li>Product Lifecycle</li>
                    </ul>
                    <hr className="my-4" />
                    <h4 className="text-center">Certificate in Computer Programming Logic</h4>
                    <p className="text-gray-400 font-light text-center mb-4">University of Phoenix | 2023</p>
                    <ul>
                        <li>Java, Python, HTML, CSS, JS, SQL</li>
                        <li>Relational Databases</li>
                        <li>Objects and Inheritance</li>
                    </ul>
                    <hr className="my-4" />
                    <h4 className="text-center">Certificate in Full Stack Engineering</h4>
                    <p className="text-gray-400 font-light text-center mb-4">Codecademy | In Progress</p>
                    <ul>
                        <li>HTML, CSS, Responsive Design, Accessibility</li>
                        <li>JavaScript, Error Testing, Async JavaScript and HTTP Requests</li>
                        <li>GitHub and Version Control</li>
                        <li>React</li>
                    </ul>
                    <hr className="my-4 block xl:hidden" />
                </div>
                <div style={{flex: 1}}>
                    <h2 className="text-center text-sky-300">Experience</h2>
                    <hr className="my-4" />
                    <h4 className="text-center">Software Developer | Datacenter Technician II</h4>
                    <p className="text-gray-400 font-light text-center mb-4">Apple Inc. | Jan 2020 - Current</p>
                    <ul>
                        <li>Developing internal software to automate configuration tasks, improving efficiency and consistency</li>
                        <li>Writing front-end code in ReactJS for internal web tools, including data manipulation from records stored on back-end servers</li>
                        <li>Writing documentation on how to perform job duties as well as how to use software I developed or helped to develop</li>
                        <li>Configuration and QA of routers, switches, printers, scanners, desktop computers, laptops, and more</li>
                    </ul>
                    <hr className="my-4" />
                    <h4 className="text-center">IT Technician | Help Desk</h4>
                    <p className="text-gray-400 font-light text-center mb-4">Fantastic Displays | Jun 2019 - Apr 2020</p>
                    <ul>
                        <li>Fixed computer and network-related issues in-office</li>
                        <li>Replaced computer hardware and peripherals including monitors, power supplies, keyboards, and mice</li>
                        <li>Cut, laid, and crimped Ethernet cables, connected switches, and configured local network settings</li>
                        <li>Printer, scanner, and network device QA and repair</li>
                    </ul>
                </div>
            </div>
        </PageContainer>
    );
}