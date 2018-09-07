const PROXY_CONFIG = [
  {
      context: [
          "/novel/"
      ],
      target: "http://localhost:8080",
      secure: false
  }
]
module.exports = PROXY_CONFIG;
