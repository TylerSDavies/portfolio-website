import PageContainer from '@/components/PageContainer';

function Skill(props) {
    return (
        <div
            className='px-4 py-2'
            style={{backgroundColor: '#c08'}}
        >
            {props.children}
        </div>
    );
}

export default function Skills() {
    return (
        <PageContainer>
            <h2>Front End</h2>
            <div className='flex gap-2 flex-wrap'>
                <Skill>HTML</Skill>
                <Skill>JavaScript</Skill>
                <Skill>TypeScript</Skill>
                <Skill>CSS</Skill>
                <Skill>Tailwind</Skill>
                <Skill>Figma</Skill>
                <Skill>Responsive Design</Skill>
                <Skill>UI / UX</Skill>
                <Skill>ReactJS</Skill>
                <Skill>NextJS</Skill>
                <Skill>AWS Amplify</Skill>
            </div>
            <h2 className='mt-8'>Back End</h2>
            <div className='flex gap-2 flex-wrap'>
                <Skill>NodeJS</Skill>
                <Skill>Java</Skill>
                <Skill>Python</Skill>
                <Skill>C#</Skill>
                <Skill>SQL</Skill>
                <Skill>REST APIs</Skill>
            </div>
            <h2 className='mt-8'>Miscellaneous</h2>
            <div className='flex gap-2 flex-wrap'>
                <Skill>Agile</Skill>
                <Skill>GitHub</Skill>
                <Skill>Scrum</Skill>
                <Skill>Kanban</Skill>
                <Skill>Version Control</Skill>
                <Skill>OSI Model</Skill>
            </div>

        </PageContainer>
    );
}