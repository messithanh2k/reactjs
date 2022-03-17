import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums']

function Content(){
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type])
    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333',
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
        </div>
    )
}

export default Content;