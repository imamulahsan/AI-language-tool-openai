const express = require("express");
const {
  summaryController, grammarController, keywordController, translationController, lessonController, directionController, emojiController, moodController, rapController, tweetController, productController, codeController,
} = require("../controllers/openaiController");

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/grammar", grammarController);
router.post("/keyword", keywordController);
router.post("/translation", translationController);
router.post("/lesson", lessonController);
router.post("/direction", directionController);
router.post("/emoji", emojiController);
router.post("/mood", moodController);
router.post("/rap", rapController);
router.post("/tweet", tweetController);
router.post("/product", productController);
router.post("/code", codeController);


module.exports = router;