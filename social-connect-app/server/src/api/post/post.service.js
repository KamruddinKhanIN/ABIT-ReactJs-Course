const Post = require("../../models/post");

const post = async ({ body, userId }) => {
  try {
    const { content } = body;

    await Post.create({ content, userId });
    return { status: 200, data: true };
  } catch (err) {
    console.log("post", err);
    throw err;
  }
};

const getPosts = async ({ query, userId }) => {
  try {
    const { type } = query;

    let whereCondition = {};

    if (type === "own") {
      whereCondition = { userId };
    }

    const posts = await Post.find(whereCondition)
      .sort([["createdAt", -1]])
      .populate("userId", "firstName");
    return { status: 200, data: posts };
  } catch (err) {
    console.log("getPosts", err);
    throw err;
  }
};

const like = async ({ body, userId }) => {
  try {
    const { type, postId } = body;

    let updateCondition = {};

    if (type === "like") {
      updateCondition = { $addToSet: { likes: userId } };
    }

    if (type === "dislike") {
      updateCondition = { $pull: { likes: userId } };
    }

    const posts = await Post.findByIdAndUpdate(postId, updateCondition, {
      new: true,
    });
    return { status: 200, data: posts };
  } catch (err) {
    console.log("like", err);
    throw err;
  }
};

module.exports = { post, getPosts, like };
