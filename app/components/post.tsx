
export type PostProps = {
    title: string
}


export function Post(post : PostProps) {
    return (
        <div className="bg-amber-100 m-4 p-4">
            <h2 className="font-bold" >{post.title}</h2>
            
        </div>   
    )
}