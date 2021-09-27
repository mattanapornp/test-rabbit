import { NextApiResponse } from 'next';
import getDatabaseConnector from './injector';

const connector = getDatabaseConnector();

/**
 * HOC for the PGSQL connection
 * once the process is completed, close the connection
 */
export default function BootstrapConnectoor() {
  return (fn) => async (req: any, res: NextApiResponse) => {
    req.db = connector();
    await fn(req, res);
    await req.db.destroy();
  };
}
