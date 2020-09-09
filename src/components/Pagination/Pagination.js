import React from 'react';
import s from './Pagination.module.css';

const linkTransition = evt => {
  evt.preventDefault();

  if (evt.target.tagName !== 'A') {
    return;
  }

  window.history.pushState({}, 'page 2', '?pageNum=2');
  console.log(evt.target.href);
};

const Pagination = () => {
  return (
    <ul className={s.pagination} onClick={linkTransition}>
      <li className={s.item}>
        <a className={s.link} href="/?prevPage">
          назад
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="/?pageNum=1">
          1
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="/?pageNum=2">
          2
        </a>
      </li>
      <li className={s.item}>
        <span className={s.link}>...</span>
      </li>
      <li className={s.item}>
        <a className={s.link} href="/?nextPage">
          вперед
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
