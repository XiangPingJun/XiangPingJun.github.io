const _loc = {
	'冰龍Jormag': [481, 28, 555, 116],
	'毒龍Zhaitan(甦醒)': [268, 422, 355, 539],
	'毒龍Zhaitan(決戰)': [337, 236, 357, 256],
	'水晶龍Kralkatorrik': [722, 695, 831, 762],
	'大災變The Cataclysm': [254, 408, 368, 513],
	'Orr古國': [253, 404, 347, 570]
}
const _img = {
	'jormag.jpg': [400, 150],
	'Icebrood.jpg': [400, 382],
	'Zhaitan.jpg': [60, 590],
	'Kralkatorrik.jpg': [60, 590]
}
function loc(...args) {
	return args.map(index => ({ name: index, pos: _loc[index] }))
}
function img(...args) {
	return args.map(index => ({ src: index, pos: _img[index] }))
}
const data = [{
	caption: '天災人禍',
	text: [
		// '* 火龍Primordus - 1代時被擊敗，第三季的時候似乎有偵測到其活動',
		//
	].join('<br/>'),
	boxes: loc('冰龍Jormag', '毒龍Zhaitan(甦醒)', '大災變The Cataclysm', '水晶龍Kralkatorrik'),
	children: [{
		caption: '冰龍Jormag',
		text: [
			'冰龍Jormag - 出現在諾恩故事線，有洗腦能力，每個嘗試攻擊冰龍的人都會變成Icebrood這種冰怪。',
			'諾恩有一群異教徒 Sons of Svanir 崇拜冰龍而不是傳統諾恩宗教裡面的野性靈魂',
			'矮人用他的血液做出了一把傳奇劍 Sanguinary Blade ，也會出現在故事中'
		].join('<br/>'),
		boxes: loc('冰龍Jormag'),
		imgs: img('jormag.jpg', 'Icebrood.jpg')
	}, {
		caption: '毒龍Zhaitan',
		text: [
			'毒龍Zhaitan - 個人故事的主線就是要阻止這隻龍。',
			'他甦醒的時候將被大災變毀滅的Orr古國從海底，產生的大海嘯淹沒了數千人，甚至淹沒了Lions Arch',
			'他在遊戲中不斷飛來飛去變換位置與他的爪牙們佔據了很大一塊領地'
		].join('<br/>'),
		boxes: loc('毒龍Zhaitan(甦醒)', '毒龍Zhaitan(決戰)'),
		imgs: img('Zhaitan.jpg')
	}, {
		caption: '水晶龍Kralkatorrik',
		text: [
			'水晶龍Kralkatorrik - 體型巨大，經過的地方其生物根地貌都會水晶化。飛過之處對大地造成了傷痕，後人稱之為Dragonbrand龍痕。',
			'傳奇冒險隊 - 命運之刃Destiny\'s Edge 曾經與之戰鬥並造成了Asura英雄Snaff犧牲'
		].join('<br/>'),
		boxes: loc('水晶龍Kralkatorrik'),
		imgs: img('Kralkatorrik.jpg')
	}],
}]