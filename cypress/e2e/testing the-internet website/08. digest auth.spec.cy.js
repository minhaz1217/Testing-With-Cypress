/// <reference types="cypress" />

describe("test for Digest Auth webpage", () => {
  it("authenticating with digest auth", () => {
    let url = "http://localhost:7080/digest_auth";
    let req = cy
      .request({ url: url, failOnStatusCode: false })
      .then((response) => {
        const authHeaders = {};
        response.headers["www-authenticate"].split(", ").forEach((section) => {
          const key = section.slice(0, section.indexOf("="));
          const value = section.slice(key.length + 2, -1);
          authHeaders[key] = value;
        });
        console.debug("auth", authHeaders);
        // console.debug(authHeaders["nonce"]);
      });
  });
});
