const PORT = process.env.PORT || 8001
const express = require('express')
const epns = require('@epnsproject/sdk-restapi')
const app = express()
const ethers = require('ethers')


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

app.get('/sendNotification/:recipient1/:title/:body', async (req, res) => {

    const PK = '8922804d48a159827f06ed3b1252b27239091b6af088a2d493b090516a414724' // channel private key
    const Pkey = `0x${PK}`;
    const signer = new ethers.Wallet(Pkey);

    const recipient1 = req.params.recipient1
    const title = req.params.title
    const body = req.params.body

    let apiResponse = []

    const sendNotification = async() => {
        try {
             apiResponse = await epns.payloads.sendNotification({
                signer,
                type: 3, // target
                identityType: 2, // direct payload
                notification: {
                    title: `${title}:`,
                    body: `${body}`
                },
                payload: {
                    title: `[sdk-test] payload title`,
                    body: `sample msg body`,
                    cta: '',
                    img: ''
                },
                recipients: `eip155:42:${recipient1}`, // recipient address
                channel: 'eip155:42:0x713518a07CD806949af94304B3F4aA35Ef3F5aB6', // your channel address
                env: 'staging'
            });

            // apiResponse?.status === 204, if sent successfully!
            console.log('API response: ', apiResponse.status);

        } catch (err) {
            console.error('Error: ', err);
        }
    }

    await sendNotification()

    res.json(apiResponse.status)



})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))



