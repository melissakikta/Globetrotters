import '../styles/NavTabs.css';
// Passing the currentPage and handlePageChange method from our parent component (PortfolioContainer) to our child component (NavTabs)
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          <h2>Home</h2>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Exchange"
          onClick={() => handlePageChange('Exchange')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Exchange' ? 'nav-link active' : 'nav-link'}
        >
          <h2>Exchange</h2>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#BucketList"
          onClick={() => handlePageChange('BucketList')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Poland' ? 'nav-link active' : 'nav-link'}
        >
          <h2>Bucket List</h2>
        </a>
</li>

    </ul>
  );
}

export default NavTabs;
