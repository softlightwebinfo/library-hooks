import ReactDOM from "react-dom"
import React from "react";

const Portal = (
    {
        children,
        className = 'root-portal',
        element = 'div',
    }: { children: any, className?: any, element?: string }
) => {
    const [container] = React.useState(() => {
        const el = document.createElement(element)
        el.classList.add(className)
        return el
    })

    React.useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, [])

    return ReactDOM.createPortal(children, container)
}
export default Portal;