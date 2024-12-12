import { useState } from 'react';
import NavTabs from './Nav';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioF() {
  const [currentPage, setCurrentPage] = useState('Home');

  //This method is checking to see what the value of `currentPage` is. 
  //Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    // <div>
    //   {/* We are passing the currentPage from state and the function to update it */}
    //   <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    //   {/* Here we are calling the renderPage method which will return a component  */}
    //   <main className="mx-3">{renderPage()}</main>
    // </div>
    <div>
      {/* Pass the currentPage from state and the function to update it */}
      <nav className="navbar">
        <h1>My Portfolio</h1>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>
      
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>    
  );
}
