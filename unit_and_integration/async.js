import CryptoJS from "crypto-js";

export function encryptMessage(message, key, callback) {
  const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
  callback(encryptedMessage);
}

export function encryptMessagePromise(message, key, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
      if (encryptedMessage) {
        resolve(encryptedMessage);
      } else {
        reject(new Error("Failed to encrypt message"));
      }
    }, 2000);
  });
}

const message = {
  name: "Raphael",
  password: "123",
};

const secretKey = "abcdefgh";

encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
  console.log(encryptedMessage);
});

encryptMessagePromise(JSON.stringify(message), secretKey).then(
  (encryptedMessage) => {
    console.log(encryptedMessage);
  }
);
