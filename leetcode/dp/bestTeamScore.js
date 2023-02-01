// Longest Increasing Subsequence (LIS) problem using dynamic programming.

// It starts by creating an array ageScorePair that contains the age and score of each player.

// The ageScorePair array is sorted based on the player's age. If two players have the same age, the player with a higher score comes first.

// A dp array is created and initialized with zeros. The dp[i] represents the maximum possible score for the LIS ending at index i.

// The maxScore variable is used to store the maximum possible score.

// The code uses a bottom-up approach to solve the problem. It starts from the first player and iterates through all players.

// For each player, the code checks if their score is greater than or equal to the score of the previous player. If so, it updates the dp[i] to be the maximum possible score ending at index i.

// The maxScore variable is updated by taking the maximum value between the current maxScore and the dp[i].

// Finally, the maxScore variable is returned, which represents the maximum possible score for the LIS.

/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
const bestTeamScore = (scores, ages) => {
  const n = ages.length;
  const ageScorePair = new Array(n);
  for (let i = 0; i < n; i++) {
    ageScorePair[i] = { age: ages[i], score: scores[i] };
  }
  ageScorePair.sort((a, b) =>
    a.age === b.age ? a.score - b.score : a.age - b.age
  );
  const dp = new Array(n).fill(0);
  dp[0] = ageScorePair[0].score;
  //   let maxScore = dp[0];
  for (let i = 1; i < n; i++) {
    const curPlayerScore = ageScorePair[i].score;
    dp[i] = curPlayerScore;
    for (let j = 0; j < i; j++) {
      if (curPlayerScore >= ageScorePair[j].score) {
        dp[i] = Math.max(dp[i], dp[j] + curPlayerScore);
      }
    }
    // maxScore = Math.max(maxScore, dp[i]);
  }
  //   return maxScore;
  return Math.max(...dp);
};
