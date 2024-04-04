const Exponent = ({ count, exponent }) => {
  return (
    <div className='exponent-counter-container'>
      <p className='exponent-label'>{`n^${exponent}`}</p>
      <p className='exponent-result'>
        {Array.from({ length: exponent }, (_, i) => count).join(' * ')} ={' '}
        <span className='total'>{count ** exponent}</span>
      </p>
    </div>
  );
};

export default Exponent;
