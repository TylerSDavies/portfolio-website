import PageContainer from '@/components/PageContainer';

export default function Contact() {
    return (
        <PageContainer>
            <div className='flex flex-wrap gap-16 justify-center items-center'>
                <div>
                    <h3>Email</h3>
                    <a href='mailto:contact@tylerdavies.org' target='_blank'>contact@tylerdavies.org</a>
                </div>
                <div>
                    <h3>Phone Number</h3>
                    <p>+1 (602) 314-1661</p>
                </div>
            </div>
        </PageContainer>
    );
}