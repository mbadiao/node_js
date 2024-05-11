const fs = require('fs');

// Create the file and write the content
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('Error creating the file:', err);
    return;
  }
  console.log('File created successfully');
});


// Read the content of the file and log it
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    console.log('File content:', data);
  });
  