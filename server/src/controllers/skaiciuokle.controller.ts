import { Response } from "express";

export class SkaiciuokleController{
   static apskaiciuoti(req:any, res:any ){
        console.log("Skaiciuojami rezultatai");
        res.json({
            "rezultatas":5
        });

   } 
}