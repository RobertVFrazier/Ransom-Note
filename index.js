'use strict';

/******************************************************** 
 All global variables here. 
********************************************************/

const STORE = {  // All the variables connected with the state of the DOM go here.
    currentView: 'splash',
    lines: [],
    widths: [18,18,18,18,18],
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
        // console.log('In the doHtmlPages method.');
        this.splashHtml();
        this.instructionsHtml();
        this.mainHtml();
        this.ransomNoteHtml();
    },

    splashHtml: function(){
        // console.log('In the splashHtml method.');
        let pageSplashHtml=`
        <form class='buttonForm'>
            <div class='buttonBox'><button type='button' class='js-button `
                +`js-instructionsButton'>Read Instructions</button></div>
            <div class='buttonBox'><button type='button' class='js-button `
                +`js-userButton' autofocus></button></div>
        </form>
        `;
        
        $('div.js-pageViewSplashHtml').html(pageSplashHtml);
        $('div.js-pageViewSplashHtml').hide();
    },

    instructionsHtml: function(){
        // console.log('In the instructionsHtml method.');
        let pageInstructionsHtml=`
        <div class='instructionsBox'>
        <h1>Welcome to Ransom Note!</h1>
        <p>This app takes your text and converts it to a series of photos of letters, numerals, `
            +`and some punctuation: period, question, exclamation, comma, apostrophe, hyphen, ampersand.</p>
        <p>In the text input page (click the Start button), there are five text fields. Enter your `
            +`text in any or all of them, then click Continue. A new screen will appear with your `
            +`text turned to photos.</p>
        <p>Keep your message short! Each line can hold only 18 characters. Spaces are half as wide as `
            +`characters. There is a counter next to each line to track how many more characters will fit.</p>
        <p>If you don't like the random photos selected (especially if you got a letter you didn't `
            +`type), you can change them. Click Shuffle to change all of the photos at once, or click `
            +`on a single photo to change it.</p>
        <p>Click Distort to randomly vary the size and tilt of the pictures. Undistort restores them. `
            +`Click the Back button to return to the text entry screen.</p><br />
        
        <p class=techNote>The photos come from flickr.com, specifically from these three groups: `
            +`One Letter, One Number, and Punctuation. I got the idea for this app from Erik Kastner's `
            +`'Spell with flickr' (http://metaatem.net/words/). My goal was to recreate the same function, `
            +`without looking at his code, but with a better user interface and some improvements.</p>
        </div>
        <form class='buttonForm'>
            <div class='buttonBox'><button type='button' id='js-instructionsUserButton' `
                +`class='js-button js-userButton' autofocus></button></div>
        </form>
        `;
        
        
        $('div.js-pageViewInstructionsHtml').html(pageInstructionsHtml);
        $('div.js-pageViewInstructionsHtml').hide();
    },

    mainHtml: function(){
        // console.log('In the mainHtml method.');
        let pageMainHtml=`
        <div class='mainBackground'>
            <div class='mainBox'>
                <h1>Ransom Note</h1>
                <form class='js-textForm'>
                    <p>Enter some text below,<br/>
                    then click Continue.<br/><br/>
                    If the counter drops below zero,<br/>
                    move some text to the next line.
                    </p><br/>
                    <div class='inputBox'>
                        <label for='js-line-1' class='js-lineLabel'>Line 1 </label>
                        <input type='text' id='js-line-1' name='line1' class='js-inputLine' autofocus />
                        <span class='countDown js-countDown1'>${STORE.widths[0]}</span>
                    </div>
                    <div class='inputBox'>
                        <label for='js-line-2' class='js-lineLabel'>Line 2 </label>
                        <input type='text' id='js-line-2' name='line2' class='js-inputLine' />
                        <span class='countDown js-countDown2'>${STORE.widths[1]}</span>
                    </div>
                    <div class='inputBox'>
                        <label for='js-line-3' class='js-lineLabel'>Line 3 </label>
                        <input type='text' id='js-line-3' name='line3' class='js-inputLine' />
                        <span class='countDown js-countDown3'>${STORE.widths[2]}</span>
                    </div>
                    <div class='inputBox'>
                        <label for='js-line-4' class='js-lineLabel'>Line 4 </label>
                        <input type='text' id='js-line-4' name='line4' class='js-inputLine' />
                        <span class='countDown js-countDown4'>${STORE.widths[3]}</span>
                    </div>
                    <div class='inputBox'>
                        <label for='js-line-5' class='js-lineLabel'>Line 5 </label>
                        <input type='text' id='js-line-5' name='line5' class='js-inputLine' />
                        <span class='countDown js-countDown5'>${STORE.widths[4]}</span>
                    </div>
                    <div class='buttonBox'>
                        <br/><button type='button' class='js-button js-instructionsButton'>Read Instructions</button>
                    </div>
                    <div class='buttonBox'>
                        <br/><button type='button' class='js-button js-userButton'></button>
                    </div>
                </form>
            </div>
        </div>
        `;
        
        $('div.js-pageViewMainHtml').html(pageMainHtml);
        $('div.js-pageViewMainHtml').hide();
    },

    ransomNoteHtml: function(){
        // console.log('In the ransomNoteHtml method.');
        let pageRansomNoteHtml=`
        <div class='finalHint'>Click any photo to change it!</div>
        <div id='js-display' class='display'>
            <div class='picTray' id='js-picTray1'></div>
            <div class='picTray' id='js-picTray2'></div>
            <div class='picTray' id='js-picTray3'></div>
            <div class='picTray' id='js-picTray4'></div>
            <div class='picTray' id='js-picTray5'></div>
        </div>
        <form class='buttonForm'>        
            <div class='buttonBox ransomButtonBox'>
                <button type='button' id='js-shuffleButton' class='js-button js-shuffleButton'>Shuffle</button>
                <button type='button' id='js-distortButton' class='js-button js-distortButton'>Distort</button>
                <button type='button' id='js-undistortButton' class='js-button js-undistortButton'>Undistort</button>
            </div>
            <div class='buttonBox'><button type='button' class='js-button js-userButton'></button></div>
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
        // console.log('In the doShowPages method.');
        if(STORE.currentView==='splash'){
            this.splashPage();
        }
        if(STORE.currentView==='instructions'){
            this.instructionsPage();
            $('#js-instructionsUserButton').focus();
        }
        if(STORE.currentView==='main'){
            this.mainPage();
            $('#js-line-1').focus();
        }
        if(STORE.currentView==='ransomNote'){
            this.ransomNotePage();
        }
   },

    showCurrentPage: function(pageToShow, userButtonText){
        // console.log('In the showCurrentPage method.'); 
        $('.js-userButton').text(userButtonText);
        $('div.js-pageViewSplashHtml').hide();
        $('div.js-pageViewInstructionsHtml').hide();
        $('div.js-pageViewMainHtml').hide();
        $('div.js-pageViewRansomNoteHtml').hide();
        $(pageToShow).show();
    },

    splashPage: function(){
        // console.log('In the splashPage method.');
        this.showCurrentPage('div.js-pageViewSplashHtml', 'Start');
    },

    instructionsPage: function(){
        // console.log('In the instructionsPage method.');
        this.showCurrentPage('div.js-pageViewInstructionsHtml', 'Start');
    },

    mainPage: function(){
        // console.log('In the mainPage method.');
        this.showCurrentPage('div.js-pageViewMainHtml', 'Continue');
        $('span.js-countDown').text(STORE.widths[0]);
    },

    ransomNotePage: function(){
        // console.log('In the ransomNotePage method.');
        getFlickrPics.createCharacterPhotos();
    }
};

/******************************************************** 
 * Step 2: Listen for user interactions.
 ********************************************************/

const listeners={
    listen: function(){
        // console.log('In the listen method.');
        this.handleInstructionsButton();
        this.handleUserButton();
        this.handleShuffleButton();
        this.handleDistortButton();
        this.handleUndistortButton();
        this.handleCharacterPicClicks();
        this.handleLineLiveType();
    },

    handleInstructionsButton: function(){
        // console.log('In the handleInstructionsButton method.');
        $('.js-instructionsButton').on('click', function() {
            STORE.currentView='instructions';
            renderPage.doShowPages();
        });
    },

    handleUserButton: function(){
        // console.log('In the handleUserButton method.');
        $('.js-userButton').on('click', function(){
            if(STORE.currentView==='main'){
                STORE.lines[0]=document.querySelector('#js-line-1').value.trim();
                STORE.lines[1]=document.querySelector('#js-line-2').value.trim();
                STORE.lines[2]=document.querySelector('#js-line-3').value.trim();
                STORE.lines[3]=document.querySelector('#js-line-4').value.trim();
                STORE.lines[4]=document.querySelector('#js-line-5').value.trim();
                STORE.currentView='ransomNote';
                renderPage.doShowPages();
            }else{
                STORE.currentView='main';
                renderPage.doShowPages();
            }
        });
    },

    handleShuffleButton: function(){
        // console.log('In the handleShuffleButton method.');
        $('.js-shuffleButton').on('click', function(){
            getFlickrPics.prepareRansomNotePage();
        });
    },

    handleDistortButton: function(){
        // console.log('In the handleDistortButton method.');
        $('.js-distortButton').click(function(){
            let rotateRange=35;
            let scaleRange=20;
            $('.js-charPic').each(function(){
                let rotateAmount=Math.floor(Math.random()*(rotateRange*2))-rotateRange;
                let scaleAmount=1+(Math.floor(Math.random()*scaleRange*2)-scaleRange)/100;
                let transformation=`rotate(${rotateAmount}deg) scale(${scaleAmount})`;
                $(this).css('transform', transformation);
            });
        });
    },
    
    handleUndistortButton: function(){
        // console.log('In the handleUndistortButton method.');
        $('.js-undistortButton').click(function(){
            $('.js-charPic').each(function(){
                let transformation=`rotate(0deg) scale(1)`;
                $(this).css('transform', transformation);
            });
        });
    },
    
    handleCharacterPicClicks: function(){
        // console.log('In the handleCharacterPicClicks method.');
        $('.js-pageViewRansomNoteHtml').on('click', '.js-charPic', function(event){
            let targetCharacterPic=$(event.currentTarget);
            let charPos=targetCharacterPic[0].attributes.pos.value;             // attribute 'pos' is user-defined, 
                                                                                // set to 0 - 42
            let currPicUrl=targetCharacterPic[0].src;
            let currCharIndex=STORE.apiPhotos[charPos].indexOf(currPicUrl);     // Get the index from the URL of the 
                                                                                // image clicked.
            let currCharArrayLen=STORE.apiPhotos[charPos].length;
            let photoNum=currCharIndex===currCharArrayLen-1 ? 0 : currCharIndex+1;
            let newPicUrl=STORE.apiPhotos[charPos][photoNum];
            $(event.currentTarget)[0].src=newPicUrl;
        });
    },

    handleLineLiveType: function(){
        // console.log('In the handleLineLiveType method.');
        $('.js-pageViewMainHtml').on('change keyup blur', '.js-inputLine', function(event){
            let theTarget=$(event.currentTarget);
            let targetLineNum=theTarget[0].id.slice(-1);
            let theCharCount=$(this).val().trim().length;
            let spaceCount=$(this).val().trim().split(' ').length-1;
            let lineWidth=(theCharCount-(spaceCount/2));
            STORE.widths[targetLineNum-1]=18-lineWidth;
            $('span.js-countDown'+targetLineNum).text(STORE.widths[targetLineNum-1]);
        });
    }
};

/******************************************************** 
 * Step 3: Get API data to match user inputs.
 ********************************************************/

const getFlickrPics={
    createCharacterPhotos: function(){
        // console.log('In the createCharacterPhotos method.');
        this.findCharacterCounts();
        this.makeApiCalls();
    },

    findCharacterCounts: function(){
        // console.log('In the findCharacterCounts method.');
        let fullText=(STORE.lines[0].trim()+' '+STORE.lines[1].trim()+' '+STORE.lines[2].trim()+' '
            +STORE.lines[3].trim()+' '+STORE.lines[4]).trim().toUpperCase();
        let strLen=fullText.trim().length;
        let baseCount=100;
        let extraCount=25;
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
        // console.log('In the makeApiCalls method.');
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
                $.getJSON(`https://api.flickr.com/services/rest/?&method=flickr.photos.search`
                    +`&api_key=720381d57c2c0a9dd85eb107da8cabce&group_id=${groupId}&per_page=${STORE.charCount[i]}`
                    +`&format=json&nojsoncallback=1&extras=url_sq&tag_mode=all&tags=${target}`,function(jsonTemp){
                    // console.log('In the makeApiCalls json callback method.');
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
                    // console.log( 'Finished the makeApiCalls json callback method. '+i );
                    getFlickrPics.prepareRansomNotePage();
                }).fail(function() {
                    console.log( 'error' );
                });
            }
        }
    },

    prepareRansomNotePage: function(){
        // console.log('In the prepareRansomNotePage method.');
        let lineHtml='';
        lineHtml=getFlickrPics.processLine(STORE.lines[0]);
        $('#js-picTray1').html(lineHtml);
        lineHtml=getFlickrPics.processLine(STORE.lines[1]);
        $('#js-picTray2').html(lineHtml);
        lineHtml=getFlickrPics.processLine(STORE.lines[2]);
        $('#js-picTray3').html(lineHtml);
        lineHtml=getFlickrPics.processLine(STORE.lines[3]);
        $('#js-picTray4').html(lineHtml);
        lineHtml=getFlickrPics.processLine(STORE.lines[4]);
        $('#js-picTray5').html(lineHtml);
        renderPage.showCurrentPage('div.js-pageViewRansomNoteHtml', 'Back');
    },

    processLine: function(lineText){
        // console.log('In the processLine method.');
        let picLinks='';
        let asciiCode=0;
        let picUrl='';
        let charLocation=0;
        let randomNum=0;
        for(let i=0; i<lineText.length; i++){
            let asciiCode=lineText.charCodeAt(i);
            if(asciiCode>=48 && asciiCode<=57){           // Number
                if(typeof STORE.apiPhotos[asciiCode-48]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[asciiCode-48].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[asciiCode-48][randomNum]}' `
                        +`alt='${String.fromCharCode(asciiCode)}' role='button' aria-pressed='false' `
                        +`pos='${asciiCode-48}' class='js-charPic'>`;
                };
            }else if(asciiCode>=65 && asciiCode<=90){     // LETTER
                if(typeof STORE.apiPhotos[asciiCode-55]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[asciiCode-55].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[asciiCode-55][randomNum]}' `
                        +`alt='${String.fromCharCode(asciiCode)}' role='button' aria-pressed='false' `
                        +`pos='${asciiCode-55}' class='js-charPic'>`;
                };
            }else if(asciiCode>=97 && asciiCode<=122){     // letter
                if(typeof STORE.apiPhotos[asciiCode-87]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[asciiCode-87].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[asciiCode-87][randomNum]}' `
                        +`alt='${String.fromCharCode(asciiCode)}' role='button' aria-pressed='false' `
                        +`pos='${asciiCode-87}' class='js-charPic'>`;
                };
            }else if(asciiCode===46){
                if(typeof STORE.apiPhotos[36]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[36].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[36][randomNum]}' alt='Period' `
                        +`role='button' aria-pressed='false' pos='36' class='js-charPic'>`;
                };
            }else if(asciiCode===63){
                if(typeof STORE.apiPhotos[37]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[37].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[37][randomNum]}' alt='Question' `
                        +`role='button' aria-pressed='false' pos='37' class='js-charPic'>`;
                };
            }else if(asciiCode===33){
                if(typeof STORE.apiPhotos[38]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[38].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[38][randomNum]}' alt='Exclamation' `
                        +`role='button' aria-pressed='false' pos='38' class='js-charPic'>`;
                };
            }else if(asciiCode===44){
                if(typeof STORE.apiPhotos[39]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[39].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[39][randomNum]}' alt='Comma' `
                        +`role='button' aria-pressed='false' pos='39' class='js-charPic'>`;
                };
            }else if(asciiCode===39){
                if(typeof STORE.apiPhotos[40]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[40].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[40][randomNum]}' alt='Apostrophe' `
                        +`role='button' aria-pressed='false' pos='40' class='js-charPic'>`;
                };
            }else if(asciiCode===45){
                if(typeof STORE.apiPhotos[41]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[41].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[41][randomNum]}' alt='Hyphen' `
                        +`role='button' aria-pressed='false' pos='41' class='js-charPic'>`;
                };
            }else if(asciiCode===38){
                if(typeof STORE.apiPhotos[42]!='undefined'){
                    randomNum=getFlickrPics.pickNum(0,STORE.apiPhotos[42].length-1);
                    picLinks+=`<input type='image' src='${STORE.apiPhotos[42][randomNum]}' alt='Ampersand' `
                        +`role='button' aria-pressed='false' pos='42' class='js-charPic'>`;
                };
            }else if(asciiCode===32){                     // Space
                picLinks+=`<span class='space'> </span>`;
            }                                             // Ignore all other characters
        }
        return picLinks;
    },

    pickNum: function(min, max){
        // console.log('In the pickNum method');
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

/***************************** 
 * Javascript starts here.
 ****************************/

function main(){
    // console.log('Begin the program');
    generateHtml.doHtmlPages();
    renderPage.doShowPages();
    listeners.listen();
};

$(main);