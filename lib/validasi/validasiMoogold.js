const fetch = require('node-fetch');

// Fungsi umum untuk memeriksa ID dan server
async function fetchMoogoldData(url, params) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: params
    });

    const data = await response.json();
    console.log(data);
    return data;
}

// Fungsi spesifik untuk setiap game
async function validateMobileLegendsMoogold(userId, zoneId) {
    const url = 'https://moogold.com/wp-content/plugins/id-validation-new/id-validation-ajax.php';
    const params = new URLSearchParams();
    params.append('attribute_diamonds', 'Weekly Pass');
    params.append('text-5f6f144f8ffee', userId);
    params.append('text-1601115253775', zoneId);
    params.append('quatity', 1);
    params.append('add-to-chart', 5846232);
    params.append('product_id', 5846232);
    params.append('variation_id', 5846345);

    return await fetchMoogoldData(url, params);
}

async function validateHonkaiStarRailMoogold(userId, inputZone) {
    const url = 'https://moogold.com/wp-content/plugins/id-validation-new/id-validation-ajax.php';
    const zoneMap = {
        'Asia': 'prod_official_asia',
        'America': 'prod_official_usa',
        'Europe': 'prod_official_euro',
        'TW_HK_MO': 'prod_official_cht',
        'prod_official_asia': 'prod_official_asia',
        'prod_official_usa': 'prod_official_usa',
        'prod_official_euro': 'prod_official_euro',
        'prod_official_cht': 'prod_official_cht'
    };

    const zoneId = zoneMap[inputZone];
    const params = new URLSearchParams();
    params.append('attribute_voucher-code', '60 Oneiric Shard');
    params.append('text-1689735844106', userId);
    params.append('select-1689735845046', zoneId);
    params.append('quatity', 1);
    params.append('add-to-chart', 4233885);
    params.append('product_id', 4233885);
    params.append('variation_id', 4796731);

    return await fetchMoogoldData(url, params);
}

module.exports = {
    validateMobileLegendsMoogold,
    validateHonkaiStarRailMoogold
};
