# HabitTracker

The Habit Tracker is a react application using react and redux. In which user will be able to define habits and track them. The Habit Tracker is a front-end project developed and designed to help users track their habits. It also tracks the status of habit.

## Deployed On
### Vercel
<img src="https://github.com/AdityaLambat/skill-icons/blob/main/icons/Vercel-Dark.svg" width="50">

## Hosted Link
(https://habit-tracker-chi-flax.vercel.app/)

## Features
```
1. Add multiple habits to track.
2. Track each habit everyday.
3. Three Status for habit
```
<img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="15"> Mark a habit as done<br>
<img src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png" width="15"> Mark a habit as not done<br>
<img src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png" width="15"> Mark a habit that action was not taken   

```
4. A view to show all current habits.
5. Add button where you can add a new habit to track
6. A view to display 7 days of each habit
```
## Technologies Used

The AlbumsCollection is build using the following technologies:

<p>
  <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/CSS.svg" alt="CSS Icon" width="50">
  <img src="https://github.com/AdityaLambat/skill-icons/raw/main/icons/JavaScript.svg" width="50">
  <img src="https://github.com/AdityaLambat/skill-icons/blob/main/icons/React-Dark.svg" width="50">
  <img src="https://github.com/AdityaLambat/skill-icons/blob/main/icons/Bootstrap.svg" width="50">
  <img src="https://github.com/AdityaLambat/skill-icons/blob/main/icons/Redux.svg" width="50">
</p>

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
