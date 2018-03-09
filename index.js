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
    line_5: '',
    charCount: [],
    apiPhotos: []
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
            <p>This app takes text which you type in and converts it to a series of photos of letters A-Z, a-z, numerals 0-9, and some punctuation . ? ! , - &.</p>
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
        <form class='display'>
            <div class='picTray' id='js-picTray1'></div>
            <div class='picTray' id='js-picTray2'></div>
            <div class='picTray' id='js-picTray3'></div>
            <div class='picTray' id='js-picTray4'></div>
            <div class='picTray' id='js-picTray5'></div>
        </form>
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
        getFlickrPics.createCharacterPhotos();
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

/******************************************************** 
 * Step 3: Get API data to match user inputs.
 ********************************************************/

const getFlickrPics={
    createCharacterPhotos: function(){
        console.log('In the createCharacterPhotos method.');
        this.findCharacterCounts();
        this.makeApiCalls();
        console.log(STORE);
    },

    findCharacterCounts: function(){
        console.log('In the findCharacterCounts method.');
        let fullText=(STORE.line_1.trim()+' '+STORE.line_2.trim()+' '+STORE.line_3.trim()+' '+STORE.line_4.trim()+' '+STORE.line_5).trim().toUpperCase();
        let strLen=fullText.trim().length;
        let baseCount=25;
        let extraCount=10;
        STORE.apiPhotos=[];
        STORE.charCount=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        for(let i=0; i<strLen; i++){
            let ascCode=fullText.charCodeAt(i);
            if(ascCode!==32){  // Not interested in spaces here.
                if(ascCode>=48 && ascCode<=57){  // 0-9
                    STORE.charCount[ascCode-48]+=STORE.charCount[ascCode-48]===0 ? baseCount : extraCount;
                }else if(ascCode>=65 && ascCode<=90){  // A-Z
                    STORE.charCount[ascCode-55]+=STORE.charCount[ascCode-55]===0 ? baseCount : extraCount;
                }else if(ascCode===46){  // .
                    STORE.charCount[36]+=STORE.charCount[36]===0 ? baseCount : extraCount;
                }else if(ascCode===63){  // ?
                    STORE.charCount[37]+=STORE.charCount[37]===0 ? baseCount : extraCount;
                }else if(ascCode===33){  // !
                    STORE.charCount[38]+=STORE.charCount[38]===0 ? baseCount : extraCount;
                }else if(ascCode===44){  // ,
                    STORE.charCount[39]+=STORE.charCount[39]===0 ? baseCount : extraCount;
                }else if(ascCode===45){  // -
                    STORE.charCount[40]+=STORE.charCount[40]===0 ? baseCount : extraCount;
                }else if(ascCode===38){  // &
                    STORE.charCount[41]+=STORE.charCount[41]===0 ? baseCount : extraCount;
                }
            }
        }
    },

    makeApiCalls: function(){
        console.log('In the makeApiCalls method.');
        let groupId='';
        let offset=0;
        let target='';
        let punctArray=['fullstop','question','exclamation','comma','hyphen','ampersand'];
        let theFarm='';
        let theServer='';
        let theId='';
        let theSecret='';
        let newUrl='';
        for(let i=0; i<42; i++){
            if(i<10){          // Numbers
                groupId='54718308@N00';
                offset=48;
                target=(i===0 ? 'zero' : String.fromCharCode(i+offset));
            }else if(i<36){    // Letters
                groupId='27034531@N00';
                offset=55;
                target=String.fromCharCode(i+offset)
            }else{             // Punctuation
                groupId='34231816@N00';
                target=punctArray[i-36];
            }
            if(STORE.charCount[i]!==0){
                $.getJSON(`https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=720381d57c2c0a9dd85eb107da8cabce&group_id=${groupId}&per_page=${STORE.charCount[i]}&format=json&nojsoncallback=1&extras=url_sq&tag_mode=all&tags=${target}`,function(jsonTemp){
                    console.log('In the makeApiCalls json callback method.');
                    let resultList=[];
                    for(let j=0; j<Math.min(jsonTemp.photos.perpage,jsonTemp.photos.total); j++){
                        theFarm=jsonTemp.photos.photo[j].farm;
                        theServer=jsonTemp.photos.photo[j].server;
                        theId=jsonTemp.photos.photo[j].id;
                        theSecret=jsonTemp.photos.photo[j].secret;
                        newUrl=`https://farm${theFarm}.staticflickr.com/${theServer}/${theId}_${theSecret}_q.jpg`;
                        resultList.push(newUrl);
                    }
                    STORE.apiPhotos[i]=resultList;
                    getFlickrPics.prepareRansomNotePage();
                }).fail(function() {
                    console.log( 'error' );
                });
            }
        }
    },

    prepareRansomNotePage: function(){
        console.log('In the prepareRansomNotePage method.');
        console.log(STORE.line_1);
        let picLinks='';
        for(let i=0; i<STORE.line_1.length; i++){
            let charLoc=(STORE.line_1.toUpperCase().charCodeAt(i))-55;
            console.log('charLoc: '+charLoc);
            let picUrl=STORE.apiPhotos[charLoc][0];
            console.log(picUrl);
            picLinks+=`<img src='${picUrl}'>`;
        }
        console.log(picLinks);
        $('#js-picTray1').html(picLinks);
        $('#js-picTray2').text(STORE.line_2);
        $('#js-picTray3').text(STORE.line_3);
        $('#js-picTray4').text(STORE.line_4);
        $('#js-picTray5').text(STORE.line_5);
        renderPage.showCurrentPage('div.js-pageViewRansomNoteHtml', 'Back');
    }
}

/******************************************************** 
 * Javascript starts here.
 ********************************************************/

function main(){
    console.log('Begin the program');
    generateHtml.doHtmlPages();
    renderPage.doShowPages();
    listeners.listen();
}

$(main);