function canVisitAllRooms(rooms) {
  let visited = new Set() < number > [0];
  const stack = [0];
  while (stack.length) {
    const keys = stack.pop();
    for (const key of rooms[keys]) {
      if (visited.has(key)) continue;
      visited.add(key);
      stack.push(key);
    }
  }
  return visited.size === rooms.length;
}
