import React from 'react';

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = new Array(pageCount).fill().map((v, idx) => (v = idx + 1));

  return (
    <nav aria-label='Page navigation'>
      <ul className='pagination'>
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
            <button onClick={() => onPageChange(page)} className='page-link'>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
