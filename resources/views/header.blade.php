<nav class="navbar navbar-expand-lg navbar-light bg-light  fixed-top">
    <div class="container">
        <a class="navbar-brand" href="{{ route('home') }}">
            <img class="img-logo" style="height: 80px " src=" {{ asset('src/logo/logo-png.png') }}" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style="flex-grow: initial">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('home') }}">Inicio</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Nosotros
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Sobre Nosotros</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Misión</a>
                        <a class="dropdown-item" href="#">Visión</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Términos y Condiciones</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href=" {{ route('servis') }}" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Servicios
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Servicio 1</a>
                        <a class="dropdown-item" href="#">Servicio 2</a>
                        <a class="dropdown-item" href="#">Servicio 3</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('contact') }}">Contáctanos</a>
                </li>
                
            </ul>
            {{-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> --}}
        </div>
    </div>

</nav>
{{-- <div style="margin-bottom: 80px">

</div> --}}
