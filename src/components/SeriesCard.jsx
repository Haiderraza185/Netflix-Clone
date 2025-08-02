import styles from "./Netflix.module.css";
  
const SeriesCard = ({curElem}) =>{

  const {img_url,name,description,rating,cast,genre,watch_url} = curElem;
  
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  // Inline styling
  const btn_style = {
    padding : "1.2rem 2.4rem",
    border : "none",
    fontSize : "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color:"white",
    fontWeight:"bold",
    cursor:"pointer",
  };
    return(
          <li className={styles.card}>
            <div>
              <img src={img_url}
              height='40%'
              width='40%'
              alt={name}
            />
            </div>
            <div className={styles.cardcontent}>
              <h2>Name:{name}</h2>
              <h3>
                Rating: <span className={`${styles.rating} ${ratingClass}`}> {rating}</span>
              </h3>
              <p>
                <span>Summary</span>: {description}
              </p>
              <p>
                <span>Genre</span>:{genre.join(",")}
              </p>
              <p>
                <span>Cast</span>:{cast.join(",")}
              </p>
              <a href={watch_url} target="_blank">
                <button style={btn_style}>Watch Now</button>
                </a>
            </div>
          </li>
        )
}

export default SeriesCard;