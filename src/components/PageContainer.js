export default function PageContainer(props) {
    return (
        <div className="flex flex-col w-full h-full p-8 md:p-16 md:justify-center overflow-auto  bg-gray-900">
            {props.children}
        </div>
    )
}