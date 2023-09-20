import { Link } from "react-router-dom";
import { paths } from "../../utils/routes/routes";
import LoadingCard from "../loadingCard/loadingCard";
import "./ViewPokemonItem.style.css";

const ViewPokemonItem = ({ data, error, loading }) => {
  const { types, sprites } = data;

  if (loading) {
    return <LoadingCard />;
  }

  if (error) {
    return (
      <h2 style={{ textAlign: "center", color: "red", textDecoration: "none" }}>
        Error: {error.message}
      </h2>
    );
  }

  if (!data || (Array.isArray(data) && data.length === 0)) {
    return (
      <h2
        style={{
          textAlign: "center",
          color: "#00a6fb",
          textDecoration: "none",
        }}
      >
        No Data Found !{" "}
      </h2>
    );
  }
  return (
    <div className="container">
      <div className="card">
        <img
          src={sprites?.other["official-artwork"].front_default}
          alt="pokemon"
          loading="lazy"
          className="pokemon-img"
        />
        <div className="card-name">{data?.name}</div>{" "}
        <div className="card__details">
          <div>Types :</div>
          {types?.map((type, key) => (
            <Link key={key} to={`${paths.TYPES}?name=${type?.type?.name}`}>
              <span className="tag">{type?.type?.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewPokemonItem;
