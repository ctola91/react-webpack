import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const List = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetch("../../assets/data.json");
      const moviesJSON = await movies.json();

      if (moviesJSON) {
        setData(moviesJSON);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="row">
      {data.map((movie) => (
        <div className="col-sm-2" key={movie.id}>
          <Card movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default List;
