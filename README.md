# unit-4-game

### Game Logic 
 Here's how the game works:

   * There are four players displayed as buttons/images of said players on the page.

   * The player will be shown a random number at the start of the game.

   * When a player clicks on his players image, it will add a specific amount of points to the player's total score. 

     * The game does not display this amount until the player clicks the image.
     * When they do click one, this updates the player's score counter as a total.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

   * Of course, the user's score (and score counter) will reset to zero.

   * At the end, the game restarts and the number of wins is increased, same goes for the amount of losses. No need to refresh each time a player wins or loses this is reset automatically.


## Game functions || technology used 

* The random number shown at the start of the game is between 8 - 73.

* Each player randomly hits a hidden value between 1 - 4.

* Player that matches the exact score displayed randomly at the start of the game wins, player that goes over loses. 

* Styled with css, functions set by javascript. 

