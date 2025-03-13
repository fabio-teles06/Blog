

export default function RichText({ content }) {
    return (
        <div className="p-5">
            {content.map((node, index) => {
                return processNode(node, index)
            })}
        </div>
    )
}

const processNode = (node, key) => {
    switch (node.type) {
        case "paragraph":
            return <p key={key}>{node.children.map((child, index) => processNode(child, index))}</p>
        case "bullet-list":
            return <ul key={key} className="list-disc" >{node.children.map((child, index) => processNode(child, index))}</ul>
        case "numbered-list":
            return <ul key={key} className="list-decimal">{node.children.map((child, index) => processNode(child, index))}</ul>
        case "blockquote":
            return <blockquote key={key} className="p-2 my-3 border-s-4 border-gray-300 bg-gray-50">
                {node.children.map((child, index) => processNode(child, index))}
                </blockquote>
        case "list-item":
            return <li key={key}>{node.children.map((child, index) => processNode(child, index))}</li>
        default:
            return processText(node, key)
    }
}

const processText = (node, key) => {
    let text = node.text
    if (node.bold) {
        text = <strong>{text}</strong>
    }
    if (node.italic) {
        text = <em>{text}</em>
    }
    return <span key={key}>{text}</span>
}