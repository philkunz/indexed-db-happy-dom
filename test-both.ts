console.log('======================');
console.log('== BOTH.          ====');
console.log('======================');

import { GlobalRegistrator } from '@happy-dom/global-registrator';
GlobalRegistrator.register();
window.location.href = 'http://localhost';

console.log('-> here is globalThis.document:');
console.log(globalThis.document);

import 'fake-indexeddb/auto';
console.log('-> here is globalThis.indexedDB:');
console.log(globalThis.indexedDB);

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log('== END BOTH. =============');
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^');
process.exit(0);
