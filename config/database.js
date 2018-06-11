if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://avis:av1nash@ds111754.mlab.com:11754/vidjot-prod'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}