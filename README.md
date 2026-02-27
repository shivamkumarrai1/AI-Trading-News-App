# AI Trading News Feed App (Expo SDK 54)

A simple AI-powered Trading News Feed mobile application built using React Native with Expo (SDK 54).

The app fetches and displays the latest stock/crypto headlines (currently using mock data) and includes an optional AI Summary feature.

# Demo Video

[watch Demo Video]: https://github.com/shivamkumarrai1/AI-Trading-News-App/blob/main/demo.mp4

# Features

# News Feed

Displays 10 market headlines

Each item shows:

Title

Source

Published Time

Thumbnail Image

# AI Summary (Mock Implementation)

“AI Summary” button on each news card

Opens a modal popup

Displays concise 3-line summary

Currently uses mock AI-generated text

# Pull-to-Refresh

Users can refresh to reload latest headlines

Simulates real-time market updates

🛠 Tech Stack

React Native

Expo SDK 54

JavaScript

Functional Components + Hooks

Modal UI Pattern

Mock Data (No LLM/API integrated yet)

# Project Structure
/project-root
│
├── App.js
│
├── components/
│   ├── NewsCard.js
│   └── SummaryModal.js
│
├── package.json
└── README.md

# Environment Requirements

Make sure you have:

Node.js (v18 or later recommended)

npm or yarn

Expo CLI

Expo Go app (Android/iOS)
OR Android Emulator / iOS Simulator

Check Expo version:

npx expo --version

This project uses:

Expo SDK 54

# Installation & Setup

1️ Clone the Repository
git clone <your-repository-url>
cd <project-folder>
2️ Install Dependencies
npm install
3️ Start the Expo Development Server
npx expo start
4️ Run the App

# You can run the app in one of the following ways:

- Scan QR code using Expo Go app

- Press a for Android emulator

- Press i for iOS simulator (Mac only)

- Press w for Web

# How the App Works

1️ App.js

Loads mock news data

Manages state

Handles pull-to-refresh logic

Controls summary modal visibility

2️ NewsCard Component

Displays individual news item

Triggers summary modal

3️ SummaryModal Component

Displays AI-style summary

Handles modal open/close state

# Future Improvements

Integrate real news API:

Finnhub

NewsAPI

RapidAPI

Add OpenAI API for real AI summaries

Add sentiment analysis (Bullish / Bearish)

Improve UI animations

Add category filters (Stocks / Crypto)

Add loading indicators & error states
