function verificarUsuario(usuario) {
}

verificarUsuario("admin");
 .then(res => console.log(res))
 .catch(err => console.error(err));

verificarUsuario("Vane")
 .then(res => console.log(res))
 .catch(err => console.error(err));