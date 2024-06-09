import express from 'express';
import {router} from './shared/routes/index';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
