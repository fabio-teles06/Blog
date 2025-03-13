
export type PostProps = {
    title: string
    content: string
}


export function Post(post : PostProps) {
    return (
        <div className="bg-amber-300">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>   
    )
}