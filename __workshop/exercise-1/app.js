// Preset values
const FROGS = 3;

for (let index = 1; index <= FROGS; index++) {
  const lane = document.createElement("li");
  lane.id = `lane-${index}`;

  const laneNumber = document.createElement("span");
  laneNumber.innerText = index;

  lane.appendChild(laneNumber);
  track.appendChild(lane);
}

const racers = [];

for (let index = 0; index < FROGS; index++) {
  racers.push(frogstable[index]);
}

racers.forEach((racer, index) => {
  const frog = document.createElement("span");
  frog.style.background = racer.color;
  frog.innerText = racer.number;
  frog.className = "frog";

  const currentLane = document.getElementById(`lane-${index + 1}`);

  const frogName = document.createElement("span");
  frogName.className = "frog-name";
  frogName.innerText = racer.name;

  currentLane.appendChild(frog);
  currentLane.appendChild(frogName);

  racers[index].progress = 0;
  racers[index].lane = `lane-${index + 1}`;

  racingFrog(racer);
});

const trackWidth = track.offsetWidth;

function racingFrog(racer) {
  console.log("racingFrog()", racer);

  const hop = setInterval(() => {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    racer.progress += hopLength;

    console.log(racer.name, " is at ", racer.progress);

    if (racer.progress >= 100) {
      racer.progress = 100;
      console.log(racer.name, " has finished!");
      clearInterval(hop);
    }

    const currentFrog = document.querySelector(`#${racer.lane} .frog`);
    currentFrog.style.left = `${racer.progress}%`;
  }, Math.random() * 1000);
}

racers.forEach((racer) => racingFrog(racer));

console.log(racers);
