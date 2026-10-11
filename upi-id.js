/**
 * UPI ID (VPA) validator: checks the format and tells you which app/bank a handle belongs to.
 * Offline – it cannot tell whether the UPI ID exists; your UPI app shows the name before you pay.
 * MIT licence.
 */
'use strict';
var HANDLES = typeof require !== 'undefined' ? require('./handles.json') : window.UPI_HANDLES;
var RE = /^[a-zA-Z0-9][a-zA-Z0-9.\-_]{1,255}@[a-zA-Z][a-zA-Z0-9]{1,63}$/;

function validateUpiId(input) {
  var id = String(input || '').trim();
  var res = { upiId: id, valid: RE.test(id), errors: [] };
  var at = id.lastIndexOf('@');
  if (at < 0) { res.errors.push('A UPI ID has an @, like name@okhdfcbank'); res.valid = false; return res; }
  res.name = id.slice(0, at);
  res.handle = id.slice(at + 1).toLowerCase();
  if (res.name.length < 2) res.errors.push('The part before @ is too short');
  if (!/^[a-zA-Z0-9.\-_]+$/.test(res.name)) res.errors.push('Only letters, digits, dot, hyphen and underscore before @');
  if (!/^[a-zA-Z][a-zA-Z0-9]+$/.test(res.handle)) res.errors.push('The handle after @ has letters and digits only');
  var h = HANDLES[res.handle];
  res.app = h ? h.app : null;
  res.bank = h ? h.bank : null;
  res.knownHandle = !!h;
  if (/^\d{10}$/.test(res.name)) res.looksLikeMobile = true;
  res.valid = res.valid && res.errors.length === 0;
  return res;
}

if (typeof module !== 'undefined') module.exports = { validateUpiId: validateUpiId, HANDLES: HANDLES };
