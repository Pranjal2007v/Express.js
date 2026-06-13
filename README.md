# Express.js Learning Phase (Step by Step)

This repository is for learning Express.js in a clear sequence.

## Step 1: Understand What Express.js Is
- Express.js is a minimal and flexible web framework for Node.js.
- It helps you build APIs and web servers quickly.

## Step 2: Prerequisites
- Install [Node.js](https://nodejs.org/) (LTS version recommended).
- Basic understanding of JavaScript.

## Step 3: Create a New Project
```bash
mkdir express-learning
cd express-learning
npm init -y
npm install express
```

## Step 4: Create Your First Server
Create `index.js`:

```js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

Run it:
```bash
node index.js
```

## Step 5: Learn Routing
Try different routes:

```js
app.get("/about", (req, res) => res.send("About page"));
app.get("/contact", (req, res) => res.send("Contact page"));
```

## Step 6: Learn Middleware
Middleware runs before route handlers:

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

## Step 7: Handle JSON and POST Requests
```js
app.use(express.json());

app.post("/users", (req, res) => {
  res.json({ message: "User created", data: req.body });
});
```

## Step 8: Use Express Router
- Split routes into files for better structure.
- Keep code modular and maintainable.

## Step 9: Error Handling Basics
```js
app.use((err, req, res, next) => {
  res.status(500).json({ error: "Something went wrong" });
});
```

## Step 10: Next Learning Goals
- Connect to a database (MongoDB/MySQL/PostgreSQL).
- Add validation (Joi/Zod/express-validator).
- Add authentication (JWT/sessions).
- Learn MVC project structure.
- Deploy your app (Render/Railway/Vercel/EC2).

---

If you follow these steps in order and build small practice projects, you will gain strong Express.js fundamentals.