import { paths } from "../../utils/routes/routes";
import { Link } from "react-router-dom";
import "../../pages/Home/home.style.css";
import withDataFetching from "../WrappedDataFetch/WrappedDataFetch";

const PokemonItem = ({ dataItem }) => (
  <Link to={`${paths.VIEW_POKEMON}?name=${dataItem.name}`}>
    <div className="card">
      <h2
        className="title"
        style={{ textAlign: "center", textDecoration: "none" }}
      >
        {dataItem.name}
      </h2>
    </div>
  </Link>
);

export default withDataFetching(PokemonItem);
