import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import AddPizzaPage from '../Pages/AddPizzaPage'; 
import Logout from '../Logout/Logout';

const routes = {
  '/': HomePage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/add-pizza': AddPizzaPage,
  '/logout': Logout,
};

const Router = () => {
  onFrontendLoad();
  onNavBarClick();
  onHistoryChange();
};

function onNavBarClick() {
  const navbarWrapper = document.querySelector('#navbarWrapper');

  navbarWrapper.addEventListener('click', (e) => {
    e.preventDefault();
    const navBarItemClicked = e.target;
    const uri = navBarItemClicked?.dataset?.uri;
    if (uri) {
      const componentToRender = routes[uri];
      if (!componentToRender) throw Error(`The ${uri} ressource does not exist.`);

      componentToRender();
      window.history.pushState({}, '', uri);
    }
  });
}


function onHistoryChange() {
  window.addEventListener('popstate', () => {
    const uri = window.location.pathname;
    const componentToRender = routes[uri];
    componentToRender(); // Appelle la fonction correspondante au composant à rendre
  });
}

function onFrontendLoad() {

    window.addEventListener('load', () => {
  
      const uri = window.location.pathname;
  
      const componentToRender = routes[uri];
  
      if (!componentToRender) throw Error(`The ${uri} ressource does not exist.`);
  
  
      componentToRender();
  
    });
  
  }

export default Router;
