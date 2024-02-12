import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Person } from '../types';

export const PersonLink = ({ person }: { person: Person }) => {
  return (
    <Link
      to={`/people${window.location.pathname}${person.slug}`}
      className={cn({
        'has-text-danger': person.sex === 'f',
      })}
    >
      {person.name}
    </Link>
  );
};
