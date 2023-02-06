import ArtistTable from "@/components/ArtistTable";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Artist } from "../api/artists";
import artistsFindAll from "../api/artists/findAll";

export default function Index() {
  const [allArtists, setAllArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const serverSidePropsRes = async () => {
      const res: { data: Artist[] } = await artistsFindAll();
      setAllArtists(res.data);
    };
    serverSidePropsRes();
  }, []);

  return (
    <>
      <Head>
        <title>Acteurs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container mx-auto mt-2">
        <div className="columns-2">
          <Search />
          <CreateButton />
        </div>
        <ArtistTable artists={allArtists} className="mt-2" />
      </main>
    </>
  );
}

const Search = () => {
  return (
    <div className="form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered w-full"
        />
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const CreateButton = () => {
  return (
    <div className="text-end">
      <Link href={"/artists/create"}>
        <button className="btn btn-active btn-neutral text-end">
          Ajouter un artiste
        </button>
      </Link>
    </div>
  );
};
