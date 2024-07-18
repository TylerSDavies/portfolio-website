import Home from '@/pages/Home'

export default function Pages(props) {
    switch(props.pageName) {
        case 'home':
            return <Home pageName={props.pageName} />
        case 'about':
            return <>About</>
        case 'skills':
            return <>Skills</>
        case 'projects':
            return <>Projects</>
        case 'contact':
            return <>Contact</>
        default:
            return <>404</>
    }
}