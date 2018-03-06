'use strict';

/******************************************************** 
 All global variables here. 
********************************************************/

const STORE = {  // All the variables connected with the state of the DOM go here.
    currentView: 'splash',
    line_1: '',
    line_2: '',
    line_3: '',
    line_4: '',
    line_5: ''
  };

/******************************************************** 
Step 1: Render the DOM. 
********************************************************/

/******************************************************** 
Step 1a: Generate the HTML code. 
********************************************************/

const generateHtml={
    doHtmlPages: function(){
        console.log('In the doHtmlPages method.');
        this.splashHtml();
        this.instructionsHtml();
        this.mainHtml();
        this.ransomNoteHtml();
    },

    splashHtml: function(){
        console.log('In the splashHtml method.');
        let pageSplashHtml=`
        <form class="buttonForm">
            <div class="buttonBox"><button type="button" id="js-instructionsButton" class="js-button js-instructionsButton">Read Instructions</button></div>
            <div class="buttonBox"><button type="button" id="js-userButton" class="js-button js-userButton"></button></div>
        </form>
        `;
        
        $('div.js-pageViewSplashHtml').html(pageSplashHtml);
        $('div.js-pageViewSplashHtml').hide();
    },

    instructionsHtml: function(){
        console.log('In the instructionsHtml method.');
        let pageInstructionsHtml=`
        <div class='instructionsBox'>
            <h1>Welcome to Ransom Note!</h1>
            <p>This app takes text which you type in and converts it to a series of photos of letters, numerals, and punctuation.</p>
            <p>In the text input page (you get there by clicking the Start button) there are five text fields. Enter your text in one or more of them, then click the Continue button. A new screen will appear with your text turned to photos.</p>
            <p>If you don't like any of the random photos selected, you can change them. Just click on a photo to get a new random photo.</p>
            <p>When you're happy with the results, you can click on the Screen Shot button to take a picture of your ransom note text! Click the Back button to edit your text, or enter new text.</p>
        </div>
        <form class="buttonForm">
            <div class="buttonBox"><button type="button" id="js-userButton" class="js-button js-userButton"></button></div>
        </form>
        `;
         
        $('div.js-pageViewInstructionsHtml').html(pageInstructionsHtml);
        $('div.js-pageViewInstructionsHtml').hide();
    },

    mainHtml: function(){
        console.log('In the mainHtml method.');
        let pageMainHtml=`
        <div class='mainBox'>
        <h1>Ransom Note</h1>
            <form class="js-textForm">
            <p>Enter some text below,<br/>
            then click Continue.
            </p><br/>
                <div>
                    <label for="js-line-1">Line 1</label>
                    <input type="text" id="js-line-1" name="line1" class="inputLine" />
                </div>
                <div>
                    <label for="js-line-2">Line 2</label>
                    <input type="text" id="js-line-2" name="line2" class="inputLine" />
                </div>
                <div>
                    <label for="js-line-3">Line 3</label>
                    <input type="text" id="js-line-3" name="line3" class="inputLine" />
                </div>
                <div>
                    <label for="js-line-4">Line 4</label>
                    <input type="text" id="js-line-4" name="line4" class="inputLine" />
                </div>
                <div>
                    <label for="js-line-5">Line 5</label>
                    <input type="text" id="js-line-5" name="line5" class="inputLine" />
                </div>
            </form>
        </div>
        <form class="buttonForm">
            <div class="buttonBox"><button type="button" id="js-instructionsButton" class="js-button js-instructionsButton">Read Instructions</button></div>
            <div class="buttonBox"><button type="button" id="js-userButton" class="js-button js-userButton"></button></div>
        </form>
        `;
        
        $('div.js-pageViewMainHtml').html(pageMainHtml);
        $('div.js-pageViewMainHtml').hide();
    },

    ransomNoteHtml: function(){
        console.log('In the ransomNoteHtml method.');
        let pageRansomNoteHtml=`
        <p>Okay, here we are in the last page, where the photos will go.</p>
        <form class="buttonForm">
            <div class="buttonBox"><button type="button" id="js-userButton" class="js-button js-userButton"></button></div>
        </form>
        `;
        
        $('div.js-pageViewRansomNoteHtml').html(pageRansomNoteHtml);
        $('div.js-pageViewRansomNoteHtml').hide();
    }
}

/************************************************************* 
Step 1b: Render each HTML page, based on the current state. 
**************************************************************/

const renderPage={
   doShowPages: function(){
        console.log('In the doShowPages method.');
        if(STORE.currentView==='splash'){
            this.splashPage();
        }
        if(STORE.currentView==='instructions'){
            this.instructionsPage();
        }
        if(STORE.currentView==='main'){
            this.mainPage();
        }
        if(STORE.currentView==='ransomNote'){
            this.ransomNotePage();
        }
   },

    showCurrentPage: function(pageToShow, userButtonText){
        console.log('In the showCurrentPage method.'); 
        $('.js-userButton').text(userButtonText);
        $('div.js-pageViewSplashHtml').hide();
        $('div.js-pageViewInstructionsHtml').hide();
        $('div.js-pageViewMainHtml').hide();
        $('div.js-pageViewRansomNoteHtml').hide();
        if(pageToShow==='div.js-pageViewSplashHtml'){
            $(pageToShow).show();
        } else{
            $(pageToShow).fadeIn('slow');
        }        
    },

    splashPage: function(){
        console.log('In the splashPage method.');
        this.showCurrentPage('div.js-pageViewSplashHtml', 'Start');
    },

    instructionsPage: function(){
        console.log('In the instructionsPage method.');
        this.showCurrentPage('div.js-pageViewInstructionsHtml', 'Start');
    },

    mainPage: function(){
        console.log('In the mainPage method.');
        this.showCurrentPage('div.js-pageViewMainHtml', 'Continue');
    },

    ransomNotePage: function(){
        console.log('In the ransomNotePage method.');
        this.showCurrentPage('div.js-pageViewRansomNoteHtml', 'Back');
    }
}

/******************************************************** 
 * Step 2: Listen for user interactions.
 ********************************************************/

const listeners={
    listen: function(){
        console.log('In the listen method.');
        this.handleInstructionsButton();
        this.handleUserButton();
    },

    handleInstructionsButton: function(){
        console.log('In the handleInstructionsButton method.');
        $('.js-instructionsButton').on('click', function() {
            STORE.currentView='instructions';
            renderPage.doShowPages();
        });
    },

    handleUserButton: function(){
        console.log('In the handleUserButton method.');
        $('.js-userButton').on('click', function() {
            if(STORE.currentView==='main'){
                STORE.line_1=document.querySelector('#js-line-1').value;
                STORE.line_2=document.querySelector('#js-line-2').value;
                STORE.line_3=document.querySelector('#js-line-3').value;
                STORE.line_4=document.querySelector('#js-line-4').value;
                STORE.line_5=document.querySelector('#js-line-5').value;
                STORE.currentView='ransomNote';
                renderPage.doShowPages();
            }else{
                STORE.currentView='main';
                renderPage.doShowPages();
            }
        });
    }
}

function main(){
    console.log('Begin the program');
    generateHtml.doHtmlPages();
    renderPage.doShowPages();
    listeners.listen();
}

$(main);