import "./Footer.style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>&copy; {new Date().getFullYear()} React Coding Challenge</div>
      <div>Made by : Abderrafii Goutaib</div>
    </footer>
  );
};

export default Footer;
