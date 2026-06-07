const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const gameJs = fs.readFileSync(
  path.join(__dirname, "..", "juegos", "static", "js", "game.js"),
  "utf8"
);

function bodyOf(functionName) {
  const startToken = `function ${functionName}`;
  const start = gameJs.indexOf(startToken);
  assert.notStrictEqual(start, -1, `${functionName} must exist`);

  const braceStart = gameJs.indexOf("{", start);
  let depth = 0;

  for (let i = braceStart; i < gameJs.length; i++) {
    if (gameJs[i] === "{") depth++;
    if (gameJs[i] === "}") depth--;
    if (depth === 0) return gameJs.slice(braceStart + 1, i);
  }

  throw new Error(`Could not parse ${functionName}`);
}

const tickBody = bodyOf("tick");
const updateBody = bodyOf("updateGame");
const loopBody = bodyOf("loopDrumBalls");

assert.match(
  tickBody,
  /updateGame\(event\.delta\)/,
  "tick should pass elapsed frame time to updateGame"
);

assert.match(
  updateBody,
  /loopDrumBalls\(deltaMs\)/,
  "updateGame should forward elapsed frame time to loopDrumBalls"
);

assert.doesNotMatch(
  loopBody,
  /var\s+sortArray\s*=\s*\[\]/,
  "loopDrumBalls should not allocate a new sort array every frame"
);

assert.match(
  gameJs,
  /DEPTH_SORT_INTERVAL\s*=\s*2/,
  "depth sorting should run every 2 frames to preserve visual style while reducing work"
);

assert.match(
  gameJs,
  /drumBalls\s*=\s*\[\]/,
  "drum balls should be stored in a reusable flat array"
);
