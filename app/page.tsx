import Feed from "@/components/feed"
import { getPosts } from "@/actions/getPosts"

export default async function Page() {
    const posts = await getPosts(0, 10);

    console.log(posts)

    return (
        <div className="bg-amber-300">
            <h2>Bem vindo ao blog</h2>

            <Feed initialPosts={posts} />
        </div>
    )
}