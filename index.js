import express from 'express'
import bodyParser from 'body-parser'
import https from 'https'
import http from 'http'
import {Server} from 'http'
import fs from 'fs'
import crypto from 'crypto'
import ex from "./app.js";
import {createReadStream} from 'fs'

const app = ex(express,bodyParser,createReadStream,crypto,http)

app.listen(process.env.PORT)