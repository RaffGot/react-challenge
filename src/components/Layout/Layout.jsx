
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children, title = "welcome to React Coding Challenge" }) => {
  return (
    <div>
      <Header title={title} />
      <main style={{ paddingTop: "100px", paddingBottom: "70px" }}>
        {children}
      </main>
      <Footer />    
    </div>
  );
};

export default Layout;
