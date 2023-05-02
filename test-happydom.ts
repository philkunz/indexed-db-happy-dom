console.log('======================');
console.log('== JUST HAPPY-DOM ====');
console.log('======================');

import { GlobalRegistrator } from '@happy-dom/global-registrator';
GlobalRegistrator.register();
window.location.href = 'http://localhost';

console.log('-> here is globalThis.document:');
console.log(globalThis.document);

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log('== END JUST HAPPY-DOM ====');
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^');
process.exit(0);
