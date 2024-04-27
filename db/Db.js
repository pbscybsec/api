const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://aryanstha4859:aryanstha4859@cluster1.5o59rtn.mongodb.net/Item?retryWrites=true&w=majority&appName=Cluster1';

const connectDB = async () => {
    try {
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
