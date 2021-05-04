export default function Header(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
              <a className="navbar-brand mb-0 h1" href="#">Mario Tejada</a>
              <image ></image>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#home">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#education">Education</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#interests">Interests</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#skills">Skills</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    )
}