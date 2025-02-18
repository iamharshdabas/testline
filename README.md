# Quiz Application

This web application allows users to take quizzes with different question types, track their progress, and review their results. It's built with React and Next.js for the frontend and uses Zustand for state management and localForage for storing attempt history.

## Setup

This project is built with Next.js for the frontend. Follow the instructions below to set up and run the application.

### Frontend Setup

1. **Install Dependencies:**

   ```bash
   bun i
   ```

   or

   ```bash
   npm install
   ```

2. **Run the Development Server:**

   ```bash
   bun run dev
   ```

   or

   ```bash
   npm run dev
   ```

## Development Process

1. **Functionality Planning:** The initial phase involved defining the core functionalities of the quiz application, such as:

   - Taking quizzes with multiple-choice and integer answer questions.
   - Displaying question progress.
   - Providing per-question timers.
   - Submitting answers and getting immediate feedback.
   - Showing overall results and score.
   - Storing and displaying attempt history using local storage.

2. **Component Development:** React components were built to handle different parts of the application UI, including:

   - `QuestionCard`: For displaying individual quiz questions and handling user input.
   - `Result`: For showing the quiz results and score.
   - `Test`: The main test container component, orchestrating the quiz flow.
   - Reusable UI components (using `@heroui/ui` library).

3. **State Management with Zustand:** Zustand was implemented to manage the quiz state globally, including:

   - Current question index.
   - User answers and submission status.
   - Quiz progress.
   - Overall test state (showing results, resetting test).
   - Attempt history.

4. **Iterative Refinement:** The application was iteratively refined based on testing and feature enhancements, including:

   - Improving input validation and user experience for integer answer questions.
   - Refactoring components for better structure and reusability.
   - Removing unnecessary features (like the global timer) based on user feedback and design decisions.
   - Adding local storage for attempt history persistence.
   - Improving code clarity and maintainability throughout the development process.

## Technologies Used

- **Frontend:**
  - [Next.js](https://www.google.com/url?sa=E&source=gmail&q=https://nextjs.org/) - React framework for building web applications.
  - [React](https://www.google.com/url?sa=E&source=gmail&q=https://reactjs.org/) - JavaScript library for building user interfaces.
  - [@heroui/ui](https://www.google.com/url?sa=E&source=gmail&q=https://www.npmjs.com/package/@heroui/ui) - UI component library used for building the user interface.
  - [Zustand](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/pmndrs/zustand) - State management library.
  - [localForage](https://www.google.com/url?sa=E&source=gmail&q=https://localforage.github.io/localForage/) - JavaScript library for offline storage using IndexedDB, WebSQL, or localStorage.
- **Utilities:**
  - [TypeScript](https://www.google.com/url?sa=E&source=gmail&q=https://www.typescriptlang.org/) - For type-safe JavaScript development.
  - [Zod](https://www.google.com/url?sa=E&source=gmail&q=https://zod.dev/) (Initially considered, but removed in the final version for input validation - can be easily re-integrated).

## Project Structure

````

quiz-application/
├── src/
│ ├── components/
│ │ ├── text/ # Components for quiz text and content
│ │ │ ├── card.tsx # Question Card component
│ │ │ ├── result.tsx # Result display component
│ │ │ ├── Test.tsx # Main Test component
│ │ ├── ui/ # Reusable UI components (initially QuizCard, removed later)
│ ├── store/
│ │ ├── test.ts # Zustand store for test state management
│ ├── types/
│ │ ├── quiz.ts # TypeScript types for quiz data
│ ├── utils/
│ │ ├── helpers.ts # Utility functions (e.g., answer checking, time formatting)
│ ├── pages/
│ │ ├── index.tsx # Home page
│ │ ├── test.tsx # Test page
│ ├── public/ # Public assets
│ ├── styles/ # Global styles (if any)
│ └── ... # Other Next.js configuration files
├── package.json
├── README.md
├── tsconfig.json
└── ...

```

## Getting Started

1.  Clone the repository to your local machine.
2.  Navigate to the project directory in your terminal.
3.  Run `bun install` or `npm install` to install dependencies.
4.  Run `bun run dev` or `npm run dev` to start the development server.
5.  Open your browser and go to `http://localhost:3000` to view the application.

```
````
