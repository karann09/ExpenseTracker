const incomeSchema = require("../models/incomeModel");


exports.addIncome = async (req, res)=>{
    const {title, amount, category, description, date} = req.body

    const income = incomeSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try{
        if(!title || !amount || !category || !description || !date){
            return res.status(400).json({message: "All fields are mandatory"});
        }
        if( amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: "Amount must be a positive number"});
        }
        await income.save();
        res.status(200).json({message: "Income Added"})
    }catch(err){
        res.status(500).json({message:"Server Error"});
}
    console.log(income);
}