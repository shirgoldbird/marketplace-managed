import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <section className="lawyer-speak">
        <p><em>Marketplace Managed</em> is developed by <em>Sheva Goldberg</em> and <em>Josh Dean</em></p>
        <p><em>&copy; {year} BronyCon.</em> <em>BronyCon</em> is a registered trademark of Lunar Solis Corp</p>
      </section>
    </footer>
  );
}

export default Footer;