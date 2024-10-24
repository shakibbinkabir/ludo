module.exports = function (mongoose) {
    mongoose
        .connect(process.env.CONNECTION_URI)
        .then(() => {
            console.log('MongoDB Connected…');
        })
        .catch(err => console.error(err));
};
