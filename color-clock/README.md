# Color Clock

A simple React + Vite demo that displays the current time in the center of the page.

## Features

- Displays the formatted time using \date-fns\
- Centers the clock in the viewport with a styled time panel
- Uses Vite for fast development and HMR

## Files of interest

- \src/App.jsx\ — main clock component
- \src/App.css\ — styles for the centered time display
- \src/index.css\ — global CSS (empty by default)

## Run locally

1. Install dependencies:

   npm install

2. Start the development server:

   npm run dev

3. Open the local URL shown in the terminal.

## Build for production

npm run build

## Notes

- The current clock display is formatted using \Format(new Date(), 'HH:mm:ss')\.
- The app renders the time inside a \.time-container\ wrapper for clean centering.
