import { b as bootstrapLazy } from './index-356a3695.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-e8d5267c.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["network-graph",[[1,"network-graph",{"nodes":[16],"links":[16]}]]]], options);
});
