import seriesData from "../api/seriesData.json";
import SeriesCard  from "./SeriesCard";

  const NetflixSeries = () =>{
    return(
      <ul className="grid grid-three--cols">
        {/* CurElem is our Props */}
        {seriesData.map((curElem)=>(
          <SeriesCard key={curElem.id} curElem={curElem}/>
        ))}
      </ul>
    )
  }
export default NetflixSeries;