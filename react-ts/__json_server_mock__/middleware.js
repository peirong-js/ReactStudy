// module.exports = (req, res, next) => {
//   if (req.method === "POST" && req.path === "/login") {
//     if (req.body.username === "peirong" && req.body.password === "123456") {
//       return res.status(200).json({
//         user: {
//           token: "123",
//         },
//       });
//     } else {
//       return res.status(400).json({ message: "用户名或者密码错误" });
//     }
//   }
//   next();
// };

// npm
// "json-server": "json-server --watch __json_server_mock__/db.json --port 3001 --middlewares ./__json_server_mock__/middleware.js"
