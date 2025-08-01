const fs = require("fs");
const https = require("https");

const repo = "rikis/personal-portfolio";
const url = `https://api.github.com/repos/${repo}/commits?per_page=1`;

https.get(url, { headers: { "User-Agent": "node.js" } }, (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    try {
      const json = JSON.parse(data);
      if (Array.isArray(json) && json.length > 0 && json[0].commit) {
        const date = json[0].commit.author.date;
        fs.writeFileSync(
          "./last-updated.json",
          JSON.stringify({ date }, null, 2)
        );
        console.log("Last updated date saved:", date);
      } else {
        console.error("Unexpected GitHub API response:", json);
        process.exit(1);
      }
    } catch (err) {
      console.error("Failed to parse GitHub API response:", err);
      process.exit(1);
    }
  });
});
