/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import PageContainer from '@/components/PageContainer';

export default function Projects() {
    return (
        <PageContainer>
            <div className='flex flex-row w-full gap-16 flex-wrap'>
                <div className='flex flex-col min-w-72 flex-1'>
                    <h3 className='text-center text-sky-400'>Portfolio Website</h3>
                    <p className='text-center'>NextJS-Based Web Application</p>
                    <hr className='my-2' />
                    <a className='text-center underline text-sky-400 hover:text-sky-600' href='https://github.com/TylerSDavies/portfolio-website' target='_blank'>GitHub</a>
                    <p className='mb-4'>This website was made using the NextJS framework and utilizes a number of tools such as React and Tailwind.</p>
                    <Image
                        src='/images/portfolio-01.jpg'
                        width={1159}
                        height={714}
                        alt='portfolio website code'
                        className='mb-4 w-full'
                    />
                    <p className='mb-4'>Many elements on the page are React components, such as the navigation bar, the navigation buttons themselves, labels in the skills section, and more.</p>
                    <p>GitHub is my go-to repository host. I have worked across numberous different devices while building this site. Furthermore, the page you are currently viewing is hosted on AWS. Every time a change is pushed to the "main" repository, the live site updates seamlessly on AWS.</p>
                    <hr className='mt-4 block xl:hidden' />
                </div>
                <div className='flex flex-col min-w-72 flex-1'>
                    <h3 className='text-center text-sky-400'>fuX</h3>
                    <p className='text-center'>Chrome Extension</p>
                    <hr className='my-2' />
                    <div className='flex gap-4 w-full justify-center'>
                        <a className='text-center underline text-sky-400 hover:text-sky-600' href='https://github.com/TylerSDavies/fuX' target='_blank'>GitHub</a>
                        <p>|</p>
                        <a className='text-center underline text-sky-400 hover:text-sky-600' href='https://chromewebstore.google.com/detail/fux/ecjlgnjlkgndgajdijfjlmakeclfnoii' target='_blank'>Chrome Web Store</a>
                    </div>
                    <p className='mb-4'>fuX is a Chrome extension I made to improve sharing posts from Twitter/X. It utilizes another service called FixUpX, a service that makes Twitter/X posts embed properly in chat services such as Telegram, Discord, Slack, and more.</p>
                    <Image
                        src='/images/fuX-01.jpg'
                        width={640}
                        height={400}
                        alt='fuX-01'
                        className='mb-4 w-full'
                    />
                    <p className='mb-4'>The FixUpX button rests beneath every individual post. Clicking it copies the formatted link to your clipboard to make posting elsewhere fast and easy.</p>
                    <Image
                        src='/images/fuX-02.jpg'
                        width={640}
                        height={400}
                        alt='fuX-02'
                        className='w-full'
                    />
                </div>
            </div>
        </PageContainer>
    );
}