var randomSentence = require("random-sentence");

module.exports = () => {
  console.log(`utils-a: ${randomSentence({ words: 5 })}`);
};
