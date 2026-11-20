EASYPAY - HOME SCREEN
=====================

Files
-----
index.html     App markup (app screen only: no phone frame, dynamic island or status bar)
style.css      Styles, including the soft green frosted fade at the top
script.js      Balance rendering (grey cents), account show/hide, tab bar, toasts
manifest.json  Web app manifest

How to run
----------
Open index.html in a browser (use mobile view), or host the folder on any static host.
If you use it as a Telegram Mini App, serve it over HTTPS and add
<script src="https://telegram.org/js/telegram-web-app.js"></script> before script.js.

Easy edits
----------
- Balance, saving and pools amounts: the `state` object at the top of script.js.
- Green fade colour: --green-fade (RGB values) in style.css :root.
- Grey cents colour: --cents in style.css :root.
- Add app icons to manifest.json "icons" when you have them.
