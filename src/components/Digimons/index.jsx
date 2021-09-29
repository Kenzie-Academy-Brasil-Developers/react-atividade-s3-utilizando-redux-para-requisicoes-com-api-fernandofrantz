import { useSelector } from "react-redux";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  // const { input } = useSelector((input) => input);

  return (
    <>
      <div>
        <ul>
          {digimons &&
            digimons.map((digi, index) => (
              <li key={index}>
                <p>{digi.name}</p>
                <img src={digi.img} alt="" />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
export default Digimons;
