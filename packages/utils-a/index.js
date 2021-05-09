var randomSentence = require("random-sentence");

module.exports = () => {
  console.log(`utils-a: ${randomSentence({ words: 5 })}`);
  console.log(`utils-a: ${randomSentence({ words: 5 })}`);
};
