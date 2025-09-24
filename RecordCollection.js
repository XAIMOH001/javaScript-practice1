const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // 1. If value is an empty string, delete the prop
  if (value === "") {
    delete records[id][prop];
  }
  // 2. If prop isn't "tracks" and value isn't empty
  else if (prop !== "tracks") {
    records[id][prop] = value;
  }
  // 3. If prop is "tracks" and album doesn't have "tracks"
  else if (prop === "tracks" && !records[id].hasOwnProperty("tracks")) {
    records[id]["tracks"] = [value];
  }
  // 4. If prop is "tracks" and album already has "tracks"
  else if (prop === "tracks") {
    records[id]["tracks"].push(value);
  }

  // Always return the full records object
  return records;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log(updateRecords(recordCollection, 5439, "tracks", "Mamma Mia"));
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));
console.log(updateRecords(recordCollection, 2468, "albumTitle", ""));

