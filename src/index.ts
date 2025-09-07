import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('API rodando!')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});