
const reverseString = ( reverseMe ) => reverseMe.split("").reverse().join("");


const getCounterString = ( count ) =>
{
    
    let counterString = "";

    while( count > 0 )
    {

        let appendThis = "*" + reverseString( count.toString() );
        
        if( appendThis.length > count )
        {
            appendThis = appendThis.substring( 0, count );
        };

        counterString = counterString + appendThis;

        count = count - appendThis.length;
    }

    return reverseString( counterString );
};


const count = window.prompt( "Counterstring Length?", "100" );

const counterString = getCounterString( count );

console.log( counterString );

document.activeElement.value = counterString;