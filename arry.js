export function filterArray(arr, cond) {
  
  return arr.filter(x => eval(cond));
}
