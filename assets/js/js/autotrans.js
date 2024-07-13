const lang = 'es';
function Init() {
  new google.translate.TranslateElement({ pageLanguage: `${lang}` });
}

const usrlang = navigator.language.substring(0, 2) || navigator.userLanguage.substring(0, 2);
if (usrlang !== `${lang}`) {
  document.cookie = `googtrans=/${lang}/en; Expires=Session; SameSite=None; Secure`;
  const google = document.createElement('script');
  google.type = 'text/javascript';
  google.src = 'https://translate.google.com/translate_a/element.js?cb=Init';
  document.body.append(google);
  setTimeout(removePreloader, 1200);
} else removePreloader();

function removePreloader() {
  const preloader = document.querySelector('#preloader');
  if (preloader) preloader.remove();
}