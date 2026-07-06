# 🧩 PlaySocket

<p align="center">
  <strong>A high-performance Sudoku Generation Engine built with Spring Boot & GraphQL.</strong>
</p>

<p align="center">
Generate fully configurable Sudoku puzzles with multiple board sizes, dynamic difficulty levels, verified solutions, and developer-friendly APIs.
</p>

<p align="center">

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/SpringBoot-3.x-brightgreen)
![GraphQL](https://img.shields.io/badge/GraphQL-API-E10098)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Active-success)

</p>

---

# ✨ Why PlaySocket?

Most Sudoku APIs only generate a fixed 9×9 board.

PlaySocket was designed to be **a configurable Sudoku engine**, giving developers complete control over:

* Board Size
* Difficulty
* Puzzle Generation
* Verified Solutions
* GraphQL Integration

Whether you're building a mobile game, educational platform, puzzle website, or AI application, PlaySocket provides a simple yet powerful API for Sudoku generation.

---

# 🚀 Features

| Feature                        | Supported |
| ------------------------------ | --------- |
| GraphQL API                    | ✅         |
| Spring Boot Backend            | ✅         |
| Multiple Board Sizes           | ✅         |
| Dynamic Difficulty             | ✅         |
| Verified Solutions             | ✅         |
| REST Endpoint                  | ✅         |
| Developer Documentation        | ✅         |
| Ready for Frontend Integration | ✅         |

---

# Supported Board Sizes

| Size  | Status |
| ----- | ------ |
| 4×4   | ✅      |
| 6×6   | ✅      |
| 9×9   | ✅      |
| 10×10 | ✅      |
| 12×12 | ✅      |
| 16×16 | ✅      |

---

# Difficulty Levels

| Difficulty |
| ---------- |
| EASY       |
| MEDIUM     |
| HARD       |

---

# API Endpoint

```http
POST https://vebble-ai-backend.onrender.com/api/games/sudoku-app
```

---

# GraphQL Query

```graphql
query GetSudoku {

  newboard(
      limit:1,
      difficulty:"MEDIUM",
      size:9
  ){

      grids{

          value
          solution
          difficulty

      }

      results
      message

  }

}
```

---

# Example Response

```json
{
    "data": {
        "newboard": {
            "grids": [
                {
                    "value": "...",
                    "solution": "...",
                    "difficulty": "MEDIUM"
                }
            ],
            "results": 1,
            "message": "Board Generated Successfully"
        }
    }
}
```

---

# Quick Start

Using JavaScript

```javascript
const response = await fetch(
  "https://vebble-ai-backend.onrender.com/api/games/sudoku-app",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query {
        newboard(
          limit:1,
          difficulty:"MEDIUM",
          size:9
        ){
          grids{
            value
            solution
            difficulty
          }
        }
      }`
    }),
  }
);

const data = await response.json();
console.log(data);
```

---

# Architecture

```
Client

      │

      ▼

REST Endpoint

      │

      ▼

Spring Boot

      │

      ▼

GraphQL Resolver

      │

      ▼

Sudoku Engine

      │

      ▼

Validated Puzzle + Solution

      │

      ▼

JSON Response
```

---

# Developer Documentation

📖 Full documentation

https://playsocket.netlify.app/

---

# Built With

* Java
* Spring Boot
* GraphQL
* Maven

---

# Use Cases

* Sudoku Games
* Educational Platforms
* AI Puzzle Training
* Logic Applications
* Coding Challenges
* Puzzle Websites
* Mobile Games

---

# Roadmap

* [x] Multiple Board Sizes
* [x] Dynamic Difficulty
* [x] GraphQL API
* [x] REST Support
* [ ] API Key Authentication
* [ ] Rate Limiting
* [ ] Multiplayer Sudoku Support
* [ ] Docker Deployment

---

# Contributing

Contributions, feature requests, and suggestions are welcome.

Feel free to fork the repository and submit a Pull Request.

---

# Author

**Gyanesh Kumar**

🌐 Portfolio
https://portfolio-v3-two-virid.vercel.app/

🐙 GitHub
https://github.com/Gyaneshkr5009

---

⭐ If you found this project useful, consider giving it a star.
