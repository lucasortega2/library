export default function generateId(input) {
  const inputJoin = input.split(' ').join('');

  const timestamp = new Date().getTime();
  const id = `${timestamp}${inputJoin}`;

  return id;
}
