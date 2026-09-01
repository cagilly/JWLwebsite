/* JWL — demo bridge between the website enquiry forms and the jobs portal.
   Writes a submitted enquiry into the same local store the portal reads, so a
   form submission on the site appears instantly as an unclaimed job at /jobs.
   PROTOTYPE ONLY — in the live system the form posts to the database and this
   file is removed. */
(function () {
  var KEY = 'jwl-jobs-v2';

  window.JWLLogEnquiry = function (fd, sourceLabel) {
    try {
      var jobs = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!Array.isArray(jobs)) jobs = [];

      var nums = jobs.map(function (j) {
        var m = /JWL-(\d+)/.exec(j.ref || '');
        return m ? parseInt(m[1], 10) : 0;
      });
      var ref = 'JWL-' + ((nums.length ? Math.max.apply(null, nums) : 2614) + 1);

      var get = function (k) { return (fd.get(k) || '').toString().trim(); };
      var deadline = get('deadline');
      var more = get('more');
      var notes = [];
      if (deadline) notes.push({ by: 'Website', at: new Date().toISOString(), text: 'Deadline given: ' + deadline });
      if (more) notes.push({ by: 'Website', at: new Date().toISOString(), text: more });

      jobs.unshift({
        id: 'j' + Date.now(),
        ref: ref,
        address: get('address'),
        client: get('name'),
        email: get('email'),
        phone: get('phone'),
        purpose: get('purpose') || 'Property valuation (general)',
        source: sourceLabel || 'Web form',
        status: 'New / unclaimed',
        urgent: /urgent|asap|today|tomorrow|court|deadline/i.test(deadline + ' ' + more),
        assignee: null,
        inspectAt: '',
        counterparty: get('recipient'),
        invoiceNo: '', invoiceAmount: '', paidOn: '',
        notes: notes,
        audit: [{ by: 'Website', at: new Date().toISOString(), what: 'enquiry received from the website' }],
        createdAt: new Date().toISOString()
      });

      localStorage.setItem(KEY, JSON.stringify(jobs));
      return ref;
    } catch (e) { return null; }
  };
})();
