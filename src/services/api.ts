import { Obra, Noticia, Cliente, OBRAS, NOTICIAS, CLIENTES } from '../data/mock';

export const api = {
  getObras: async (): Promise<Obra[]> => {
    return OBRAS;
  },
  getNoticias: async (): Promise<Noticia[]> => {
    return NOTICIAS;
  },
  getClientes: async (): Promise<Cliente[]> => {
    return CLIENTES;
  }
};
