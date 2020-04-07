const bcryptjs = require('bcryptjs')

const encrypted = '$2a$10$TIEgcmFkNx40QDSu/fb6AOfJjlhvvWW6oAfGJpcrNSejNc7lb5o7S'

const password = 'aashay3'

bcryptjs.compare(password, encrypted)
    .then(function (result) {
        console.log(result)
    })