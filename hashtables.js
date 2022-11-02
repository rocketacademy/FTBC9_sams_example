const candidates = ["sam", "perry", "eng liang"];
const votes = [];

// Create a random sample of 1000 votes
for (let i = 0; i < 10; i++) {
  votes.push(candidates[Math.floor(Math.random() * candidates.length)]);
}

console.log(votes);

// Compile tally of how many votes each candidate received
const tally = {};
for (const candidate of votes) {
  if (candidate in tally) {
    console.log(tally);
    tally[candidate] += 1;
    console.log(tally);
  } else {
    console.log("before added", tally);
    tally[candidate] = 1;
    console.log("after added", tally);
  }
}

console.log(tally);

// Determine who had most votes in the tally
// Initialise maxVotes to a minimum number
let maxVotes = 0;
let mostPopularCandidate;
Object.keys(tally).forEach((candidate) => {
  if (tally[candidate] > maxVotes) {
    maxVotes = tally[candidate];
    mostPopularCandidate = candidate;
  }
});

// mostPopularCandidate is the candidate with most votes in tally
console.log(`${mostPopularCandidate} wins!`);
