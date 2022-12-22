
import './DisneyHotstar.css';
function DisneyHotstar() {
  return (
    <div className="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"height="60px" width="70px"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">TV</a>
        </li>
        
          <li className="nav-item dropdown">
        <  a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="flase">
            Movise
          </a>
          </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="flase">
            Sports
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Criket</a></li>
            <li><a className="dropdown-item" href="#">Football</a></li>
			<li><a className="dropdown-item" href="#">chese</a></li>
			<li><a className="dropdown-item" href="#">Kabbdi</a></li>
			<li><a className="dropdown-item" href="#">Crome</a></li>
			<li><a className="dropdown-item" href="#">Kho-kho</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Disney+</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="#">Kids</a>
          </li>
      </ul>
      
      </div>
    </div>
</nav>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWPHh4btT5gCqIDvgRTtUEv4-eXsGEAzhNbKuBDJe1Q&s"height="500px" width="1200px d-xl-inline-flex me-auto mb-2 mb-lg-0"/>
<p className="latest">Latest Tranding</p>
</div>


  )
}
export default DisneyHotstar;