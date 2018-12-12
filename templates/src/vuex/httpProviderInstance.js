import { LoopbackHttpTransport } from '@oneflow/ofs-vuex-crud';

const providerInstance = new LoopbackHttpTransport({ apiBase: 'http://localhost:3000' });

export default providerInstance;
