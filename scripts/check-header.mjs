import assert from 'node:assert/strict';
import { shouldHideHeader } from '../src/components/shared/headerScroll.js';

assert.equal(shouldHideHeader(150, 100), true);
assert.equal(shouldHideHeader(100, 150), false);
assert.equal(shouldHideHeader(40, 0), false);
assert.equal(shouldHideHeader(0, 100), false);
console.log('Header hides scrolling down, reappears scrolling up, and stays visible near the top.');
