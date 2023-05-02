console.log('===========================');
console.log('== JUST fake-indexeddb ====');
console.log('===========================');

import 'fake-indexeddb/auto';
console.log('-> here is globalThis.indexedDB:');
console.log(globalThis.indexedDB);

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log('== END JUST fake-indexeddb ====');
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
