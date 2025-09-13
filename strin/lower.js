export function convertToASCII(str) {
  
  return str.split("").map(ch => ch.charCodeAt(0));
}
