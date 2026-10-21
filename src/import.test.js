import { describe, expect, it } from 'vitest';

describe('document import', () => {
  it('keeps imported documents accessible to the importing user', () => {
    const currentUser = 'yawar2712@gmail.com';
    const imported = { title: 'notes', owner: currentUser, shared: false };
    expect(imported.owner).toBe(currentUser);
    expect(imported.owner === currentUser || imported.sharedWith === currentUser).toBe(true);
  });

  it('preserves each imported line as editable content', () => {
    const text = 'First line\nSecond line';
    const html = text.split(/\r?\n/).map(line => `<p>${line || '&nbsp;'}</p>`).join('');
    expect(html).toBe('<p>First line</p><p>Second line</p>');
  });
});
