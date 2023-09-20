import LoadingCard from "../loadingCard/loadingCard";

const withDataFetching = (WrappedComponent) => {
  return function WithDataFetching({ data, error, loading, ...props }) {
    if (loading) {
      return <LoadingCard />;
    }

    if (error) {
      return (
        <h2
          style={{ textAlign: "center", color: "red", textDecoration: "none" }}
        >
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
      <div className="cardList">
        {data.map((item, key) => (
          <WrappedComponent key={key} dataItem={item} {...props} />
        ))}
      </div>
    );
  };
};

export default withDataFetching;
