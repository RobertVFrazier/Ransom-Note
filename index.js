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
        // this.mainHtml();
        // this.ransomNoteHtml();
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
        <form class="buttonForm">
            <p>This is where the instructions will go.</p>
            <div class="buttonBox"><button type="button" id="js-userButton" class="js-button js-userButton"></button></div>
        </form>
        `;
         
        $('div.js-pageViewInstructionsHtml').html(pageInstructionsHtml);
        $('div.js-pageViewInstructionsHtml').hide();
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
        // if(STORE.currentView==='main'){
        //     this.mainPage();
        // }
        // if(STORE.currentView==='ransomNote'){
        //     this.ransomNotePage();
        // }
   },

    showCurrentPage: function(pageToShow, userButtonText){
        console.log('In the showCurrentPage method.'); 
        $('#js-userButton').text(userButtonText);
        $('div.js-pageViewSplashHtml').hide();
        $('div.js-pageViewInstructionsHtml').hide();
        // $('div.js-pageViewMainHtml').hide();
        // $('div.js-pageViewRansomNoteHtml').hide();
        $(pageToShow).show();
    },

    splashPage: function(){
        console.log('In the splashPage method.');
        this.showCurrentPage('div.js-pageViewSplashHtml', 'Start');
    },

    instructionsPage: function(){
        console.log('In the instructionsPage method.');
        this.showCurrentPage('div.js-pageViewInstructionsHtml', 'Start');
    }
}

/******************************************************** 
 * Step 2: Listen for user interactions.
 ********************************************************/

const listeners={
    listen: function(){
        console.log('In the listen method.');
        this.handleInstructionsButton();
    },

    handleInstructionsButton: function(){
        console.log('In the handleInstructionsButton method.');
        $('.js-instructionsButton').on('click', function() {
            STORE.currentView='instructions';
            renderPage.doShowPages();
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

// function main(){
//     $('.lightbox_trigger').click(function(e){
//         e.preventDefault();
//         var image_href=$(this).attr("href");
//         if($('#lightbox').length>0){
//             $('#content').html(`<img src='${image_href}' />`);
//             $('#lightbox').fadeIn('slow');
//         } else{
//             var lightbox=`
//                 <div id="lightbox">
//                     <p class="exit">X</p>
//                     <div id="content">
//                         <img src='${image_href}' />
//                     </div>
//                 </div>
//             `;
//             $('body').append(lightbox);
//             $('#lightbox').hide();
//             $('#lightbox').fadeIn('slow');
//         }
//     });

// 	$('body').on('click', '.exit', function() {
// 		$('#lightbox').fadeOut();
// 	});
// }