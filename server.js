const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors'); 

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.use((error, req, res, next) => {
  const statusCode = error.status || 500; 
  return res.status(statusCode).json({
    status: 'error',
    code: statusCode,
    message: error.message || 'Internal Server Error',
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
