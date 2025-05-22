const axios = require('axios');

const API_KEY = '8e669b8b54bb4ac48e92dda87efca09b' 
const BASE_URL = 'https://api.football-data.org/v4';

async function getMatches() {
    try {
        console.log('Fetching matches...');
        const response = await axios.get(`${BASE_URL}/matches`, {
            headers: { 'X-Auth-Token': API_KEY }
        });
        console.log('Response received:', response.data);
    } catch (error) {
        console.error('Error fetching matches:', error);
    }
}



async function getPlayer(playerId) {
    try {
        console.log(`Fetching player data for ID: ${playerId}`);
        const response = await axios.get(`${BASE_URL}/persons/${playerId}`, {
            headers: { 'X-Auth-Token': API_KEY }
        });
        console.log('Response received:', response.data);
    } catch (error) {
        console.error('Error fetching player data:', error.response ? error.response.data : error);
    }
}

getPlayer(44); // Example for Cristiano Ronaldo