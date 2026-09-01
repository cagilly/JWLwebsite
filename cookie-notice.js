/* JWL — cookie notice.
   Essential storage only until the visitor accepts. Accept and Reject are
   given equal weight, as required: a reject must be no harder than an accept.
   When analytics is added later, load it inside the 'jwl-consent' listener
   below rather than in the page, so it never runs without consent. */
(function () {
  var KEY = 'jwl-cookie-choice';
  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}

  window.JWLConsent = {
    analytics: choice === 'accepted',
    reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); }
  };

  if (choice) { fire(); return; }

  function fire() {
    document.dispatchEvent(new CustomEvent('jwl-consent', {
      detail: { analytics: window.JWLConsent.analytics }
    }));
  }

  var css = [
    '.jwl-ck{position:fixed;left:0;right:0;bottom:0;z-index:800;background:var(--ink-navy);color:var(--paper);',
      'border-top:2.5px solid var(--brass);transform:translateY(100%);transition:transform .34s cubic-bezier(.4,0,.2,1)}',
    '.jwl-ck.on{transform:none}',
    '.jwl-ck-in{max-width:1200px;margin:0 auto;padding:20px 40px;display:flex;gap:32px;align-items:center}',
    '.jwl-ck-tx{flex:1;min-width:0}',
    '.jwl-ck-tx p{margin:0;font:400 .875rem/1.55 var(--font-grotesque);color:var(--text-inverse-muted);max-width:70ch}',
    '.jwl-ck-tx b{display:block;font:600 1rem/1.3 var(--font-serif);color:var(--paper);margin-bottom:6px}',
    '.jwl-ck-tx details{margin-top:10px}',
    '.jwl-ck-tx summary{font-size:.8125rem;color:var(--brass);cursor:pointer;list-style:none;display:inline-flex;gap:6px;align-items:center;padding:4px 0;min-height:32px}',
    '.jwl-ck-tx summary::-webkit-details-marker{display:none}',
    '.jwl-ck-tx summary::before{content:"+"}',
    '.jwl-ck-tx details[open] summary::before{content:"\\2013"}',
    '.jwl-ck-tx dl{margin:8px 0 0;font:400 .8125rem/1.5 var(--font-grotesque);color:var(--text-inverse-muted);max-width:70ch}',
    '.jwl-ck-tx dt{color:var(--paper);font-weight:600;margin-top:8px}',
    '.jwl-ck-tx dd{margin:2px 0 0}',
    '.jwl-ck-bt{display:flex;gap:12px;flex:none}',
    '.jwl-ck-bt button{font:600 .875rem/1 var(--font-grotesque);padding:13px 22px;cursor:pointer;border-radius:0;min-height:46px;',
      'transition:background .18s,color .18s}',
    '.jwl-ck-bt .ok{background:var(--brass);color:var(--ink-navy);border:1px solid var(--brass)}',
    '.jwl-ck-bt .ok:hover{background:var(--paper);border-color:var(--paper)}',
    '.jwl-ck-bt .no{background:transparent;color:var(--paper);border:1px solid var(--hairline-on-ink)}',
    '.jwl-ck-bt .no:hover{border-color:var(--paper)}',
    '@media (max-width:820px){.jwl-ck-in{flex-direction:column;align-items:stretch;gap:18px;padding:20px}',
      '.jwl-ck-bt button{flex:1}}',
    '@media (prefers-reduced-motion:reduce){.jwl-ck{transition:none}}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.className = 'jwl-ck';
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', 'Cookie choices');
  bar.innerHTML =
    '<div class="jwl-ck-in">' +
      '<div class="jwl-ck-tx">' +
        '<b>Cookies on this site</b>' +
        '<p>We use a small amount of storage to make the site work. We would also like to measure ' +
        'which pages people find useful, but only if you are happy with that. You can decline and ' +
        'everything will work exactly as it does now.</p>' +
        '<details><summary>What we use</summary><dl>' +
          '<dt>Essential</dt><dd>Remembers your choice here, and keeps a form you have started from ' +
          'being lost. Always on, and never used to identify you.</dd>' +
          '<dt>Measurement</dt><dd>Anonymous counts of which pages are read and which enquiries begin. ' +
          'Only set if you accept.</dd>' +
        '</dl></details>' +
      '</div>' +
      '<div class="jwl-ck-bt">' +
        '<button type="button" class="no">Decline</button>' +
        '<button type="button" class="ok">Accept</button>' +
      '</div>' +
    '</div>';

  function decide(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    window.JWLConsent.analytics = value === 'accepted';
    bar.classList.remove('on');
    setTimeout(function () { bar.remove(); }, 360);
    fire();
  }

  function mount() {
    document.body.appendChild(bar);
    bar.querySelector('.ok').addEventListener('click', function () { decide('accepted'); });
    bar.querySelector('.no').addEventListener('click', function () { decide('declined'); });
    requestAnimationFrame(function () { bar.classList.add('on'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else { mount(); }
})();
