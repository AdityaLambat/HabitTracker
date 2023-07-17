# HabitTracker

The Habit Tracker is a react application using react and redux. In which user will be able to define habits and track them.

## Hosted Link
https://habittracker-hdd7.onrender.com/

## Features

1. Add multiple habits to track.
2. Track each habit everyday.
3. Three Status for habit
   |-> Done - Mark the habit as done for a day
   |-> Not done - Mark the habit as not done for a day
   |-> None - User did not take any action on a habit for a day
4. A view to show all current habits.
5. Add button where you can add a new habit to track
6. A view to display 7 days of each habit

## Technologies Used

The AlbumsCollection is build using the following technologies:
````
1. React
2. Redux
3. HTML
4. CSS
5. Bootstrap
````

## Getting Started

To set up the API on your local machine, follow these steps:
````
1. Clone the repository.
2. Install the packages using npm
````

### After reaching the project directory you have to run the following command.
````
 npm start
````

### Folder Structure

````
habittracker
  ->|           
    |---> node_modules 
    |                  
    |---> public --->|---> index.html
    |
    |---> src --->|
    |             |---> components --->|
    |             |                    |---> App.js
    |             |                    |---> DayView.js
    |             |                    |---> Habit.js
    |             |                    |---> Habits.js
    |             |                    |---> Home.js
    |             |                    |---> Navbar.js
    |             |                    |---> WeekView.js
    |             |---> redux --->|
    |             |               |---> features --->|
    |             |                                  |---> habitslice.js
    |             |               |---> store.js
    |             |---> index.css
    |             |---> index.js
    |---> README.md
    |---> package-lock.json
    |---> package.json
    ````
