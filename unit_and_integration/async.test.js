import { it, expect, beforeAll, afterAll, beforeEach, afterEach } from "vitest";
import CryptoJS from "crypto-js";
import { encryptMessage, encryptMessagePromise } from "./async";

beforeAll(() => {
  console.log("beforeALl");
});

afterAll(() => {
  console.log("afterAll");
});

beforeEach(() => {
  console.log("beforeEach");
});

afterEach(() => {
  console.log("afterEach");
});

it("should encrypt a message", async () => {
  const message = "fjkdlaf";
  const secretKey = "faiofnea;if3epafneo";

  const encryptedData = await new Promise((resolve, reject) => {
    encryptMessage(message, secretKey, (message) => {
      resolve(message);
    });
  });

  expect(encryptedData).toBeDefined();
});

it("should encrypt a message with promise", async () => {
  const message = "fjkdlaf";
  const secretKey = "faiofnea;if3epafneo";

  const encryptedData = await encryptMessagePromise(message, secretKey);

  expect(encryptedData).toBeDefined();
});

it("should encrypt a message with data", async () => {
  const message = "fjkdlaf";
  const secretKey = "faiofnea;if3epafneo";

  const encryptedData = await encryptMessagePromise(message, secretKey);

  const decrytpedMessage = CryptoJS.AES.decrypt(
    encryptedData,
    secretKey
  ).toString(CryptoJS.enc.Utf8);

  expect(decrytpedMessage).toBe(message);
});
