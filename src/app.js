import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import {createRoles} from './libs/initialSetup.js'
import authRoutes from './routers/authRoutes.js';
import productRoutes from './routers/productRoutes.js';
import userRoutes from './routers/userRoutes.js';
import morgan from 'morgan';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
createRoles()

app.use(express.json())
app.use(morgan('dev'))
app.use('/api', authRoutes)
app.use('/products', productRoutes)
app.use('/users', userRoutes)
// const port = 3000
// app.listen(port, () => console.log(`Server running on port ${port}`))

export default app;