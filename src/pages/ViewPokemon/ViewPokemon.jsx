import { useLocation } from "react-router-dom";
import { useFetchData } from "../../utils/hooks/useFetchData";
import { endPoint } from "../../utils/constant";
// import "./ViewPokemon.style.css";
import ViewPokemonItem from "../../components/ViewPokemonItem/ViewPokemonItem";
import Layout from "../../components/Layout/Layout";

const Viewpokemon = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const { data, loading, error } = useFetchData(`${endPoint.POKEMON}/${name}`);
  return (
    <Layout>
      <ViewPokemonItem data={data} error={error} loading={loading} />
    </Layout>
  );
};

export default Viewpokemon;
