var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('srt.srt')
});

var logger = require('fs').createWriteStream('log.srt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})
let firstSec = false
let section = []
lineReader.on('line', function (line) {
  let match = /^(\d+)$/.exec(line)
  if (match)
    return handleIdxLine(match, line)
  match = /^(\d\d:\d\d:\d\d,\d\d\d) --> (\d\d:\d\d:\d\d,\d\d\d)$/.exec(line)
  if (match)
    return handleTimeLine(match, line)
  if (line.length)
    return haneleTextLine(match, line)
});

function handleIdxLine(match, line) {
  firstSec = !firstSec
  if (firstSec) {
    section = []
    section[0] = match[1]
  }
}

function handleTimeLine(match, line) {
  if (firstSec)
    section[1] = match[1]
  else
    section[1] += ' --> ' + match[2]
}

function haneleTextLine(match, line) {
  if (firstSec) {
    section[2] = line || ''
  } else {
    section[2] = section[2] || ''
    section[2] += '。' + (line || '')
    section[3] = ''
    section[4] = ''
    logger.write(section.join('\n'))
  }
}