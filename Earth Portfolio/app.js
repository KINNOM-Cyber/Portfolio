const express = require("express")
const http = require("http")

const app = express()
const server = http.createServer(app)
const path = require("path")
const utils = require("./utils/utils")
const constant = require("./utils/constant")
const createHttpError = require("http-errors")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, ".", "public")))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, ".", "views"))

app.get('/', async (req, res) => {
    try {
        const categorys = await utils.getCategorys()

        res.render('index', { categorys })

    } catch (error) {
        res.status(error?.status || 405).json({
            message: error?.message
        })
    }
})

app.get('/about-me', (req, res) => {
    res.status(405).send("<pre>This page is under development</pre>")
})

app.post('/request', async (req, res) => {
    try {
        const body = req.body

        if (!body) {
            throw createHttpError(404, "Body is missing")
        }

        if (!body.categoryId) {
            throw createHttpError(405)
        }

        const items = await utils.getItemsById(body.categoryId)

        if (!items || items.length == 0) {
            throw createHttpError(404)
        }

        return res.status(200).json(items)
    } catch (error) {
        // console.error(error)
        res.status(error?.status || 405).json({
            message: error?.message
        })
    }
})

app.get('/image/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { status, data, headers } = await utils.makeRequest(constant.googleImageBaseURL + id, {
            headers: {
                'referer': 'https://drive.google.com/'
            },
            responseType: 'arraybuffer',
        })

        if (status != 200) {
            throw createHttpError(404)
        }

        if (!data) {
            throw createHttpError(405, "Invalid request")
        }

        const image = Buffer.from(data, 'binary').toString('base64')

        res.setHeader('Content-Type', headers['content-type']);
        res.send(Buffer.from(image, 'base64'));

    } catch (error) {
        res.status(error?.status || 405).json({
            message: error?.message
        })
    }
})

app.use((req, res) => {
    res.status(404).end()
})

server.listen(4000, () => console.log('App listening on port http://localhost:4000'))