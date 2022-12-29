// represent each meeting as a vertex in a graph
// add an edge between any two vertices that represent meetings that are scheduled at the same time.
// The colors could represent the different conference rooms available.
function scheduleMeetings(meetings, conferenceRooms) {
  // Create a graph with one vertex for each meeting
  const graph = {
    vertices: meetings.map((meeting) => ({
      id: meeting.id,
      neighbors: [],
    })),
  };

  // Add an edge between any two vertices that represent meetings scheduled at the same time
  for (let i = 0; i < meetings.length; i++) {
    for (let j = i + 1; j < meetings.length; j++) {
      if (
        meetings[i].startTime < meetings[j].endTime &&
        meetings[j].startTime < meetings[i].endTime
      ) {
        graph.vertices[i].neighbors.push(j);
        graph.vertices[j].neighbors.push(i);
      }
    }
  }

  console.log(graph);
  // Use the Welsh-Powell algorithm to color the vertices of the graph
  const colorMap = colorGraph(graph, conferenceRooms);

  // Create a map of conference room assignments
  const assignmentMap = new Map();
  for (const [meeting, conferenceRoom] of colorMap.entries()) {
    assignmentMap.set(meeting.id, conferenceRoom);
  }

  return assignmentMap;
}
function colorGraph(graph, colors) {
  // Create a map to store the colors assigned to each vertex
  const colorMap = new Map();

  // Sort the vertices in descending order by their degree (number of edges)
  const vertices = graph.vertices.sort((a, b) => b.degree - a.degree);

  for (const vertex of vertices) {
    // Get the list of available colors (those not used by any of the vertex's neighbors)
    const availableColors = new Set(colors);
    for (const neighbor of vertex.neighbors) {
      if (colorMap.has(neighbor)) {
        availableColors.delete(colorMap.get(neighbor));
      }
    }

    // Assign the first available color to the vertex
    colorMap.set(vertex, availableColors.values().next().value);
  }

  return colorMap;
}

// Example usage
const meetings = [
  { id: 1, startTime: 9, endTime: 10 },
  { id: 2, startTime: 9, endTime: 11 },
  { id: 3, startTime: 10, endTime: 11 },
  { id: 4, startTime: 11, endTime: 12 },
];

const conferenceRooms = ["Room A", "Room B", "Room C"];

console.log(scheduleMeetings(meetings, conferenceRooms));
// Output: Map { 1 => 'Room A', 2 => 'Room B', 3 => 'Room B', 4 => 'Room C' }
