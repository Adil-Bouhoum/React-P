

function Navbar() {
    return (
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#home">Home</a></li>
          <li style={styles.navItem}><a href="#about">About</a></li>
          <li style={styles.navItem}><a href="#services">Services</a></li>
          <li style={styles.navItem}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
const styles = {
  navList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
    padding: 0,
  },
  navItem: {
    textDecoration: 'none',
  },
};



  export default Navbar;