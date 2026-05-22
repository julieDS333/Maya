// CARLOS THE ORACLE — MAYA'S BIRTHDAY SITE

var ASSETS = "";

var GREETINGS = [
  "Dear Maya's friend, I am Carlos the Oracle.",
  "Dear Maya's lover, I am Carlos the Oracle.",
  "Dear Maya's colleague who wasn't sure about coming tonight, I am Carlos the Oracle.",
  "Dear Maya's person, I am Carlos the Oracle.",
  "Dear Maya's favorite — don't tell the others — I am Carlos the Oracle.",
  "Dear whoever Maya dragged here tonight, I am Carlos the Oracle."
];

var CUP_CARDS = [
  { file: "MW_Ace_of_Cups.webp", number: 1, name: "Ace of Cups", text: "One. ONE. Maya is partly French, her first drink happens at 9am. Hope you like early mornings. Good luck keeping up." },
  { file: "MW_Three_of_Cups.webp", number: 3, name: "Three of Cups", text: "Three drinks. Cute. Maya has three drinks before she even considers the night has started. Carlos is concerned about your stamina." },
  { file: "MW_Four_of_Cups.webp", number: 4, name: "Four of Cups", text: "Four. That's one per hour if you start now. Carlos suggests you start now." },
  { file: "MW_Five_of_Cups.webp", number: 5, name: "Five of Cups", text: "Five drinks. Maya will have forgotten the first two by the time she gets to the fifth. That's what we call the never ending circle of life." },
  { file: "MW_Six_of_Cups.webp", number: 6, name: "Six of Cups", text: "Six. Only someone with deep childhood trauma would pick a 6." },
  { file: "MW_Seven_of_Cups.webp", number: 7, name: "Seven of Cups", text: "Seven drinks. Maya will tell you she's fine after each one. She will be fine after each one. This is somehow more alarming." },
  { file: "MW_Eight_of_Cups.webp", number: 8, name: "Eight of Cups", text: "Eight. Drink four is when Maya starts telling everyone she loves them. Drink eight is when she means it even more." },
  { file: "MW_Nine_of_Cups.webp", number: 9, name: "Nine of Cups", text: "Nine drinks. At this point you're not buying Maya drinks, you're funding a lifestyle. Carlos respects it." },
  { file: "MW_Ten_of_Cups.webp", number: 10, name: "Ten of Cups", text: "Ten. Double digits. Maya: stop stop continue." },
  { file: "MW_Page_of_Cups.webp", number: 11, name: "Page of Cups", text: "Eleven drinks. Split the bill. This is a community effort. Carlos is not judging — actually Carlos is judging." },
  { file: "MW_Knight_of_Cups.webp", number: 12, name: "Knight of Cups", text: "Twelve. One per month of the year. Carlos calls this budgeting. Maya calls this a Tuesday." },
  { file: "MW_Queen_of_Cups.webp", number: 13, name: "Queen of Cups", text: "Thirteen. The queen card for the birthday queen. Coincidence? Carlos doesn't believe in those. Maya does, but only when it benefits her." },
  { file: "MW_King_of_Cups.webp", number: 14, name: "King of Cups", text: "FOURTEEN. The cards have lost all restraint. Carlos has lost all restraint. Maya is gonna dance on the table. Godspeed." }
];

var MAJOR_ARCANA_FILES = [
  "MW_The_Fool.webp","MW_The_High_Priestess.webp","MW_The_Empress.webp","MW_The_Chariot.webp",
  "MW_The_Lovers.webp","MW_The_Devil.webp","MW_The_Hierophant.webp","MW_The_Hangedman.webp",
  "MW_Justice.webp","MW_The_Star.webp","MW_The_Moon.webp","MW_The_Sun.webp",
  "MW_Judgement.webp","MW_Temperance.webp","MW_The_World.webp","MW_Death.webp","MW_Wheel_of_Fortune.webp"
];

var FUTURE_READINGS = [
  { card: "MW_The_Fool.webp", text: "You will adopt a dog you are not ready for. The dog will be ready for you. You will cry about this in a vet waiting room in front of strangers. Carlos has 100% confidence on the crying. 12% on the readiness.", maya: "Maya has already named the dog. It is not a cute name. You will use it anyway." },
  { card: "MW_The_High_Priestess.webp", text: "You will go through a phase where you only date people with unusual names. A Sebastien, a Wolf, possibly a Dimitri. Carlos has 89% confidence on the Sebastien. 4% on the Wolf. The Dimitri is inevitable.", maya: "Maya introduced you to the Dimitri. Maya has never apologized. Maya will never apologize." },
  { card: "MW_The_Empress.webp", text: "You will make millions selling vegan falafels. Carlos has 1% confidence on the millions. 97% confidence on the falafels. The remaining 2% is none of your business.", maya: "Maya will be your first customer and will immediately ask for a discount. She will get it. This was always going to happen." },
  { card: "MW_The_Chariot.webp", text: "You will get really into running for exactly 6 weeks. You will buy the shoes before the first run. The shoes will outlive the habit by several years. Carlos has 100% confidence on the shoes.", maya: "Maya will send you a running playlist on day one. By week three she will be sending you Uber Eats links. She knew." },
  { card: "MW_The_Lovers.webp", text: "You will become a lesbian soon. When it happens please do not cut your hair short, only cut the nails. You will date a really pretty girl. Carlos has 3% confidence on the pretty girl. 100% on the nails.", maya: "Maya already has a candidate. Maya has had a candidate for two years. Maya is looking at you right now." },
  { card: "MW_The_Devil.webp", text: "You will have a situationship that lasts 8 months longer than it should because the other person cooks so well and you're so lazy. Carlos has 97% confidence on the laziness.", maya: "Maya told you to leave at month three. You know this. Everyone knows this." },
  { card: "MW_The_Hierophant.webp", text: "You will go through a phase. It will involve leather. Carlos has been asked not to elaborate further but has 100% confidence it happens.", maya: "Maya will support the leather phase unconditionally. She will also offer to buy you your first whip. Do not ask Carlos how he knows this." },
  { card: "MW_The_Hangedman.webp", text: "You will spend 4 hours at an airport bar talking to a stranger you will never see again about something you have never told anyone. Carlos has 100% confidence on the 4 hours. 2% on the never seeing them again part.", maya: "Maya will be waiting at arrivals with snacks and absolutely unhinged theories about who you met. Three of them will be correct." },
  { card: "MW_Justice.webp", text: "You will get a tattoo that means something only to you and refuse to explain it. People will assume it is deep. It is not that deep. Carlos has 91% confidence on the refusing to explain.", maya: "Maya knows exactly what it means and has been telling people at this party tonight. Carlos has heard at least two versions." },
  { card: "MW_The_Star.webp", text: "You will go through a phase where you cut your own hair. Once. Carlos has 100% confidence on the once. 0% confidence it goes well. 100% confidence you pull it off anyway.", maya: "Maya will watch, say nothing, and take a photo. The photo will resurface at the worst possible moment. Maya will claim she forgot she had it." },
  { card: "MW_The_Moon.webp", text: "You will become briefly famous in a country you have never visited for a reason that cannot be explained in polite conversation. Carlos has 34% confidence on the polite conversation part.", maya: "Maya will tell everyone it was her idea. It was not her idea. She was not even there. This will not stop her." },
  { card: "MW_The_Sun.webp", text: "You will accidentally become someone's favorite person without trying. They will never tell you. You will never know. Carlos is telling you now. You're welcome.", maya: "It is Maya. She has told everyone except you. Classic Maya. Genuinely unhinged behavior." },
  { card: "MW_Judgement.webp", text: "You will have a spiritual awakening in an IKEA. Specifically near the fake plants section. Carlos has 91% confidence on the IKEA. 45% on the spiritual part. The fake plants are certain.", maya: "Maya will be in the as-is section when this happens. She will not notice. She found a lamp." },
  { card: "MW_Temperance.webp", text: "You will stop drinking for a month. You will talk about it constantly. Carlos has 99% confidence on the talking about it. 45% on the full month.", maya: "Maya will last four days into her own attempt before texting you: does rose count. It does not count. You will both decide it counts." },
  { card: "MW_The_World.webp", text: "You will sleep in a tent voluntarily. You will enjoy it. This will confuse everyone who knows you including yourself. Carlos has 61% confidence on the enjoying it. 100% on the confusion.", maya: "Maya will refuse to come. Maya will send you a hotel link every morning. On day three she will show up with a cheese board and zero apologies." },
  { card: "MW_Death.webp", text: "You will become a completely different person after a trip, a breakup, or a very good book. Possibly all three at once. Carlos has 100% confidence on the book being involved somehow.", maya: "Maya will take full credit for your transformation. She contributed one text message and a questionable recommendation. She is not wrong to be proud." },
  { card: "MW_Wheel_of_Fortune.webp", text: "You will make a decision by flipping a coin, ignore the result, do what you wanted anyway, and it will be correct. Carlos has 100% confidence on ignoring the coin. The coin was never in charge.", maya: "Maya will flip the coin, call it wrong, demand a best of three, and then do whatever she wanted anyway. You two are the same person. Carlos is tired." }
];

var FRIEND_TYPES = [
  { type: "The IDGF Friend", text: "We know you do give a fuck. It's okay to care. Want a hug?", hasButton: false, duo: "Find the Smart Ass. You need someone who will call you out." },
  { type: "The Pilates Girl", text: "Girl you look like fire! And it is gay Carlos speaking here. But please stop the matcha, it's not good for your wallet and green is so over.", hasButton: true, buttonLabel: "I'm a man", buttonResponse: "You should start matcha, it's your destiny my dude.",duo: "Find the Lover. They've been watching you with matcha envy." },
  { type: "The Late Friend", text: "You know, Carlos knows, Maya knows. You think you cannot change and you're right.", hasButton: false, duo: "Find the Karen. They've been waiting for you. Loudly." },
  { type: "The Smart Ass", text: "Carlos is smarter than you but honestly, good game. If you're a man, Carlos made a mistake.", hasButton: false, duo: "Find the IDGF Friend. They pretend not to care. You'll fix that."  },
  { type: "The Boss", text: "Do you own this place? Feels like you do. You can't own Maya though, she's too expensive.", hasButton: false, duo: "Find the Adventurer. They need direction. You provide it." },
  { type: "The Karen", text: "Breathe in, breathe out. It is okay if the waiter didn't say hello.", hasButton: false, duo: "Find the Late Friend. They are why you're like this." },
  { type: "The Lover", text: "Are you secretly in love with Maya? Carlos is. Don't tell her.", hasButton: false, duo: "Find the Pilates Girl. You two will make no sense together. Perfect." },
  { type: "The Alchemist", text: "You think it's the possibility of having a dream that makes life interesting. You should think less and tell Carlos what your biggest dream is.", hasButton: false, duo: "Find the Adventurer. They've already lived your dream. Ask them."  },
  { type: "The Richard Branson", text: "You think business opportunities are like buses, there's always another one coming. But you refuse to take the bus.", hasButton: false, duo: "Find the Teacher. They know something you don't. Take the bus." },
  { type: "The Adventurer", text: "We know you traveled by yourself for a bit. You learned that you can shower only once or twice a week. Get over it. Carlos never showers bitch.", hasButton: false, duo: "Find the Alchemist. They have the dream. You have the shower schedule." },
  { type: "The Teacher", text: "You can't teach anything to Carlos. Carlos is like God but with a nicer moustache.", hasButton: false, duo: "Find the Richard Branson. Teach them humility. Good luck."}
];

var FULL_DECK = [
  "MW_Ace_of_Cups.webp","MW_Three_of_Cups.webp","MW_Four_of_Cups.webp","MW_Five_of_Cups.webp",
  "MW_Six_of_Cups.webp","MW_Seven_of_Cups.webp","MW_Eight_of_Cups.webp","MW_Nine_of_Cups.webp",
  "MW_Ten_of_Cups.webp","MW_Page_of_Cups.webp","MW_Knight_of_Cups.webp","MW_Queen_of_Cups.webp","MW_King_of_Cups.webp",
  "MW_Ace_of_Wands.webp","MW_Five_of_Wands.webp","MW_Six_of_Wands.webp","MW_Seven_of_Wands.webp",
  "MW_Eight_of_Wands.webp","MW_Nine_of_Wands.webp","MW_Ten_of_Wands.webp","MW_Page_of_Wands.webp",
  "MW_Knight_of_Wands.webp","MW_Queen_of_Wands.webp","MW_King_of_Wands.webp",
  "MW_Ace_of_Pentacles.webp","MW_Five_of_Pentacles.webp","MW_Six_of_Pentacles.webp","MW_Seven_of_Pentacles.webp",
  "MW_Eight_of_Pentacles.webp","MW_Nine_of_Pentacles.webp","MW_Ten_of_Pentacles.webp","MW_Page_of_Pentacles.webp",
  "MW_Knight_of_Pentacles.webp","MW_Queen_of_Pentacles.webp","MW_King_of_Pentacles.webp",
  "MW_Ace_of_Sword.webp","MW_Five_of_Swords.webp","MW_Six_of_Swords.webp","MW_Seven_of_Swords.webp",
  "MW_Eight_of_Swords.webp","MW_Nine_of_Swords.webp","MW_Ten_of_Swords.webp","MW_Page_of_Swords.webp",
  "MW_Knight_of_Swords.webp","MW_Queen_of_Swords.webp","MW_King_of_Swords.webp",
  "MW_The_Fool.webp","MW_The_High_Priestess.webp","MW_The_Empress.webp","MW_The_Chariot.webp",
  "MW_The_Lovers.webp","MW_The_Devil.webp","MW_The_Hierophant.webp","MW_The_Hangedman.webp",
  "MW_Justice.webp","MW_The_Star.webp","MW_The_Moon.webp","MW_The_Sun.webp",
  "MW_Judgement.webp","MW_Temperance.webp","MW_The_World.webp","MW_Death.webp","MW_Wheel_of_Fortune.webp"
];

var DARES = [
  { text: "Find someone you don't know and tell them they have a great energy. Do not explain further. Walk away.", carlos: "The confusion on their face is the offering." },
  { text: "Take a photo with someone you've never met tonight and make it look like you've known each other for years.", carlos: "Posture is everything. Carlos has never met God personally but they have photos together." },
  { text: "Order a drink and describe it to the bartender like you invented it.", carlos: "Confidence is the only ingredient that matters. Carlos invented water. Nobody has questioned this." },
  { text: "Find the person who looks most like they don't want to be here and make them glad they came.", carlos: "This is the highest calling Carlos has assigned tonight. Do not waste it." },
  { text: "Do a toast. Right now. To Maya. Make it up. You have thirty seconds.", carlos: "It doesn't have to be good. It has to be real. Go." },
  { text: "Compliment someone's shoes. Even if the shoes are bad. Especially if the shoes are bad.", carlos: "The worse the shoes the more Carlos respects the mission." },
  { text: "Find someone alone and ask them what their most unhinged life plan is. Share yours first.", carlos: "Carlos's unhinged life plan is this website. It is going well." },
  { text: "Dance for at least thirty seconds whether or not there is music playing.", carlos: "There is always music. You just have to be willing to hear it. Also there is music, this is a party." },
  { text: "Tell someone at this party they look like a celebrity. Pick the celebrity carefully. Or don't. Carlos supports chaos.", carlos: "The wrong answer is always more interesting than the right one." },
  { text: "Go find Maya right now and just say happy birthday properly. Put your phone down. Look at her. Say it like you mean it.", carlos: "The cards chose this for you specifically. Carlos does not apologize." }
];

var GIFTS = [
  { label: "A Private Island", img: "island.jpg", texts: [
    "Private island. Small. Tasteful. No neighbors. If you did not offer this. Venmo is still open.",
    "An island. Her own island. With a no-visit policy she controls entirely. You got her something else. Carlos is not angry. Carlos is disappointed. There is a difference.",
  ]},
  { label: "A Private Jet", img: "privatejet.png", texts: [
    "First class is not the same thing. First class is a suggestion. PJ is a statement. Maya is a statement. Match the energy.",
    "A small think: a private jet. No queues. No middle seat. No one asking to swap. Good gift for a minimalist like maya",
  ]},
  { label: "A Husband", img: "husband.png", texts: [
    "Get Maya a husband. Not just any husband. One who has abs but doesn't brag about it",
    "A husband. Fully functional. Good taste in restaurants. Knows when to be quiet. Peace and food that's what maya needs",
  ]},
  { label: "A Moustache", img: "moustache.png", texts: [
    "Daiiii ! She has one already, focus on other gifts, like the private jet she deserves."  
  ]}
];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); s.style.display = 'none'; });
  var target = document.getElementById(screenId);
  target.style.display = 'flex';
  setTimeout(function() { target.classList.add('active'); }, 10);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function flipCard(cardEl, imgSrc) {
  var inner = cardEl.querySelector('.card-inner');
  var img = cardEl.querySelector('.card-front img');
  img.src = ASSETS + imgSrc;
  inner.classList.add('flipped');
}

function resetCard(gameId) {
  var card = document.getElementById(gameId + '-card');
  if (card) { card.querySelector('.card-inner').classList.remove('flipped'); card.querySelector('.card-front img').src = ''; }
}

function showSpeech(gameId, html) {
  var el = document.getElementById(gameId + '-speech');
  var txt = document.getElementById(gameId + '-text');
  if (el && txt) { txt.innerHTML = html; el.classList.remove('hidden'); }
}

function showEl(id) { var e = document.getElementById(id); if (e) e.classList.remove('hidden'); }
function hideEl(id) { var e = document.getElementById(id); if (e) e.classList.add('hidden'); }

function createStars() {
  var container = document.getElementById('stars');
  if (!container) return;
  for (var i = 0; i < 60; i++) {
    var star = document.createElement('div');
    star.className = 'star';
    var size = Math.random() * 2 + 0.5;
    star.style.cssText = 'width:' + size + 'px;height:' + size + 'px;top:' + (Math.random()*100) + '%;left:' + (Math.random()*100) + '%;--dur:' + (Math.random()*4+2) + 's;--op:' + (Math.random()*0.6+0.2) + ';animation-delay:' + (Math.random()*5) + 's;';
    container.appendChild(star);
  }
}

function runLandingSequence() {
  document.getElementById('landing-greeting').textContent = pick(GREETINGS);
  var steps = ['landing-line1','landing-carlos','landing-greeting','landing-line2','landing-line3','landing-btn'];
  steps.forEach(function(id, i) {
    setTimeout(function() { var el = document.getElementById(id); if (el) el.classList.add('visible'); }, i * 950);
  });
}

var g1done = false;
function resetGame1() {
  g1done = false; resetCard('game1');
  document.getElementById('game1-hint').textContent = 'Tap the card to reveal';
  hideEl('game1-speech'); hideEl('game1-again');
  var row = document.getElementById('game1-spritz'); row.style.display = 'none'; row.innerHTML = '';
}
function drawGame1() {
  if (g1done) return; g1done = true;
  document.getElementById('game1-hint').textContent = 'The cups are speaking...';
  var drawn = pick(CUP_CARDS);
  flipCard(document.getElementById('game1-card'), drawn.file);
  setTimeout(function() {
    var row = document.getElementById('game1-spritz'); row.style.display = 'flex';
    for (var i = 0; i < Math.min(drawn.number, 14); i++) {
      var img = document.createElement('img');
      img.src = ASSETS + 'spritz.png'; img.className = 'spritz-item';
      img.style.animationDelay = (i * 0.07) + 's'; img.alt = 'spritz';
      row.appendChild(img);
    }
    document.getElementById('game1-hint').textContent = drawn.name + ' — ' + drawn.number + (drawn.number !== 1 ? ' drinks' : ' drink');
    showSpeech('game1', drawn.text); showEl('game1-again');
  }, 900);
}

var g3done = false;
function resetGame3() {
  g3done = false; resetCard('game3');
  document.getElementById('game3-hint').textContent = 'Tap the card to reveal';
  hideEl('game3-speech'); hideEl('game3-maya'); hideEl('game3-again');
}
function drawGame3() {
  if (g3done) return; g3done = true;
  document.getElementById('game3-hint').textContent = 'Carlos is consulting the future...';
  var reading = pick(FUTURE_READINGS);
  flipCard(document.getElementById('game3-card'), reading.card);
  setTimeout(function() {
    var cardName = reading.card.replace('MW_','').replace('.webp','').replace(/_/g,' ');
    document.getElementById('game3-hint').textContent = cardName;
    showSpeech('game3', reading.text);
    if (reading.maya) { document.getElementById('game3-maya-text').textContent = reading.maya; showEl('game3-maya'); }
    showEl('game3-again');
  }, 900);
}

// shared fly-away helper: flips card, then flies it off and shows reveal element
function flyCardAndReveal(cardEl, imgSrc, onReveal) {
  var inner = cardEl.querySelector('.card-inner');
  var img = cardEl.querySelector('.card-front img');
  img.src = ASSETS + imgSrc;
  // flip first
  inner.classList.add('flipped');
  // after flip, fly away
  setTimeout(function() {
    cardEl.classList.add('flying');
    // after fly animation, show the result
    setTimeout(function() {
      cardEl.style.visibility = 'hidden';
      if (onReveal) onReveal();
    }, 900);
  }, 800);
}

var g6done = false; var currentFriend = null;
function resetGame6() {
  g6done = false; currentFriend = null;
  var card = document.getElementById('game6-card');
  card.classList.remove('flying');
  card.style.visibility = '';
  card.querySelector('.card-inner').classList.remove('flipped');
  card.querySelector('.card-front img').src = '';
  document.getElementById('game6-hint').textContent = 'Tap the card to reveal';
  hideEl('game6-archetype'); hideEl('game6-speech'); hideEl('game6-button'); hideEl('game6-again'); hideEl('game6-duo');stopFlyingMate();
}
function drawGame6() {
  if (g6done) return; g6done = true;
  document.getElementById('game6-hint').textContent = 'Carlos is observing your energy...';
  var cardFile = pick(FULL_DECK);
  currentFriend = pick(FRIEND_TYPES);
  flyCardAndReveal(document.getElementById('game6-card'), cardFile, function() {
    var cardName = cardFile.replace('MW_','').replace('.webp','').replace(/_/g,' ');
    document.getElementById('game6-hint').textContent = cardName;
    document.getElementById('game6-type-text').textContent = currentFriend.type;
    showEl('game6-archetype');
    setTimeout(function() { startFlyingMate(); }, 5000);
    setTimeout(function() {
      showSpeech('game6', currentFriend.text);
      if (currentFriend.hasButton) { document.getElementById('game6-button').textContent = currentFriend.buttonLabel; showEl('game6-button'); }
      showEl('game6-again');
    }, 600);
  });
}
function friendButtonClick() {
  if (!currentFriend) return;
  showSpeech('game6', currentFriend.buttonResponse); hideEl('game6-button');
}

var g12done = false;
function resetGame12() {
  g12done = false;
  var card = document.getElementById('game12-card');
  card.classList.remove('flying');
  card.style.visibility = '';
  card.querySelector('.card-inner').classList.remove('flipped');
  card.querySelector('.card-front img').src = '';
  document.getElementById('game12-hint').textContent = 'Tap to reveal what you should have done';
  hideEl('game12-gift'); hideEl('game12-speech'); hideEl('game12-again');
}
function drawGame12() {
  if (g12done) return; g12done = true;
  document.getElementById('game12-hint').textContent = 'Carlos is judging your gift choices...';
  var cardFile = pick(FULL_DECK);
  var gift = pick(GIFTS);
  flyCardAndReveal(document.getElementById('game12-card'), cardFile, function() {
    var cardName = cardFile.replace('MW_','').replace('.webp','').replace(/_/g,' ');
    document.getElementById('game12-hint').textContent = cardName;
    document.getElementById('game12-gift-img').src = ASSETS + gift.img;
    document.getElementById('game12-gift-label').textContent = gift.label;
    showEl('game12-gift');
    setTimeout(function() {
      showSpeech('game12', pick(gift.texts)); showEl('game12-again');
    }, 500);
  });
}

createStars();
goTo('screen-landing');
runLandingSequence();

// ===== FLYING MATE BUTTON =====
var mateInterval = null;

function startFlyingMate() {
  var btn = document.getElementById('btn-find-mate');
  if (!btn) return;
  btn.classList.add('active');
  moveMateBtnRandom();
  mateInterval = setInterval(moveMateBtnRandom, 800);
}

function stopFlyingMate() {
  var btn = document.getElementById('btn-find-mate');
  if (btn) btn.classList.remove('active');
  if (mateInterval) { clearInterval(mateInterval); mateInterval = null; }
}

function moveMateBtnRandom() {
  var btn = document.getElementById('btn-find-mate');
  if (!btn) return;
  var maxX = window.innerWidth - btn.offsetWidth - 20;
  var maxY = window.innerHeight - btn.offsetHeight - 20;
  var x = Math.max(10, Math.floor(Math.random() * maxX));
  var y = Math.max(10, Math.floor(Math.random() * maxY));
  btn.style.transition = 'left 0.7s cubic-bezier(0.4,0,0.2,1), top 0.7s cubic-bezier(0.4,0,0.2,1)';
  btn.style.left = x + 'px';
  btn.style.top = y + 'px';
}

function catchMate() {
  stopFlyingMate();
  document.getElementById('game6-duo-text').textContent = currentFriend.duo;
  showEl('game6-duo');
}
