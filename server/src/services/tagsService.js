const { Tags } = require("../models/tagsModel");

async function createTag(tag, postId) {
  const findTag = await Tags.findOne({ tag });

  if (findTag) {
    findTag.tagPosts.push(postId);
    await findTag.save();
  } else {
    const newTags = new Tags({ tag });
    newTags.tagPosts.push(postId);
    await newTags.save();
  }
}

module.exports = { createTag };
