import { useLocation } from "react-router-dom";
import { useFetchData } from "../../utils/hooks/useFetchData";
import { endPoint } from "../../utils/constant";
import "../Home/home.style.css";
import TypesItem from "../../components/TypesItem/TypesItem";
import Layout from "../../components/Layout/Layout";

const Types = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const { data, loading, error } = useFetchData(`${endPoint.TYPES}/${name}`);
  return (
    <Layout title={`Pokemon belong to ${name} type`}>
      <TypesItem data={data?.pokemon} error={error} loading={loading} />
    </Layout>
  );
};

export default Types;
