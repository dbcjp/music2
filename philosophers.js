basicData = [
    // 古代ギリシャ・ローマ
    { name: "Socrates", nameJ: "ソクラテス", birth: -470, death: -399, period: "Ancient", birthCountry: "Greece", activityCountries: ["Greece"], rank: 1, role: "philosopher", notes: "対話を通じて相手の無知を自覚させる「産婆術」を用い、西洋哲学の倫理的・批判的伝統の基礎を築いた。" },
    { name: "Plato", nameJ: "プラトン", birth: -427, death: -347, period: "Ancient", birthCountry: "Greece", activityCountries: ["Greece"], rank: 1, role: "philosopher", notes: "感覚を超えた真の実在である「イデア」の世界を想定し、その後の西洋形而上学の原型となる思想体系を構築した。" },
    { name: "Aristotle", nameJ: "アリストテレス", birth: -384, death: -322, period: "Ancient", birthCountry: "Greece", activityCountries: ["Greece"], rank: 1, role: "philosopher", notes: "論理学、自然学、倫理学、政治学など多岐にわたる学問を体系化し、中世以降のスコラ哲学やイスラム哲学に決定的な影響を与えた。" },
    { name: "Thales", nameJ: "タレス", birth: -624, death: -546, period: "Ancient", birthCountry: "Greece", activityCountries: ["Greece"], rank: 2, role: "philosopher", notes: "神話的説明から脱却し、世界の根源（アルケー）を「水」であるとして、自然哲学の道を切り開いた。" },
    { name: "Heraclitus", nameJ: "ヘラクレイトス", birth: -535, death: -475, period: "Ancient", birthCountry: "Greece", activityCountries: ["Greece"], rank: 2, role: "philosopher", notes: "「万物は流転する」と説き、対立するものの調和と変化の法則（ロゴス）の重要性を主張した。" },
    { name: "Democritus", nameJ: "デモクリトス", birth: -460, death: -370, period: "Ancient", birthCountry: "Greece", activityCountries: ["Greece"], rank: 2, role: "philosopher", notes: "物質の根源はそれ以上分割できない「原子（アトム）」であるとする原子論を提唱し、唯物論の先駆となった。" },
    { name: "Pythagoras", nameJ: "ピタゴラス", birth: -570, death: -495, period: "Ancient", birthCountry: "Greece", activityCountries: ["Greece"], rank: 2, role: "philosopher", notes: "万物の根源は「数」であると考え、数学的調和が宇宙の秩序を形成していると説いた。" },
    { name: "Epicurus", nameJ: "エピクロス", birth: -341, death: -270, period: "Ancient", birthCountry: "Greece", activityCountries: ["Greece"], rank: 2, role: "philosopher", notes: "心の平安（アタラクシア）を最高の快楽とする倫理学を説き、後の功利主義や唯物論に影響を与えた。" },
    { name: "Seneca", nameJ: "セネカ", birth: -4, death: 65, period: "Ancient", birthCountry: "Spain", activityCountries: ["Italy"], rank: 2, role: "philosopher", notes: "ローマ帝政期のストア派哲学者。理性による情念の克服と、運命への従容とした態度を説いた。" },
    { name: "Marcus Aurelius", nameJ: "マルクス・アウレリウス", birth: 121, death: 180, period: "Ancient", birthCountry: "Italy", activityCountries: ["Italy"], rank: 2, role: "philosopher", notes: "ストア派の哲人皇帝。『自省録』において、義務の遂行と内面の平和を保つことの重要性を記した。" },

    // 近世・近代西洋
    { name: "Descartes, René", nameJ: "ルネ・デカルト", birth: 1596, death: 1650, period: "Early Modern", birthCountry: "France", activityCountries: ["France"], rank: 1, role: "philosopher", notes: "方法的懐疑を通じて「我思う、ゆえに我あり」という確実な原理に到達し、近代合理主義哲学の出発点となった。" },
    { name: "Bacon, Francis", nameJ: "フランシス・ベーコン", birth: 1561, death: 1626, period: "Early Modern", birthCountry: "England", activityCountries: ["England"], rank: 2, role: "philosopher", notes: "「知は力なり」と主張し、実験と観察に基づく帰納法を提唱して近代科学的方法論の基礎を築いた。" },
    { name: "Locke, John", nameJ: "ジョン・ロック", birth: 1632, death: 1704, period: "Early Modern", birthCountry: "England", activityCountries: ["England"], rank: 2, role: "philosopher", notes: "人間の心は生まれたときは「白紙（タブラ・ラサ）」であると主張し、経験論の基礎を築くとともに、社会契約論を通じて近代民主主義に貢献した。" },
    { name: "Hume, David", nameJ: "デイヴィッド・ヒューム", birth: 1711, death: 1776, period: "Modern", birthCountry: "Scotland", activityCountries: ["Scotland"], rank: 2, role: "philosopher", notes: "因果関係の必然性を疑う懐疑論を展開し、カントに大きな影響を与えて近代認識論の転換点を作った。" },
    { name: "Voltaire", nameJ: "ヴォルテール", birth: 1694, death: 1778, period: "Modern", birthCountry: "France", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "宗教的寛容と言論の自由を擁護し、フランス啓蒙思想の中心人物として旧体制（アンシャン・レジーム）を批判した。" },
    { name: "Rousseau, Jean-Jacques", nameJ: "ジャン＝ジャック・ルソー", birth: 1712, death: 1778, period: "Modern", birthCountry: "Switzerland", activityCountries: ["France"], rank: 1, role: "philosopher", notes: "「自然に帰れ」と唱え、人民主権に基づく社会契約論を展開してフランス革命の思想的背景となった。" },
    { name: "Kant, Immanuel", nameJ: "イマヌエル・カント", birth: 1724, death: 1804, period: "Modern", birthCountry: "Germany", activityCountries: ["Germany"], rank: 1, role: "philosopher", notes: "合理論と経験論を統合し、人間の認識能力の限界と可能性を明らかにする批判哲学を確立した。" },
    { name: "Hegel, Georg Wilhelm Friedrich", nameJ: "ヘーゲル", birth: 1770, death: 1831, period: "Modern", birthCountry: "Germany", activityCountries: ["Germany"], rank: 1, role: "philosopher", notes: "絶対精神が歴史を通じて自己を展開していくという弁証法哲学を完成させ、近代ドイツ観念論の頂点に立った。" },
    { name: "Marx, Karl", nameJ: "カール・マルクス", birth: 1818, death: 1883, period: "Modern", birthCountry: "Germany", activityCountries: ["England"], rank: 1, role: "philosopher", notes: "資本主義経済の矛盾を分析し、唯物史観に基づく科学的社会主義を提唱して世界の労働運動や革命に絶大な影響を与えた。" },
    { name: "Nietzsche, Friedrich", nameJ: "フリードリヒ・ニーチェ", birth: 1844, death: 1900, period: "Modern", birthCountry: "Germany", activityCountries: ["Germany"], rank: 1, role: "philosopher", notes: "キリスト教道徳や近代の合理主義を「弱者のルサンチマン」として批判し、「超人」思想や「力への意志」を説いた。" },

    // 現代西洋
    { name: "Sartre, Jean-Paul", nameJ: "ジャン＝ポール・サルトル", birth: 1905, death: 1980, period: "Contemporary", birthCountry: "France", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "「実存は本質に先立つ」と主張し、人間は自らの自由な選択によって自己を形成する責任があると説いた。" },
    { name: "Beauvoir, Simone de", nameJ: "シモーヌ・ド・ボーヴォワール", birth: 1908, death: 1986, period: "Contemporary", birthCountry: "France", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "「人は女に生まれるのではない、女になるのだ」と述べ、ジェンダーの社会的構築性を指摘した。" },
    { name: "Foucault, Michel", nameJ: "ミシェル・フーコー", birth: 1926, death: 1984, period: "Contemporary", birthCountry: "France", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "狂気、監獄、性などの歴史的分析を通じて、知識と権力が不可分に結びついている構造を暴き出した。" },
    { name: "Derrida, Jacques", nameJ: "ジャック・デリダ", birth: 1930, death: 2004, period: "Contemporary", birthCountry: "Algeria", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "西洋哲学のロゴス中心主義を批判し、テキストの二項対立を解体する「脱構築」の手法を確立した。" },
    { name: "Levinas, Emmanuel", nameJ: "エマニュエル・レヴィナス", birth: 1906, death: 1995, period: "Contemporary", birthCountry: "Lithuania", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "他者の「顔」が発する倫理的命令に絶対的な優位性を置き、自己中心的な西洋哲学の伝統を批判した。" },
    { name: "Latour, Bruno", nameJ: "ブルーノ・ラトゥール", birth: 1947, death: 2022, period: "Contemporary", birthCountry: "France", activityCountries: ["France"], rank: 3, role: "philosopher", notes: "人間だけでなく非人間（技術や自然）も社会の構成要素として捉えるアクターネットワーク理論を提唱した。" },
    { name: "Arendt, Hannah", nameJ: "ハンナ・アーレント", birth: 1906, death: 1975, period: "Contemporary", birthCountry: "Germany", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "全体主義の起源を分析し、公的領域における人々の「活動」と「複数性」の重要性を説いた。" },
    { name: "Dewey, John", nameJ: "ジョン・デューイ", birth: 1859, death: 1952, period: "Contemporary", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "知識を行動の道具として捉えるプラグマティズムを発展させ、民主主義教育の理論的基盤を築いた。" },
    { name: "Emerson, Ralph Waldo", nameJ: "ラルフ・ワルド・エマーソン", birth: 1803, death: 1882, period: "Modern", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "個人の直観と自己信頼を重視する超越主義（トランセンデンタリズム）を主導し、アメリカ精神の形成に寄与した。" },
    { name: "Thoreau, Henry David", nameJ: "ヘンリー・デイヴィッド・ソロー", birth: 1817, death: 1862, period: "Modern", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "自然との調和した生活を実践し、不正な政府に対する「市民的不服従」の思想を提唱した。" },

    // 東洋思想
    { name: "Confucius", nameJ: "孔子", birth: -551, death: -479, period: "Ancient", birthCountry: "China", activityCountries: ["China"], rank: 1, role: "philosopher", notes: "「仁」と「礼」を重視する儒教の始祖となり、東アジア全体の政治・道徳規範の基盤を形成した。" },
    { name: "Laozi", nameJ: "老子", birth: -500, death: -400, period: "Ancient", birthCountry: "China", activityCountries: ["China"], rank: 1, role: "philosopher", notes: "人為的な作為を排し、自然の理法（道）に従って生きる「無為自然」の思想を説いた。" },
    { name: "Mencius", nameJ: "孟子", birth: -372, death: -289, period: "Ancient", birthCountry: "China", activityCountries: ["China"], rank: 2, role: "philosopher", notes: "人間は生まれながらにして善であるとする「性善説」を唱え、王道政治の理想を説いた。" },
    { name: "Xunzi", nameJ: "荀子", birth: -313, death: -238, period: "Ancient", birthCountry: "China", activityCountries: ["China"], rank: 2, role: "philosopher", notes: "人間の本性は利己的であるとする「性悪説」を唱え、後天的な礼儀による矯正の必要性を主張した。" },
    { name: "Zhuangzi", nameJ: "荘子", birth: -369, death: -286, period: "Ancient", birthCountry: "China", activityCountries: ["China"], rank: 2, role: "philosopher", notes: "あらゆる価値の相対性を説き、世俗の価値観から解放された自由な境地（逍遥遊）を理想とした。" },
    { name: "Zhu Xi", nameJ: "朱子", birth: 1130, death: 1200, period: "Medieval", birthCountry: "China", activityCountries: ["China"], rank: 1, role: "philosopher", notes: "儒教の教えを形而上学的に体系化し、東アジアの政治・社会秩序に長く影響を与えた朱子学を大成した。" },
    { name: "Wang Yangming", nameJ: "王陽明", birth: 1472, death: 1529, period: "Early Modern", birthCountry: "China", activityCountries: ["China"], rank: 2, role: "philosopher", notes: "心こそが理であるとする「心即理」と、知ることと行うことは一体であるとする「知行合一」を説いた。" },
    { name: "Nagarjuna", nameJ: "ナーガールジュナ", birth: 150, death: 250, period: "Ancient", birthCountry: "India", activityCountries: ["India"], rank: 1, role: "philosopher", notes: "あらゆる事物は固定的な実体を持たないとする「空」の思想を論理的に体系化し、大乗仏教の基礎を築いた。" },
    { name: "Sun Tzu", nameJ: "孫武", birth: -544, death: -496, period: "Ancient", birthCountry: "China", activityCountries: ["China"], rank: 2, role: "strategist", notes: "「戦わずして人の兵を屈する」を理想とし、戦略と戦術の極意を著した『孫子』は現代の経営学にも応用されている。" },
    { name: "Nishida, Kitaro", nameJ: "西田幾多郎", birth: 1870, death: 1945, period: "Modern", birthCountry: "Japan", activityCountries: ["Japan"], rank: 2, role: "philosopher", notes: "西洋哲学と東洋の禅の思想を融合させ、「純粋経験」の概念を中心とする独自の京都学派の哲学を創始した。" }
];
