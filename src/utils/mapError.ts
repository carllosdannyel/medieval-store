import { IMapError } from '../interfaces/mapError';

const statusHttp: IMapError = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

const mapError = (type: string) => statusHttp[type] || 500;

export default mapError;