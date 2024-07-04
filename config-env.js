
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID:  process.env.PRABATH-MD~zGwkjRTD#E8nTtFvq3cIXYgk58wqz7l7F3kc88HJtDcaDreFyTQU,    
    BOT_NUMBER:  process.env.918617340627,
    GITHUB_USERNAME: ANIKMONDALB,
    GITHUB_AUTH_TOKEN: process.env.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,
};
