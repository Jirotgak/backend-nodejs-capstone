require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB;
let dbInstance = null;

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    try {
        const client = new MongoClient(url);      
        
        // Task 1: Connect to MongoDB
        await client.connect();
        
        // Task 2: Connect to database and store in variable dbInstance
        dbInstance = client.db(dbName);
        
        // Task 3: Return database instance
        return dbInstance;
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
}

module.exports = connectToDatabase;