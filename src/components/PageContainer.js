export default function PageContainer(props) {
    return (
        <div
            className="flex flex-col w-full h-full p-8 pb-32 md:px-16 md:py-12 md:justify-center xl:rounded-2xl overflow-auto bg-gray-900"
            style={{userSelect: 'text'}}
        >
            {props.children}
        </div>
    )
}