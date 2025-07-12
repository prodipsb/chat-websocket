#  Real-Time Chat System

A full-stack real-time chat system built with:

- **Frontend**: Next.js (App Router)
- **Backend**: Express.js + Socket.io
- **Database**: MongoDB (via Mongoose)
- **WebSocket**: Real-time communication using Socket.io

---

## 🛠 Features

- ✅ User Registration
- 💬 Real-Time Messaging via WebSocket
- 📦 Message Storage in MongoDB
- 🔍 Message Fetching via REST API
- 🧑‍🤝‍🧑 One-to-One Chat Support

---

## 📁 Project Structure
chat-app/
├── backend/ # Express server
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/ # Next.js app
│ ├── app/
│ ├── socket.js
│ └── page.js



---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/prodipsb/chat-websocket.git
cd chat-websocket


cd backend
npm install
npm run dev


cd ../frontend
npm install
npm run dev


