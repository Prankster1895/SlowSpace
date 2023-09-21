<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="index.css">
</head>

<body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SlowSpace</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index2.php">Home</a>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Resources
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="article.html">Articles</a></li>
              <li><a class="dropdown-item" href="#">Survey</a></li>
              <li><a class="dropdown-item" href="research.html">Research</a></li>

            </ul>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Specialized Tests
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Studies</a></li>
              <li><a class="dropdown-item" href="#">Career</a></li>
              <li><a class="dropdown-item" href="#">Personal Growth</a></li>

            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">logout</a>
          </li>
          
        
      </div>
        </ul>
        <form class="d-flex" role="search">
        
        
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
          <?php session_start(); 
        echo "welcome  ".$_SESSION['username'];?></div>

        </form>
        
    </div>
    
    </div>
  </nav>
  <!-- Button trigger modal -->


  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Self-Assesment</h5>
          <p class="card-text">Slowspace provides you the platform to understand your learning capacity.All you need to do is answer simple questions by clickong on the button below</p>
          <a href="Test.html" class="btn btn-primary">Take Test</a>
          <div class="col-auto d-none d-lg-block">
            <img class="bd-placeholder-img" width="200" height="250" src="index1.jpg">
        </div>
        </div>
        
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">View your results and unlock your true potential.</h5>
          
          <a href="#" class="btn btn-primary">View Results</a>
          <p class="card-text">Even if you have been identified as a slow learner, don't worry. Slowspace has your back.Here we provide tailored content based on your needs.</p>
          <div class="col-auto d-none d-lg-block">
            <img class="bd-placeholder-img" width="200" height="250" src="slow1.webp">
        </div>
        </div>
      </div>
    </div>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>
</body>
<script src="index.js"></script>

</html>
