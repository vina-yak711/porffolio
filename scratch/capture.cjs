const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const assetsDir = path.join(__dirname, "..", "public", "assets");

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const targetHero = path.join(assetsDir, "real_portfolio.png");
const targetResume = path.join(assetsDir, "real_resume.png");

console.log("Capturing Hero homepage screenshot...");
spawnSync(chromePath, [
  "--headless=new",
  `--screenshot=${targetHero}`,
  "--window-size=1280,900",
  "--default-background-color=00000000",
  "http://localhost:5173/"
]);

console.log("Capturing Resume page screenshot...");
spawnSync(chromePath, [
  "--headless=new",
  `--screenshot=${targetResume}`,
  "--window-size=1280,1100",
  "http://localhost:5173/resume.html"
]);

console.log("Hero exists:", fs.existsSync(targetHero));
console.log("Resume exists:", fs.existsSync(targetResume));
