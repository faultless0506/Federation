import React from 'react';
import './ClubsAndPartners.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import depPhoto from '../../assets/img/logo_clear.png';

const departments = [
  {
    id: 1,
    name: 'dep 1',
    img: depPhoto,
  },
  {
    id: 2,
    name: 'dep 2',
    img: depPhoto,
  },
  {
    id: 3,
    name: 'dep 3',
    img: depPhoto,
  },
  {
    id: 4,
    name: 'dep 4',
    img: depPhoto,
  },
  {
    id: 5,
    name: 'dep 5',
    img: depPhoto,
  },
];

export default function ClubsAndPartners() {
  const clubs = useSelector((state: RootState) => state.clubs.items);

  return (
    <section className="clubs-and-partners" id="clubs-and-partners">
      {/* <h2 className='section-header'>Клубы и партнеры</h2> */}
      {/* <article className="clubs">
        <ul className="clubs__list">
          {clubs.map((club) => (
            <li key={club.id} className="clubs__list-item">
              <img src={club.img} alt={club.name} />
              <h3>{club.name}</h3>
            </li>
          ))}
        </ul>
      </article> */}
      <article className="partners">
        <ul className="partners__list">
          {departments.map((department) => (
            <li key={department.id} className="partners__list-item">
              <img src={department.img} alt={department.name} />
              <h3>{department.name}</h3>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
