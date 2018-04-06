import mongoose from 'mongoose'
mongoose.connect(process.env.MONGO_DB)

const searchSchema = mongoose.Schema({
    when: Number,
    query: String
})

export let SearchHistory = mongoose.model('SearchHistory', searchSchema)

