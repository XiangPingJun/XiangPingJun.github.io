const fs = require('fs')

const lineReader = require('readline').createInterface({
	input: fs.createReadStream('texts_jp.properties')
})
try { fs.unlinkSync('../searcher/texts_zh.js') } catch (e) { }
const lineWriter = fs.createWriteStream('../searcher/texts_zh.js', { flags: 'a' })
lineWriter.write(`zh={};`)
const rx = /^([^=]+)=(.*)/
lineReader.on('line', function (line) {
	line = line.replace(/"/g, '')
	const arr = rx.exec(line)
	const index = arr[1].trim()
	const string = arr[2].trim()
	lineWriter.write(`zh["${index}"]="${string}";`)
})
lineReader.on('close', () => lineWriter.write(`loaded();`))

const lineReader2 = require('readline').createInterface({
	input: fs.createReadStream('texts_en.properties')
})
try { fs.unlinkSync('../searcher/texts_en.js') } catch (e) { }
const lineWriter2 = fs.createWriteStream('../searcher/texts_en.js', { flags: 'a' })
lineWriter2.write(`en={};`)
lineReader2.on('line', function (line) {
	line = line.replace(/"/g, '')
	const arr = rx.exec(line)
	const index = arr[1].trim()
	const string = arr[2].trim()
	lineWriter2.write(`en["${index}"]="${string}";`)
})
lineReader2.on('close', () => lineWriter2.write(`loaded();`))
