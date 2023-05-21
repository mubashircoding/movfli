// import Link from 'next/link';
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css"
const Movie = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a314d84020mshba5305db5f522d1p13bee9jsn8e0c416d0e74",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data.jawSummary);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
          {main_data.map((curElem) => {
            return <MovieCard key={curElem.id} {...curElem} />;
          })}
          
          </div>
          </div>
      </section>
    </>
  );
};

export default Movie;
