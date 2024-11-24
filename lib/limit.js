/* 
  Author  : Zaenishi
  Contact : +62 831-8822-9366
  Instagram: https://instagram.com/zaenishi
  Twitter  : https://twitter.com/zaenishi
  Website  : https://zaenishi.xyz
*/

const fs = require('fs')
let jsonData = JSON.parse(fs.readFileSync('./database/limit.json', 'utf8'))

function addUser(userId, limit) {
  const userExists = jsonData.limit.some(user => user[userId])
  if (!userExists) {
    jsonData.limit.push({ [userId]: { "limit": limit } })
    console.log(`User ${userId} berhasil ditambahkan.`)
  } else {
    console.log(`User ${userId} sudah ada.`)
  }
}

function addLimit(userId, amount) {
  jsonData.limit.forEach(user => {
    if (user[userId]) {
      user[userId].limit += amount
      console.log(`Limit user ${userId} berhasil ditambahkan.`)
    }
  })
}


function subtractLimit(userId, amount) {
  jsonData.limit.forEach(user => {
    if (user[userId]) {
      user[userId].limit -= amount
      console.log(`Limit user ${userId} berhasil dikurangi.`)
    }
  })
}

function updateLimit(userId, newLimit) {
  jsonData.limit.forEach(user => {
    if (user[userId]) {
      user[userId].limit = newLimit
      console.log(`Limit user ${userId} berhasil diganti.`)
    }
  })
}

fs.writeFileSync('./database/limit.json', JSON.stringify(jsonData, null, 2), 'utf8')


module.exports = { addUser, addLimit, subtractLimit, updateLimit }
