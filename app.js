require('dotenv').config()
var Twitter = require('twitter');
require('dotenv').config()
const Twit = require("twit")
const config = require("./config")
const T = new Twit(config)
const axios = require("axios")


// Endpoint to get all protocols
axios.get('https://api.boardroom.info/v1/protocols')
  .then(response => {
    console.log(response.data.data);
    response.data.data.forEach(item => {
      // console.log('Cname: ' + item.cname)
    })
  }, error => {
  // handle the response error
  return Promise.reject(error);
});

// // Endpoint to get all voters from a protocol

async function getProtocol() {
  const res = await axios.get(`https://api.boardroom.info/v1/protocols/aave/voters`)
  // console.log(res.data.data)
  res.data.data.forEach(item =>{
    item.protocols.forEach(protocol =>{
      console.log(protocol.protocol)
    })
  })
}

// getProtocol()

axios.get(`https://api.boardroom.info/v1/protocols/aave/voters`)
  .then(response => {
    console.log(response.data.data);
    response.data.data.forEach(item => {
      console.log('Address: ' + item.address + ' \n total vote cast ' + item.totalVotesCast)
    })
  }, error => {
  // handle the response error
  return Promise.reject(error);
});

let startDateResult, endDateResult = ""
//Get all proposals, their start and endtime
async function getProposals() {
  const res = await axios.get(`https://api.boardroom.info/v1/proposals`)
  // console.log(res.data.data)
  res.data.data.forEach(item =>{
    //Proposal startime 
    let startTime = Object.values(item.startTime)
    startTime.forEach(time =>{
    let formateddate = new Date(time * 1000)
    // console.log("StartTime " +formateddate.toGMTString())
         startDateResult = "\nStartTime " + formateddate.toGMTString()
  //  console.log(startDateResult)
    })
  // proposal End Time
    let endTime = Object.values(item.endTime)
    endTime.forEach(time =>{
    let formateddate = new Date(time * 1000)
    // console.log("EndTime " + formateddate.toGMTString())
     endDateResult = "\nEndTime " + formateddate.toGMTString()
    // console.log(endDateResult)
  })

  console.log("\nProtocol: " + item.protocol +  "\nTitle " + item.title +  "\nTotalVotes " + item.totalVotes + startDateResult + endDateResult )

//Twitter call to post protocols
T.post('statuses/update', {
  status: "\nProtocol: " + item.protocol +  "\nTitle " + item.title +  "\nTotalVotes " + item.totalVotes + startDateResult + endDateResult
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${data.text} tweeted!`)
  }

})
})}

async function getProposal(){
  const res = await axios.get('https://api.boardroom.info/v1/protocols/aave/proposals')
  console.log(res.data.data)
  res.data.data.forEach(item =>{
  let result = "total vote " + item.totalVotes
  console.log(result)
  })
}

getProposals()




// console.log(getAllVoterFromAProtocol)

// execute simultaneous requests 
axios.all([
  axios.get('https://api.github.com/users/mapbox'),
  axios.get('https://api.github.com/users/phantomjs')
])
.then(responseArr => {
  //this will be executed only when all requests are complete
  console.log('Date created: ', responseArr[0].data.created_at);
  console.log('Date created: ', responseArr[1].data.created_at);
});



// T.post('statuses/retweet/:id', {
//   id: '1428855226648305664'
// }, (err, data, response) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(`${data.text} retweet success!`)
//   }
// })



