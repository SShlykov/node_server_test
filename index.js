import express from 'express'
import bodyParser from 'body-parser'
import https from 'https'
import http from 'http'
import {Server} from 'http'
import fs from 'fs'
import crypto from 'crypto'
import ex from "./app.js";
import {createReadStream} from 'fs'


(() =>{
    try {
        const port = process.env.PORT || 3000;
        const app = ex(express, bodyParser, createReadStream, crypto, http)
        app.listen(port)
        console.log(`server is listening at http://localhost:${port}`)
    } catch (error) {
        console.log(error)
    }
})()