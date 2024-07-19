/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import PageContainer from '@/components/PageContainer'

export default function Home() {
    const currentPage = 'home';
    return (
        <PageContainer>
            <h2 className="ml-4">Hi,</h2>
            <div className="flex gap-8 max-h-full items-center flex-wrap">
                <div
                    className="flex flex-col gap-4 min-w-72 md:min-w-96"
                    style={{flex: 3}}
                >
                    <p>
                    I'm Tyler, a 27-year-old developer in Phoenix, AZ. I am currently working at Apple as a software developer and front-end web developer, specializing in tools like React to build dynamic and responsive web applications. With over 10 years of professional and educational experience in the tech industry, I have a strong foundation in HTML, CSS, JavaScript, and modern JavaScript frameworks. At Apple, I collaborate with cross-functional teams to deliver innovative solutions that align with both business goals and user needs.
                    </p>
                    <p>
                    Outside of work, I have continuously worked toward further strengthening my abilities and knowledge in both programming and IT. I enjoy digital art, music production and instruments, and trying to stay physically active with swimming, running. biking, and going to the gym. Thank you for visiting my portfolio! Feel free to browse my projects and reach out for collaboration or more information about my work.
                    </p>
                </div>
                <div className="flex justify-center flex-auto">
                    <Image
                        src='/images/profile-image.jpg'
                        height={250}
                        width={250}
                        alt='profile-image'
                        style={{display: 'flex', width: '250px', height: '250px'}}
                    />

                </div>
            </div>
        </PageContainer>
    );
}