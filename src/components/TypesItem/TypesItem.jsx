import withDataFetching from "../WrappedDataFetch/WrappedDataFetch";
import { Link } from "react-router-dom";
import { paths } from "../../utils/routes/routes";

const TypesItem = ({ dataItem }) => {
  return (
    <Link
      key={dataItem?.pokemon?.name}
      to={`${paths.VIEW_POKEMON}?name=${dataItem?.pokemon?.name}`}
    >
      <div className="card">
        <h2
          className="title"
          style={{ textAlign: "center", textDecoration: "none" }}
        >
          {dataItem?.pokemon?.name}
        </h2>
      </div>
    </Link>
  );
};

export default withDataFetching(TypesItem);
