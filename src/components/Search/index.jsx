import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonThunk from "../../store/modules/digimons/thunk";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonThunk(input, error));
    setInput("");
  };

  return (
    <>
      <div>
        <h2>Procure pelo seu digimon!</h2>
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Procure seu digimon"
          />
          <button onClick={handleSearch}>Pesquisar</button>
        </div>
      </div>
    </>
  );
};
export default Search;
