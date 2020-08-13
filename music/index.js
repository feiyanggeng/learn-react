let musicList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let oldM = [];
let musicHistory = [];

let cur = musicHistory.length - 1;

function next() {
  if (cur === musicHistory.length - 1) {
    randomMusic(musicList);
    cur = musicHistory.length - 1;
  } else {
    cur += 1;
  }
  console.log(musicHistory);
  return musicList[musicHistory[cur]];
}

function pre() {
  if (cur < 0) {
    return "到头了";
  }
  cur--;
  return musicList[musicHistory[cur]];
}

function randomMusic(arr) {
  let index = Math.floor(Math.random() * arr.length);
  if (oldM.length === arr.length) {
    while (index === oldM[oldM.length - 1]) {
      index = Math.floor(Math.random() * arr.length);
    }
    oldM = [];
  }
  while (oldM.includes(index)) {
    index = Math.floor(Math.random() * arr.length);
  }
  oldM.push(index);
  musicHistory.push(index);
}
