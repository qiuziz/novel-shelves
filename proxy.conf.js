const PROXY_CONFIG = [
  {
      context: [
          "/search/",
          "/book/"
      ],
      target: "http://localhost:8080",
      secure: false
  }
]
module.exports = PROXY_CONFIG;
