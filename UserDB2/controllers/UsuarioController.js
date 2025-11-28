import { Usuario } from "../models/usuario";
import DatabaseService from "../database/DatabaseService";

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    async initialize() {
        await DatabaseService.initialize();
    }

    async ObtenerUsuarios() {
        const data = await DatabaseService.getAll();
        return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
    }

    async crearUsuario(nombre) {
        Usuario.validar(nombre);
        const nuevoUsuario = await DatabaseService.add(nombre.trim());
        this.notifyListeners();
        return new Usuario(nuevoUsuario.id, nuevoUsuario.nombre, nuevoUsuario.fecha_creacion);
    }

    async actualizarUsuario(id, nuevoNombre) {
        await DatabaseService.update(id, nuevoNombre.trim());
        this.notifyListeners();
    }

   async eliminarUsuario(id) {
    await DatabaseService.delete(Number(id)); 
    this.notifyListeners(); 
}


    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}
