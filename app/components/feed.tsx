'use client'
import React from "react"
import { Post } from "@/components/post"

export default function Feed({initialPosts}) {
    const [posts, setPosts] = React.useState<any[]>(initialPosts);

    return (
        <div className="flex flex-col gap-3">
            {posts.map((post) => (
                <Post key={post.id} title={post.title} content={post.content} />
            ))}
        </div>
    )
}