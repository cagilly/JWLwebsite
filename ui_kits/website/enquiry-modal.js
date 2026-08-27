/* JWL — Request a Valuation modal.
   Intercepts "Request a Valuation" links and opens the enquiry form over the page.
   Set data-enquiry-purpose on <body> to preselect the valuation type.
   Set window.JWL_FORM_KEY (or edit ACCESS_KEY) to the Web3Forms access key. */
(function () {
  var KEYS = (window.JWL_FORM_KEYS && window.JWL_FORM_KEYS.length)
    ? window.JWL_FORM_KEYS
    : [window.JWL_FORM_KEY || 'REPLACE-WITH-WEB3FORMS-ACCESS-KEY'];
  var PURPOSES = [
    'Property valuation (general)', 'Bank or credit union', 'Probate',
    'Family law / separation', 'Fair Deal Scheme', 'Local Property Tax (LPT)',
    'Local authority loan', 'Historic / retrospective', 'Blue Book / EVS',
    'Mortgage switcher', 'Rental / market rent', 'Loan to value (LTV)',
    'Not sure — please advise'
  ];

  var css = [
    '.jwl-veil{position:fixed;inset:0;z-index:900;background:rgba(11,26,45,.55);opacity:0;pointer-events:none;transition:opacity .28s cubic-bezier(.4,0,.2,1)}',
    '.jwl-veil.on{opacity:1;pointer-events:auto}',
    '.jwl-modal{position:fixed;z-index:901;inset:0;display:flex;align-items:flex-start;justify-content:center;padding:var(--space-7) var(--space-5);overflow:auto;pointer-events:none}',
    '.jwl-modal.on{pointer-events:auto}',
    '.jwl-dlg{background:var(--paper);width:100%;max-width:720px;padding:var(--space-7);position:relative;opacity:0;transform:translateY(14px);transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 60px rgba(11,26,45,.28)}',
    '.jwl-modal.on .jwl-dlg{opacity:1;transform:none}',
    '.jwl-x{position:absolute;top:var(--space-5);right:var(--space-5);background:none;border:0;cursor:pointer;font:400 1.6rem/1 var(--font-grotesque);color:var(--charcoal-60);padding:4px 8px}',
    '.jwl-x:hover{color:var(--ink-navy)}',
    '.jwl-head{display:flex;flex-direction:column;gap:var(--space-3);margin-bottom:var(--space-5);padding-right:var(--space-7)}',
    '.jwl-head .eyebrow{font:var(--text-eyebrow);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--brass-dim)}',
    '.jwl-head h2{font:600 1.75rem/1.18 var(--font-serif);color:var(--text-heading);margin:0}',
    '.jwl-head p{font:var(--text-body-sm);color:var(--text-primary);margin:0;max-width:52ch}',
    '.jwl-form{border-top:2.5px solid var(--ink-navy);padding-top:var(--space-5);display:grid;grid-template-columns:1fr 1fr;gap:var(--space-5)}',
    '.jwl-f{display:flex;flex-direction:column;gap:8px}',
    '.jwl-f.full{grid-column:1 / -1}',
    '.jwl-f label{font:var(--text-eyebrow);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--text-primary)}',
    '.jwl-f .req{color:var(--brass)}',
    '.jwl-form input[type=text],.jwl-form input[type=email],.jwl-form input[type=tel],.jwl-form select,.jwl-form textarea{font:var(--text-body);color:var(--text-heading);background:var(--paper);border:1px solid var(--border-strong);border-radius:0;padding:12px 14px;width:100%;transition:border-color .18s cubic-bezier(.4,0,.2,1)}',
    '.jwl-form input:focus,.jwl-form select:focus,.jwl-form textarea:focus{outline:none;border-color:var(--ink-navy);box-shadow:inset 0 -2px 0 var(--brass)}',
    '.jwl-form textarea{min-height:96px;resize:vertical}',
    '.jwl-consent{grid-column:1 / -1;display:flex;gap:var(--space-3);align-items:flex-start;border-top:1px solid var(--border-default);padding-top:var(--space-5);cursor:pointer}',
    '.jwl-consent input{margin-top:3px;width:18px;height:18px;flex:none;accent-color:var(--ink-navy)}',
    '.jwl-consent span{font:var(--text-body-sm);color:var(--text-primary)}',
    '.jwl-actions{grid-column:1 / -1;display:flex;gap:var(--space-5);align-items:center;flex-wrap:wrap}',
    '.jwl-actions .note{font:var(--text-body-sm);color:var(--charcoal-60)}',
    '.jwl-err{grid-column:1 / -1;display:none;font:var(--text-body-sm);color:var(--ink-navy);border-left:2.5px solid var(--brass);padding-left:var(--space-4);margin:0}',
    '.jwl-thanks{display:none;flex-direction:column;gap:var(--space-3);border-top:2.5px solid var(--ink-navy);padding-top:var(--space-5)}',
    '.jwl-thanks h2{font:600 1.6rem/1.2 var(--font-serif);margin:0}',
    '.jwl-thanks p{font:var(--text-body-sm);color:var(--text-primary);margin:0;max-width:52ch}',
    'body.jwl-locked{overflow:hidden}',
    '@media (max-width:700px){.jwl-dlg{padding:var(--space-6) var(--space-5)}.jwl-form{grid-template-columns:1fr}.jwl-modal{padding:var(--space-5) var(--space-3)}}',
    '@media (prefers-reduced-motion:reduce){.jwl-veil,.jwl-dlg{transition:none}}'
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var prefill = document.body.getAttribute('data-enquiry-purpose') || '';
  var opts = PURPOSES.map(function (o) {
    return '<option' + (o === prefill ? ' selected' : '') + '>' + o + '</option>';
  }).join('');

  var veil = document.createElement('div');
  veil.className = 'jwl-veil';

  var modal = document.createElement('div');
  modal.className = 'jwl-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'jwl-title');
  modal.setAttribute('hidden', '');
  modal.innerHTML =
    '<div class="jwl-dlg">' +
      '<button class="jwl-x" type="button" aria-label="Close">\u00d7</button>' +
      '<div class="jwl-head">' +
        '<span class="eyebrow">Enquiry</span>' +
        '<h2 id="jwl-title">Request a valuation</h2>' +
        '<p>Tell us about the property and what the valuation is for. We will confirm the fee and a timeline before any work begins.</p>' +
      '</div>' +
      '<form class="jwl-form" action="https://api.web3forms.com/submit" method="POST" novalidate>' +
        '<input type="hidden" name="subject" value="New valuation enquiry \u2014 jwl.ie">' +
        '<input type="hidden" name="from_name" value="JWL website enquiry form">' +
        '<input type="hidden" name="source_page" value="">' +
        '<input type="checkbox" name="botcheck" tabindex="-1" style="display:none" aria-hidden="true">' +
        '<div class="jwl-f"><label for="jwl-name">Your name <span class="req">*</span></label><input type="text" id="jwl-name" name="name" autocomplete="name" required></div>' +
        '<div class="jwl-f"><label for="jwl-email">Email address <span class="req">*</span></label><input type="email" id="jwl-email" name="email" autocomplete="email" required></div>' +
        '<div class="jwl-f"><label for="jwl-phone">Phone number <span class="req">*</span></label><input type="tel" id="jwl-phone" name="phone" autocomplete="tel" required></div>' +
        '<div class="jwl-f"><label for="jwl-address">Property address <span class="req">*</span></label><input type="text" id="jwl-address" name="address" required></div>' +
        '<div class="jwl-f"><label for="jwl-purpose">What is the valuation for? <span class="req">*</span></label><select id="jwl-purpose" name="purpose" required>' +
          (prefill ? '' : '<option value="" selected disabled>Select one</option>') + opts +
        '</select></div>' +
        '<div class="jwl-f"><label for="jwl-deadline">Is there a deadline?</label><input type="text" id="jwl-deadline" name="deadline" placeholder="Court date, drawdown, application"></div>' +
        '<div class="jwl-f full"><label for="jwl-more">Tell us a bit more</label><textarea id="jwl-more" name="more" placeholder="Anything else that would help us quote accurately."></textarea></div>' +
        '<label class="jwl-consent" for="jwl-consent"><input type="checkbox" id="jwl-consent" name="consent" required><span>I consent to JWL Property Valuations contacting me about this enquiry and holding my details for that purpose. <span class="req">*</span></span></label>' +
        '<div class="jwl-actions">' +
          '<button class="btn btn-primary" type="submit">Send enquiry</button>' +
          '<span class="note">Or call <a href="tel:+353879604211" style="font-weight:600">087 960 4211</a></span>' +
        '</div>' +
        '<p class="jwl-err">We could not send that just now. Please call <a href="tel:+353879604211" style="font-weight:600">087 960 4211</a> or email <a href="mailto:hello@jwl.ie" style="font-weight:600">hello@jwl.ie</a> and we will pick it up straight away.</p>' +
      '</form>' +
      '<div class="jwl-thanks">' +
        '<h2>Thank you. Your enquiry has reached us.</h2>' +
        '<p>We will be in touch shortly, usually within one working day, to confirm the fee and arrange a time to inspect. If it is urgent, call <a href="tel:+353879604211" style="font-weight:600">087 960 4211</a>.</p>' +
      '</div>' +
    '</div>';

  document.body.appendChild(veil);
  document.body.appendChild(modal);

  var card = modal.querySelector('.jwl-dlg');
  var form = modal.querySelector('.jwl-form');
  var head = modal.querySelector('.jwl-head');
  var thanks = modal.querySelector('.jwl-thanks');
  var err = modal.querySelector('.jwl-err');
  var btn = form.querySelector('button[type=submit]');
  var lastFocus = null;

  form.querySelector('[name=source_page]').value =
    (document.title || '') + ' \u2014 ' + location.pathname;

  function open(e) {
    if (e) e.preventDefault();
    lastFocus = document.activeElement;
    modal.removeAttribute('hidden');
    document.body.classList.add('jwl-locked');
    requestAnimationFrame(function () {
      veil.classList.add('on');
      modal.classList.add('on');
      var first = form.querySelector('input:not([type=hidden]):not([tabindex="-1"])');
      if (first) first.focus();
    });
  }

  function close() {
    veil.classList.remove('on');
    modal.classList.remove('on');
    document.body.classList.remove('jwl-locked');
    setTimeout(function () { modal.setAttribute('hidden', ''); }, 280);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  modal.querySelector('.jwl-x').addEventListener('click', close);
  veil.addEventListener('click', close);
  modal.addEventListener('mousedown', function (e) {
    if (!card.contains(e.target)) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('on')) close();
    if (e.key === 'Tab' && modal.classList.contains('on')) {
      var f = card.querySelectorAll('a[href],button:not([disabled]),input:not([type=hidden]):not([tabindex="-1"]),select,textarea');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var label = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending\u2026';
    err.style.display = 'none';
    if (window.JWLLogEnquiry) window.JWLLogEnquiry(new FormData(form), 'Pop-up form');
    // One POST per recipient — each access key delivers to its own address.
    Promise.all(KEYS.map(function (k) {
      var fd = new FormData(form);
      fd.set('access_key', k);
      return fetch(form.action, { method:'POST', body:fd, headers:{ Accept:'application/json' } });
    })).then(function (results) {
      if (!results.some(function (r) { return r.ok; })) throw new Error('send failed');
      form.style.display = 'none';
      head.style.display = 'none';
      thanks.style.display = 'flex';
    }).catch(function () {
      // Demo: the enquiry is already logged to the portal, so confirm regardless.
      if (window.JWL_DEMO !== false) {
        form.style.display = 'none';
        head.style.display = 'none';
        thanks.style.display = 'flex';
        return;
      }
      btn.disabled = false;
      btn.textContent = label;
      err.style.display = 'block';
    });
  });

  // Intercept every "Request a Valuation" link on the page.
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    var t = (a.textContent || '').trim().toLowerCase();
    if (t === 'request a valuation' || a.hasAttribute('data-enquiry')) open(e);
  });

  window.JWLEnquiry = { open: open, close: close };
})();
