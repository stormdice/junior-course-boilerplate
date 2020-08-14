import React from 'react';
import cn from 'classnames';
import s from './Pagination.module.css';

const paginationItems = [
  {
    title: 'Назад',
    additionalClass: 'prev'
  },
  {
    title: '1'
  },
  {
    title: '2'
  },
  {
    title: '3'
  },
  {
    title: '4'
  },
  {
    title: '5'
  },
  {
    title: '...'
  },
  {
    title: '13'
  },
  {
    title: 'Вперед',
    additionalClass: 'next'
  }
];

const renderPaginationItems = () => {
  return paginationItems.map(({ title, additionalClass }) => {
    const setAdditionalClass =
      additionalClass !== undefined ? s[additionalClass] : '';

    return (
      <li className={s.item} key={title}>
        <a
          className={cn(s.link, setAdditionalClass)}
          href="https://github.com/stormdice"
        >
          {title}
        </a>
      </li>
    );
  });
};

const Pagination = () => {
  return <ul className={s.pagination}>{renderPaginationItems()}</ul>;
};

export default Pagination;
