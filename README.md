# User Management System - Project Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Branch Structure](#branch-structure)
3. [Technology Stack](#technology-stack)
4. [Project Architecture](#project-architecture)
5. [Features](#features)
6. [Authentication Methods](#authentication-methods)
7. [Installation & Setup](#installation--setup)
8. [API Endpoints](#api-endpoints)
9. [Database Schema](#database-schema)
10. [Folder Structure](#folder-structure)

---

## 🎯 Project Overview

A full-stack **User Management System** built with **Node.js**, **Express**, **MongoDB**, and **EJS** templating. The project demonstrates different authentication strategies (Stateful Session-based and future JWT implementation) with user data isolation.

**Key Concept:** Each authenticated user can only see and manage entries they created, ensuring complete data isolation between users.

---

## 🌿 Branch Structure

| Branch                       | Description                                  | Authentication                  | Status              |
| ---------------------------- | -------------------------------------------- | ------------------------------- | ------------------- |
| **main**                     | Latest stable version with Express-Session   | Express-Session (Stateful)      | ✅ Production-ready |
| **default**                  | Basic CRUD operations without authentication | None                            | ✅ Starter template |
| **Stateful**                 | CRUD + UUID-based session authentication     | UUID + Cookie Parser (Stateful) | ✅ Complete         |
| **Stateful-express-session** | CRUD + Express-Session authentication        | Express-Session (Stateful)      | ✅ Complete         |
| **Stateless**                | CRUD + JWT authentication                    | JWT (Stateless)                 | 🚧 Planned          |

---

## 🛠️ Technology Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js v5.2.1** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose v9.0.2** - MongoDB ODM

### Authentication

- **express-session v1.18.2** - Session management (main branch)
- **uuid v13.0.0** - Session ID generation (Stateful branch)
- **cookie-parser v1.4.7** - Cookie parsing

### View Engine

- **EJS v3.1.10** - Embedded JavaScript templating

### Development

- **nodemon v3.1.11** - Auto-reload during development
- **dotenv v17.2.3** - Environment variable management

---

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Client (Browser)                        │
│                   EJS Views (Frontend)                      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Express Middleware                        │
│  ┌──────────────┬────────────────┬─────────────────────┐  │
│  │   Session    │  Auth Middleware│   Static Files     │  │
│  │  Management  │  (isAuth/Guest) │   (CSS, JS)        │  │
│  └──────────────┴────────────────┴─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                     Routes Layer                            │
│  ┌──────────────────────┬──────────────────────────────┐  │
│  │  Static Routes       │   API/User Routes            │  │
│  │  (Auth Pages)        │   (CRUD Operations)          │  │
│  └──────────────────────┴──────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Controllers                               │
│  ┌──────────────────────┬──────────────────────────────┐  │
│  │  controller/static.js│   controller/routes.js       │  │
│  │  (Login/Signup)      │   (CRUD Handlers)            │  │
│  └──────────────────────┴──────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
... (555 lines left)
