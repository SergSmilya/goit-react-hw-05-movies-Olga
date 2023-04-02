import { APIReview } from 'Utils/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Review() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    APIReview(id)
      .then(({ data }) => setReviews(data.results))
      .catch(error => toast.error('Something goes wrong! Please, try again!'));
  }, [id]);

  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}
