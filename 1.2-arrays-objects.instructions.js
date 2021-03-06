/* 
    - write an object literal that stores information about your favorite 
    movie. nameOfMovie, runTime, characters, and genre should be keys 
    directly inside the object.
        - characters will be an array that should store no more than 2 
        character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more 
        than 2 item objects. These items objects can have key-value pairs 
        of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).
    - use console.log statements to show that you can print out the 
    nameOfMovie, runTime, the characters, the name of a character, and one 
    of the items a character has. Your console should look similar to the 
    screenshot below.
*/

//NOTE: Write your code below and push back to your github branch.  
//SUBMIT YOUR GITHUB URL IN CANVAS

let movie = {
        nameOfMovie: '2001: A Space Odyssey',
        runTime: '159 minutes',
        characters: [{name: 'Dr. Dave Bowman', item:'helmet'}, 
        {name: 'Dr. Frank Poole', item: 'psych report'},
        {name: 'Dr. Heywood R. Floyd', item: 'chicken sandwich'},
        {name: 'HAL 9000 ', item: 'circuits'},
        {name: 'The Apes', item: 'bone tools'}
    ]}

    console.log(movie.nameOfMovie);
    console.log(movie.characters[1]);
    


