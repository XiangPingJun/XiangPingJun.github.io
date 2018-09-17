const _loc = {
	'火焰巨龍Primordus': [74, 421, 126, 465],
	'冰霜巨龍Jormag': [481, 28, 555, 116],
	'不死巨龍Zhaitan(甦醒)': [268, 422, 355, 539],
	'不死巨龍Zhaitan(決戰)': [337, 236, 357, 256],
	'水晶龍Kralkatorrik': [722, 695, 831, 762],
	'叢林巨龍Mordremoth': [40, 316, 100, 372],
	'大災變The Cataclysm': [254, 408, 368, 513],
	'歐爾王國Orr': [239, 408, 384, 570],
	'阿斯卡隆王國Ascalon': [542, 49, 677, 236],
	'阿斯卡隆城': [630, 175, 669, 200],
	'灼世The Searing': [555, 106, 672, 229, 'top'],
	'仇火Foefire': [630, 175, 669, 200, 'right'],
	'科瑞塔王國Kryta': [233, 81, 410, 327],
	'黑色堡壘Black Citadel': [556, 173, 586, 220, 'top'],
}
const _img = {
	'Primordus.jpg': [272, 392],
	'jormag.jpg': [400, 150],
	'Icebrood.jpg': [400, 382],
	'Zhaitan.jpg': [60, 600],
	'Kralkatorrik.jpg': [60, 600],
	'Mouth_of_Zhaitan.jpg': [320, 600],
	'Fang_of_the_Serpent.jpg': [150, 150],
	'Destinys_Edge.jpg': [100, 100],
	'Caithe.jpg': [100, 100],
	'Faolain.jpg': [500, 100],
	'Eir.jpg': [50, 50],
	'Garm.jpg': [550, 50],
	'Captain_Logan_Thackeray.jpg': [50, 50],
	'Zojja.jpg': [50, 50],
	'Rytlock.jpg': [50, 50],
	'Snaff.jpg': [50, 50],
	'Ascalon_City_Ruins.jpg': [50, 50],
	'Ghost.jpg': [50, 350],
	'Quaggan.png': [5, 5],
}
function loc(...args) {
	return args.map(index => ({ name: index, pos: _loc[index] }))
}
function img(...args) {
	return args.map(index => ({ src: index, pos: _img[index] }))
}