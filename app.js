const express =require('express')
const mongoose =require('mongoose')
const app = express()
const dotenv = require('dotenv')
const cors =require('cors')
const path = require('path'); 
const CategorieRouter=require("./routes/categorie.route")
const scategorieRouter =require("./routes/scategorie.route")
const articleRouter = require("./routes/article.route")
const chatbotRouter=require("./routes/chatbot.route")
const UserRouter=require("./routes/user.route")
const chatbotRequeteRouter = require("./routes/chatbot-requete.route")
const paymentRouter =require("./routes/payment.route.js");
app.use(express.json())
app.use(cors())
dotenv.config()

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
app.use("/api/users",UserRouter)
app.use("/api/chatbotRequeteRouter",chatbotRequeteRouter)
app.use('/api/payment',paymentRouter);
app.use(express.static(path.join(__dirname, './client/build'))); // Route pourles pages non trouvées, redirige vers index.html
app.get('*', (req, res) => { res.sendFile(path.join(__dirname,
'./client/build/index.html')); });
app.listen(4000,function(){
    console.log(`serveure is listen on port ${process.env.PORT}`)
})
module.exports = app;