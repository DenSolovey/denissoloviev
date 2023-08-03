export default async function copy(copyText) {
  let temp = document.createElement("input");
  document.body.append(temp)
  temp.value = copyText
  temp.select();
  document.execCommand('copy');
  temp.remove();
}
