import MovieCard from "./MovieCard";


const MovieList = ({ title, movies }) => {

return (
    <div>
        <div>
            <h2 className="text-3xl py-4  text-white">{title}</h2>
            <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>
        
    </div>
); 

}

export default MovieList;