const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// Sample data storage
const storage = [];

// User registration
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const randomId = crypto.randomUUID();
    storage.push({
      id: randomId,
      email,
      password: hashedPassword,
    });
    if (storage.length <= 0 && !storage.find((user) => user.email === email)) {
      throw new Error("Registration failed");
    }
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = storage.find((item) => item.email === email);
    if (!user) {
      return res.status(401).send({ error: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send({ error: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user.id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send({ error: "Login failed" });
  }
});

module.exports = router;
