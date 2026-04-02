import { Obra, Noticia, Cliente } from '../data/mock';

export const api = {
  getObras: async (): Promise<Obra[]> => {
    const response = await fetch('/api/obras');
    if (!response.ok) throw new Error('Failed to fetch obras');
    return response.json();
  },
  getNoticias: async (): Promise<Noticia[]> => {
    const response = await fetch('/api/noticias');
    if (!response.ok) throw new Error('Failed to fetch noticias');
    return response.json();
  },
  getClientes: async (): Promise<Cliente[]> => {
    const response = await fetch('/api/clientes');
    if (!response.ok) throw new Error('Failed to fetch clientes');
    return response.json();
  }
};
