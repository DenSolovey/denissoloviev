export default async function copy(copyText) {
  document.addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', copyText);
    e.preventDefault();
 }, true);
}
