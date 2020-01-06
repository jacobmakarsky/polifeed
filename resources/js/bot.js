/*
Author: 		Jacob Makarsky (www.makarsky.dev)
Title: 			Polifeed
Description: 	This is the bot that will read in politicians tweets as JSON 
				and store it in an Arweave Permafeed

Data Created: 	01/02/2020
*/

//Include dependencies 
const http = require('http')
const fs = require('fs')
const Arweave = require('arweave/node')
const argv = require('yargs').argv


