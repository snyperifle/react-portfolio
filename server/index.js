const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', (req, res) => {
//    res.sendFile(path.join(__dirname, 'build', 'index.html'));
//  });

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', function(req, res) {
   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.set('port', port);

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});