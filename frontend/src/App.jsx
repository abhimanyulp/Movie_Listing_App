import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  //Movie Data
  const [movies, setMovies] = useState([]);

  //Movie Input Values
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [imgurl, setImgurl] = useState("");


  useEffect(() => {
    fetch()
  }, []);

  const fetch = async () => {
    try {
      const res = await axios.get("http://localhost:8000/movies/getall")
      console.log(res.data.data)
      setMovies(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const addMovie = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8000/movies/post", {
        title,
        year,
        genre,
        imgUrl: imgurl
      })
      //Fetch again
      fetch()
      //Resetting the values
      setTitle("")
      setYear("")
      setGenre("")
      setImgurl("")
    } catch (error) {
      console.log(error)
    }
  }

  const deleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/movies/delete/${id}`)
      fetch()
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div>
      <div id='nav'>
        <h1>The Movie App</h1>
      </div>

      <div id='main'>

        {/* Add Movie Section  */}
        <div id='addMovieSection'>

          <h1>Add Movie</h1>
          <form onSubmit={addMovie}>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <label>Year:</label>
            <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
            <br />
            <label>Genre:</label>
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="">Select</option>
              <option value="Fiction">Fiction</option>
              <option value="Science">Science</option>
              <option value="Comic">Comic</option>
            </select>
            <br />
            <label>Image URL</label>
            <textarea type="text" value={imgurl} onChange={(e) => setImgurl(e.target.value)}></textarea>
            <br />
            <button type='submit'>Add Movie</button>
          </form>

        </div>


        {/* Movies Section  */}
        <div id='movies'>
          <h1>Movies</h1>

          <div id='movie-card'>
            {
              movies.map((movie) => (
                <div key={movie._id}>
                  <img src={movie.imgUrl} alt="" />
                  <h3>{movie.title}</h3>
                  <p>Year:</p>
                  <p>{movie.year}</p>
                  <p>Genre:</p>
                  <p>{movie.genre}</p>
                  <button onClick={() => deleteMovie(movie._id)}>Delete</button>
                </div>))
            }
          </div>

        </div>

      </div>



    </div>
  );
}

export default App;
