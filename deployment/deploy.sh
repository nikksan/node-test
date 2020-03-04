#!/bin/bash

PORT=80
lsof -i tcp:${PORT} | awk 'NR!=1 {print $2}' | xargs kill 

export PORT=${PORT}
npm install
npm start &