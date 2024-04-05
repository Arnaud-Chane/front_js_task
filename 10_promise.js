
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Landing'), 2000);
  });
};

module.exports = {sleep};