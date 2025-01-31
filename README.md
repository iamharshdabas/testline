# Exam Prep Application

This is a React-based application designed to help users prepare for exams like REET, NEET, and State PSCs. It provides a gamified experience.

---

## Table of Contents

1. [Video](#video)
2. [Screenshot](#screenshot)
3. [Features](#features)
4. [Project Structure](#project-structure)
5. [Components](#components)
6. [State Management](#state-management)
7. [Routing](#routing)
8. [API Integration](#api-integration)
9. [Usage](#usage)
10. [Dependencies](#dependencies)

---

## Video

[![Watch the video](https://raw.githubusercontent.com/iamharshdabas/testline/main/thumbnail.png)](https://raw.githubusercontent.com/iamharshdabas/testline/main/video.mp4)

---

## Screenshot

![screenshot](https://raw.githubusercontent.com/iamharshdabas/testline/main/screenshot.mp4)

---

## Features

- **Home Page**: Introduces the application and provides a link to start the test.
- **Test Page**: Displays a series of questions with a timer, progress tracking, and detailed solutions.
- **Timer**: A countdown timer to simulate real exam conditions.
- **Progress Tracking**: Tracks the user's progress through the test.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

---

## Project Structure

```
src/
├── api/                # API-related functions
├── components/         # Reusable UI components
├── config/             # Configuration files (e.g., site URLs, text styles)
├── hooks/              # Custom React hooks
├── layouts/            # Layout components
├── pages/              # Application pages
├── store/              # Zustand state management
├── types/              # TypeScript types
├── utils/              # Utility functions
├── App.tsx             # Main application component
```

---

## Components

### 1. **App Component**

- The root component that sets up routing for the application.
- Uses `react-router-dom` to define routes for the home page and test page.
- Wraps the pages in a `DefaultLayout` for consistent styling.

### 2. **IndexPage**

- The home page of the application.
- Displays a welcome message and a button to start the test.

### 3. **TestPage**

- Fetches test data using the `useGetTest` hook.
- Displays a loading spinner while fetching data.
- Renders the `Test` component with the fetched questions.

### 4. **Test Component**

- Manages the test-taking experience.
- Displays a stopwatch, progress bar, and question cards.
- Handles user answers and navigation between questions.

### 5. **QuestionCard**

- Displays a single question with multiple-choice options.
- Allows users to select an answer and submit it.
- Shows detailed solutions after submission.

### 6. **StopwatchView**

- Displays the remaining time for the test.
- Automatically stops the test when the timer reaches zero.

### 7. **StopwatchAction**

- Provides a button to start the test timer.

### 8. **Result**

- Displays the user's score after completing the test.
- Provides a button to retake the test.

---

## State Management

The application uses **Zustand** for state management. The `useTestStore` hook manages the following state:

- **Current Question Index**: Tracks the currently displayed question.
- **User Answers**: Stores the user's selected answers and submission status.
- **Progress**: Tracks the percentage of questions answered.
- **Stopwatch**: Manages the countdown timer.
- **Test Results**: Tracks whether to show the result page.

---

## Routing

The application uses `react-router-dom` for routing. The routes are defined in the `App` component:

- **Home Page**: `/`
- **Test Page**: `/test`

---

## API Integration

The `useGetTest` hook fetches test data using `@tanstack/react-query`. It calls the `getTest` function from the `api` directory to retrieve questions.

---

## Usage

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run the Application**:

   ```bash
   npm run dev
   ```

3. **Start the Test**:

   - Click the "Start now" button on the home page.
   - Answer the questions before the timer runs out.

4. **View Results**:
   - After completing the test, view your score and retake the test if desired.

---

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: For routing and navigation.
- **Zustand**: For state management.
- **React Query**: For data fetching and caching.
- **Hero UI**: A UI library for components like buttons, cards, and spinners.
- **React Markdown**: For rendering markdown content (e.g., detailed solutions).

---

## Customization

- **Text Styles**: Modify the `text` utility in `src/config/primitives.ts` to customize text styles.
- **API Endpoint**: Update the `getTest` function in `src/api/get/test.ts` to fetch questions from your backend.
