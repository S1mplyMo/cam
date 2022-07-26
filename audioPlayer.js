function playAudio(Audioname) {
  var bleep = new Audio();
  bleep.src = Audioname;
 
  bleep.play();
}
let Sound = [
  'All bad ideas end up good in the end.wav',
  'Are you tugging on my bum.wav',
  'Bite his mums dick off.wav',
  'Cam dinosaur noise.wav',
  'Cam is a goblin.wav',
  'Cam scream.wav',
  'Dont change what aint wrong.wav',
  'DOUBLE BUBBLE.wav',
  'Foreigner shut up silence.wav',
  'Fucked by a flower.wav',
  'Get towel.wav',
  'Horse cunt.wav',
  'I\'m gonna have a heart attack.wav',
  'Not looking thereeeee.wav',
  'Push out.wav',
  'Shit.wav',
  'Snap your pecker.wav',
  'STOP.wav',
  'Wet one.wav',
  'What about phone.wav',
  'Why am I on fire.wav',
  'Whys it smell like poo.wav',
  'Whys this beef taste like tuna.wav',
  'Worms have sex.wav',
];

for (let i = 0; i < Sound.length; i++) {
  let button = document.createElement('button');
  let label = Sound[i].slice(0, -4);
  button.onclick = function() {playAudio(Sound[i])};
  
  let buttonText = document.createTextNode(label);
  button.appendChild(buttonText);
  document.body.append(button);
  
  button.classList.add("mybutton-class");
}
