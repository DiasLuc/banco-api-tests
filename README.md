
# Banco API Tests

Automated tests for the REST API of the [Banco API project](https://github.com/juliodelimas/banco-api).

## 🚀 Objective
This project aims to ensure the correctness and reliability of the Banco API by implementing automated tests for its various endpoints. It verifies key operations such as creating accounts, making transfers, and querying balances.

## 🧰 Tech Stack
- **JavaScript (Node.js)**
- **Mocha** — Test runner
- **Chai** — Assertion library
- **Supertest** — HTTP assertions for testing REST APIs
- **Dotenv** — Loads environment variables from `.env`
- **Mochawesome** — HTML reporting tool for Mocha

## 📁 Folder Structure
```
├── test/
│   ├── account.test.js
│   ├── transaction.test.js
│   └── balance.test.js
├── .env               # Environment variables (not committed)
├── mochawesome-report/ # Generated test reports in HTML
├── package.json       # Project metadata and dependencies
└── README.md
```

## 🔧 .env Configuration
Create a `.env` file in the root directory with the following content:

```
BASE_URL=http://localhost:3000
```

Replace the URL with the base path where your API is running.

## ⚡ How to Run Tests
1. **Install dependencies**:
```bash
npm install
```

2. **Run all tests**:
```bash
npm test
```

3. **Generate Mochawesome HTML Report**:
```bash
npm run test:report
```
The report will be available at `./mochawesome-report/mochawesome.html`

## 🔗 Useful Links
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Mochawesome](https://github.com/adamgruber/mochawesome)

---

> Created to ensure the integrity of the [Banco API](https://github.com/juliodelimas/banco-api).
