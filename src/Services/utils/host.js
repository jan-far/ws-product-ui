export const GetHostUrl = () => {
  return window.location.host.indexOf('127.0.0.1') === 0 ||
    window.location.host.indexOf('localhost') === 0
    ? 'http://127.0.0.1:5555/'
    : 'https://nutritious-righteous-digit.glitch.me/';
};