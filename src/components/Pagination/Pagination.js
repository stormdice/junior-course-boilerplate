import React from 'react';
import s from './Pagination.module.css';

const Pagination = () => {
  return (
    <ul className={s.pagination}>
      <li className={s.item}>
        <a className={`${s.link} ${s.prev}`} href="#">
          Назад
        </a>
      </li>
      <li className={s.item}>
        <a className={`${s.link} ${s.active}`} href="#">
          1
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="#">
          2
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="#">
          3
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="#">
          4
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="#">
          5
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="#">
          ...
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="#">
          13
        </a>
      </li>
      <li className={s.item}>
        <a className={`${s.link} ${s.next}`} href="#">
          Вперед
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
