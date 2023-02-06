import ArtistTable from "@/components/ArtistTable";
import Head from "next/head";
import { FC, useState, useEffect, FormEvent } from "react";
import { Artist } from "../../api/artists";
import artistsFindAll from "../../api/artists/findAll";

interface Props {}

const Create: FC<Props> = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Acteurs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="overflow-x-auto sm:container mt-2">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-rows-1 gap-24 text-center">
            <div>
              <label htmlFor="first_name">Nom:</label>
              <input
                className="input input-bordered w-full max-w-xs m-2"
                type="text"
                id="first_name"
                name="first_name"
                minLength={1}
                required
              />
            </div>

            <div>
              <label htmlFor="last_name">Prénom:</label>
              <input
                className="input input-bordered w-full max-w-xs m-2"
                type="text"
                id="last_name"
                name="last_name"
                required
              />
            </div>

            <div>
              <label htmlFor="birth_date">Année de naissance:</label>
              <input
                className="input input-bordered w-full max-w-xs m-2"
                type="number"
                id="birth_date"
                name="birth_date"
                required
              />
            </div>

            <div>
              <button value="Submit" className="btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Create;
