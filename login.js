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
ingresar = ingresar ? alert ('bienvenido') //window.location.href = "https://abic26.github.io/Cursos-Sena-2023/"//
: alert ('Datos invalidos')
}

// crear perfil

class nuevoUsuario {
    constructor ( name, password){
        this._name = name
        this._password = password
    }
    get name(){
        return this._name
    }
    set name(name){
        this._name = name
    }
    get password(){
        return this._password
    }
    set password(password){
        this._password = password
    }
}

function crearPerfil() {
    window.location.href = "crear.html";
  }
  function volver() {
    window.location.href = "index.html";
  }

function crearPer(){
    userx = document.getElementById('names').value
    passwordx = document.getElementById('passwords').value
    setLocalStoragePerfil(userx, passwordx)

    if(userx !== '' && passwordx !== ''){
        Usuarios.push(new nuevoUsuario(userx, passwordx))
        alert ('se guardo su usuario')

    }
}
function setLocalStoragePerfil(userx, passwordx){
    alert ('se guardo en la base de datos')
    let nuevo = new nuevoUsuario(userx, passwordx)
    Usuarios.push(nuevo)
    localStorage.setItem("Usuarios", JSON.stringify(Usuarios))

}
