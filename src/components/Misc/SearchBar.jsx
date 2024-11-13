import PropTypes from "prop-types";

const SearchBar = ({placeholder}) => {
    return (
        <div className="mb-4 d-flex gap-3 align-items-center">
            <input type="text" className="form-control" placeholder={placeholder}/>
            <button type="button" className="btn btn-primary">Rechercher</button>
        </div>
    );
}

SearchBar.propTypes = {
    placeholder: PropTypes.string
}

export default SearchBar;
