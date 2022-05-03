// REFACTORED TO USE USEEFFECT AND USECALLBACK PROPERLY



import React,{useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] =useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] =useState(null)



  const fetchMoviesHandler= useCallback(async() => {

    // fetch('https://swapi.dev/api/films')
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log(data)
    //     const transformedMovies= data.results.map((movieData) => {

    //       return {
    //         id: movieData.episode_id,
    //         title: movieData.title,
    //         openingText: movieData.opening_crawl,
    //         releaseDate: movieData.release_date,
    //       };
    //     });

    //     setMovies(transformedMovies);
    //   })

    /*
        When working with .then() => Use catch to error handle
        when working with  async-await => use try-catch to error handle
        fetch() doesnt throw error for error status codes but only when data is not accessible by map, axios throws error for status code
    */

  //async-await version

    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch('https://swapi.dev/api/films')
        
        if(!response.ok){
          throw new Error('Something Went Wrong'); // or use response.status
        }

        const data= await response.json()

        console.log(data)


        const transformedMovies= data.results.map((movieData) => {

          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });

      setMovies(transformedMovies);
      setIsLoading(false);
    } catch(error){
      setError(error.message);
    }

    setIsLoading(false);
  }, [])
  // order has to be changed because the function is called before defining, this works in function () defnitions because of hoisting.

  useEffect( () => {
    
    fetchMoviesHandler();

  }, [fetchMoviesHandler]);

  let content = <p> Found no movies</p>

  if(movies.length >0){

    content = <MoviesList movies={movies} />
  }

  if(error){
    content =<p>{error}</p>
  } else if(isLoading){

    content = <p>LOADING!!!</p>
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;


/*


  {!isLoading && movies.length>0 && }
        {!isLoading && movies.length ===0 && !error && <div>FOUND NO MOVIES!</div>} 
        {isLoading && <p>LOADING!!!!</p>}
        {!isLoading && error && <p>{error}</p>}

*/