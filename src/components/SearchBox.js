const SearchBox = (props) => {
  return (
    <input
      type="search"
      placeholder="Search robots"
      className="pa3 ba b--green bg-lightest-blue br2 mb2"
      onChange={props.searchChange}
    />
  );
};

export default SearchBox;
