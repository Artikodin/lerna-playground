var randomSentence = require("random-sentence");

module.exports = () => {
  console.log(`utils-b: ${randomSentence({ words: 5 })}`);
};
