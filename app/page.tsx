import { text } from "stream/consumers"
import { Post } from "./components/post"
import RichText from "./components/richtext"

export default function Page() {

    const testPost = {
        publisher: {
            id: "1",
            name: "John Doe",
            avatar: "https://i.pravatar.cc/100"
        },
        title: "Hello World",
        content: [
            {
                type: "paragraph",
                children: [
                    { text: "   Olá isso é um " },
                    { text: "teste", bold: true },
                    { text: " bem maluco", italic: true },
                ]
            },
            {
                type: "numbered-list",
                children: [
                    {
                        type: "list-item",
                        children: [
                            { text: "primeiro item" },
                        ]
                    },
                    {
                        type: "list-item",
                        children: [
                            { text: "segundo item" }
                        ]
                    }
                ]
            },
            {
                type: "blockquote",
                children: [
                    { text: "Isso é um bloco de ", italic: true },
                    { text: "citação", italic: true, bold: true }
                ]
            }
        ]
    }

    return (
        <div>
            <h2>Bem vindo ao blog</h2>
            <hr />
            <div>
                <RichText content={testPost.content} />
            </div>
        </div>
    )
}