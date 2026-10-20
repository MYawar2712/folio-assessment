import { describe, expect, it } from 'vitest';
describe('Folio smoke test', () => { it('supports the document import extensions', () => { expect(/\.(txt|md)$/i.test('notes.md')).toBe(true); expect(/\.(txt|md)$/i.test('photo.png')).toBe(false); }); });
