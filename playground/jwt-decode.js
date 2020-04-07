const jwt = require('jsonwebtoken')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTczNTc5ZTQzMmVmZDAwMTZlODA2NTUiLCJ1c2VybmFtZSI6ImFhc2hheTEiLCJjcmVhdGVkQXQiOjE1ODQ2MTczODk2NzEsImlhdCI6MTU4NDYxNzM4OX0.GmNaC-KYAfdmFbFO7Sh8aD395vUOTdYLHdRQ1_uDNtw'

console.log(jwt.verify(token, 'jwt@123'))