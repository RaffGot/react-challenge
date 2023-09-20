import { useState } from "react";
import { useFetchData } from "../../utils/hooks/useFetchData";
import Pagination from "../../components/Pagination";
import { endPoint } from "../../utils/constant";
import "./home.style.css";
import PokemonItem from "../../components/pokemonItem";
import LoadingCard from "../../components/loadingCard/loadingCard";
import Layout from "../../components/Layout/Layout";
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useFetchData(endPoint.POKEMON, currentPage);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(data?.count / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout title="Pokémon List">
      <PokemonItem data={data?.results} error={error} loading={loading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        loading={loading}
        error={error}
      />
    </Layout>
  );
};

export default Home;
