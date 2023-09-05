const users = require("./data/users.json");
const posts = require("./data/posts.json");

module.exports = () => ({
  users: users,
  posts: posts,
});
