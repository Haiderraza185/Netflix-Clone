import { useSelector } from "react-redux";
import SeriesCard  from "./SeriesCard";

  const NetflixSeries = () =>{

    const SeriesList = useSelector((state) => state.series.list);

    return(
      <ul className="grid grid-three--cols">
        {/* CurElem is our Props */}
        {SeriesList.map((curElem)=>(
          <SeriesCard key={curElem.id} curElem={curElem} />
        ))}
      </ul>
    )
  }

export default NetflixSeries;