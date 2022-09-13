const PORT = process.env.PORT || 8001
const express = require('express')
const epns = require('@epnsproject/sdk-restapi')
const app = express()


app.get('/getFeeds/:userID', async (req, res) => {

    const userID = req.params.userID

    const notifications = await epns.user.getFeeds({
        user:'eip155:42:'+ (userID),
        // user: '',
        // raw: true,
        env: 'staging'
    })
    res.json(notifications)

})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))



