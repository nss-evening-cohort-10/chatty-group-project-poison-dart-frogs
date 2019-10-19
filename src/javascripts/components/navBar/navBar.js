import utilities from '../../helpers/utilities';
import 'bootstrap';

const loadNavbar = () => {
  const domString = `
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Chatty</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" id="new-message" type="text" placeholder="Enter Message">
          </form>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              More Settings
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              &nbsp;<input type="checkbox" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; Dark Mode</input>
              <br>
              &nbsp;<input type="checkbox" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; Large Text</input>
              <div class="dropdown-divider"></div>
              &nbsp;<input type="checkbox" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; More Themes</input>
            </div>
      </div>
    </nav>
  `;
  utilities.printToDom('navBar', domString);
};

export default { loadNavbar };
