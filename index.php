<!doctype html>
<html>
    <head>
        <title>Ajax</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link rel="icon" href="data:," />
    </head>
    <body>

        <div class="container">
            <div class="row">
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#home">Users</a></li>
                    <li><a data-toggle="tab" href="#menu1">Cadastrar</a></li>
                    <li><a data-toggle="tab" href="#menu2">Buscar</a></li>
                </ul>

                <div class="tab-content">
                   
                    <div id="home" class="tab-pane fade in active">
                       
                        <br>
                        <button id="btn-users" class="btn btn-default">Listar users</button>
                        <div id="div-users"></div>
                        <hr>
                    </div>
                    <div id="menu1" class="tab-pane fade">
                        <br>
                        
                        <form action="" method="POST" role="form" id="form-cadastrar" enctype="multipart/form-data">
                            
                            <div  class="alert" id="div-create"></div>
                            <div class="form-group">
                                
                                <label>Nome</label>
                                <input type="text" class="form-control" name="name" placeholder="Nome">
                            </div>
                            <div class="form-group">
                                
                                <label>Email</label>
                                <input type="text" class="form-control" name="email" placeholder="Email">
                            </div>
                            <button type="submit" class="btn btn-primary" id="btn-cadastrar">Cadastrar</button>
                            
                            <hr>
                        </form>
                    </div>
                    <div id="menu2" class="tab-pane fade">
                        <div>
                            <br>
                            <form action="" id="form-buscar">
                                <input type="text" name="name">
                                <button type="submit">Buscar</button>
                                <hr>
                                
                                <div class="alert" id="div-buscar"></div>
                                <hr>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <script src="public/assets/js/xhttp.js"></script>
        <script src="public/assets/js/user.js"></script>
</html>
