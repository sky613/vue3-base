import send from "./send";

function testAPI(data) {
  return send.post("/account/updateaccountpw", data);
}

export { testAPI };
