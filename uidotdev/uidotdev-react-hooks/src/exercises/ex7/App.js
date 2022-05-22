import { useEffect, useState } from "react"

const postIds = [1, 2, 3, 4, 5, 6, 7, 8];

function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res =>
    res.json()
  );
}

const App = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const [index, setIndex] = useState(0);



    useEffect( () => {

        setLoading(true)
        setError(null)

        fetchPost(postIds[index])
        .then(post => setPosts(posts => [...posts, post]))
        .catch(setError)
        .finally(() => setLoading(false));
    }, [index])

    const fetchNext=() => {
        if(index < postIds.length -1){
            setIndex(index => index + 1)
        }
    }
    return (
        <div>
            {posts.map( post=> (
                <div key={post.id}> 
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
               {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                        <p>Error: {error.message}</p>
                ) : (
                    <button onClick={fetchNext}>NEXT</button>
                )}
            
        </div>

    )
}

export default App;