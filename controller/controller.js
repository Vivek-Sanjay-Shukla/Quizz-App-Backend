import Questions from '../models/questionsSchema.js'
import Results from '../models/resultSchema.js'
import questions,{answers} from '../database/data.js'


// get all questions
export async function getQuestions(req,res){
   try{
     const ques = await Questions.find();
     res.json(ques);
   }catch(err){
     res.json({err});
   }
}


// insert all questions
export async function insertQuestions(req,res){
    try{

      Questions.insertMany({questions : questions,answers : answers}).then(function () {
        res.json("Data saved succesfully...");
      })
      .catch(function (err) {
         res.json(err);
      });

    }catch(err){
        res.json({err});
    }
}


// delete all questions 
export async function deleteQuestions(req,res){
     try{
        await Questions.deleteMany();
        res.json({msg : "Questions deleted succesfully..."})
     }catch(err){
        res.json({err})
     }
}



// get all results
export async function getResults(req,res){
    try{
       const result = await Results.find();
       res.json(result)
    }catch(err){
        res.json({err})
    }
}


// insert all results
export async function insertResults(req,res){
   try{ 
      // we will get this data from the user

      const {username,result,attempts,points,achived} = req.body;
       if(!username && !result){
          throw Error('Data not provided')
       }
       
       // we use create fi we want to send only onde data to mongo db

       Results.create({username,result,attempts,points,achived}).then(()=>{
        res.json({msg:"Result saved successfully..."})
       }).catch((err) => {
        res.json({err})
       })

   }catch(err){
    res.json({err})
   }
}


// delete all results 
export async function deleteResults(req,res){
    try{
      await Results.deleteMany();
      res.json({msg : "result deleted successfully..."}) 
    }catch(err){
        res.json({err})
    }
}