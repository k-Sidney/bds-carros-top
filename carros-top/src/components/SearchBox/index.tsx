import './styles.css';

const SearchBox = () => {
  return (
    <div className="btn-container">
        <div className="search">
            <p>Digite sua busca</p>
        </div>
        <div>
        <button className="btn btn-search">
          <p>BUSCAR</p>
        </button>
        </div>
    </div>
  );
};

export default SearchBox;