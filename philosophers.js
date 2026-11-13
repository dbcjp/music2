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

    // 中世・近世
    { name: "Augustine", nameJ: "アウグスティヌス", birth: 354, death: 430, period: "Medieval", birthCountry: "Algeria", activityCountries: ["Italy"], rank: 1, role: "theologian", notes: "キリスト教神学と新プラトン主義を統合し、西洋キリスト教思想の基盤を確立した。" },
    { name: "Aquinas, Thomas", nameJ: "トマス・アクィナス", birth: 1225, death: 1274, period: "Medieval", birthCountry: "Italy", activityCountries: ["France"], rank: 1, role: "theologian", notes: "アリストテレス哲学を用いてキリスト教神学を体系化し、スコラ哲学を大成した。" },
    { name: "Machiavelli, Niccolò", nameJ: "ニッコロ・マキャヴェッリ", birth: 1469, death: 1527, period: "Renaissance", birthCountry: "Italy", activityCountries: ["Italy"], rank: 1, role: "philosopher", notes: "政治を宗教や道徳から切り離し、権力の獲得と維持の技術として分析する近代政治学の祖となった。" },
    { name: "Hobbes, Thomas", nameJ: "トマス・ホッブズ", birth: 1588, death: 1679, period: "Early Modern", birthCountry: "England", activityCountries: ["England"], rank: 2, role: "philosopher", notes: "「万人の万人に対する闘争」という自然状態を想定し、平和維持のために絶対的な主権者への服従を説いた。" },
    { name: "Descartes, René", nameJ: "ルネ・デカルト", birth: 1596, death: 1650, period: "Early Modern", birthCountry: "France", activityCountries: ["France"], rank: 1, role: "philosopher", notes: "方法的懐疑を通じて「我思う、ゆえに我あり」という確実な原理に到達し、近代合理主義哲学の出発点となった。" },
    { name: "Spinoza, Baruch", nameJ: "バールーフ・デ・スピノザ", birth: 1632, death: 1677, period: "Early Modern", birthCountry: "Netherlands", activityCountries: ["Netherlands"], rank: 1, role: "philosopher", notes: "神と自然を同一視する汎神論を唱え、合理主義哲学を極限まで推し進めた。" },
    { name: "Locke, John", nameJ: "ジョン・ロック", birth: 1632, death: 1704, period: "Early Modern", birthCountry: "England", activityCountries: ["England"], rank: 2, role: "philosopher", notes: "人間の心は生まれたときは「白紙」であると主張し、経験論の基礎を築くとともに、社会契約論を通じて近代民主主義に貢献した。" },
    { name: "Leibniz, Gottfried Wilhelm", nameJ: "ゴットフリート・ライプニッツ", birth: 1646, death: 1716, period: "Early Modern", birthCountry: "Germany", activityCountries: ["Germany"], rank: 1, role: "philosopher", notes: "宇宙は「モナド」と呼ばれる分割不可能な実体から構成されているとする独自の形而上学を展開した。" },
    { name: "Montesquieu", nameJ: "モンテスキュー", birth: 1689, death: 1755, period: "Modern", birthCountry: "France", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "権力の濫用を防ぐための「三権分立」の概念を提唱し、近代民主主義憲法の基礎を作った。" },
    { name: "Voltaire", nameJ: "ヴォルテール", birth: 1694, death: 1778, period: "Modern", birthCountry: "France", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "宗教的寛容と言論の自由を擁護し、フランス啓蒙思想の中心人物として旧体制を批判した。" },

    // 近代
    { name: "Rousseau, Jean-Jacques", nameJ: "ジャン＝ジャック・ルソー", birth: 1712, death: 1778, period: "Modern", birthCountry: "Switzerland", activityCountries: ["France"], rank: 1, role: "philosopher", notes: "「自然に帰れ」と唱え、人民主権に基づく社会契約論を展開してフランス革命の思想的背景となった。" },
    { name: "Smith, Adam", nameJ: "アダム・スミス", birth: 1723, death: 1790, period: "Modern", birthCountry: "Scotland", activityCountries: ["Scotland"], rank: 1, role: "economist", notes: "市場の「見えざる手」による調整機能を説き、古典派経済学の基礎を築いた。" },
    { name: "Kant, Immanuel", nameJ: "イマヌエル・カント", birth: 1724, death: 1804, period: "Modern", birthCountry: "Germany", activityCountries: ["Germany"], rank: 1, role: "philosopher", notes: "合理論と経験論を統合し、人間の認識能力の限界と可能性を明らかにする批判哲学を確立した。" },
    { name: "Hegel, Georg Wilhelm Friedrich", nameJ: "ヘーゲル", birth: 1770, death: 1831, period: "Modern", birthCountry: "Germany", activityCountries: ["Germany"], rank: 1, role: "philosopher", notes: "絶対精神が歴史を通じて自己を展開していくという弁証法哲学を完成させ、近代ドイツ観念論の頂点に立った。" },
    { name: "Schopenhauer, Arthur", nameJ: "アルトゥル・ショーペンハウアー", birth: 1788, death: 1860, period: "Modern", birthCountry: "Germany", activityCountries: ["Germany"], rank: 2, role: "philosopher", notes: "世界は盲目的な「生きんとする意志」の表象であるとするペシミズム（厭世観）を説いた。" },
    { name: "Comte, Auguste", nameJ: "オーギュスト・コント", birth: 1798, death: 1857, period: "Modern", birthCountry: "France", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "神学的・形而上学的段階を経て実証的段階へ至るという「三段階の法則」を提唱し、社会学の祖となった。" },
    { name: "Mill, John Stuart", nameJ: "ジョン・スチュアート・ミル", birth: 1806, death: 1873, period: "Modern", birthCountry: "England", activityCountries: ["England"], rank: 2, role: "philosopher", notes: "「最大多数の最大幸福」を求める功利主義に、個人の自由と質的快楽の概念を導入して洗練させた。" },
    { name: "Kierkegaard, Søren", nameJ: "セーレン・キェルケゴール", birth: 1813, death: 1855, period: "Modern", birthCountry: "Denmark", activityCountries: ["Denmark"], rank: 2, role: "philosopher", notes: "ヘーゲルの体系的な哲学に反対し、神の前の単独者としての「実存」の重要性を説いた。" },
    { name: "Marx, Karl", nameJ: "カール・マルクス", birth: 1818, death: 1883, period: "Modern", birthCountry: "Germany", activityCountries: ["England"], rank: 1, role: "philosopher", notes: "資本主義経済の矛盾を分析し、唯物史観に基づく科学的社会主義を提唱して世界の労働運動や革命に絶大な影響を与えた。" },
    { name: "Nietzsche, Friedrich", nameJ: "フリードリヒ・ニーチェ", birth: 1844, death: 1900, period: "Modern", birthCountry: "Germany", activityCountries: ["Germany"], rank: 1, role: "philosopher", notes: "キリスト教道徳や近代の合理主義を「弱者のルサンチマン」として批判し、「超人」思想や「力への意志」を説いた。" },

    // 現代
    { name: "Freud, Sigmund", nameJ: "ジークムント・フロイト", birth: 1856, death: 1939, period: "Modern", birthCountry: "Austria", activityCountries: ["Austria"], rank: 1, role: "psychologist", notes: "無意識の領域を発見し、精神分析学を創始して人間理解に革命をもたらした。" },
    { name: "Husserl, Edmund", nameJ: "エドムント・フッサール", birth: 1859, death: 1938, period: "Modern", birthCountry: "Germany", activityCountries: ["Germany"], rank: 1, role: "philosopher", notes: "先入観を排して意識に現れる現象そのものを記述する「現象学」を創始した。" },
    { name: "Dewey, John", nameJ: "ジョン・デューイ", birth: 1859, death: 1952, period: "Contemporary", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "知識を行動の道具として捉えるプラグマティズムを発展させ、民主主義教育の理論的基盤を築いた。" },
    { name: "Heidegger, Martin", nameJ: "マルティン・ハイデッガー", birth: 1889, death: 1976, period: "Contemporary", birthCountry: "Germany", activityCountries: ["Germany"], rank: 1, role: "philosopher", notes: "「存在」の意味を問い直し、人間を時間の中で生きる「現存在」として分析した。" },
    { name: "Wittgenstein, Ludwig", nameJ: "ルートヴィヒ・ヴィトゲンシュタイン", birth: 1889, death: 1951, period: "Contemporary", birthCountry: "Austria", activityCountries: ["England"], rank: 1, role: "philosopher", notes: "言語の限界が世界の限界であるとし、分析哲学の発展に決定的な影響を与えた。" },
    { name: "Sartre, Jean-Paul", nameJ: "ジャン＝ポール・サルトル", birth: 1905, death: 1980, period: "Contemporary", birthCountry: "France", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "「実存は本質に先立つ」と主張し、人間は自らの自由な選択によって自己を形成する責任があると説いた。" },
    { name: "Arendt, Hannah", nameJ: "ハンナ・アーレント", birth: 1906, death: 1975, period: "Contemporary", birthCountry: "Germany", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "全体主義の起源を分析し、公的領域における人々の「活動」と「複数性」の重要性を説いた。" },
    { name: "Foucault, Michel", nameJ: "ミシェル・フーコー", birth: 1926, death: 1984, period: "Contemporary", birthCountry: "France", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "狂気、監獄、性などの歴史的分析を通じて、知識と権力が不可分に結びついている構造を暴き出した。" },
    { name: "Derrida, Jacques", nameJ: "ジャック・デリダ", birth: 1930, death: 2004, period: "Contemporary", birthCountry: "Algeria", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "西洋哲学のロゴス中心主義を批判し、テキストの二項対立を解体する「脱構築」の手法を確立した。" },
    { name: "Habermas, Jürgen", nameJ: "ユルゲン・ハーバーマス", birth: 1929, death: 2026, period: "Contemporary", birthCountry: "Germany", activityCountries: ["Germany"], rank: 2, role: "philosopher", notes: "理性的な討議を通じて合意を形成する「コミュニケーション的行為」の理論を提唱した。" },

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
    { name: "Nishida, Kitaro", nameJ: "西田幾多郎", birth: 1870, death: 1945, period: "Modern", birthCountry: "Japan", activityCountries: ["Japan"], rank: 2, role: "philosopher", notes: "西洋哲学と東洋の禅の思想を融合させ、「純粋経験」の概念を中心とする独自の京都学派の哲学を創始した。" },
    // 現代哲学・思想（続き）
    { name: "Beauvoir, Simone de", nameJ: "シモーヌ・ド・ボーヴォワール", birth: 1908, death: 1986, period: "Contemporary", birthCountry: "France", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "「人は女に生まれるのではない、女になるのだ」と述べ、ジェンダーの社会的構築性を指摘した。" },
    { name: "Levinas, Emmanuel", nameJ: "エマニュエル・レヴィナス", birth: 1906, death: 1995, period: "Contemporary", birthCountry: "Lithuania", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "他者の「顔」が発する倫理的命令に絶対的な優位性を置き、自己中心的な西洋哲学の伝統を批判した。" },
    { name: "Latour, Bruno", nameJ: "ブルーノ・ラトゥール", birth: 1947, death: 2022, period: "Contemporary", birthCountry: "France", activityCountries: ["France"], rank: 3, role: "philosopher", notes: "人間だけでなく非人間（技術や自然）も社会の構成要素として捉えるアクターネットワーク理論を提唱した。" },
    { name: "Emerson, Ralph Waldo", nameJ: "ラルフ・ワルド・エマーソン", birth: 1803, death: 1882, period: "Modern", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "個人の直観と自己信頼を重視する超越主義を主導し、アメリカ精神の形成に寄与した。" },
    { name: "Thoreau, Henry David", nameJ: "ヘンリー・デイヴィッド・ソロー", birth: 1817, death: 1862, period: "Modern", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "自然との調和した生活を実践し、不正な政府に対する「市民的不服従」の思想を提唱した。" },
    
    // イスラム・ユダヤ思想
    { name: "Avicenna", nameJ: "イブン・スィーナー", birth: 980, death: 1037, period: "Medieval", birthCountry: "Uzbekistan", activityCountries: ["Iran"], rank: 1, role: "philosopher", notes: "アリストテレス哲学と新プラトン主義をイスラム神学と統合し、中世ヨーロッパのスコラ哲学にも多大な影響を与えた。" },
    { name: "Averroes", nameJ: "アヴェロエス", birth: 1126, death: 1198, period: "Medieval", birthCountry: "Spain", activityCountries: ["Morocco"], rank: 2, role: "philosopher", notes: "アリストテレスの著作に対する詳細な注釈を行い、その思想を正確に後世に伝えるとともに、理性と信仰の調和を試みた。" },
    { name: "Maimonides", nameJ: "マイモニデス", birth: 1138, death: 1204, period: "Medieval", birthCountry: "Spain", activityCountries: ["Egypt"], rank: 2, role: "philosopher", notes: "ユダヤ教の信仰とアリストテレス哲学の統合を図り、中世ユダヤ哲学の最高峰とされる『迷える者への手引き』を著した。" },

    // 社会学・政治思想
    { name: "Weber, Max", nameJ: "マックス・ヴェーバー", birth: 1864, death: 1920, period: "Modern", birthCountry: "Germany", activityCountries: ["Germany"], rank: 1, role: "sociologist", notes: "プロテスタンティズムの倫理が近代資本主義の精神的基盤となったことを論証し、近代社会学の基礎を確立した。" },
    { name: "Durkheim, Émile", nameJ: "エミール・デュルケーム", birth: 1858, death: 1917, period: "Modern", birthCountry: "France", activityCountries: ["France"], rank: 1, role: "sociologist", notes: "社会的事実を物のように扱う方法論を確立し、自殺や宗教の社会学的分析を通じて近代社会学の父となった。" },
    { name: "Tocqueville, Alexis de", nameJ: "アレクシ・ド・トクヴィル", birth: 1805, death: 1859, period: "Modern", birthCountry: "France", activityCountries: ["France"], rank: 2, role: "political scientist", notes: "アメリカの民主主義を分析し、平等化が進む社会における「多数派の専制」の危険性を予見した。" },
    { name: "Burke, Edmund", nameJ: "エドマンド・バーク", birth: 1729, death: 1797, period: "Modern", birthCountry: "Ireland", activityCountries: ["England"], rank: 2, role: "philosopher", notes: "フランス革命の急進性を批判し、伝統や慣習の重要性を説く近代保守主義の父となった。" },
    { name: "Paine, Thomas", nameJ: "トマス・ペイン", birth: 1737, death: 1809, period: "Modern", birthCountry: "England", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "パンフレット『コモン・センス』を通じてアメリカの独立を鼓舞し、人権の普遍性を主張した。" },

    // 現代の批評理論・文化研究
    { name: "Adorno, Theodor", nameJ: "テオドール・アドルノ", birth: 1903, death: 1969, period: "Contemporary", birthCountry: "Germany", activityCountries: ["Germany"], rank: 2, role: "philosopher", notes: "フランクフルト学派の代表として、近代の道具的理性が全体主義や文化産業による大衆操作を生み出したと批判した。" },
    { name: "Benjamin, Walter", nameJ: "ヴァルター・ベンヤミン", birth: 1892, death: 1940, period: "Contemporary", birthCountry: "Germany", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "複製技術の発展が芸術作品の「アウラ（一回性）」を喪失させ、政治と芸術の関係を変化させると論じた。" },
    { name: "Gramsci, Antonio", nameJ: "アントニオ・グラムシ", birth: 1891, death: 1937, period: "Contemporary", birthCountry: "Italy", activityCountries: ["Italy"], rank: 2, role: "philosopher", notes: "支配階級が文化やイデオロギーを通じて被支配階級の同意を得る「ヘゲモニー」の概念を提唱した。" },
    { name: "Althusser, Louis", nameJ: "ルイ・アルチュセール", birth: 1918, death: 1990, period: "Contemporary", birthCountry: "Algeria", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "マルクス主義に構造主義的な解釈を導入し、国家がイデオロギー装置を通じて個人を主体として構築する過程を分析した。" },
    { name: "Bourdieu, Pierre", nameJ: "ピエール・ブルデュー", birth: 1930, death: 2002, period: "Contemporary", birthCountry: "France", activityCountries: ["France"], rank: 1, role: "sociologist", notes: "文化や趣味が階級の再生産に果たす役割を「文化資本」や「ハビトゥス」という概念を用いて実証した。" },

    // 分析哲学・科学哲学
    { name: "Russell, Bertrand", nameJ: "バートランド・ラッセル", birth: 1872, death: 1970, period: "Contemporary", birthCountry: "England", activityCountries: ["England"], rank: 2, role: "philosopher", notes: "論理学を数学の基礎に据える研究を行い、分析哲学の創始者の一人として現代哲学の言語的転回を促した。" },
    { name: "Popper, Karl", nameJ: "カール・ポパー", birth: 1902, death: 1994, period: "Contemporary", birthCountry: "Austria", activityCountries: ["England"], rank: 2, role: "philosopher", notes: "科学的理論の条件はそれが反証可能であることだとする「反証可能性」を提唱し、科学哲学に大きな影響を与えた。" },
    { name: "Kuhn, Thomas", nameJ: "トーマス・クーン", birth: 1922, death: 1996, period: "Contemporary", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "科学の歴史は累積的な進歩ではなく、枠組みの劇的な転換である「パラダイムシフト」によって進むと主張した。" },
    { name: "Quine, Willard Van Orman", nameJ: "ウィラード・ヴァン・オーマン・クワイン", birth: 1908, death: 2000, period: "Contemporary", birthCountry: "USA", activityCountries: ["USA"], rank: 1, role: "philosopher", notes: "分析的真理と総合的真理の区別を批判し、知識の全体論（ホーリズム）を提唱して論理実証主義を乗り越えた。" },

    // 東洋思想（追加）
    { name: "Shinran", nameJ: "親鸞", birth: 1173, death: 1263, period: "Medieval", birthCountry: "Japan", activityCountries: ["Japan"], rank: 1, role: "monk", notes: "絶対他力を説き、悪人こそが救済の対象であるとする「悪人正機」の思想を確立した。" },
    { name: "Dogen", nameJ: "道元", birth: 1200, death: 1253, period: "Medieval", birthCountry: "Japan", activityCountries: ["Japan"], rank: 1, role: "monk", notes: "ひたすら座禅に打ち込む「只管打坐」を重視し、日本曹洞宗の開祖となった。" },
    { name: "Ito, Jinsai", nameJ: "伊藤仁斎", birth: 1627, death: 1705, period: "Early Modern", birthCountry: "Japan", activityCountries: ["Japan"], rank: 2, role: "philosopher", notes: "朱子学の抽象的な理の概念を批判し、孔子や孟子の原典に立ち返る古義学を提唱した。" },
    { name: "Motoori, Norinaga", nameJ: "本居宣長", birth: 1730, death: 1801, period: "Early Modern", birthCountry: "Japan", activityCountries: ["Japan"], rank: 1, role: "scholar", notes: "『古事記』の研究を通じて、儒教や仏教の影響を受ける以前の日本固有の精神である「もののあはれ」を解明した。" },
    // 現代の政治・正義論
    { name: "Rawls, John", nameJ: "ジョン・ロールズ", birth: 1921, death: 2002, period: "Contemporary", birthCountry: "USA", activityCountries: ["USA"], rank: 1, role: "philosopher", notes: "「無知のヴェール」という思考実験を用い、最も不遇な人々の利益を最大化する公正としての正義を論じた。" },
    { name: "Nozick, Robert", nameJ: "ロバート・ノージック", birth: 1938, death: 2002, period: "Contemporary", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "ロールズの福祉国家的な正義論に反対し、国家の役割を最小限に留めるリバタリアニズム（自由至上主義）を擁護した。" },
    { name: "Sen, Amartya", nameJ: "アマルティア・セン", birth: 1933, death: 2026, period: "Contemporary", birthCountry: "India", activityCountries: ["USA"], rank: 1, role: "economist", notes: "貧困や飢餓の分析を通じて、人間が何ができるかという「潜在能力（ケイパビリティ）」の重要性を説いた。" },
    { name: "Nussbaum, Martha", nameJ: "マーサ・ヌスバウム", birth: 1947, death: 2026, period: "Contemporary", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "センと共にケイパビリティ・アプローチを発展させ、人間の尊厳と感情の役割を重視する正義論を展開した。" },

    // ポストコロニアリズム・ジェンダー
    { name: "Said, Edward", nameJ: "エドワード・サイード", birth: 1935, death: 2003, period: "Contemporary", birthCountry: "Palestine", activityCountries: ["USA"], rank: 2, role: "critic", notes: "西洋が東洋を支配・管理するために作り上げた歪んだイメージとしての「オリエンタリズム」を告発した。" },
    { name: "Spivak, Gayatri Chakravorty", nameJ: "ガヤトリ・スピヴァク", birth: 1942, death: 2026, period: "Contemporary", birthCountry: "India", activityCountries: ["USA"], rank: 2, role: "critic", notes: "「サバルタン（従属的階層）は語ることができるか」と問い、西洋中心主義的なフェミニズムや学問のあり方を批判した。" },
    { name: "Butler, Judith", nameJ: "ジュディス・バトラー", birth: 1956, death: 2026, period: "Contemporary", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "ジェンダーは行為の反復によって構築されるという「ジェンダー・パフォーマティヴィティ」を提唱した。" },

    // 現代の社会理論
    { name: "Giddens, Anthony", nameJ: "アンソニー・ギデンズ", birth: 1938, death: 2026, period: "Contemporary", birthCountry: "England", activityCountries: ["England"], rank: 2, role: "sociologist", notes: "社会構造と人間の行為が相互に影響し合う「構造化理論」を提唱し、近代社会の再帰性を分析した。" },
    { name: "Beck, Ulrich", nameJ: "ウルリッヒ・ベック", birth: 1944, death: 2015, period: "Contemporary", birthCountry: "Germany", activityCountries: ["Germany"], rank: 2, role: "sociologist", notes: "近代化の進展が新たな危険を生み出す「リスク社会」の概念を提唱し、グローバル化の影響を論じた。" },
    { name: "Bauman, Zygmunt", nameJ: "ジグムント・バウマン", birth: 1925, death: 2017, period: "Contemporary", birthCountry: "Poland", activityCountries: ["England"], rank: 2, role: "sociologist", notes: "現代社会の流動的で不安定な人間関係や社会構造を「リキッド・モダニティ（液状化する近代）」と呼んで分析した。" },

    // 心の哲学・認知科学
    { name: "Chomsky, Noam", nameJ: "ノーム・チョムスキー", birth: 1928, death: 2026, period: "Contemporary", birthCountry: "USA", activityCountries: ["USA"], rank: 1, role: "linguist", notes: "人間には生得的な言語獲得能力があるとする「生成文法」を提唱し、認知科学革命の引き金となった。" },
    { name: "Dennett, Daniel", nameJ: "ダニエル・デネット", birth: 1942, death: 2024, period: "Contemporary", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "意識や自由意志を、脳の物理的な情報処理プロセスとして説明する唯物論的な心の哲学を展開した。" },
    { name: "Searle, John", nameJ: "ジョン・サール", birth: 1932, death: 2026, period: "Contemporary", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "「中国語の部屋」という思考実験を用いて、コンピュータが真の意味で心を理解することはできないと主張した。" },
    { name: "Chalmers, David", nameJ: "デイヴィッド・チャーマーズ", birth: 1966, death: 2026, period: "Contemporary", birthCountry: "Australia", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "物理的な脳の働きからなぜ主観的な意識体験が生まれるのかという「意識のハードプロブレム」を提起した。" },

    // 東洋思想（近代日本）
    { name: "Fukuzawa, Yukichi", nameJ: "福沢諭吉", birth: 1835, death: 1901, period: "Modern", birthCountry: "Japan", activityCountries: ["Japan"], rank: 1, role: "thinker", notes: "「天は人の上に人を造らず」と説き、実学の重要性と個人の独立自尊を唱えて日本の近代化を牽引した。" },
    { name: "Watsuji, Tetsuro", nameJ: "和辻哲郎", birth: 1889, death: 1960, period: "Contemporary", birthCountry: "Japan", activityCountries: ["Japan"], rank: 2, role: "philosopher", notes: "気候や風土が人間の文化や精神構造に与える影響を分析した『風土』を著し、日本独自の倫理学を構築した。" },
    { name: "Maruyama, Masao", nameJ: "丸山眞男", birth: 1914, death: 1996, period: "Contemporary", birthCountry: "Japan", activityCountries: ["Japan"], rank: 2, role: "political scientist", notes: "日本の政治思想史を研究し、超国家主義の精神構造や日本人の「無責任の体系」を鋭く分析した。" },

    // 実存主義・その他
    { name: "Camus, Albert", nameJ: "アルベール・カミュ", birth: 1913, death: 1960, period: "Contemporary", birthCountry: "Algeria", activityCountries: ["France"], rank: 2, role: "writer", notes: "人生の無意味さ（不条理）を直視し、それでも絶望せずに生きることの尊さを『シーシュポスの神話』などで説いた。" },
    { name: "Weil, Simone", nameJ: "シモーヌ・ヴェイユ", birth: 1909, death: 1943, period: "Contemporary", birthCountry: "France", activityCountries: ["France"], rank: 2, role: "philosopher", notes: "労働者の現実に身を投じ、抑圧された人々への共感と、神の愛への渇望を綴った独自の宗教的・社会的思想を残した。" },
    { name: "Illich, Ivan", nameJ: "イヴァン・イリイチ", birth: 1926, death: 2002, period: "Contemporary", birthCountry: "Austria", activityCountries: ["Mexico"], rank: 2, role: "philosopher", notes: "学校教育や近代医療が人間を制度に依存させ、本来の能力を奪っていると批判した（脱学校の社会）。" },
    
    // 現代のプラグマティズム・分析哲学
    { name: "Rorty, Richard", nameJ: "リチャード・ローティ", birth: 1931, death: 2007, period: "Contemporary", birthCountry: "USA", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "客観的な真理の探求という伝統的な哲学の目標を退け、連帯とリベラルな社会の維持を重視するネオ・プラグマティズムを提唱した。" },
    
    // 現代の倫理学
    { name: "Singer, Peter", nameJ: "ピーター・シンガー", birth: 1946, death: 2026, period: "Contemporary", birthCountry: "Australia", activityCountries: ["USA"], rank: 2, role: "philosopher", notes: "「最大多数の最大幸福」を動物にまで拡張し、現代の動物の権利運動や効果的利他主義の理論的支柱となった。" },
    
    // 現代の精神分析・社会批評
    { name: "Zizek, Slavoj", nameJ: "スラヴォイ・ジジェク", birth: 1949, death: 2026, period: "Contemporary", birthCountry: "Slovenia", activityCountries: ["Slovenia"], rank: 2, role: "philosopher", notes: "ラカン派精神分析とマルクス主義を融合させ、現代の資本主義社会やイデオロギーの無意識的な構造を鋭く分析した。" },
    
    // 構造主義
    { name: "Lévi-Strauss, Claude", nameJ: "クロード・レヴィ＝ストロース", birth: 1908, death: 2009, period: "Contemporary", birthCountry: "France", activityCountries: ["France"], rank: 1, role: "anthropologist", notes: "未開社会の神話や親族構造の分析を通じて、人間の思考の普遍的な無意識的構造を明らかにし、構造主義の礎を築いた。" },
    
    // 近代の社会思想
    { name: "Bentham, Jeremy", nameJ: "ジェレミ・ベンサム", birth: 1748, death: 1832, period: "Modern", birthCountry: "England", activityCountries: ["England"], rank: 1, role: "philosopher", notes: "快楽を計算可能であるとし、「最大多数の最大幸福」を道徳と立法の原理とする功利主義を創始した。" },
    { name: "Gautama Buddha", nameJ: "釈迦（ゴータマ・シッダールタ）", birth: -563, death: -483, period: "Ancient", birthCountry: "Nepal", activityCountries: ["India"], rank: 1, role: "philosopher", notes: "人間の苦しみの原因を論理的に分析し、中道と八正道を通じて解脱に至る実践的な思想を説いた。" },
    { name: "Jesus Christ", nameJ: "イエス・キリスト", birth: -4, death: 30, period: "Ancient", birthCountry: "Israel", activityCountries: ["Israel"], rank: 1, role: "religious leader", notes: "神の愛と隣人愛を説き、その教えは西洋文明の倫理観や価値観の絶対的な基盤となった。" },
    { name: "Muhammad", nameJ: "ムハンマド", birth: 570, death: 632, period: "Medieval", birthCountry: "Saudi Arabia", activityCountries: ["Saudi Arabia"], rank: 1, role: "religious leader", notes: "イスラム教を創始し、その教えは宗教としてだけでなく、社会・政治・倫理の包括的なシステムとして世界に影響を与えた。" }
    ];
