const HumanKingdom = {
  caption: '三大人類王國',
  text: [
    '過去的人類曾經受到六真神的庇佑而所向披靡，他們在泰瑞爾大陸上建立了三個王國，分別是Ascalon, Orr跟Tryia。',
    '很不幸的是由於跟Charr的戰爭以及種種原因，Ascalon跟Orr都已經滅亡，僅存的人類都生活在Tryia'
  ].join('<br/>'),
  boxes: loc('阿斯卡隆王國Ascalon', '歐爾王國Orr', '科瑞塔王國Kryta'),
  children: [{
    caption: '阿斯卡隆王國Ascalon',
    text: [
      '(前情詳見The fall of Ascalon)',
      '',
      '阿斯卡隆城的仇火Foefire',
      '最後的決戰。在城內最高的塔頂上,埃德柏恩睥睨著腳下的敵人,高舉著亞拉(Arah)時期遺留的遠古神器',
      '聖劍瑪格達(Magdaer)釋放了強大的魔法火焰。',
      '一道白色的焚風橫掃了整座阿斯卡隆城,復仇業火奪走了觸及的一切生靈,',
      '包含人類和夏爾在內的生命紛紛倒下,但死去的阿斯卡隆子民鬼魂重新站起,',
      '對抗前仆後繼的夏爾大軍,此消彼長,夏爾大軍不得不撤出阿斯卡隆城。',
      '',
      '後來Charr硬是選擇在阿斯卡隆城廢墟旁邊蓋了黑色堡壘Black Citadel，永遠與仇火的亡魂對抗。',
      '逃到Kryta王國的王子與難民們的後裔最後成了人類英雄Logan的祖先。',
    ].join('<br/>'),
    boxes: loc('阿斯卡隆王國Ascalon', '阿斯卡隆城', '灼世The Searing', '仇火Foefire', '黑色堡壘Black Citadel'),
    imgs: img('Ascalon_City_Ruins.jpg', 'Ghost.jpg')
  }],
}