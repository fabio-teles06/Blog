const exampleData = [
    {id: 1, title: 'Post 1', content: 'This is the content of post 1'},
    {id: 2, title: 'Post 2', content: 'This is the content of post 2'},
    {id: 3, title: 'Post 3', content: 'This is the content of post 3'},
    {id: 4, title: 'Post 4', content: 'This is the content of post 4'},
    {id: 5, title: 'Post 5', content: 'This is the content of post 5'},
    {id: 6, title: 'Post 6', content: 'This is the content of post 6'},
    {id: 7, title: 'Post 7', content: 'This is the content of post 7'},
    {id: 8, title: 'Post 8', content: 'This is the content of post 8'},
    {id: 9, title: 'Post 9', content: 'This is the content of post 9'},
    {id: 10, title: 'Post 10', content: 'This is the content of post 10'},
    {id: 11, title: 'Post 11', content: 'This is the content of post 11'},
    {id: 12, title: 'Post 12', content: 'This is the content of post 12'},

]

export const getPosts = async (offset: number, limit: number) => {
    return exampleData.slice(offset, offset + limit)
}