import "./SearchBar.scss";
function SearchBar() {
  return (
    <div className={"SearchBar"}>
      <input className={"search"} type="text" placeholder={"Recherches ..."}/>
    </div>
  );
}

export default SearchBar;