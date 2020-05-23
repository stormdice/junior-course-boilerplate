import React from 'react';
import s from './Pagination.module.css';

const Pagination = () => {
  return (
    <ul className={s.PaginationList}>
      <li className={s.PaginationItem}>
        <a className={`${s.PaginationLink} ${s.PaginationLinkPrev}`} href="#">
          Назад
        </a>
      </li>
      <li className={s.PaginationItem}>
        <a className={`${s.PaginationLink} ${s.PaginationLinkActive}`} href="#">
          1
        </a>
      </li>
      <li className={s.PaginationItem}>
        <a className={s.PaginationLink} href="#">
          2
        </a>
      </li>
      <li className={s.PaginationItem}>
        <a className={s.PaginationLink} href="#">
          3
        </a>
      </li>
      <li className={s.PaginationItem}>
        <a className={s.PaginationLink} href="#">
          4
        </a>
      </li>
      <li className={s.PaginationItem}>
        <a className={s.PaginationLink} href="#">
          5
        </a>
      </li>
      <li className={s.PaginationItem}>
        <a className={s.PaginationLink} href="#">
          ...
        </a>
      </li>
      <li className={s.PaginationItem}>
        <a className={s.PaginationLink} href="#">
          13
        </a>
      </li>
      <li className={s.PaginationItem}>
        <a className={`${s.PaginationLink} ${s.PaginationLinkNext}`} href="#">
          Вперед
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
