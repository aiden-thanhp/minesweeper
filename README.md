# Minesweeper

Yupp. This is your sweet old Minesweeper game. I made this as the first portfolio game project just to brush up some of my Angular skill set. 

This game is made for playing on computer only because it utilizes the shift key functionality.

## My Version

![UI Screenshot](https://firebasestorage.googleapis.com/v0/b/my-portfolio-496c6.appspot.com/o/portfolio-minesweeper.png?alt=media&token=24e7fb24-3949-41bf-a369-9c42616eff0c)

## Getting Started
[Play the Game here](https://minesweeper-979d9.web.app/)!

### Basic Gameplay
1. Select your difficulty level.
* Easy = 9x9, 10 mines
* Medium = 16x16, 40 mines
* Hard = 24x20, 99 mines
2. Click anywhere on the board to begin and start the timer.
*The numbers depict how many mines are adjacent to any given cell.
3. Use **"Shift + Click"** to add flags to a cell if you think it's a mine.


### Winning/Losing
* If you hit a mine, it is a gameover.
* You will win when you discover all the cell without clicking onto any mines!

## Technologies Used
* HTML
* SCSS
* TypeScript
* Angular

### Components
I have splited the game console into smaller components for easier maintenance. 

#### Play-Wrapper
This is the main console that contains all the components to play the game.

#### Timer
This component is to show the total time it has taken for you to play the game. The timer will start when you first click on a cell and will stop whenever you lose or win.

#### Theme-Switcher
You can switch from dark or light mode for more accessibility.

#### Grid
This is the main component to hold all the cells of the game.

#### Mode-Selection
This is for you to select between easy, medium or hard mode.

#### Message
This is the component to display the winning or losing message.

### SCSS
I am leaning towards using SCSS more because it makes my coding easier when I can have nested selectors.

### Pipe
I have only one pipe to change the time from pure number variable to a time display

### Service
Services are used to update the message if there is a winner or loser, and to update the timer with setInterval function.

### Store
Here is where I store the state for the game. The game state is an object that includes the following keys:
* win: boolean,
* lose: boolean,
* open: number,
* shift: Array<string>
* total: number,
* bomb: [number, number],
* grid: Array<Array<number | null>>

### Utils
Here is where holds all the logic to randomize the mines and play the game.

## Thank you for reading! I hope you enjoy the game.