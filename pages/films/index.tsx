import FilmTable from "@/components/FilmTable";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Film } from "../api/films";
import filmsFindAll from "../api/films/findAll";

export default function Index() {
  const [allFilms, setAllFilms] = useState<Film[]>([]);

  useEffect(() => {
    const serverSidePropsRes = async () => {
      const res: { data: Film[] } = await filmsFindAll();
      setAllFilms(res.data);
    };
    serverSidePropsRes();
  }, []);

  return (
    <>
      <Head>
        <title>Films</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <FilmTable films={allFilms} />
      </main>
    </>
  );
}
