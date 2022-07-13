import styles from './Paginator.module.css';

const Paginator = props => {

  const pageCount = Math.ceil(props.totalItemCount / props.pageSize);
  const portionLeft = Math.floor((props.currentPage - 1)  / 10) * 10 + 1;
  const portionRight = Math.ceil(props.currentPage / 10) * 10;
  const portion = Array(portionRight - portionLeft + 1).fill().map((_, idx) => portionLeft + idx);

  return (
    <div>
      <button key='start' onClick={() => props.onChangePage(1)} disabled={props.currentPage === 1}>Start</button>
      <button onClick={() => props.onChangePage(props.currentPage - 10)} disabled={props.currentPage - 10 < 1}>{'\u261A'}</button>
      {
        portion
          .map(page => 
            <button
              key={page}
              className={props.currentPage === page ? styles['selected-page'] : ''}
              onClick={() => props.onChangePage(page)}
            >{page}</button>
          )
      }
      <button onClick={() => props.onChangePage(props.currentPage + 10)} disabled={props.currentPage + 10 > pageCount}>{'\u261B'}</button>
      <button key='end' onClick={() => {props.onChangePage(pageCount)}} disabled={props.currentPage === pageCount}>End</button>
    </div>
  );
};

export default Paginator;