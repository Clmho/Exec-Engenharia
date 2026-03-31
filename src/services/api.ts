import { Obra, Noticia, Cliente, OBRAS, NOTICIAS, CLIENTES } from '../data/mock';

export const api = {
  getObras: async (): Promise<Obra[]> => {
    return Promise.resolve(OBRAS);
  },
  getNoticias: async (): Promise<Noticia[]> => {
    return Promise.resolve(NOTICIAS);
  },
  getClientes: async (): Promise<Cliente[]> => {
    return Promise.resolve(CLIENTES);
  }
};
