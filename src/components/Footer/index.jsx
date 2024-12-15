const Footer = () => {
  return (
    <footer className="site-footer bg-dark p-4 text-white">
      <div className="container">
        <div className="d-flex justify-content-center">
          <span >
            Copyright &copy; {new Date().getFullYear()} Elbek
           {/* <a className="text-white" href="https://t.me/ShukurovShB" target="blanck"> Shukurov Shodiyor</a>*/}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
