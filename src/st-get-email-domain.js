/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let e = email;
  e = e.split('');
  const n = e.lastIndexOf('@');
  e = e.slice(n + 1);
  return e.join('');
}
