Usuarios = [
    {
        name: 'Abic26',
        password: 1234,
    },
    
    {
        name: 'OzKr',
        password: 1234,
    },
    {
        name: 'Bicela26',
        password: 1234,
    },
]



function validar(){
user = document.getElementById('name').value
password = document.getElementById('password').value
ingresar = Usuarios.find(
function (usuario){   
return usuario.name === user && usuario.password === parseInt(password)
    })
ingresar = ingresar ? alert ('bienvenido') : alert ('Datos invalidos')
}
