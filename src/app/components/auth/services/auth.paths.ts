import { baseUrlPath } from 'src/environments/environment';

const ROOT: string = `${baseUrlPath}/auth`;

export const AuthPaths = {
    LOGIN: `${ROOT}/login`,
    REGISTER: `${ROOT}/register`
};