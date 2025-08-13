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

async function findTag(tag) {
    const tagFound = await Tags.findOne({tag});

    if(!tagFound){
        throw new Error('There are no tags with this name');
    }

    return tagFound
}

module.exports = { createTag,findTag};
