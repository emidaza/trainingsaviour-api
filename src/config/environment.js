/* eslint-disable no-undef */
const env = {
    isProduction: false || process.env.isProduction,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/trainingSaviourDb',
    salt: process.env.salt || 'TrainingSaviour2022'
}

export default env