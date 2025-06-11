# NestJS Microservices & REST API Assessment

This project demonstrates the implementation of a **NestJS/NodeJS microservices architecture** using **Redis** for inter-service communication. It consists of two services:

- **Service A**: Acts as a client that sends a number to Service B for processing (doubling).
- **Service B**: Acts as a worker that handles requests from Service A and also exposes its own REST API.

---

## 📁 Project Structure

```
/project-root
│
├── service-a/              # REST + Redis client (sender)
│   ├── src/
│   ├── .env
│   └── package.json
│
├── service-b/              # REST + Redis worker (receiver)
│   ├── src/
│   ├── .env
│   └── package.json
```

---

## ✅ Requirements Implemented

### 1. Two Services

- **service-a**
  - Exposes a REST endpoint `/double/:num`
  - Sends a Redis message to **service-b**
- **service-b**
  - Handles Redis messages and returns double of the number
  - Exposes a REST endpoint `/square/:num`

### 2. Microservice Communication via Redis

- Pattern: `'double_number'`
- Service A sends: `{ number: 5 }`
- Service B responds: `10`

### 3. Basic REST Endpoints

| Service   | Endpoint       | Method | Description                            | Response |
| --------- | -------------- | ------ | -------------------------------------- | -------- |
| service-a | `/double/:num` | GET    | Sends number to service-b to double it | Number   |
| service-b | `/square/:num` | GET    | Returns square of a number             | Number   |

---

## ⚙️ .env Configuration

Each service uses a `.env` file for configuration. If not provided, defaults are used.

### Example `.env`

```env
# .env for service-a or service-b
PORT=3000 # or 3100 depending on the service
REDIS_HOST=localhost
REDIS_PORT=6379
```

### Default Fallback (if .env is missing)

- Host: `localhost`
- Port: `6379`
- No password or username required

---

## 🧪 Testing

Example:

```
GET http://localhost:3000/double/5
→ 10

GET http://localhost:3100/square/4
→ 16
```

All responses are returned as plain numbers (not JSON).

---

## 🏁 Running the App

### 1. Install dependencies

```bash
cd service-a
npm install

cd ../service-b
npm install
```

### 2. Create `.env` files

#### service-a/.env

```env
PORT=3000
REDIS_HOST=localhost
REDIS_PORT=6379
```

#### service-b/.env

```env
PORT=3100
REDIS_HOST=localhost
REDIS_PORT=6379
```

### 3. Run the services

```bash
# Terminal 1
cd service-a
yarn
yarn start:dev

# Terminal 2
cd service-b
yarn
yarn start:dev
```

---

## 🧰 Tech Stack

- [NestJS](https://nestjs.com/)
- [Redis](https://redis.io/)
- [@nestjs/microservices](https://docs.nestjs.com/microservices/basics)
- [@nestjs/config](https://docs.nestjs.com/techniques/configuration)

---

## ✅ Best Practices Followed

- Modular and scalable folder structure
- `.env` usage for environment configuration
- Plain text responses for minimal overhead
- Microservices clearly separated for clarity
- REST and Redis combined in hybrid design

---

## 📝 Notes

- Make sure Redis is running on `localhost:6379`
- You can use [RedisInsight](https://redis.com/redis-enterprise/redis-insight/) or `redis-cli` to inspect live data
