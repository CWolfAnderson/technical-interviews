let candidates = [
  {name: 'Ben', time: 10},
  {name: 'Jen', time: 5},
  {name: 'Ben', time: 9},
  {name: 'Jen', time: 6},
  {name: 'Ben', time: 2},
  {name: 'Tom', time: 3},
  {name: 'Tom', time: 4},
  {name: 'Tom', time: 5},
  {name: 'Tom', time: 6}
];

// 10 -> 'Jen', 'Ben'

// console.log(getTopVote(candidates, 6)); // Jen
console.log(getTopVote(candidates, 10, 2)); // Ben

function getTopVote(candidates, time, k) {

  // 2 -> Ben & Jen
  // let histogram = {
  //   Ben: 2,
  //   Jen: 3,
  //   Tom: 1
  // };

  let count = {};

  // add to histogram
  candidates.forEach(function(candidate) {
    if (candidate.time <= time) {
      if (count[candidate.name]) {
        count[candidate.name] += 1;
      } else {
        count[candidate.name] = 1;
      }
    }
  });

  console.log(count);

  // get highest count
  let highestCount = 0;
  let highestName;

  let counts = [];
  for (let name in count) {
    counts.push(count[name]);
  }

  counts = counts.sort().reverse();

  let names = [];

  for (let i = 0; i < k; i++) {
    for (let name in count) {
      if (count[name] === counts[i]) {
        names.push(name);
      }
    }
  }


  // for (let name in count) {
  //   if (count[name] > highestCount) {
  //     highestName = name;
  //     highestCount = count[name];
  //   }
  // }

  return names;

}






