/* ===================================================================
   Utility helpers – must load before any component that renders HTML
   =================================================================== */

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* Escape everything, then re-allow a small whitelist of inline
   formatting tags so hand-authored copy in data/*.js can use them.
   Allowed: <strong>, <em>, <u>, <br>. Anything else stays escaped,
   so the XSS safety net is preserved. */
function formatText(str) {
  if (!str) return '';
  return escapeHtml(str)
    .replace(/&lt;(\/?)(strong|em|u)&gt;/g, '<$1$2>')
    .replace(/&lt;br\s*\/?&gt;/g, '<br>');
}
