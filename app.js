const express =require('express')
const mongoose =require('mongoose')
const app = express()
const dotenv = require('dotenv')
const CategorieRouter=require("./routes/categorie.route")
const scategorieRouter =require("./routes/scategorie.route")
const articleRouter = require("./routes/article.route")
const chatbotRouter=require("./routes/chatbot.route")
app.use(express.json())
dotenv.config()
app.get('/',(req,res)=>{
    res.send("bienvenue dans notre site")
})
//cnx a la base de donnée 
mongoose.connect(process.env.DATABASECLOUD)
  .then(()=>{console.log("connecion a la base de donnee reussie")})
  .catch((error)=>{console.log("impossible de connectye a la base de donne",error)
  process.exit()
})
app.use("/api/categories", CategorieRouter)
app.use('/api/scategories', scategorieRouter);
app.use("/api/articles", articleRouter);
app.use("/api/chat",chatbotRouter)
app.listen(process.env.PORT,function(){
    console.log(`serveure is listen on port ${process.env.PORT}`)
})
