(function () {
  'use strict';

  // Optional: integrate with Telegram Mini App if running inside Telegram
  try {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  } catch (e) {}

  var state = { balance: 112, saving: 10, pools: 10, accountNumber: '0123456789', hidden: true };

  var $ = function (id) { return document.getElementById(id); };
  var money = function (n) { return '$' + n.toFixed(2); };

  // Balance with faded grey cents
  function renderBalance() {
    var parts = state.balance.toFixed(2).split('.');
    var whole = Number(parts[0]).toLocaleString('en-US');
    $('balance').innerHTML = '$' + whole + '<span class="cents">.' + parts[1] + '</span>';
    $('savingAmt').textContent = money(state.saving);
    $('poolsAmt').textContent = money(state.pools);
  }

  // Account number show / hide
  var eyeOff = $('eyeIcon').innerHTML;
  var eyeOn = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
  function renderAccount() {
    $('accountNum').textContent = state.hidden ? '•••••••••' : state.accountNumber;
    $('eyeIcon').innerHTML = state.hidden ? eyeOff : eyeOn;
  }
  $('accountToggle').addEventListener('click', function () {
    state.hidden = !state.hidden;
    renderAccount();
  });

  // Toast
  var toastTimer;
  function toast(msg) {
    var t = $('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 1800);
  }

  // Actions (placeholders to wire to your backend)
  var messages = {
    add: 'Add money', withdraw: 'Withdraw', paychecks: 'Paychecks',
    saving: 'Saving', pools: 'Pools'
  };
  document.querySelectorAll('[data-action]').forEach(function (el) {
    el.addEventListener('click', function () {
      toast(messages[el.dataset.action] + ' tapped');
    });
  });

  // Tab bar
  document.querySelectorAll('.tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      if (tab.dataset.tab !== 'home') toast(tab.textContent.trim() + ' coming soon');
    });
  });

  renderBalance();
  renderAccount();
})();
