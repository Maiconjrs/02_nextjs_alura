// API ROUTES -- é possivel criar uma pasta para gerenciar APIs ASSIM TENDO UMA ROTA DE API
import type { NextApiRequest, NextApiResponse } from 'next';

export type ResponseData = {
  nome: string;
};

export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  res.status(200).json({ nome: 'maicon rauber'});
};
