/**
 * 种子数据：过去 90 天（2026-05-09 → 2026-08-07）
 * 1423 条消息 → 37 个事件 / 12 条长期线索 / 5 个核心认识
 * 演示人格「她」：大三备考学生，自学高数（考研方向），同时准备日语 N2，
 * 90 天内核心叙事：微积分第三章长期卡点 → 前置知识断层 → 暑期集训 → 限制解除。
 */
import type { Claim, Fragment, Thread } from './types'

export const TODAY_LABEL = '8月7日'
export const IMPORT_STATS = { messages: 1423, events: 37, threads: 12, claims: 5 }

/* ================= 碎片层：37 个事件 ================= */

export const SEED_FRAGMENTS: Fragment[] = [
  { id: 'f01', day: 90, dateLabel: '5月9日', title: '微积分第三章开始听不懂', body: '极限和导数还能跟上，但第三章的积分概念突然像断层了一样，听不懂老师在讲什么。', vad: { valence: -0.65, arousal: 0.7, dominance: 0.3 }, threadIds: ['t_ch3_calc'], tags: ['学业', '数学'] },
  { id: 'f02', day: 86, dateLabel: '5月13日', title: '第一次模考第三章全错', body: '模拟卷第三章几乎全错，尤其是定积分的几何应用，完全不知道怎么入手。', vad: { valence: -0.75, arousal: 0.85, dominance: 0.2 }, threadIds: ['t_ch3_calc'], tags: ['学业', '考试'] },
  { id: 'f03', day: 82, dateLabel: '5月17日', title: '失眠到两点', body: '躺在床上一直在想明天的复习计划，越想越焦虑，凌晨两点才睡着。', vad: { valence: -0.55, arousal: 0.65, dominance: 0.2 }, threadIds: [], tags: ['作息', '情绪'] },
  { id: 'f04', day: 78, dateLabel: '5月21日', title: '问老师，老师说回去看第二章', body: '老师翻了两眼错题说：「你这不是第三章的问题，是第二章没透。」', vad: { valence: -0.2, arousal: 0.55, dominance: 0.5 }, threadIds: ['t_ch3_calc', 't_prerequisite'], tags: ['学业', '诊断'] },
  { id: 'f05', day: 74, dateLabel: '5月25日', title: '日语 N2 单词第一轮背完', body: '终于把 N2 核心词过了一遍，虽然很多没记住，但至少有进度感。', vad: { valence: 0.75, arousal: 0.7, dominance: 0.7 }, threadIds: ['t_japanese'], tags: ['日语', '里程碑'] },
  { id: 'f06', day: 70, dateLabel: '5月29日', title: '熬夜刷题到三点', body: '不甘心第三章卡住，打开网课想再冲一冲，结果越听越乱。', vad: { valence: -0.45, arousal: 0.75, dominance: 0.35 }, threadIds: ['t_ch3_calc'], tags: ['学业', '作息'] },
  { id: 'f07', day: 66, dateLabel: '6月2日', title: '补完第二章还是不懂第三章', body: '把第二章的错题重新做了一遍，感觉通了，但第三章的题还是下不了手。', vad: { valence: -0.5, arousal: 0.65, dominance: 0.3 }, threadIds: ['t_ch3_calc', 't_prerequisite'], tags: ['学业', '挫败'] },
  { id: 'f08', day: 63, dateLabel: '6月5日', title: '和父亲通电话', body: '爸问复习怎么样，她说「还行」，没敢提第三章卡住的事。', vad: { valence: -0.35, arousal: 0.55, dominance: 0.25 }, threadIds: ['t_father'], tags: ['家庭'] },
  { id: 'f09', day: 60, dateLabel: '6月8日', title: '期末考试周开始', body: '期末考临近，第三章先放下了，优先保不挂科。', vad: { valence: -0.2, arousal: 0.6, dominance: 0.55 }, threadIds: ['t_exam', 't_ch3_calc'], tags: ['学业', '考试'] },
  { id: 'f10', day: 57, dateLabel: '6月11日', title: '高数期末低空飘过', body: '期末考得勉强，第三章相关的题直接放弃了，幸好前面分数够。', vad: { valence: 0.15, arousal: 0.5, dominance: 0.6 }, threadIds: ['t_exam'], tags: ['考试'] },
  { id: 'f11', day: 54, dateLabel: '6月14日', title: '暑期集训营报名', body: '报了八月的考研数学集训营，决定把第三章留给集训解决。', vad: { valence: 0.55, arousal: 0.7, dominance: 0.65 }, threadIds: ['t_ch3_calc', 't_summer_camp'], tags: ['学业', '规划'] },
  { id: 'f12', day: 50, dateLabel: '6月18日', title: '日语听力第一次及格', body: 'N2 听力模拟终于及格了，虽然分数不高，但至少不再是短板。', vad: { valence: 0.8, arousal: 0.65, dominance: 0.75 }, threadIds: ['t_japanese'], tags: ['日语', '进步'] },
  { id: 'f13', day: 47, dateLabel: '6月21日', title: '整理了自己的错题本', body: '把第三章和第二章的错题按知识点分类，发现第二章链式法则和第三章积分换元之间断了层。', vad: { valence: 0.4, arousal: 0.55, dominance: 0.7 }, threadIds: ['t_ch3_calc', 't_prerequisite'], tags: ['学业', '反思'] },
  { id: 'f14', day: 45, dateLabel: '6月23日', title: '自我怀疑：是不是不适合学数学', body: '连续几周第三章没进展，开始怀疑自己是不是根本不是学数学的料。', vad: { valence: -0.7, arousal: 0.75, dominance: 0.15 }, threadIds: ['t_math_confidence'], tags: ['情绪', '自我认知'] },
  { id: 'f15', day: 42, dateLabel: '6月26日', title: '和研友聊起备考计划', body: '研友说她也卡在第三章，两个人决定集训营互相监督。', vad: { valence: 0.5, arousal: 0.5, dominance: 0.6 }, threadIds: ['t_ch3_calc'], tags: ['社交', '规划'] },
  { id: 'f16', day: 39, dateLabel: '6月29日', title: '报名日语 N2 考试', body: '报了十二月 N2，感觉听力进步之后信心足了一些。', vad: { valence: 0.7, arousal: 0.6, dominance: 0.75 }, threadIds: ['t_japanese'], tags: ['日语', '规划'] },
  { id: 'f17', day: 36, dateLabel: '7月2日', title: '开始用番茄钟学习', body: '为了强迫自己集中注意力，开始用番茄钟，但第三章还是不想碰。', vad: { valence: 0.1, arousal: 0.45, dominance: 0.55 }, threadIds: ['t_timeplan'], tags: ['方法', '规划'] },
  { id: 'f18', day: 33, dateLabel: '7月5日', title: '连续三天没有碰数学', body: '有意识地回避数学，每天只背日语和看政治，心里知道是在逃避。', vad: { valence: -0.55, arousal: 0.55, dominance: 0.25 }, threadIds: ['t_ch3_calc', 't_exam_anxiety'], tags: ['学业', '情绪'] },
  { id: 'f19', day: 30, dateLabel: '7月8日', title: '把第三章甩锅给教材', body: '「肯定是教材写得太跳跃了。」她知道这话半真半假。', vad: { valence: -0.35, arousal: 0.6, dominance: 0.35 }, threadIds: ['t_ch3_calc'], tags: ['学业', '防御'] },
  { id: 'f20', day: 28, dateLabel: '7月10日', title: '做了一套真题，第三章还是错', body: '不甘心，又试了一套真题，第三章依然大面积出错，挫败感很强。', vad: { valence: -0.65, arousal: 0.75, dominance: 0.2 }, threadIds: ['t_ch3_calc'], tags: ['学业', '挫败'] },
  { id: 'f21', day: 26, dateLabel: '7月12日', title: '日语阅读第一次全对', body: 'N2 阅读模拟全对，发朋友圈纪念了一下。', vad: { valence: 0.85, arousal: 0.7, dominance: 0.8 }, threadIds: ['t_japanese'], tags: ['日语', '进步'] },
  { id: 'f22', day: 24, dateLabel: '7月14日', title: '集训营讲义提前到了', body: '集训营提前发了预习讲义，翻开第三章，发现例题比学校讲得细很多。', vad: { valence: 0.45, arousal: 0.55, dominance: 0.6 }, threadIds: ['t_ch3_calc', 't_summer_camp'], tags: ['学业', '资料'] },
  { id: 'f23', day: 22, dateLabel: '7月16日', title: '宿舍晚上断电', body: '晚上十一点宿舍准时断电，用手机电筒背了一会儿日语单词。', vad: { valence: -0.25, arousal: 0.45, dominance: 0.35 }, threadIds: ['t_study_spot'], tags: ['生活'] },
  { id: 'f24', day: 20, dateLabel: '7月18日', title: '话题从考研方向转开', body: '聊到报考院校，她说「到时候再说」，转头聊起了日语考试。', vad: { valence: -0.25, arousal: 0.5, dominance: 0.3 }, threadIds: ['t_major'], tags: ['规划', '回避'] },
  { id: 'f25', day: 18, dateLabel: '7月20日', title: '第一次完整做完第三章基础题', body: '集训预习讲义第三章基础题，虽然慢，但全部做对了。', vad: { valence: 0.75, arousal: 0.65, dominance: 0.7 }, threadIds: ['t_ch3_calc'], tags: ['学业', '进步'] },
  { id: 'f26', day: 16, dateLabel: '7月22日', title: '开始整理第三章知识框架', body: '发现第三章真正的难点不是积分公式，而是不知道什么情况下该用哪个公式。', vad: { valence: 0.55, arousal: 0.55, dominance: 0.75 }, threadIds: ['t_ch3_calc', 't_prerequisite'], tags: ['学业', '反思'] },
  { id: 'f27', day: 14, dateLabel: '7月24日', title: '焦虑复发，一天没学习', body: '想到还有那么多章没复习，突然觉得来不及了，在床上躺了一天。', vad: { valence: -0.65, arousal: 0.7, dominance: 0.15 }, threadIds: ['t_exam_anxiety'], tags: ['情绪', '焦虑'] },
  { id: 'f28', day: 12, dateLabel: '7月26日', title: '集训营开课', body: '集训营第一天，老师讲第三章的切入点比学校慢很多，但一步步终于通了。', vad: { valence: 0.75, arousal: 0.75, dominance: 0.65 }, threadIds: ['t_ch3_calc', 't_summer_camp'], tags: ['学业', '里程碑'] },
  { id: 'f29', day: 10, dateLabel: '7月28日', title: '「第三章不是理解问题是题型不熟」', body: '刷完集训讲义后意识到，之前卡在「理解」上，其实是没见过题型的变形。', vad: { valence: 0.6, arousal: 0.55, dominance: 0.75 }, threadIds: ['t_ch3_calc'], tags: ['学业', '反思'] },
  { id: 'f30', day: 9, dateLabel: '7月29日', title: '深夜连发三条', body: '关于集训、进度、考研，凌晨连发三条，最后一句「有点累」。', vad: { valence: -0.45, arousal: 0.65, dominance: 0.25 }, threadIds: [], tags: ['深夜', '情绪'] },
  { id: 'f31', day: 8, dateLabel: '7月30日', title: '第三章强化题正确率过八成', body: '集训第三天，第三章强化练习正确率超过 80%，第一次觉得第三章能拿下。', vad: { valence: 0.8, arousal: 0.7, dominance: 0.75 }, threadIds: ['t_ch3_calc'], tags: ['学业', '进步'] },
  { id: 'f32', day: 7, dateLabel: '7月31日', title: '报了政治刷题班', body: '数学有进展后，决定把政治也补上，报了刷题班。', vad: { valence: 0.55, arousal: 0.6, dominance: 0.65 }, threadIds: ['t_timeplan'], tags: ['规划', '政治'] },
  { id: 'f33', day: 6, dateLabel: '8月1日', title: '和父亲又通了电话', body: '爸还是说「别太累」，她应了句「知道」，还是没提进度。', vad: { valence: -0.15, arousal: 0.45, dominance: 0.35 }, threadIds: ['t_father'], tags: ['家庭'] },
  { id: 'f34', day: 5, dateLabel: '8月2日', title: '和研友定了复习计划', body: '两个人把八月到十二月的复习计划排了一遍，数学、政治、日语、专业课都定了轮次。', vad: { valence: 0.65, arousal: 0.55, dominance: 0.75 }, threadIds: ['t_timeplan'], tags: ['规划', '社交'] },
  { id: 'f35', day: 4, dateLabel: '8月3日', title: '整理了自己的学情报告', body: '把系统里关于自己的记录看了一遍：「原来我卡在这里，不是我不行。」', vad: { valence: 0.7, arousal: 0.55, dominance: 0.75 }, threadIds: [], tags: ['反思'] },
  { id: 'f36', day: 3, dateLabel: '8月4日', title: '第一次完整模考', body: '做了一套完整真题，第三章虽然还不是最强，但已经能稳定得分了。', vad: { valence: 0.7, arousal: 0.65, dominance: 0.7 }, threadIds: ['t_ch3_calc'], tags: ['学业', '考试'] },
  { id: 'f37', day: 2, dateLabel: '8月5日', title: '日语听力第二次及格', body: 'N2 听力再次及格，而且比上次高了不少，信心更稳了。', vad: { valence: 0.75, arousal: 0.55, dominance: 0.75 }, threadIds: ['t_japanese'], tags: ['日语', '进步'] },
]

/* ================= 线索层：登记簿 ================= */

export const SEED_THREADS: Thread[] = [
  // ---- ACTIVE ----
  {
    id: 't_ch3_calc', label: '微积分第三章',
    openQuestion: '微积分第三章的障碍是否解除？',
    synthetic: {
      abstractFloor: ['长期学习卡点被疏通', '第三章从不能做到能稳定得分', '前置知识断层的缺口被补上'],
      concreteGuesses: ['第三章练习题正确率提升', '集训后第三章通了', '完整做完第三章基础题'],
    },
    dragonVein: 0.78, emotionalWeight: 0.82,
    history: [
      { day: 90, fragmentId: 'f01', note: '登记：第三章开始听不懂' },
      { day: 86, fragmentId: 'f02', note: '模考第三章全错' },
      { day: 70, fragmentId: 'f06', note: '熬夜刷题，越听越乱' },
      { day: 66, fragmentId: 'f09', note: '期末考前暂时放下' },
      { day: 45, fragmentId: 'f14', note: '自我怀疑' },
      { day: 20, fragmentId: 'f24', note: '话题回避' },
      { day: 18, fragmentId: 'f25', note: '第一次完整做完基础题' },
      { day: 12, fragmentId: 'f28', note: '集训营开课' },
      { day: 8, fragmentId: 'f31', note: '强化题正确率过八成' },
      { day: 3, fragmentId: 'f36', note: '第一次完整模考' },
    ],
    status: 'unresolved',
    lineage: { parentIds: [], childIds: [] },
    pool: 'ACTIVE', softLinks: [],
  },
  {
    id: 't_japanese', label: '日语 N2 备考',
    openQuestion: '日语 N2 能否在十二月份顺利通过？',
    synthetic: {
      abstractFloor: ['日语能力稳定提升到 N2 水平', '听力和阅读短板被补齐'],
      concreteGuesses: ['N2 考试通过', '听力稳定及格', '阅读正确率提升'],
    },
    dragonVein: 0.62, emotionalWeight: 0.68,
    history: [
      { day: 74, fragmentId: 'f05', note: '单词第一轮背完' },
      { day: 50, fragmentId: 'f12', note: '听力第一次及格' },
      { day: 39, fragmentId: 'f16', note: '报名 N2 考试' },
      { day: 26, fragmentId: 'f21', note: '阅读第一次全对' },
      { day: 2, fragmentId: 'f37', note: '听力第二次及格且提升' },
    ],
    status: 'unresolved',
    lineage: { parentIds: [], childIds: [] },
    pool: 'ACTIVE', softLinks: [],
  },
  {
    id: 't_summer_camp', label: '暑期集训营',
    openQuestion: '暑期集训营能否解决第三章卡点？',
    synthetic: {
      abstractFloor: ['集训营成为卡点突破的关键节点'],
      concreteGuesses: ['集训营开课', '第三章正确率提升', '前置知识断层补上'],
    },
    dragonVein: 0.58, emotionalWeight: 0.65,
    history: [
      { day: 54, fragmentId: 'f11', note: '报名集训营' },
      { day: 24, fragmentId: 'f22', note: '集训讲义提前到达' },
      { day: 12, fragmentId: 'f28', note: '集训营开课' },
    ],
    status: 'unresolved',
    lineage: { parentIds: [], childIds: [] },
    pool: 'ACTIVE', softLinks: [],
  },
  // ---- DORMANT ----
  {
    id: 't_prerequisite', label: '前置知识断层',
    openQuestion: '第二章到第三章之间的前置知识缺口是否补上？',
    synthetic: {
      abstractFloor: ['前置知识断层被识别并修补', '链式法则到积分换元的桥梁打通'],
      concreteGuesses: ['能独立判断用什么积分方法', '基础题全对', '题型变形不再陌生'],
    },
    dragonVein: 0.5, emotionalWeight: 0.7,
    history: [
      { day: 78, fragmentId: 'f04', note: '老师点出是第二章问题' },
      { day: 66, fragmentId: 'f07', note: '补完第二章仍不通' },
      { day: 47, fragmentId: 'f13', note: '错题分类发现断层' },
      { day: 18, fragmentId: 'f26', note: '意识到题型不熟而非理解问题' },
    ],
    status: 'unresolved',
    lineage: { parentIds: ['t_ch3_method', 't_ch3_transfer'], childIds: [] },
    pool: 'DORMANT',
    softLinks: [{ fragmentId: 'f07', note: '弱信号：补完第二章仍不通 → 不是第二章单独问题' }],
  },
  {
    id: 't_math_confidence', label: '数学信心',
    openQuestion: '她对数学学习的信心是否恢复？',
    synthetic: {
      abstractFloor: ['数学自我效能感回升', '不再把卡点归因于天赋'],
      concreteGuesses: ['主动做数学题', '不再回避第三章', '模考稳定得分'],
    },
    dragonVein: 0.45, emotionalWeight: 0.72,
    history: [
      { day: 45, fragmentId: 'f14', note: '登记：自我怀疑不适合数学' },
      { day: 8, fragmentId: 'f31', note: '强化题正确率过八成' },
    ],
    status: 'unresolved',
    lineage: { parentIds: [], childIds: [] },
    pool: 'DORMANT',
    softLinks: [],
  },
  {
    id: 't_exam_anxiety', label: '备考焦虑',
    openQuestion: '备考期间的焦虑是否得到缓解？',
    synthetic: {
      abstractFloor: ['备考焦虑水平下降', '恢复稳定学习节奏'],
      concreteGuesses: ['不再整夜失眠', '能按计划学习', '焦虑时不回避数学'],
    },
    dragonVein: 0.41, emotionalWeight: 0.68,
    history: [
      { day: 82, fragmentId: 'f03', note: '失眠到两点' },
      { day: 70, fragmentId: 'f18', note: '连续三天不碰数学' },
      { day: 14, fragmentId: 'f27', note: '焦虑复发，躺了一天' },
    ],
    status: 'unresolved',
    lineage: { parentIds: [], childIds: [] },
    pool: 'DORMANT',
    softLinks: [{ fragmentId: 'f18', note: '弱信号：回避行为 → 待二次确认' }],
  },
  {
    id: 't_timeplan', label: '复习规划',
    openQuestion: '全年复习计划是否落地执行？',
    synthetic: {
      abstractFloor: ['复习计划从模糊到可执行'],
      concreteGuesses: ['番茄钟坚持使用', '八月到十二月计划排定', '各科轮次清晰'],
    },
    dragonVein: 0.28, emotionalWeight: 0.45,
    history: [
      { day: 36, fragmentId: 'f17', note: '开始用番茄钟' },
      { day: 7, fragmentId: 'f32', note: '报政治刷题班' },
      { day: 5, fragmentId: 'f34', note: '和研友排定八月到十二月计划' },
    ],
    status: 'unresolved',
    lineage: { parentIds: [], childIds: [] },
    pool: 'DORMANT',
    softLinks: [],
  },
  {
    id: 't_major', label: '报考院校',
    openQuestion: '报考院校和专业方向是否确定？',
    synthetic: {
      abstractFloor: ['报考方向落定'],
      concreteGuesses: ['确定院校', '确定专业', '决定不考研'],
    },
    dragonVein: 0.22, emotionalWeight: 0.35,
    history: [
      { day: 20, fragmentId: 'f24', note: '登记：聊到报考方向时转移话题' },
    ],
    status: 'unresolved',
    lineage: { parentIds: [], childIds: [] },
    pool: 'DORMANT',
    softLinks: [{ fragmentId: 'f24', note: '弱信号：回避报考话题 → 待二次信号' }],
  },
  // ---- SILENT ----
  {
    id: 't_father', label: '父亲的病',
    openQuestion: '父亲的健康状况是否稳定？',
    synthetic: {
      abstractFloor: ['家庭责任的重量被接住'],
      concreteGuesses: ['父亲复查结果稳定', '陪父亲去一次医院'],
    },
    dragonVein: 0.35, emotionalWeight: 0.95,
    history: [
      { day: 63, fragmentId: 'f08', note: '登记：复查，「没事」，没敢多问' },
      { day: 6, fragmentId: 'f33', note: '相关话题出现时话题转移' },
    ],
    status: 'unresolved',
    lineage: { parentIds: [], childIds: [] },
    pool: 'SILENT',
    silentSignals: { importance: 0.95, mentionFrequency: 0.05, avoidanceSignal: 0.9, triggerThreshold: 'low' },
    softLinks: [],
  },
  // ---- 归档（终态示例） ----
  {
    id: 't_ch3_method', label: '教材 / 方法问题',
    openQuestion: '第三章学不懂是因为教材跳跃还是方法不对？',
    synthetic: { abstractFloor: ['教材或方法层面的障碍被识别'], concreteGuesses: ['换了更细的讲义', '老师讲解更慢'] },
    dragonVein: 0.35, emotionalWeight: 0.55,
    history: [
      { day: 78, fragmentId: 'f04', note: '登记：老师说回去看第二章' },
      { day: 30, fragmentId: 'f19', note: '甩锅教材跳跃' },
    ],
    status: 'merged', closureReason: '与「链式法则到积分换元衔接」共同命中，识别为同一框架「前置知识断层」',
    lineage: { parentIds: [], childIds: ['t_prerequisite'] },
    pool: 'ARCHIVE', softLinks: [],
  },
  {
    id: 't_ch3_transfer', label: '链式法则 → 积分换元衔接',
    openQuestion: '第二章到第三章的知识桥梁是否打通？',
    synthetic: { abstractFloor: ['前置知识断层被识别'], concreteGuesses: ['能独立完成换元', '基础题全对'] },
    dragonVein: 0.38, emotionalWeight: 0.6,
    history: [
      { day: 66, fragmentId: 'f07', note: '登记：补完第二章仍不通' },
      { day: 47, fragmentId: 'f13', note: '错题分类发现断层' },
    ],
    status: 'merged', closureReason: '与「教材 / 方法问题」共同命中，识别为同一框架「前置知识断层」',
    lineage: { parentIds: [], childIds: ['t_prerequisite'] },
    pool: 'ARCHIVE', softLinks: [],
  },
  {
    id: 't_exam', label: '期末考试周',
    openQuestion: '能否撑过期末考试周且不崩掉备考节奏？',
    synthetic: { abstractFloor: ['一段高压时期平安度过'], concreteGuesses: ['考试结束', '不挂科'] },
    dragonVein: 0.15, emotionalWeight: 0.45,
    history: [
      { day: 60, fragmentId: 'f09', note: '登记：期末复习周开始' },
      { day: 57, fragmentId: 'f10', note: '回收：高数期末低空飘过' },
    ],
    status: 'resolved', closureReason: '期末考试平安度过——这件事解决了',
    lineage: { parentIds: [], childIds: [] },
    pool: 'ARCHIVE', softLinks: [],
  },
  {
    id: 't_study_spot', label: '宿舍 vs 自习室',
    openQuestion: '固定学习地点是否能提高复习效率？',
    synthetic: { abstractFloor: ['学习环境安排有了稳定结论'], concreteGuesses: ['固定去自习室', '在宿舍也能学', '不再纠结地点'] },
    dragonVein: 0.12, emotionalWeight: 0.3,
    history: [
      { day: 22, fragmentId: 'f23', note: '登记：宿舍断电影响学习' },
    ],
    status: 'abandoned', closureReason: '久无推进且龙脉值衰减至阈值下，降级二级召回层——热路径扑空才扫归档',
    lineage: { parentIds: [], childIds: [] },
    pool: 'ARCHIVE', softLinks: [],
  },
  {
    id: 't_major_old', label: '跨专业考研（旧框架）',
    openQuestion: '是否要跨专业考研？',
    synthetic: { abstractFloor: ['考研方向的选择演化'], concreteGuesses: [] },
    dragonVein: 0.18, emotionalWeight: 0.4,
    history: [
      { day: 20, fragmentId: 'f24', note: '回避报考方向话题' },
    ],
    status: 'superseded', closureReason: '框架被「报考院校」线索取代，不再作为独立主线',
    lineage: { parentIds: [], childIds: ['t_major'] },
    pool: 'ARCHIVE', softLinks: [],
  },
]

/* ================= 认识层：5 + 1 份活文档 ================= */

export const SEED_CLAIMS: Claim[] = [
  {
    id: 'u_ch3', docTitle: '第三章卡点结构',
    text: '微积分第三章的真正障碍不在理解力，而在「链式法则 → 积分换元」的前置知识断层；题型变形的识别能力不足进一步放大了卡点。',
    conviction: 0.85,
    evidenceIds: ['f01', 'f04', 'f13', 'f20', 'f26'],
    counterEvidence: [
      {
        text: '8月4日完整模考中，第三章已能稳定得分——说明障碍已解除。',
        fragmentId: 'f36',
        resolution: '最新证据显示障碍正在解除，论断需加入时间限定并降低置信。说明留痕。',
      },
    ],
    boundary: '证据来自学校教材与集训讲义；不同教材对第三章的编排可能影响结论外推。',
    versions: [
      { at: '5月21日', text: '第三章听不懂。', conviction: 0.55, reason: '初稿：仅有模糊观察' },
      { at: '6月21日', text: '微积分第三章的真正障碍不在理解力，而在「链式法则 → 积分换元」的前置知识断层。', conviction: 0.82, reason: '错题分类 + 老师诊断 + 补完第二章仍不通，证据收敛' },
      { at: '7月28日', text: '微积分第三章的真正障碍不在理解力，而在「链式法则 → 积分换元」的前置知识断层；题型变形的识别能力不足进一步放大了卡点。', conviction: 0.85, reason: '集训后发现题型不熟是第二缺口' },
    ],
    status: 'active',
  },
  {
    id: 'u_anxiety', docTitle: '备考焦虑模式',
    text: '备考压力升高时，她倾向以「回避数学 + 刷日语/政治」作为情绪调节策略，而非彻底放弃。',
    conviction: 0.78,
    evidenceIds: ['f03', 'f18', 'f21', 'f27'],
    counterEvidence: [
      {
        text: '8月2日她主动和研友把八月到十二月的复习计划排定，显示出主动控制感。',
        fragmentId: 'f34',
        resolution: '最新证据显示焦虑后进入规划行为，论断加限定语「压力升高时」，置信略降。',
      },
    ],
    boundary: '样本为 90 天内的备考阶段；非考研期间的压力反应可能不同。',
    versions: [
      { at: '5月17日', text: '她最近睡不好，可能是备考压力。', conviction: 0.5, reason: '初稿' },
      { at: '7月24日', text: '备考压力升高时，她倾向以「回避数学 + 刷日语/政治」作为情绪调节策略。', conviction: 0.78, reason: '连续三天不碰数学 + 日语阅读全对 + 焦虑复发，证据收敛' },
    ],
    status: 'active',
  },
  {
    id: 'u_japanese', docTitle: '日语学习节奏',
    text: '日语是她的优势学科：听力从不及格到稳定及格，阅读已达到全对水平，学习正反馈强。',
    conviction: 0.8,
    evidenceIds: ['f05', 'f12', 'f21', 'f37'],
    counterEvidence: [],
    boundary: '样本集中在 N2 备考资料；口语和写作尚未有足够观察。',
    versions: [
      { at: '5月25日', text: '她在坚持背日语单词。', conviction: 0.6, reason: '初稿' },
      { at: '7月12日', text: '日语是她的优势学科：听力从不及格到稳定及格，阅读已达到全对水平。', conviction: 0.8, reason: '单词 + 听力 + 阅读多证据收敛' },
    ],
    status: 'active',
  },
  {
    id: 'u_drive', docTitle: '学习驱动力',
    text: '她的学习驱动力具有「优势学科强化 + 弱势学科回避」的双轨特征：日语进步带来掌控感，数学卡点时切换任务。',
    conviction: 0.76,
    evidenceIds: ['f05', 'f12', 'f18', 'f21', 'f31'],
    counterEvidence: [
      {
        text: '6月26日主动和研友互相监督第三章复习，显示弱势学科也能被外部承诺激活。',
        fragmentId: 'f15',
        resolution: '外部承诺可以激活弱势学科学习；论断保留但需说明边界。',
      },
    ],
    boundary: '仅观察自学 / 备考场景；课堂强制任务下的行为模式可能不同。',
    versions: [
      { at: '7月12日', text: '她的学习驱动力具有「优势学科强化 + 弱势学科回避」的双轨特征。', conviction: 0.76, reason: '日语进步 + 数学回避，证据收敛' },
    ],
    status: 'active',
  },
  {
    id: 'u_math_confidence', docTitle: '数学信心',
    text: 'Q2 期间她的数学信心持续走低，从自我怀疑到回避做题；集训营后开始回升。',
    conviction: 0.74,
    evidenceIds: ['f14', 'f18', 'f31'],
    counterEvidence: [],
    boundary: '信心变化受外部教学成果（集训营）影响显著，不能单独归因于个人特质。',
    versions: [
      { at: '6月23日', text: '她说自己不是学数学的料。', conviction: 0.55, reason: '初稿：单条情绪表达' },
      { at: '7月30日', text: 'Q2 期间她的数学信心持续走低；集训营后开始回升。', conviction: 0.74, reason: '自我怀疑 + 回避 + 强化题正确率提升，证据链闭合' },
    ],
    status: 'active',
  },
  {
    id: 'u_data', docTitle: '学情数据焦虑',
    text: '她对成绩和排名有过度的焦虑，影响了对复习节奏的判断。',
    conviction: 0.52,
    evidenceIds: ['f20'],
    counterEvidence: [],
    boundary: '——',
    versions: [
      { at: '7月10日', text: '她对成绩和排名有过度的焦虑，影响了对复习节奏的判断。', conviction: 0.52, reason: '初稿：单条证据' },
    ],
    status: 'contested',
    contestedNote: '本人否决：「我没有过度焦虑，我只是在经营自己的进度。」已退出默认可见文档与检索上下文；只有独立新证据积累到更高门槛，才能以邀请式措辞再提一次（closure_reason: user-vetoed）。',
  },
]
