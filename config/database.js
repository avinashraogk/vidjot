if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://username:password@url/vidjot-prod'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}
