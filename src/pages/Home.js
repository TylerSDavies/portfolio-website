/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import PageContainer from '@/components/PageContainer'

export default function Home() {
    const currentPage = 'home';
    return (
        <PageContainer>
            <h2 className="ml-4 mb-2">Hi,</h2>
            <div className="flex flex-col xl:flex-row gap-8 max-h-full items-center">
                <div
                    className="flex flex-col gap-4"
                    style={{flex: 3}}
                >
                    <p className="font-extralight">I'm Tyler, a 27-year-old developer in Phoenix, AZ. I am currently working at Apple as a software developer and front-end web developer, specializing in tools like React to build dynamic and responsive web applications. With over 10 years of professional and educational experience in the tech industry, I have a strong foundation in HTML, CSS, JavaScript, and modern JavaScript frameworks. At Apple, I collaborate with cross-functional teams to deliver innovative solutions that align with both business goals and user needs.</p>

                    <p className="font-extralight">Outside of work, I have continuously worked toward further strengthening my abilities and knowledge in both programming and IT. I enjoy digital art, music production and instruments, and trying to stay physically active with swimming, running, biking, and going to the gym.</p>

                    <p className="font-extralight">Thank you for visiting my portfolio! Feel free to browse my projects and reach out for collaboration or more information about my work.</p>
                </div>
                <div className="flex flex-col justify-center flex-auto xl:max-w-60 gap-8 pb-32 md:pb-0">
                    <Image
                        src='/images/profile-image.jpg'
                        height={240}
                        width={240}
                        alt='profile-image'
                        style={{display: 'flex', width: '240px', height: '240px'}}
                        className="rounded-xl"
                    />
                    <div className="flex justify-evenly items-center w-full">
                        <a href='https://www.linkedin.com/in/tyler-s-davies/' target='_blank'>
                            <Image
                                src='/logos/linkedin.png'
                                height={60}
                                width={60}
                                alt='linkedin.png'
                            />
                        </a>
                        <a href='https://github.com/TylerSDavies' target='_blank'>
                            <Image
                                src='/logos/github.svg'
                                height={60}
                                width={60}
                                alt='github.svg'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}