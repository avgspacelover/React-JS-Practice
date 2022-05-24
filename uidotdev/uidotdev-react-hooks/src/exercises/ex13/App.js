import React from "react";

/*
  Instructions:
    You're given an array of `postIds` and a `fetchPost` function.
    When you invoke `fetchPost`, you'll need to pass it an `id` from
    the `postIds` array. `fetchPost` returns a promise that will resolve
    with a post shaped like this

    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    The UI should show `Loading` if the request is still being made,
    an error message if there was an error, or the post title, body,
    and a button to fetch the next post on a successful request.
*/

const postIds = [1, 2, 3, 4, 5, 6, 7, 8];


const useFetch = (url) => {

    const reducer = React.useCallback( (state, action) => {
        
        switch(action.type){
            case "start":
                return {
                  ...state,
                  loading: true
                };
              case "success":
                return {
                  ...state,
                  loading: false,
                  data: action.payload
                };
              case "failure":
                return {
                  ...state,
                  loading: false,
                  error: action.payload
                };
              default:
                return state;

        }
    }, [])

    const [state, dispatch] = React.useReducer( reducer, {
        data: [],
        loading:false,
        error: null
    });
    
    
    React.useEffect( () => {
        dispatch({type: "start"});
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch({type: "success", paylod: data}))
            .catch(error => dispatch({type: "failure", payload: error}))
    
    }, [url]);

    return state;


}






const App = ()=> {

    const [index, setIndex] = React.useState(0);

    const {data: post, loading,error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postIds[index]}`) 

    const fetchNext = React.useCallback(() => {
        if(index< postIds.length-1){
            setIndex(index => index+1);
        }


    }, [index]);

    const renderpost = post => (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={fetchNext}>NEXT</button>
        </div>
    )

    
    return (
        <div className="app">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error.message}</p>

            ) : (
                renderpost(post)
            )}

        </div>

    );
}

export default App;