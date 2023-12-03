export function createDiv(id?: string) {
  const elExist = document.getElementById(id || '');
  if (elExist) return;
  const el = document.createElement('div');
  if (id) el.id = id;
  document.body.appendChild(el);
  return el;
}

export function removeDiv(val: HTMLBaseElement | string | undefined) {
  if (!val) return;
  const el = typeof val === 'string' ? document.getElementById(val) : val;
  if (!el) return;
  document.body.removeChild(el);
}
