import PropTypes from "prop-types"

function DetailMovie({coverImg, title, genres, runtime}){
    return <div>
        <img src={coverImg}/>
        <h2>
            {title}
        </h2>
        <span>{runtime}</span>
        <ul>{genres.map(g=>(<li key={g}>{g}</li>))}</ul>
    </div>;
}

DetailMovie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default DetailMovie;