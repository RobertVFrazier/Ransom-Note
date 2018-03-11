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
            <p>This app takes your text and converts it to a series of photos of letters, numerals, and some punctuation: period, question, exclamation, comma, apostrophe, hyphen, ampersand. In the text edit page (click the Start button), there are five text fields. Enter your text in them, then click Continue. A new screen will appear with your text turned to photos.</p>
            <p>Keep your message short! Each line can hold only 18 characters. Spaces are half as wide as characters. There is a counter to track how many more characters will fit in the line you're on.</p>
            <p>If you don't like the random photos selected, you can change them. Just click on a photo to get a new random photo, or click Shuffle to change them all. When you're happy, click on Screen Shot to take a picture of your ransom note text! Click Back to return to the text edit page.</p>
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
        <div class='display'>
            <div class='picTray' id='js-picTray1'></div>
            <div class='picTray' id='js-picTray2'></div>
            <div class='picTray' id='js-picTray3'></div>
            <div class='picTray' id='js-picTray4'></div>
            <div class='picTray' id='js-picTray5'></div>
        </div>
        <form class="buttonForm">
            <div class="buttonBox"><button type="button" id="js-shuffleButton" class="js-button js-shuffleButton">Shuffle</button></div>
            <div class="buttonBox"><button type="button" id="js-userButton" class="js-button js-userButton"></button></div>
        </form>
        `;
        
        $('div.js-pageViewRansomNoteHtml').html(pageRansomNoteHtml);
        $('div.js-pageViewRansomNoteHtml').hide();
    }
};

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
};

/******************************************************** 
 * Step 2: Listen for user interactions.
 ********************************************************/

const listeners={
    listen: function(){
        console.log('In the listen method.');
        this.handleInstructionsButton();
        this.handleUserButton();
        this.handleShuffleButton();
        this.handleCharacterPicClicks();
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
        $('.js-userButton').on('click', function(){
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
    },

    handleShuffleButton: function(){
        console.log('In the handleShuffleButton method.');
        $('.js-shuffleButton').on('click', function(){
            getFlickrPics.prepareRansomNotePage();
        });
    },

    handleCharacterPicClicks(){
        console.log('In the handleCharacterPicClicks method.');
        $('.js-pageViewRansomNoteHtml').on('click', '.js-charPic', function(event){
            let targetCharacterPic=$(event.currentTarget);
            let charPos=targetCharacterPic[0].attributes[5].value;            // attribute 5 is 'pos' (user-defined), set to 0 - 42
            let currPicUrl=targetCharacterPic[0].src;
            let currCharIndex=STORE.apiPhotos[charPos].indexOf(currPicUrl);   // Get the index from the URL of the image clicked.
            let currCharArrayLen=STORE.apiPhotos[charPos].length;
            let photoNum=currCharIndex===currCharArrayLen-1 ? 0 : currCharIndex+1;
            let newPicUrl=STORE.apiPhotos[charPos][photoNum];
            $(event.currentTarget)[0].src=newPicUrl;
        });
    }
};

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
        STORE.charCount=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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
                }else if(ascCode===39){  // '
                    STORE.charCount[40]+=STORE.charCount[40]===0 ? baseCount : extraCount;
                }else if(ascCode===45){  // -
                    STORE.charCount[41]+=STORE.charCount[41]===0 ? baseCount : extraCount;
                }else if(ascCode===38){  // &
                    STORE.charCount[42]+=STORE.charCount[42]===0 ? baseCount : extraCount;
                }
            }
        }
    },

    makeApiCalls: function(){
        console.log('In the makeApiCalls method.');
        let groupId='';
        let offset=0;
        let target='';
        let punctArray=['fullstop','question','exclamation','comma','apostrophe','hyphen','ampersand'];
        let theFarm='';
        let theServer='';
        let theId='';
        let theSecret='';
        let newUrl='';
        for(let i=0; i<43; i++){
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
                }).done(function() {
                    console.log( 'Finished the makeApiCalls json callback method. '+i );
                    getFlickrPics.prepareRansomNotePage();
                }).fail(function() {
                    console.log( 'error' );
                });
            }
        }
    },

    prepareRansomNotePage: function(){
        console.log('In the prepareRansomNotePage method.');
        let lineHtml='';
        lineHtml=getFlickrPics.processLine(STORE.line_1);
        $('#js-picTray1').html(lineHtml);
        lineHtml=getFlickrPics.processLine(STORE.line_2);
        $('#js-picTray2').html(lineHtml);
        lineHtml=getFlickrPics.processLine(STORE.line_3);
        $('#js-picTray3').html(lineHtml);
        lineHtml=getFlickrPics.processLine(STORE.line_4);
        $('#js-picTray4').html(lineHtml);
        lineHtml=getFlickrPics.processLine(STORE.line_5);
        $('#js-picTray5').html(lineHtml);
        renderPage.showCurrentPage('div.js-pageViewRansomNoteHtml', 'Back');
    },

    processLine: function(lineText){
        console.log('In the processLine method.');
        console.log(lineText);
        let picLinks='';
        let asciiCode=0;
        let picUrl='';
        let charLocation=0;
        let randomNum=0;
        for(let i=0; i<lineText.length; i++){
            let asciiCode=lineText.charCodeAt(i);
            console.log(`ascii code is: ${asciiCode}`);
            if(asciiCode>=48 && asciiCode<=57){           // Number
                if(typeof STORE.apiPhotos[asciiCode-48]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[asciiCode-48].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[asciiCode-48][randomNum]}' alt='${String.fromCharCode(asciiCode)}' role='button' aria-pressed='false' pos='${asciiCode-48}' class='js-charPic'>`;
                };
            }else if(asciiCode>=65 && asciiCode<=90){     // LETTER
                if(typeof STORE.apiPhotos[asciiCode-55]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[asciiCode-55].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[asciiCode-55][randomNum]}' alt='${String.fromCharCode(asciiCode)}' role='button' aria-pressed='false' pos='${asciiCode-55}' class='js-charPic'>`;
                };
            }else if(asciiCode>=97 && asciiCode<=122){     // letter
                if(typeof STORE.apiPhotos[asciiCode-87]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[asciiCode-87].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[asciiCode-87][randomNum]}' alt='${String.fromCharCode(asciiCode)}' role='button' aria-pressed='false' pos='${asciiCode-87}' class='js-charPic'>`;
                };
            }else if(asciiCode===46){
                if(typeof STORE.apiPhotos[36]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[36].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[36][randomNum]}' alt='Period' role='button' aria-pressed='false' pos='36' class='js-charPic'>`;
                };
            }else if(asciiCode===63){
                if(typeof STORE.apiPhotos[37]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[37].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[37][randomNum]}' alt='Question' role='button' aria-pressed='false' pos='37' class='js-charPic'>`;
                };
            }else if(asciiCode===33){
                if(typeof STORE.apiPhotos[38]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[38].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[38][randomNum]}' alt='Exclamation' role='button' aria-pressed='false' pos='38' class='js-charPic'>`;
                };
            }else if(asciiCode===44){
                if(typeof STORE.apiPhotos[39]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[39].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[39][randomNum]}' alt='Comma' role='button' aria-pressed='false' pos='39' class='js-charPic'>`;
                };
            }else if(asciiCode===39){
                if(typeof STORE.apiPhotos[40]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[40].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[40][randomNum]}' alt='Apostrophe' role='button' aria-pressed='false' pos='40' class='js-charPic'>`;
                };
            }else if(asciiCode===45){
                if(typeof STORE.apiPhotos[41]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[41].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[41][randomNum]}' alt='Hyphen' role='button' aria-pressed='false' pos='41' class='js-charPic'>`;
                };
            }else if(asciiCode===38){
                if(typeof STORE.apiPhotos[42]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[42].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[42][randomNum]}' alt='Ampersand' role='button' aria-pressed='false' pos='42' class='js-charPic'>`;
                };
            }else if(asciiCode===32){                     // Space
                picLinks+=`<span class='space'> </span>`;
            }                                             // Ignore all other characters
        }
        return picLinks;
    },

    pickNum: function(min, max){
        console.log('In the pickNum method');
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

/******************************************************** 
 * Javascript starts here.
 ********************************************************/

function main(){
    console.log('Begin the program');
    generateHtml.doHtmlPages();
    renderPage.doShowPages();
    listeners.listen();
};

$(main);