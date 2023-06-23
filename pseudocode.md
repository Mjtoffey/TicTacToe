MoSCoW

    Must Haves

        -Square playing board
        -X,O for players
        -Reset Game Button
        -Limited to one space per "character"/move
        -Once spaces are filled, leave "unavailable" until game over
        -show prior game results or game tracker
        -visual indication of whose turn it is

    Should Haves

        -undo move button?
        -winner declaration

    Could Have

        -different game formats?
        -different game options built off of the page
        -AI as player 2 (maybe not yet but good to keep in mind)


    QUESTIONS

        -What is the most efficient way to measure winner?
            ~ empty object for each square that then records input and runs checks on all winning methods?
            ~ possibly an await function that also takes into account recorded placement of "moves"
        -Can you use an individual event listener for each box that takes into account user "state"?
            ~Can the box respond to player 1 with X and player 2 with O
        -How can I leverage recent array methods to make functions more clear and consistent?
        -Should player values and board be held within objects?
            -how to record input within object?
            -would using a standard array allow for better data recording later?
                -do array methods work with object notation?

    THINKING OUT LOUD/COMMENTS
        -if I were to use objects then using key/value pairs would allow for readability within checkWin function, but would that make it difficult to evaluate for appropiate win function?
        -using array methods would make for ideal evaluation process, but would I need multiple arrays for checkWin?
            -if i do use an array would I be able to add additional values with recordMove? Do I need to add additional values or can one replace another?
        -think about elements in Atomic Design - how do the peices all fit together? (visually, and functionally)

BEGIN

INIT

    1. createBoard
        3x3 square with the ability to take on user event
        Done by using empty check boxes? see questions
        place in middle of page

    2. setPlayers
        -2 players
            -each player has assigned symbol (X,O)
            -limited turn count for each player
            -should be referenced within trackTurn

    3. recordMove
        -update grid to display user input on board
            -move should also be recorded internally to allow for checkWin condition later
            -if space taken/used then event listener null

    4. trackTurn
        -record turns starting at 0, going no further than 9
        -indicate player turn below board
        -if turns === 9, then check for winner

    5. checkWin
        -check all possible solutions for winner
            -ie... Horizontal x3, Vertical x3, Diagonal x2
                -checkWin should run followinig all moves as game can end as quickly as turn 5

    6. actionButton
        - Button should funciton as full game reset
            - clear all recorded data (trackTurn, recordMove, Player data, checkWin(?))

    7. declareGame
        -if player1 or player2 reaches goal alert "(insert player) has won!"
        if neither player1 nor player2 reaches goal alert "Tie!"

FUNCTIONS

    1. onLoad event listener
        -render board
        -render trackTurn with values at 0
        -render actionButton

    2. onClick event listener --->?
        -listeners wihtin board (9)
        -accepts player state (see questions)
        -after space is clicked, function will disable (could be own funciton?)
        -checkWin accepts input
        -trackTurn accepts onClick

    3. trackTurn (Loop)
        -display current player turn
            -with current "character"
        -if onClick occurs
            -then update trackTurn with new information
                -must allow function to repeat min of 5 times/max of 9

    4. checkWin
        -if turns === 5 then run
            -evaluate board Horizontal [1,2,3,], Vertical [1,2,3], Diagonal [1,2]
            -if one of eight directions returns same value 3x then declare winner
        -if turns === 9 then end
            -evaluate board Horizontal [1,2,3,], Vertical [1,2,3], Diagonal [1,2]
            -if same value is not detected declare tie

    5. declareGame
        -if player(x) passes checkWin
            -then alert win
        -if checkWin returns null if turns === 9
            -then alert tie

END
