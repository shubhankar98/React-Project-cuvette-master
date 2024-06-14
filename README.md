Problem Statement:

Challenge is to build out a minimal note taking app.

Features List:

-> User should be able to create group for notes, a popup open up to create a new group and user can choose a color for the group. If the user clicks outside the popup then you need to close the popup.

-> User should be able to add notes in a particular group. Along with notes you need to show the note creation date and time.

-> User should be able save the note by clicking on the Send icon in the text input area, and if no text is present then the Send icon should be disabled

You need to save the notes in localstorage, every notes and group should persist on page reload/ refresh.

-> As soon as the user changes the group, you need to fetch all the notes related to that particular group

-> You will need to create both desktop and mobile responsive design for the assignment

-> You need to add all kinds of validation checks and error handling related to group and notes

-> Apart from these, you must follow all the instructions mentioned in the Figma design page as well

-> Your output should look exactly the same like the Figma designed pages

# Notes Application

## Overview
This React application is designed for managing notes efficiently. It facilitates creating, selecting, and displaying notes through various components and features.

## Key Concepts
1. **React Components:**
   - Functional components for different functionalities related to note management.
   - Utilization of `useContext` hook for accessing shared state across components.

2. **React Hooks:**
   - Effective use of `useState` for managing local component state.
   - Implementation of `useEffect` for handling side effects and lifecycle events.

3. **Context API:**
   - Implementation of the `AppContext` to share state among components.

4. **Conditional Rendering:**
   - Components are conditionally rendered based on specific conditions.

5. **Event Handling:**
   - Definition of event handlers to manage user interactions effectively.

6. **CSS Styling:**
   - Styling is achieved using CSS, incorporating features such as flexbox, grid, and media queries.
   - Scoped styling is implemented using CSS modules.

7. **React Router:**
   - React Router can be integrated for navigation within the application.

## Components
1. **SelectNotes:**
   - Component responsible for selecting notes.
   - Utilizes the `AppContext` to access shared state.

2. **NoteHeading:**
   - Represents a note heading within the application.
   - Utilizes the `useContext` hook to access shared state.

3. **CreateNote:**
   - Allows users to create new notes.
   - Implements random letter generation for note groups.
   - Uses `useState` and `useEffect` hooks for managing state and side effects.

4. **NoteSection:**
   - Main component responsible for displaying and adding notes.
   - Utilizes the `AppContext` to access shared state.
   - Implements conditional rendering and event handling.

## Hooks
- **useState:** Used for managing local component state.
- **useEffect:** Employed for handling side effects and lifecycle events.
- **useContext:** Utilized for accessing shared state across components.

## Styling
- CSS is employed for styling purposes, incorporating features such as flexbox, grid, and media queries.
- Scoped styling is implemented using CSS modules for better maintainability and encapsulation.

## Usage
1. Install dependencies: `npm install`
2. Run the application: `npm start`

Feel free to reach out for any further clarification or assistance.

## Getting Started
Follow these steps to set up and run the Notes Application on your local machine.

### Prerequisites
- Ensure Node.js and npm are installed on your machine.
