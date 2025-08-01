const fs = require("fs");
const https = require("https");

const repo = "rikis/personal-portfolio"; // Your GitHub repo in "username/repo" format
const url = `https://api.github.com/repos/${repo}/commits?per_page=1`;

https.get(url, { headers: { "User-Agent": "node.js" } }, (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    const commit = JSON.parse(data)[0];
    const date = commit.commit.author.date;
    fs.writeFileSync("./last-updated.json", JSON.stringify({ date }, null, 2));
    console.log("Last updated date saved:", date);
  });
});
