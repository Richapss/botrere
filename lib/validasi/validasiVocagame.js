const fetch = require('node-fetch');

// Fungsi umum untuk memeriksa ID dan server
async function fetchGameData(url, gameId, serverId = null) {
    let fullUrl = serverId ? `${url}?userId=${gameId}&zoneId=${serverId}` : `${url}?userId=${gameId}&zoneId=undefined`;

    const response = await fetch(fullUrl);
    const data = await response.json();
    console.log(data);
    return data;
}

// Fungsi spesifik untuk setiap game
async function validateMobileLegendsVocagame(gameId, serverId) {
    const url = 'https://api.vocagame.com/v1/order/prepare/MOBILE_LEGENDS';
    return await fetchGameData(url, gameId, serverId);
}

async function validateFreeFireVocagame(gameId) {
    const url = 'https://api.vocagame.com/v1/order/prepare/FREEFIRE';
    return await fetchGameData(url, gameId);
}

async function validateGenshinImpactVocagame(gameId, serverId) {
    const url = 'https://api.vocagame.com/v1/order/prepare/genshin_impact';
    return await fetchGameData(url, gameId, serverId);
}

async function validateCodmVocagame(gameId) {
    const url = 'https://api.vocagame.com/v1/order/prepare/CALL_OF_DUTY';
    return await fetchGameData(url, gameId);
}

async function validateSuperSusVocagame(gameId) {
    const url = 'https://api.vocagame.com/v1/order/prepare/SUPER_SUS';
    return await fetchGameData(url, gameId);
}

async function validateHonorOfKingsVocagame(gameId) {
    const url = `https://api.vocagame.com/v1/order/prepare/HOK?userId=${gameId}&zoneId=undefined`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

async function validatePubgMobileVocagame(gameId) {
    const url = `https://api.vocagame.com/v1/order/prepare/PUBGM?userId=${gameId}&zoneId=undefined`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

// Ekspor fungsi-fungsi ini untuk digunakan di file lain
module.exports = {
    validateMobileLegendsVocagame,
    validateFreeFireVocagame,
    validateGenshinImpactVocagame,
    validateCodmVocagame,
    validateSuperSusVocagame,
    validateHonorOfKingsVocagame,
    validatePubgMobileVocagame
};