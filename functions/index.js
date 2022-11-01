import functions from "firebase-functions"
import { Express } from "express"
import cors from 'cors'
import { createNewAlbum, getAllAlbums } from "./src/albums"

const app = express()
app.use(cors())
app.use(express.json())

app.get('/albums', getAllAlbums)
app.post('/albums', createNewAlbum)

export const api = functions.https.onRequest(app)