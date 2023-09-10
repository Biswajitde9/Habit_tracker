# Habit Tracker App <a href="" target="_blank">Live</a>

This is a full-stack habit tracker app built using Node.js and EJS (Embedded JavaScript) as the templating engine. The app allows users to define habits and track their progress daily. Users can mark each habit as "Done," "Not done," or "None" for each day.

## Features

- Add multiple habits to track, such as reading a book, going to the gym, etc.
- Track each habit every day with three statuses: "Done," "Not done," or "None."
- View to show all current habits with an "Add" button to add new habits for tracking.

## Tech Stack

The app is built using the following technologies:

**Frontend:**
- HTML
- CSS
- JavaScript
- EJS (Embedded JavaScript) for templating

**Backend:**
- Node.js
- Express.js (to handle routing and server-side logic)

**Database:**
- For simplicity, we will use MongoDB.

## Installation and Setup

1. Clone the repository from GitHub:

```bash
git clone 
```

2. Install Node.js and npm (Node Package Manager) on your system if not already installed.

3. Install project dependencies by running the following command in the root folder of the project:

```bash
npm install
```

4. Start the application by running the following command:

```bash
npm start
```

5. Open your web browser and navigate to `http://localhost:2000` to access the Habit Tracker app.

## How to Use the App

1. Upon opening the app, you will see a list of habits that you are currently tracking, along with their status for today.

2. To add a new habit, click on the "Add Habit" button. This will take you to a new page where you can enter the name of the habit you want to track and click "Save" to add it to your list of habits.

3. Once you have habits in your list, you can update their status for today. Click on the dropdown beside each habit and select one of the following options:
   - "Done": If you have successfully completed the habit today.
   - "Not done": If you did not complete the habit today.
   - "None": If you did not take any action on the habit today.

4. The app will automatically save the updated status for each habit.

## Conclusion

The Habit Tracker app provides a simple and effective way to track your daily habits. You can use this app to build and maintain positive habits, making progress towards your goals. Feel free to customize the app further and add more features to suit your specific needs. Happy habit tracking!