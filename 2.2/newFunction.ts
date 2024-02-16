export function myFunction(myNum: number): string {
    if (myNum == 5) {
        return 'true';
    } else if(myNum < 5 && myNum >= 0) {
        return 'false';
    }else if (myNum > 5) {
        return 'big';
    }else {
        return 'negative';
    };
};

/* 
EN: Add your own function starting on line 20 
!Write a function that returns a movie when the user inputs movieOne - movieFive
!The movies are up to you use the 'writeIfElseStatment' example from class for help 
!Add expects to the test checking to make sure you are getting back the correct movie.
*/

export function blockBuster(movie: string): string {
    if (movie == "Movie One") {
        return "Diary of the County Priest"; 
    } else if (movie == "Movie Two") {
        return "2001: A Space Odyssey";
    } else if (movie == "Movie Three") {
        return "Barry Lindon"; 
    } else if (movie == "Movie Four") {
        return "Piano Teacher"; 
    } else if (movie == "Movie Five") {
        return 'Nostalghia'; 
    } else {
        return `I'm sorry we do not carry ${movie}`; 
    }
};
