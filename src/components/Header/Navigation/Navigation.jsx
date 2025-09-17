const Navigation = () => {
  return (
    <nav className="hidden md:flex m-auto text-sub font-asimovian text-lg gap-3">
      <a href="#Portfolio" className="hover:text-alternate transition ease-in">
        Portfolio
      </a>
      <a
        href="#Experiences"
        className="hover:text-alternate transition ease-in"
      >
        Experiences
      </a>
      <a
        href="#Certificates"
        className="hover:text-alternate transition ease-in"
      >
        Certificates
      </a>
    </nav>
  );
};
export default Navigation;
