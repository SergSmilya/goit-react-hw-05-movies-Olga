import { APICast } from 'Utils/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Cast() {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    APICast(id)
      .then(({ data }) => setCasts(data.cast))
      .catch(error => toast.error('Something goes wrong! Please, try again!'));
  }, [id]);

  return (
    <ul>
      {casts.map(
        ({ id, character, name, profile_path }) =>
          profile_path && (
            <li key={id}>
              <img
                alt={name}
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              />

              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          )
      )}
    </ul>
  );
}
