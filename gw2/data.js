const _loc = {
	'冰龍Jormag': [689, 34, 784, 85],
	'毒龍Zhaitan(甦醒)': [352, 601, 511, 771],
	'毒龍Zhaitan(決戰)': [475, 352, 507, 377],
	'大災變The Cataclysm': [364, 587, 523, 740],
}
const _img = {
	'jormag.jpg': [559, 150],
	'Icebrood.jpg': [564, 382]
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
	boxes: loc('冰龍Jormag', '毒龍Zhaitan(甦醒)', '大災變The Cataclysm'),
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
			'他甦醒的時候將被大災變毀滅的Orr古國從海底'
		].join('<br/>'),
		boxes: loc('毒龍Zhaitan(甦醒)', '毒龍Zhaitan(決戰)'),
		imgs: [
		]
	}],
}]