import express from "express";
import cors from 'cors';
import axios from'axios';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(cors({
  origin: 'http://localhost:4200'             
}));
const port = 3000;


app.get('/prova',(req,res)=>{
    res.send("hello, World!")
})

app.get('/prodotti', async(req,res)=>{
    try {
        const response = await axios.get('https://northwind-api.miloudi.dev/v1/products');
        res.json(response.data);
    }catch (error){
        res.status(500).json({error: "errore nel recupero dei dati dell API"})
    }
});

app.get('/prodotto/:id',async(req,res)=>{
    const prodottoid = req.params.id;
    try{
        const response = await axios.get(`https://northwind-api.miloudi.dev/v1/products/${prodottoid}`);
            res.json(response.data);
    }catch (error){
        res.status(500).json({error: "Errore nel recipero del prodotto per l'id specificato"});
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT,() =>
    {console.log(`Server avviato su http://localhost:${PORT}`);
});