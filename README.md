# DAO Twitter Governance Bot Using BoardRoom API

This twitter bot makes use of the Boardroom API to display information relating to Decentralized Organization (DAO) Governance.

This bot will tweet via [@dao_govbot](https://twitter.com/dao_govbot) on Twitter. 
The bot covers general general governance cases of Protocols, Proposals, Vote Alerts and Vote Results.

# Setup and Installation Requirements
- Login to Twitter, create developer account if you don't have, then create an app and a twitter account for the bot
- Obtain your consumer API, consumer Secret, Access token and Access Secret from Twitter
- Authorize the Twitter bot account from your developer account to be able to tweet from the bot
- Config your `.env` environment using the APIs and Token you have been given
- Run npm install 
- node app

# What is currently working
- The bot can make post using the Boardroom API to get all protocols and proposals of a particular protocol.
- It can get the protocol name, proposal details like startTime and endTime, totalVoteCount etc.

# Visual Display/Demo
 <img width="603" alt="Screenshot 2021-09-06 at 21 52 42" src="https://user-images.githubusercontent.com/23031920/132259992-91970f44-b7f5-4437-b122-bf9616eb1e47.png">

# Challenges
I started coding locally, but was was having error trying to access the twitter api because of the Twitter ban in Nigeria as a result couldn't create a new account for the bot had to use an old account I had to test that the bot is working. 

Only realized my mistake after spending reasonable amount of time. I had to code using replit and vpn on my browser to be able to access the Twitter api.

# Features to consider
- Daily / weekly Alert on onging / new proposals and their endTime
- Enable reply when user mention the bot handle
- Handle user search cases i.e when a user tweet @dao_govbot aave voters. It should reply with the result gotten from the API
- Add more search specific features as might be required by the user and as can be handled by the API



