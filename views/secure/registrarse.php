<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/bootstrap.css">
</head>

<body>
    <div class="container">
        <form>
            <div class="form-group">
                <div class="row">
                    <h1>REGISTRATE</h1>
                    <div class="col-md-6">
                        <div class="mb-10px">
                            <label for="">Usuario:</label>
                            <input type="text" class="form-control" id="IdUser" placeholder="Nombres">
                            </input>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-10px">
                            <label for="">Clave:</label>
                            <input type="text" class="form-control" id="IdPass" placeholder="Nombres">
                            </input>

                        </div>
                    </div><br>
                    <div class="text-center">
                        <br>
                        <a type="button" class="btn btn-danger" href="index.php?c=Index&a=registrate"> REGISTRARSE</a>
                        <a type="button" class="btn btn-primary" onclick="Login();">INGRESAR</a>
                    </div>
                </div>
            </div>
    </div>
    </form>
    </div>

</body>

</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src=" assets/js/bootstrap.js"></script>
<script src=" assets/js/login.js"></script>