import express, {Application, Request, Response} from 'express';
import { skaiciuokleRouter } from './routes/skaiciuokle.router';
import bodyParser from 'body-parser';
import { corsHeaders } from './middlewares/cors.middleware';
import { productsRouter } from './routes/products.router';

const app:Application=express();

//Sutvarkomi duomenys jei buvo siusta forma
app.use(express.urlencoded());

//Sutvarkomi duomenys jei buvo atsiustas JSON failas
app.use(express.json());

//Į visus response header'ius įkeliame CORS nurodymus
app.use(corsHeaders);

//Užkrauname route failą (kur nurodyti skaičiuoklės url)
app.use('/skaiciuokle', skaiciuokleRouter);
app.use('/products', productsRouter);

export {app};