import PageContainer from '@/components/PageContainer';

export default function Contact() {
    return (
        <PageContainer>
            <div className='flex flex-wrap gap-16 justify-evenly items-center'>
                <div className='flex flex-col flex-1 min-w-56 max-w-56'>
                    <h2 className='text-sky-400'>Email</h2>
                    <hr className="mb-4" />
                    <a href='mailto:contact@tylerdavies.org' target='_blank' className='font-extralight'>contact@tylerdavies.org</a>
                </div>
                <div className='flex flex-col flex-1 min-w-56 max-w-56'>
                    <h2 className='text-sky-400'>Phone</h2>
                    <hr className="mb-4" />
                    <p className='font-extralight'>+1 (602) 314-1661</p>
                </div>
            </div>
        </PageContainer>
    );
}