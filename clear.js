export default function (key) {
  if (!key) {
    localStorage.clear();
    return;
  }
  localStorage.removeItem(key);
}
