console.log('Hello it me');
pageLoader();


// Function to load our page and set event listeners
function pageLoader(){
    console.log('Loading the page with functionality...');

    // Get the color buttons and add change background event listener
    const colorButtons = document.getElementsByClassName('light-dark-button');
    for (let btn of colorButtons){
        btn.addEventListener('click', changeBackgroundColor);
    };

}

// Create a function that will change the background color
function changeBackgroundColor(e){
    console.log('clicked color button');
    console.log(e.target.value);
    if (e.target.value === 'Dark'){
        document.body.style.backgroundColor = '#C96E12'
    } else {
        document.body.style.backgroundColor = '#FFF897'
    }
}
