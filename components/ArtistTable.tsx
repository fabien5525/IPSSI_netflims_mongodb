import { Artist } from "@/pages/api/artists";
import Link from "next/link";
import { FC } from "react";

interface Props {
  artists: Artist[];
  className?: string;
}

const ActorTable: FC<Props> = (props) => {
  return (
    <div className={`overflow-x-auto container mx-auto ${props.className ?? ""}`}>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Année de naissance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.artists.map((artist, index) => {
            return (
              <>
                <tr key={`actor-${index}`}>
                  <td>
                    <Link href={`/acteurs/${artist._id}`}>
                      {artist.last_name}
                    </Link>
                  </td>
                  <td>{artist.first_name}</td>
                  <td>{artist.birth_date}</td>
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

export default ActorTable;
