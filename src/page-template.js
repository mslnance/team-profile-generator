module.exports = templateData => {
    // destructure page data by section
    const { manager, enginer, intern } = templateData;
  
    return `
<!DOCTYPE html>
<html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"> -->
      <!-- <link rel="stylesheet" href="style.css"> -->
    </head>
  
    <body>
        <nav class="navbar text-light bg-danger justify-content-center">
            <span class="navbar-brand mb-0 h1">My Team</span>
        </nav>
      <main class="container my-5">
        <div class="container">
            <div class="row">
            ***********************************************************************************************            
                <div class="col-sm">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header text-white bg-primary">
                            <h5>Fullname</h5>
                            <h5>Title</h5>
                        </div> 
                        <div class="card-body">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                          </ul>
                        </div>
                    </div>
                </div>
            ***********************************************************************************************        
                <div class="col-sm">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header text-white bg-primary">
                            <h5>Fullname</h5>
                            <h5>Title</h5>
                        </div> 
                        <div class="card-body">
                          
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                          </ul>
                        </div>
                    </div>
                </div>  
                <div class="col-sm">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header text-white bg-primary">
                            <h5>Fullname</h5>
                            <h5>Title</h5>
                        </div> 
                        <div class="card-body">
                          
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                          </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header text-white bg-primary">
                            <h5>Fullname</h5>
                            <h5>Title</h5>
                        </div> 
                        <div class="card-body">
                          
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                          </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header text-white bg-primary">
                            <h5>Fullname</h5>
                            <h5>Title</h5>
                        </div> 
                        <div class="card-body">
                          
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </main>
      
    <!-- <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!-- <script src="./assets/js/script.js"></script> -->
    </body>
</html>`
}