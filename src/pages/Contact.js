import PageContainer from '@/components/PageContainer';

export default function Contact() {
    return (
        <PageContainer>
            <div className='flex flex-wrap gap-16 justify-evenly items-center'>
                <div>
                    <h2>Email</h2>
                    <a href='mailto:contact@tylerdavies.org' target='_blank'>contact@tylerdavies.org</a>
                </div>
                <div>
                    <h2>Phone</h2>
                    <p>+1 (602) 314-1661</p>
                </div>
            </div>
        </PageContainer>
    );
}