import utilities from '../../helpers/utilities';
import 'bootstrap';
import './navBar.scss';

const loadNavbar = () => {
  const domString = `
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
      <img src="src/img/ChatWorld.png" height="100" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse moreSettingsButton" id="navbarSupportedContent">
        <input onclick="this.value=''" class="form-control enterMessage" id="new-message" rows="2">
          <button class="btn btn-outline-danger my-2 my-sm-0" id="clearButton" type="submit">Clear Messages</button>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              More Settings
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              &nbsp;<input type="checkbox" href="#" class="darkThemeBox"> &nbsp;&nbsp;&nbsp;&nbsp; Dark Mode</input>
              <br>
              &nbsp;<input type="checkbox" href="#" class="largeTxtBox"> &nbsp;&nbsp;&nbsp;&nbsp; Large Text</input>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#" data-toggle="modal" data-target="#moreThemes">More Themes</a>

            </div>
      </div>
  </nav>
  <div class="modal fade" id="moreThemes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Select your colors!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div>
      <input type="color" id="background" name="background"
             value="#FFFFFF">
      <label for="background">Background Color</label>
  </div>
  <div>
      <input type="color" id="text" name="text"
              value="#FFFFFF">
      <label for="text">Message Text Color</label>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" id="apply-themes">Apply Theme</button>
      </div>
    </div>
  </div>
</div>
  `;
  utilities.printToDom('navBar', domString);
};

export default { loadNavbar };
