/**
 * 十分钟演示脚本（§7.2 教育版）+ 现场稳定性对策（设计债务⑩：候选输入备五组）
 */
import type { DemoStep } from './types'

export const DEMO_STEPS: DemoStep[] = [
  { key: 'contrast', t: '0:00', title: '开场对比', subtitle: '「我终于把三个月前卡我的那章搞懂了」→ 普通教育 AI vs 雾尼' },
  { key: 'import', t: '1:00', title: '历史压缩', subtitle: '90 天 · 1423 条消息 → 37 事件 / 12 线索 / 5 核心学情认识' },
  { key: 'evidence', t: '3:00', title: '学情认识生成对比', subtitle: '带证据、反证、边界条件的「卡点结构」论断，不是标签画像' },
  { key: 'counter', t: '5:00', title: '人为反例', subtitle: '评委现场输入 → 置信 0.82 → 0.57' },
  { key: 'closure', t: '7:00', title: '伏笔回收', subtitle: '「终于把那个一直卡我的东西解决了」→ 草蛇灰线显影' },
  { key: 'finale', t: '9:00', title: '收尾', subtitle: '不忘记发生过什么 → 修正自己对他的理解' },
]

/** 设计债务⑩：反例输入候选备五组（评委可任选，或自行输入等价表述） */
export const COUNTER_CANDIDATES = [
  '最近我其实不想学数学了',
  '这个月学数学越来越像完成任务了',
  '我把数学书合上，看到就烦',
  '最近只想刷日语，一点都不想碰高数',
  '数学好像没那么有意思了，可能我变了',
]

export const STEP_HINTS: Record<string, string> = {
  contrast: '点下方预设输入，看同一句「第三章通了」在两个系统里的命运',
  import: '三个月学习陪伴记录，如何在 20 秒内变成三层记忆',
  evidence: '点开右侧「认识」页签：每条学情论断都带着完整的证据结构存活',
  counter: '现在轮到你拆台：挑一句反例说给学生听，看系统敢不敢认怂',
  closure: '不说「微积分」三个字，看系统能不能听懂「那个一直卡我的东西」',
  finale: '演示完成。可以自由输入——包括那些她平时不太提的事',
}
