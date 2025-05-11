![prisma-erd](https://github.com/user-attachments/assets/58a4bb72-3d2a-429a-a22b-c90f7bee7ba6)# 🧥 Second-hand Clothing Auction Web App

## 📌 Project Description

This is a real-time auction web application for second-hand clothing, providing an engaging and fair bidding experience for users. It allows browsing without login, but bidding requires authentication to ensure integrity and accountability.

---

## ✅ Key Features

1. **Guest Browsing**

   * Users can view auction items without logging in.

2. **Login Required for Bidding**

   * Only authenticated users can participate in auctions.

3. **Real-time Bidding with Auto Time Extension**

   * The highest bidder at the end of the timer wins.
   * If a bid is placed within the final minute, the timer resets to 1 minute from the current time to allow continued bidding.

4. **Auto-add to Cart**

   * The winning item is automatically added to the winner's cart within 30 seconds after auction ends.

5. **24-hour Payment Window**

   * Users must complete payment within 24 hours once the item is in the cart.
   * Failure to pay in time may result in penalties, such as account suspension.

---

## ⚙️ Backend Stack

* **Express.js** – Backend framework
* **Prisma ORM** – Database management
* **Socket.IO** – Real-time bidding support
* **JWT (jsonwebtoken)** – Secure authentication
* **bcrypt / bcryptjs** – Password hashing
* **Cloudinary** – Image upload and management
* **node-cron** – Scheduled tasks (e.g., cart expiration checks)
* **Other Tools**: `dotenv`, `cors`, `morgan`

---

## 🎨 Frontend Stack

* **React.js + Vite** – Fast, modern UI
* **TailwindCSS** – Responsive, utility-first styling
* **React Router v7** – Routing and navigation
* **Zustand** – Lightweight state management
* **React Hook Form + Zod** – Form validation and input handling
* **Socket.IO Client** – Real-time updates
* **UI Enhancements**: `react-toastify`, `swiper`, `rc-slider`

---

## 🔐 Security

* JWT-based session management
* Hashed passwords stored securely
* Route protection for sensitive actions

---

## 🧪 Getting Started

```bash
# Backend
cd server
npm install
npm run dev

# Frontend
cd ../client
npm install
npm run dev
```

---
## 📈 ER Diagram

![image](https://github.com/user-attachments/assets/fa768e27-9843-4abc-a37c-822901d7f0dc)

---

## 📈 Responsive Design Showcase


---


## Client Site

<table>
    <tr>
    <th align="center">Desktop</th>
    <th align="center">Mobile</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/417d79af-a258-4cea-b7fe-3aba23d59528" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/9689b2fd-02cb-40ac-9ec5-fad3bdb83809" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/a496f540-76b3-43e5-bf81-48d48347abd3" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/bb17bdde-3bdd-40bf-908d-724f392bb451" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/c155503e-40bd-416c-9180-db833a9398d2" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/15bf4066-c0e4-45e0-8ecf-373125b77df5" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/bee47ebd-d59b-4935-8c98-d115d73e12da" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/6861de6a-8fbb-4d5b-a291-1694f6330769" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/46800f6f-5219-4cf9-b195-4b9ea629b888" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/d8c5cfe9-b537-43a4-b4e0-b578f6da7788" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/227a7084-8c21-451c-b001-65194f8f37ed" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/d4585576-0665-436b-a324-f2ba210a0df8" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/7d48b736-c2e1-4928-81f3-097000bf6b2a" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/c71c150b-1503-4767-a3e1-272d5938ac51" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/442805db-ccff-4c75-ab78-7125225fdccc" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/240671a8-d8d0-48c6-8af5-a351092cd6b4" width="100%"></td>
  </tr>
</table>


---

## Admin Site

<table>
<tr>
    <th align="center">Desktop</th>
    </tr>
    <tr>
    <td><img src="https://github.com/user-attachments/assets/9fe7eef1-e361-4d0d-a27f-e03257f67f7c" width="100%"></td>
  </tr>
    <tr>
    <td><img src="https://github.com/user-attachments/assets/021949bf-bc8e-4e86-9f04-9e0c874493a8" width="100%"></td>
  </tr>
        <tr>
    <td><img src="https://github.com/user-attachments/assets/e59f6b35-1515-418c-9239-84cded3973db" width="100%"></td>
  </tr>
    <tr>
    <td><img src="image](https://github.com/user-attachments/assets/ea6b68e9-059d-4ce5-bfce-d94d01f37736" width="100%"></td>
  </tr>
      <tr>
    <td><img src="https://github.com/user-attachments/assets/e3f9ed41-f932-4383-8063-24ad2d1cba97" width="100%"></td>
  </tr>
</table>

---


