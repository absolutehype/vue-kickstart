import { HttpProvider } from '@oneflow/ofs-vuex-crud';

const providerInstance = new HttpProvider({ apiBase: 'http://localhost:3000' });

export default providerInstance;
