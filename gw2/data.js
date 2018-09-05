const _loc = {
	'火焰巨龍Primordus': [74, 421, 126, 465],
	'冰霜巨龍Jormag': [481, 28, 555, 116],
	'不死巨龍Zhaitan(甦醒)': [268, 422, 355, 539],
	'不死巨龍Zhaitan(決戰)': [337, 236, 357, 256],
	'水晶龍Kralkatorrik': [722, 695, 831, 762],
	'叢林巨龍Mordremoth': [40, 316, 100, 372],
	'大災變The Cataclysm': [254, 408, 368, 513],
	'Orr古國': [253, 404, 347, 570],
}
const _img = {
	'Primordus.jpg': [272, 392],
	'jormag.jpg': [400, 150],
	'Icebrood.jpg': [400, 382],
	'Zhaitan.jpg': [60, 590],
	'Kralkatorrik.jpg': [60, 590],
	'Mouth_of_Zhaitan.jpg': [320, 590],
	'Fang_of_the_Serpent.jpg': [320, 590],
	'Destinys_Edge.jpg': [100, 100],
	'Caithe.jpg': [100, 100],
}
function loc(...args) {
	return args.map(index => ({ name: index, pos: _loc[index] }))
}
function img(...args) {
	return args.map(index => ({ src: index, pos: _img[index] }))
}