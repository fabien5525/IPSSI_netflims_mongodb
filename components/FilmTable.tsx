import { Film } from "@/pages/api/films";
import Link from "next/link";
import { FC } from "react";

interface Props {
  films: Film[];
}

const FilmTable: FC<Props> = (props) => {
  return (
    <div className="overflow-x-auto container mx-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Année</th>
            <th>Genre</th>
            <th>Pays</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.films.map((film, index) => {
            return (
              <>
                <tr key={`film-${index}`}>
                  <td>
                    <Link href={`/films/${film._id}`}>{film.title}</Link>
                  </td>
                  <td>{film.year}</td>
                  <td>{film.genre}</td>
                  <td>{film.country}</td>
                  <td></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FilmTable;
