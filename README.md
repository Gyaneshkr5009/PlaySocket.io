# 🧩 PlaySocket

<p align="center">
  <strong>A high-performance Puzzle Generation Engine built with Spring Boot & GraphQL.</strong>
</p>

<p align="center">
Generate Sudoku boards, Schulte Tables, and future puzzle games through a single GraphQL API with developer-friendly endpoints.
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

Most puzzle APIs focus on a single game.

**PlaySocket** is designed as a scalable **Puzzle Generation Engine**, allowing developers to integrate multiple puzzle types through one API while keeping the implementation simple and extensible.

Current supported games include:

* 🧩 Sudoku
* 🔢 Schulte Table

Future games can be added without changing the public API structure.

Whether you're building a mobile game, educational platform, AI application, coding challenge website, or puzzle portal, PlaySocket provides a clean and flexible backend.

---

# 🚀 Features

| Feature                        | Supported |
| ------------------------------ | --------- |
| GraphQL API                    | ✅         |
| REST Endpoint                  | ✅         |
| Spring Boot Backend            | ✅         |
| Sudoku Generator               | ✅         |
| Schulte Table Generator        | ✅         |
| Multiple Sudoku Board Sizes    | ✅         |
| Dynamic Sudoku Difficulty      | ✅         |
| Verified Sudoku Solutions      | ✅         |
| Developer Documentation        | ✅         |
| Ready for Frontend Integration | ✅         |

---

# 🎮 Supported Games

| Game          | Status |
| ------------- | ------ |
| Sudoku        | ✅      |
| Schulte Table | ✅      |

---

# 🧩 Sudoku Board Sizes

| Size  | Status |
| ----- | ------ |
| 4×4   | ✅      |
| 6×6   | ✅      |
| 9×9   | ✅      |
| 10×10 | ✅      |
| 12×12 | ✅      |
| 16×16 | ✅      |

---

# 🎯 Sudoku Difficulty Levels

| Difficulty |
| ---------- |
| EASY       |
| MEDIUM     |
| HARD       |

---

# 🌐 API Endpoint

```http
POST https://vebble-ai-backend.onrender.com/api/games
```

---

# 📌 GraphQL Schema

```graphql
scalar Matrix

type Query {

    newSudokuBoard(
        limit: Int = 1,
        difficulty: String = null,
        size: Int = 9
    ): BoardResponse

    newSchulteTable(
        size: Int = 5
    ): SchulteTable
}

type SchulteTable {
    schulteBoard: [[Int]]
    message: String
}

type BoardResponse {
    grids: [Grid]
    results: Int
    message: String
}

type Grid {
    value: Matrix
    solution: Matrix
    difficulty: String
}
```

---

# 📘 Generate Sudoku

```graphql
query {

  newSudokuBoard(
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

# Sudoku Response

```json
{
  "data": {
    "newSudokuBoard": {
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

# 🔢 Generate Schulte Table

```graphql
query {

  newSchulteTable(size:5){

      schulteBoard

      message

  }

}
```

---

# Schulte Table Response

```json
{
  "data": {
    "newSchulteTable": {
      "schulteBoard": [
        [17, 3, 11, 24, 7],
        [5, 20, 1, 14, 22],
        [10, 18, 8, 25, 12],
        [16, 2, 23, 6, 15],
        [19, 13, 9, 4, 21]
      ],
      "message": "Schulte Table Generated Successfully"
    }
  }
}
```

---

# ⚡ Quick Start

```javascript
const response = await fetch(
  "https://vebble-ai-backend.onrender.com/api/games",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query {

        newSudokuBoard(
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

# 🏗 Architecture

```text
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

Puzzle Generation Engine

      │

      ├───────────────┐
      ▼               ▼

 Sudoku Engine   Schulte Engine

      │               │
      └───────┬───────┘
              ▼

        JSON Response
```

---

# 📖 Developer Documentation

Full documentation:

https://playsocket.netlify.app/

---

# 🛠 Built With

* Java
* Spring Boot
* GraphQL
* Maven

---

# 💡 Use Cases

* Puzzle Websites
* Mobile Games
* Educational Platforms
* AI Training Applications
* Cognitive Assessment Tools
* Logic Games
* Coding Challenges

---

# 🗺 Roadmap

* [x] Sudoku Generator
* [x] Schulte Table Generator
* [x] Multiple Sudoku Board Sizes
* [x] Dynamic Difficulty
* [x] GraphQL API
* [x] REST Support
* [ ] API Key Authentication
* [ ] Rate Limiting
* [ ] Memory Games
* [ ] Sliding Puzzle
* [ ] Crossword Generator
* [ ] Multiplayer Puzzle Support
* [ ] Docker Deployment

---

# 🤝 Contributing

Contributions, feature requests, and suggestions are welcome.

Feel free to fork the repository and submit a Pull Request.

---

# 👨‍💻 Author

**Gyanesh Kumar**

🌐 Portfolio

https://portfolio-v3-two-virid.vercel.app/

🐙 GitHub

https://github.com/Gyaneshkr5009

---

⭐ If you found PlaySocket useful, consider giving the repository a star!
