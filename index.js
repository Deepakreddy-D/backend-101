import express from 'express'

require('dotenv').config()
const app = express()
const port = 4000

const github = 
  {
    "login": "Deepakreddy-D",
    "id": 114271318,
    "node_id": "U_kgDOBs-kVg",
    "avatar_url": "https://avatars.githubusercontent.com/u/114271318?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Deepakreddy-D",
    "html_url": "https://github.com/Deepakreddy-D",
    "followers_url": "https://api.github.com/users/Deepakreddy-D/followers",
    "following_url": "https://api.github.com/users/Deepakreddy-D/following{/other_user}",
    "gists_url": "https://api.github.com/users/Deepakreddy-D/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Deepakreddy-D/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Deepakreddy-D/subscriptions",
    "organizations_url": "https://api.github.com/users/Deepakreddy-D/orgs",
    "repos_url": "https://api.github.com/users/Deepakreddy-D/repos",
    "events_url": "https://api.github.com/users/Deepakreddy-D/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Deepakreddy-D/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Deepak Reddy D",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 22,
    "public_gists": 0,
    "followers": 1,
    "following": 9,
    "created_at": "2022-09-24T02:02:23Z",
    "updated_at": "2023-12-14T15:29:31Z"
  }
  


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('Welcome to twitter')
})
app.get('/login', (req,res) => {
    res.send('<h1>please login to twitter </h1>')
})

app.get('/git',(req,res) => {
  res.json(github)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})