# 🧩 PlaySocket API

> Generate highly customizable Sudoku puzzles through a powerful GraphQL API.

PlaySocket is a Spring Boot powered Sudoku Engine that allows developers to generate Sudoku boards of multiple sizes with configurable difficulty levels.

Designed for game developers, educational platforms and puzzle applications.

---

## ✨ Features

- 🚀 GraphQL API
- 🧩 Multiple board sizes
  - 4×4
  - 6×6
  - 9×9
  - 10×10
  - 12×12
  - 16×16

- 🎯 Difficulty Levels
  - Easy
  - Medium
  - Hard

- ✅ Verified Solutions

- ⚡ High Performance Puzzle Generation

- 🌐 REST Endpoint Support

- 📄 Developer Friendly Documentation

---

## 📸 Documentation

Developer Documentation

https://playsocket.netlify.app/

---

## API Endpoint

```
POST
https://vebble-ai-backend.onrender.com/api/games/sudoku-app
```

---

## GraphQL Example

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

## Response

```json
{
  "data": {

      ...

  }
}
```

---

## Supported Sizes

| Size | Supported |
|-------|-----------|
|4x4|✅|
|6x6|✅|
|9x9|✅|
|10x10|✅|
|12x12|✅|
|16x16|✅|

---

## Difficulty

```
EASY
MEDIUM
HARD
```

---

## Built With

- Java
- Spring Boot
- GraphQL
- Maven

---

## Use Cases

- Sudoku Games
- Puzzle Apps
- Educational Platforms
- AI Puzzle Training
- Logic Applications

---

## Why PlaySocket?

Unlike traditional Sudoku APIs, PlaySocket focuses on flexibility.

✔ Multiple board dimensions

✔ Dynamic difficulty

✔ Verified solution generation

✔ GraphQL based architecture

✔ Easy integration

---

## Documentation

Visit

https://playsocket.netlify.app/

---

## Author

Gyanesh Kumar

Portfolio

https://portfolio-v3-two-virid.vercel.app/

GitHub

https://github.com/Gyaneshkr5009
