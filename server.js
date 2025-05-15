const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/request', (req, res) => {
    const { name, email, requestType } = req.body;
    console.log(`Yêu cầu từ ${name} (${email}): ${requestType}`);
    res.json({ message: 'Yêu cầu đã được xử lý.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server chạy trên cổng ${PORT}`));
