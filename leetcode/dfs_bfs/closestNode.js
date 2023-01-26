/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */

// Intuition
// All nodes are linked to 0 or 1 additional nodes, therefore we can find a path
//from both nodes and them compare between the two paths to find the smallest one

// Approach
// Populate two maps with the path that each node follows along with the steps it takes to reach it
// Iterate over the nodes of the first path comparing them to the nodes on
//the second path while updating the smallest path value

var closestMeetingNode = function (edges, node1, node2) {
  return findMinCommonNode(mapPath(node1), mapPath(node2));

  // Generate a map with all nodes reachable by this node and the steps taken
  function mapPath(node) {
    let steps = 0;
    let map = new Map();
    while (!map.has(node)) {
      // Checking whether we hit a cycle
      map.set(node, steps);
      steps++;
      node = edges[node];
      if (node == -1)
        // Stop if we cannot move further
        break;
    }
    return map;
  }

  // Find a common node with the smallest length from two Node paths
  function findMinCommonNode(pA, pB) {
    let commonMin = Infinity;
    let commonEntry = -1; // Required -1 if we cannot find a common node
    for (let [key, value] of pA) {
      // Iterate through the nodes of pathA
      if (pB.has(key)) {
        // If we find the same key in pathB
        let temp = Math.max(value, pB.get(key));
        if (temp < commonMin) {
          // If temp is less than commonMin - update
          commonMin = temp;
          commonEntry = key;
        } else if (temp == commonMin && commonEntry > key)
          // In case we have the same value - check if the entry is lower and update the entry
          commonEntry = key;
      }
    }
    return commonEntry;
  }
};

function closestMeetingNode(edges, node1, node2) {
  let map1 = {};
  let map2 = {};
  let dist = 0;

  while (map1[node1] == undefined && node1 != -1) {
    map1[node1] = dist;
    dist++;
    node1 = edges[node1];
  }
  dist = 0;
  while (map2[node2] == undefined && node2 != -1) {
    map2[node2] = dist;
    dist++;
    node2 = edges[node2];
  }
  let max = Infinity;
  let res = -1;

  for (let i = 0; i < edges.length; i++) {
    if (map1[i] == undefined || map2[i] == undefined) continue;
    let localMax = Math.max(map1[i], map2[i]);
    if (localMax < max) {
      max = localMax;
      res = i;
    }
  }

  return res;
}

function closestMeetingNode(edges, node1, node2) {
  adj = {};
  for (const [i, dist] of Object.entries(edges)) {
    if (!adj[i]) adj[i] = [];
    adj[i].push(dist);
  }

  function bfs(src, distMap) {
    let q = [[src, 0]];
    distMap[src] = 0;
    while (q.length) {
      const [node, dist] = q.pop();
      if (adj[node]) {
        for (let nei of adj[node]) {
          q.push([nei, dist + 1]);
          distMap[nei] = dist + 1;
        }
      }
    }
  }
  node1Dist = {};
  node2Dist = {};
  bfs(node1, node1Dist);
  bfs(node2, node2Dist);
  res = -1;
  resDist = Infinity;
  for (let i = 0; i < edges.length; i++) {
    if (node1Dist[i] == undefined || node2Dist[i] == undefined) continue;
    dist = Math.max(node1Dist[i], node2Dist[i]);
    if (dist < resDist) {
      res = i;
      resDist = dist;
    }
  }
  return res;
}
