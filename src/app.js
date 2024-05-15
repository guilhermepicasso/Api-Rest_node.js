import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import alunoController from './controllers/alunoController.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(alunoController);

let port = process.env.PORT;
servidor.listen(port, () => console.log("subiu !"));