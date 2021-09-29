import axios from "axios";

import { addDigimon } from "./action";

const addDigimonThunk = (digimon, setError) => (dispatch) => {
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((response) =>
      dispatch(
        addDigimon(response.data.filter((digi) => digi.name === digimon))
      )
    );
};
export default addDigimonThunk;
// dispatch(addDigimon(response.data))
