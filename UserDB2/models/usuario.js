export class Usuario {
  constructor(id, nombre, fechaCreacion) {
    this.id = id;
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion || new Date().toISOString();
  }

  static validar(nombre) {
    if (!nombre || nombre.trim().length === 0) {
      throw new Error('El nombre no puede estar vacío, llenalo');
    }
    if (nombre.length > 50) {
      throw new Error('El nombre no puede tener más de 50 caracteres por favor');
    }
    return true;
  }
}
