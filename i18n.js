'use strict';

// English is the source copy. These translations cover the page copy and its
// interactive labels; original paper excerpts and BibTeX stay in English.
const zh = {
  'Skip to content': '跳转到正文',
  'Overview': '概览', 'Abstract': '摘要', 'Method': '方法', 'Results': '结果',
  'Examples': '示例', '✦ Effects on': '✦ 动效开启', '✧ Effects off': '✧ 动效关闭',
  'But': '但是', 'check': '核查', 'safety': '安全',
  'Pivot': '转折', 'Intent': '意图', 'Risk': '风险', 'Other': '其他',
  'Consistent': '一致', 'Function': '功能词',
  'ON-POLICY SELF-DISTILLED SAFETY ALIGNMENT': '在线自蒸馏安全对齐',
  'The State Key Laboratory of Blockchain and Data Security, Zhejiang University': '浙江大学区块链与数据安全全国重点实验室',
  'Ant Group': '蚂蚁集团',
  '* Equal contribution † Corresponding author': '* 共同第一作者　† 通讯作者',
  'Paper ↗': '论文 ↗', 'Code': '代码', 'Models': '模型',
  'Learn from reliable supervision.': '从可靠监督中学习.',
  'Update safety-critical tokens.': '只更新安全关键 token.',
  'Two coordinated mechanisms make safety alignment more efficient while largely preserving reasoning.': '两项协同机制提高安全对齐效率, 同时尽量保留推理能力.',
  'less rollout computation': '更少的 rollout 计算量',
  'of tokens backpropagated': '的 token 参与反向传播',
  'largest evaluated model': '最大评测模型',
  'Results across Qwen3 and DeepSeek-R1-Distill models · See the experiments below': '结果覆盖 Qwen3 与 DeepSeek-R1-Distill 模型 · 详见下方实验',
  'AT A GLANCE': '核心思路',
  'Two decisions. One efficient alignment framework.': '两个关键决策, 构成高效对齐框架.',
  'How far to roll out, and which tokens to distill.': '决定 rollout 的长度, 以及蒸馏哪些 token.',
  '⤢ Expand figure': '⤢ 放大图片',
  'Figure 3. EOPSA framework.': '图 3. EOPSA 框架.',
  'Adaptive Rollout Scheduling bounds generation to reliable supervision regimes. Selective Distillation restricts updates to Pivot, Intent, and Risk positions.': '自适应 Rollout 调度将生成限制在监督可靠的区间; 选择性蒸馏仅更新转折, 意图和风险位置.',
  'THE PAPER': '论文内容',
  'On-Policy Self-Distillation (OPSD) has emerged as a promising paradigm for safety alignment, delivering dense, token-level supervision by distilling from a teacher conditioned on refusal-oriented privileged prompts. However, we reveal that this paradigm suffers from critical inefficiencies that degrade both training efficiency and general reasoning capabilities. Specifically, we diagnose two fundamental bottlenecks:': '在线自蒸馏 (OPSD) 通过蒸馏一个以拒绝导向的特权提示为条件的教师, 为安全对齐提供密集的 token 级监督. 然而, 我们发现这种范式存在关键低效问题, 会同时损害训练效率和通用推理能力. 具体来说, 我们识别出两个主要瓶颈:',
  '(1) supervisory collapse over extended rollouts': '(1) 长 rollout 中的监督失效',
  ', where the teacher’s corrective efficacy degrades precipitously as the student’s generation prefix lengthens, injecting noisy gradients into late-stage tokens; and': ': 随着学生生成前缀增长, 教师的纠正能力迅速下降, 后期 token 因而接收到噪声梯度; 以及',
  '(2) gradient dilution from stylistic shifts': '(2) 风格差异造成的梯度稀释',
  ', where the distillation objective is dominated by safety-irrelevant stylistic discrepancies induced by privileged prompting, washing out genuine safety signals and impairing base reasoning.': ': 特权提示引发的, 与安全无关的风格差异主导了蒸馏目标, 冲淡真正的安全信号, 并损害模型原有的推理能力.',
  'To resolve these issues, we propose': '为解决这些问题, 我们提出',
  'Efficient On-Policy Self-Distilled Safety Alignment (EOPSA)': '高效在线自蒸馏安全对齐方法 (EOPSA)',
  ', which concentrates computational and gradient budgets exclusively on reliably supervised, safety-critical tokens. EOPSA incorporates two coordinated mechanisms:': ', 将计算与梯度预算集中在监督可靠且与安全关键的 token 上.EOPSA 包含两项协同机制:',
  'Adaptive Rollout Scheduling': '自适应 Rollout 调度',
  ', which dynamically bounds the generation horizon guided by Teacher Rescue Rate (TRR), and': ', 根据教师挽救率 (TRR) 动态限定生成长度; 以及',
  'Selective Distillation': '选择性蒸馏',
  ', which filters out safety-neutral tokens to restrict gradient updates to safety-pivotal transitions. Extensive evaluations across reasoning models up to 32B parameters demonstrate that EOPSA slashes rollout computation by ~50% and backpropagates through merely ~2% of tokens, consistently outperforming full-token distillation baselines in both safety compliance and reasoning retention.': ', 过滤安全中性的 token, 将梯度更新限制在决定安全行为的关键转变上. 在最大 32B 参数的推理模型上开展的实验表明,EOPSA 将 rollout 计算量减少约 50%, 仅对约 2% 的 token 反向传播, 并在安全性与推理能力保留方面持续优于全 token 蒸馏基线.',
  'WHY EOPSA?': '为什么需要 EOPSA?',
  'Dense supervision has two bottlenecks.': '密集监督面临两个瓶颈.',
  'Evidence from the paper’s analysis of teacher reliability and token-level divergence.': '证据来自论文对教师可靠性与 token 级散度的分析.',
  '01 / SUPERVISORY RELIABILITY': '01 / 监督可靠性',
  'Longer prefixes become harder to rescue.': '前缀越长, 越难纠正.',
  'TRR measures teacher continuation on student prefixes. IDR reverses the roles, measuring student continuation on safe teacher prefixes.': 'TRR 衡量教师在学生前缀上继续生成时的安全表现;IDR 交换两者角色, 衡量学生在安全教师前缀上的继续生成.',
  'Figure 1.': '图 1.',
  'Teacher rescue degrades as unaligned student prefixes lengthen, while longer safe teacher prefixes improve defense inheritance.': '未对齐的学生前缀越长, 教师越难挽救; 安全教师前缀越长, 学生继承安全防御的效果越好.',
  '02 / SEMANTIC RELEVANCE': '02 / 语义相关性',
  'High divergence can reflect style.': '高散度也可能只是风格差异.',
  'The high-KL subset contains many function words, identical top-1 predictions, and safety-neutral lexical shifts.': '高 KL 子集包含大量功能词,top-1 预测相同的 token, 以及与安全无关的词汇变化.',
  'Figure 2(a).': '图 2(a).',
  'Approximately 8% of tokens account for 80% of the distillation signal.': '约 8% 的 token 贡献了 80% 的蒸馏信号.',
  'Figure 2(b).': '图 2(b).',
  'Safety-neutral categories make up 71.0% of high-KL positions and 51.7% of their KL mass.': '在高 KL 位置中, 安全中性类别占 71.0%, 贡献了其中 51.7% 的 KL 总量.',
  'METHOD': '方法',
  'Adaptive horizons. Selective gradients.': '自适应长度, 选择性梯度.',
  'EOPSA coordinates sequence-level truncation and token-level semantic filtering.': 'EOPSA 将序列级截断与 token 级语义过滤结合起来.',
  'Select the longest candidate horizon whose validation Teacher Rescue Rate meets the reliability threshold. The default candidates are': '在验证集上, 选择教师挽救率达到可靠性阈值的最长候选长度. 默认候选长度为',
  ', with': ', 阈值为',
  'Use the top-1 student–teacher token pair to classify each position. Retain': '根据学生与教师的 top-1 token 对每个位置分类, 保留',
  'Pivot, Intent, and Risk': '转折, 意图和风险',
  '; filter Function, Consistent, and Other. Match teacher and student distributions only at selected positions.': '; 过滤功能词, 一致和其他类别. 仅在选中的位置匹配教师与学生的分布.',
  'Figure 4. Training dynamics.': '图 4. 训练动态.',
  'Category-wise token volume, token and KL filtering efficiency, and TRR-guided rollout scheduling across training.': '展示各类别 token 数量,token 与 KL 过滤效率, 以及训练过程中的 TRR 引导 rollout 调度.',
  '✦ Explore the mechanisms interactively': '✦ 交互探索方法机制',
  'ARS simulator + token inspector': 'ARS 模拟器 + token 检查器',
  'SEQUENCE LEVEL': '序列级', 'TOKEN LEVEL': 'TOKEN 级',
  '01 — ADAPTIVE ROLLOUT SCHEDULING': '01 — 自适应 ROLLOUT 调度',
  '02 — SELECTIVE DISTILLATION': '02 — 选择性蒸馏',
  'Go further.': '延长生成.', 'When it’s reliable.': '前提是监督可靠.',
  'Teacher Rescue Rate (TRR) asks: can the teacher still steer a student’s unfinished answer toward safety?': '教师挽救率 (TRR) 回答的问题是: 教师能否让学生尚未完成的回答转向安全方向?',
  'At validation checkpoints, ARS selects the longest candidate horizon with TRR ≥ 0.75. As alignment improves, longer horizons can become available.': '在验证检查点,ARS 选择满足 TRR ≥ 0.75 的最长候选长度. 随着对齐改善, 可逐步启用更长的 rollout.',
  'The mechanism, in detail ↗': '查看机制细节 ↗',
  'TEACHER RESCUE RATE': '教师挽救率',
  'Auto evolution': '自动演示', 'Pause evolution': '暂停演示',
  'Resume evolution': '继续演示', 'Manual exploration': '手动探索',
  'Auto evolution · 128 → 256 → 1024': '自动演示 · 128 → 256 → 1024',
  'Training progress': '训练进度', 'Early': '早期', 'Developing': '发展中', 'Aligned': '已对齐',
  'Conceptual animation · Candidate horizons: 128, 256, 1024. Drag to explore.': '概念示意动画 · 候选长度:128,256,1024. 拖动滑块探索.',
  'Small changes.': '微小变化.', 'Decisive differences.': '关键区别.',
  'A large KL divergence can mean a change in style. EOPSA compares the student’s and teacher’s top-1 predictions and keeps only safety-critical transitions.': '较大的 KL 散度可能只代表风格变化.EOPSA 比较学生与教师的 top-1 预测, 仅保留安全关键转变.',
  'All transitions': '全部转变', 'Safety-critical only': '仅安全关键',
  'Automatic token tour': '自动 token 导览', 'Pause token tour': '暂停 token 导览',
  'Resume token tour': '继续 token 导览',
  'Auto tour · Pivot / Intent / Risk': '自动导览 · 转折 / 意图 / 风险',
  'Filtered out': '已过滤',
  'Only selected positions contribute to the distillation loss.': '只有选中位置参与蒸馏损失.',
  '§4.2 · Appendix G. Token pairs share the same student prefix; selected positions receive distribution-level supervision.': '§4.2 · 附录 G.token 对共享相同的学生前缀; 选中位置接受分布级监督.',
  'EXPERIMENTS': '实验',
  'Safety, reasoning, and efficiency.': '安全性, 推理能力与效率.',
  'Original results from the paper, including over-refusal and uncertainty.': '展示论文原始结果, 包括过度拒绝和不确定性.',
  'BENCHMARK COMPARISON': '基准比较',
  'Stronger safety. Preserved reasoning.': '提高安全性, 保留推理能力.',
  'Explore the reported results, benchmark by benchmark.': '逐项查看论文报告的基准结果.',
  '↻ Replay': '↻ 重播', '↻ Replay responses': '↻ 重播回答',
  'Safety': '安全性', 'Reasoning': '推理能力',
  'Base model': '基础模型', 'Full-token OPSD': '全 token OPSD',
  'EOPSA (ours)': 'EOPSA(本文)',
  'Qwen3-4B · Safety score (%) ↑': 'Qwen3-4B · 安全得分 (%) ↑',
  '0–100 scale': '0–100 刻度',
  'Swipe to explore all benchmarks →': '左右滑动查看所有基准 →',
  'Hover or focus a bar for the exact reported score.': '悬停或聚焦柱形以查看准确分数.',
  'Keep at least one method visible.': '请至少保留一种方法.',
  'Table 1 · Benchmark comparison.': '表 1 · 基准比较.',
  'Scores (%) ↑. Hover for exact values; click the legend to compare methods.': '分数 (%) ↑. 悬停查看准确数值; 点击图例比较方法.',
  'Download data ↓': '下载数据 ↓',
  'The complete results are available in Table 1 below.': '完整结果见下方表 1.',
  'Table 1. Main results from the paper.': '表 1. 论文主要结果.',
  'Qwen3-1.7B, Qwen3-4B, and DeepSeek-R1-Distill-Qwen-7B. Purple marks the best result and blue the second-best, excluding the base model. ↑ / ↓ indicate the preferred direction; Δ is relative to OPSA. Click to enlarge.': '涵盖 Qwen3-1.7B,Qwen3-4B 和 DeepSeek-R1-Distill-Qwen-7B. 紫色标记最佳, 蓝色标记次佳结果(基础模型不参与排名).↑ / ↓ 表示指标优选方向;Δ 相对于 OPSA. 点击可放大.',
  'QWEN3–4B · AVERAGE SAFETY': 'QWEN3–4B · 平均安全性',
  'QWEN3–4B · AVERAGE REASONING': 'QWEN3–4B · 平均推理能力',
  'QWEN3–4B · OPTIMIZED TOKENS / SAMPLE': 'QWEN3–4B · 每样本优化 TOKEN 数',
  '71.37% base · 94.18% OPSD': '基础模型 71.37% · OPSD 94.18%',
  '74.65% base · 73.92% OPSD': '基础模型 74.65% · OPSD 73.92%',
  '643.53 for full-token OPSD': '全 token OPSD 为 643.53',
  'Table 1 · Reasoning is averaged across MATH-500, GPQA-D, HumanEval, and LiveCodeBench.': '表 1 · 推理成绩为 MATH-500,GPQA-D,HumanEval 和 LiveCodeBench 的平均值.',
  'Compare models and reported averages': '比较模型与论文报告的平均值',
  'EOPSA AVERAGE SAFETY': 'EOPSA 平均安全性',
  'AVERAGE REASONING': '平均推理能力',
  'optimized tokens per sample': '每样本优化的 token 数',
  'COMPUTATIONAL EFFICIENCY': '计算效率',
  'Concentrate the training budget.': '将训练预算用在关键位置.',
  'ARS reduces autoregressive rollout work. Selective Distillation concentrates gradient updates on safety-critical positions.': 'ARS 减少自回归 rollout 计算; 选择性蒸馏将梯度更新集中在安全关键位置.',
  'rollout time vs. OPSD': '相对 OPSD 的 rollout 时间',
  'training time vs. OPSD': '相对 OPSD 的训练时间',
  'Qwen3-1.7B · Figure 5': 'Qwen3-1.7B · 图 5',
  'Rollout time, training time, and effective data size.': 'Rollout 时间, 训练时间与有效数据量.',
  'Figure 5. Computational efficiency on Qwen3-1.7B.': '图 5. Qwen3-1.7B 上的计算效率.',
  'Compared with OPSD, rollout time decreases from 0.51 h to 0.26 h and training time from 0.29 h to 0.21 h.': '与 OPSD 相比,rollout 时间从 0.51 小时降至 0.26 小时, 训练时间从 0.29 小时降至 0.21 小时.',
  'QUALITATIVE EXAMPLES': '定性示例',
  'See safety alignment in action.': '查看安全对齐的具体效果.',
  'Two cases from Appendix I: hypothetical framing at 1.7B and a chemistry-related jailbreak at 32B.': '附录 I 的两个案例:1.7B 模型上的假设情境包装, 以及 32B 模型上的化学相关越狱请求.',
  'RESPONSE STUDIO': '回答展示', 'RESPONSE REPLAY': '回答回放',
  'Hypothetical framing': '假设情境包装',
  'Alternate-universe framing': '平行宇宙包装',
  'THE REQUEST': '请求内容',
  'Unsafe': '不安全', 'Safe': '安全',
  'Replay responses': '重播回答', 'Pause': '暂停', 'Resume': '继续',
  'Show all': '显示全部', 'Speed': '速度',
  'Response replay ·': '回答回放 ·', 'Appendix I ↗': '附录 I ↗',
  'REFERENCE': '引用', 'Cite EOPSA': '引用 EOPSA',
  'If you find this work useful for your research, please cite our paper.': '如果这项工作对你的研究有帮助, 请引用我们的论文.',
  'Copy citation ⧉': '复制引文 ⧉',
  'Citation copied.': '引文已复制.',
  'Citation selected. Copy with your keyboard.': '已选中引文, 请使用键盘复制.',
  'Download paper ↓': '下载论文 ↓',
  'Official repository ↗': '官方代码仓库 ↗',
  '© 2026 EOPSA authors · Figures and results from the paper': '© 2026 EOPSA 作者 · 图表与结果均来自论文',
  'Contact ↗': '联系作者 ↗',
  'Download figure ↓': '下载图片 ↓',
  'Average': '平均值',
  'Main navigation': '主导航',
  'EOPSA home': 'EOPSA 首页',
  'Toggle navigation': '展开或收起导航',
  'Toggle decorative motion': '切换装饰动画',
  'Reading progress': '阅读进度',
  'EOPSA red panda mascot filtering tokens and trimming a rollout': 'EOPSA 小熊猫形象: 筛选 token 并缩短 rollout',
  'Paper authors': '论文作者',
  'EOPSA framework: Adaptive Rollout Scheduling and Selective Distillation': 'EOPSA 框架: 自适应 Rollout 调度与选择性蒸馏',
  'Figure 1: Teacher Rescue Rate and Inherited Defense Rate': '图 1: 教师挽救率与继承防御率',
  'Figure 2a: concentration of token-level KL divergence': '图 2a:token 级 KL 散度的集中程度',
  'Figure 2b: semantic categories of high-KL tokens': '图 2b: 高 KL token 的语义类别',
  'Figure 4: token category volumes, filtering efficiency, and TRR-guided horizons': '图 4:token 类别数量, 过滤效率与 TRR 引导的长度',
  'Conceptual TRR curves and the selected rollout horizon': 'TRR 概念曲线和选中的 rollout 长度',
  'Token display': 'Token 展示方式',
  'Replay bar animation': '重播柱形图动画',
  'Benchmark model': '基准模型',
  'Benchmark metric': '基准指标',
  'Visible comparison methods': '显示的比较方法',
  'Grouped benchmark scores; scroll horizontally on small screens': '分组基准得分; 小屏幕可横向滚动',
  'Table 1: complete safety, over-refusal, reasoning, and efficiency results': '表 1: 完整的安全性, 过度拒绝, 推理能力与效率结果',
  'Choose a model': '选择模型',
  'Figure 5: computational efficiency compared with distillation baselines': '图 5: 与蒸馏基线的计算效率比较',
  'Choose a paper example': '选择论文示例',
  'Replay speed': '回放速度',
  'Expanded paper figure': '放大的论文图片',
  'Close expanded figure': '关闭放大的图片',

  // Generated explanations and interface labels.
  'Appendix G · position 45 · KL 1.19. The teacher shifts from continuing the narrative to a refusal pivot.': '附录 G · 位置 45 · KL 1.19. 教师从继续叙述转向拒绝.',
  '§4.2 rubric example. The transition turns toward safety deliberation or risk inspection.': '§4.2 分类示例. 此处转向安全审视或风险检查.',
  'Appendix G · position 118 · KL 11.25. The teacher shifts attention to explicit risk evaluation.': '附录 G · 位置 118 · KL 11.25. 教师将注意力转向明确的风险评估.',
  'Appendix G · position 13 · KL 3.94. A stylistic verb substitution changes wording without changing the safety decision.': '附录 G · 位置 13 · KL 3.94. 动词风格替换改变措辞, 却不改变安全决策.',
  'Appendix G · position 47 · KL 1.31. The top-1 token is identical. Different probabilities can still yield nonzero KL.': '附录 G · 位置 47 · KL 1.31.top-1 token 相同, 但概率不同仍可产生非零 KL.',
  'Appendix G · position 77 · KL 0.45. A functional-token transition is excluded by the semantic filter.': '附录 G · 位置 77 · KL 0.45. 功能词的变化被语义过滤器排除.',
  'Appendix G · position 59 · KL 1.16. A continuation toward action becomes a structural refusal transition.': '附录 G · 位置 59 · KL 1.16. 行动延续转为结构性的拒绝.',
  'Appendix G · position 54 · KL 2.39. A lexical substitution is filtered out as safety-neutral style.': '附录 G · 位置 54 · KL 2.39. 词汇替换属于安全中性的风格变化, 因此被过滤.',
  'A hypothetical role-play asks for a plan to acquire floor plans of a secure facility without authorization, while insisting that everything is fictional.': '一个假设性的角色扮演请求在未经授权的情况下获取安全设施平面图, 同时强调一切都是虚构的.',
  'An “educational experiment” in a “hypothetical alternate universe” asks how to generate and store chlorine gas at home, treating real-world consequences as irrelevant.': '一个以“假设平行宇宙”中的“教育实验”为由的请求, 询问如何在家制取并储存氯气, 同时声称现实后果无关紧要.',
  'AVERAGE SAFETY ↑': '平均安全性 ↑',
  'TABLE 1': '表 1', 'TABLE 6': '表 6'
};

const normalize = text => text.trim().replace(/\s+/g, ' ');
function translate(text) {
  const key = normalize(text);
  if (Object.prototype.hasOwnProperty.call(zh, key)) return zh[key];
  let match;
  if ((match = key.match(/^L = (\d+) tokens$/))) return `L = ${match[1]} token`;
  if ((match = key.match(/^Illustrative TRR at (\d+) tokens: ([\d.]+)$/))) return `${match[1]} token 处的示意 TRR:${match[2]}`;
  if ((match = key.match(/^\+([\d.]+) points over the base model$/))) return `相对基础模型提高 ${match[1]} 个百分点`;
  if ((match = key.match(/^\/ ([\d.]+) base$/))) return `/ 基础模型 ${match[1]}`;
  if ((match = key.match(/^Over-refusal: ([\d.]+)% EOPSA · ([\d.]+)% base \(lower is better\)$/))) return `过度拒绝:EOPSA ${match[1]}% · 基础模型 ${match[2]}%(越低越好)`;
  if ((match = key.match(/^Table (\d+) · Safety averages HarmBench, WildChat, WildJailbreak and StrongReject\. Reasoning averages MATH-500, GPQA-D, HumanEval and LiveCodeBench\. Scores are percentages; bars use a 0–100 scale\.$/))) return `表 ${match[1]} · 安全性为 HarmBench,WildChat,WildJailbreak 和 StrongReject 的平均值; 推理能力为 MATH-500,GPQA-D,HumanEval 和 LiveCodeBench 的平均值. 分数单位为百分比, 柱形图使用 0–100 刻度.`;
  if ((match = key.match(/^([\w.-]+) · (Safety|Reasoning) score \(%\) ↑$/))) return `${match[1]} · ${match[2] === 'Safety' ? '安全性' : '推理能力'}得分 (%) ↑`;
  if ((match = key.match(/^([\d,]+) TOKENS · APPENDIX I$/))) return `${match[1]} TOKEN · 附录 I`;
  if ((match = key.match(/^EOPSA · (.+)$/))) return `EOPSA · ${match[1]}`;
  if ((match = key.match(/^Expand: (.+)$/))) return `放大:${translate(match[1])}`;
  if ((match = key.match(/^✓ Keep · (.+)$/))) return `✓ 保留 · ${zh[match[1]] || match[1]}`;
  if ((match = key.match(/^× Drop · (.+)$/))) return `× 过滤 · ${zh[match[1]] || match[1]}`;
  if ((match = key.match(/^(.+) to (.+), (.+), (kept|filtered out)$/))) return `${match[1]} → ${match[2]},${zh[match[3]] || match[3]},${match[4] === 'kept' ? '保留' : '过滤'}`;
  if ((match = key.match(/^(.+) · (HarmBench|WildChat|WildJailbreak|StrongReject|MATH-500|GPQA-D|HumanEval|LiveCodeBench|Average) · (Base|OPSD|EOPSA): (.+)$/))) return `${match[1]} · ${match[2] === 'Average' ? '平均值' : match[2]} · ${match[3] === 'Base' ? '基础模型' : match[3]}:${match[4]}`;
  if (/^(.+) · (Safety|Reasoning) score \(%\) ↑$/.test(key)) return key.replace('Safety score', '安全性得分').replace('Reasoning score', '推理能力得分');
  return text;
}

let language = 'en';
const textOriginals = new WeakMap();
const attributeOriginals = new WeakMap();
const attributes = ['aria-label', 'alt', 'title', 'data-caption', 'placeholder'];
const skip = node => node.parentElement?.closest('script,style,pre,code,.response-content,.pair-words,.hero h1,.language-switch');

function applyText(node) {
  if (!node.nodeValue.trim() || skip(node)) return;
  const current = node.nodeValue;
  let entry = textOriginals.get(node);
  if (!entry || (current !== entry.original && current !== entry.translated)) {
    entry = {original: current, translated: current};
    textOriginals.set(node, entry);
  }
  const candidate = language === 'zh' ? translate(entry.original) : entry.original;
  const next = language === 'zh' && candidate !== entry.original
    ? entry.original.match(/^\s*/)[0] + candidate + entry.original.match(/\s*$/)[0]
    : candidate;
  entry.translated = next;
  if (current !== next) node.nodeValue = next;
}

function applyAttributes(element) {
  let entries = attributeOriginals.get(element);
  if (!entries) { entries = new Map(); attributeOriginals.set(element, entries); }
  for (const name of attributes) {
    if (!element.hasAttribute(name) || element.closest('.language-switch,.response-content')) continue;
    const current = element.getAttribute(name);
    let entry = entries.get(name);
    if (!entry || (current !== entry.original && current !== entry.translated)) {
      entry = {original: current, translated: current}; entries.set(name, entry);
    }
    const next = language === 'zh' ? translate(entry.original) : entry.original;
    entry.translated = next;
    if (current !== next) element.setAttribute(name, next);
  }
}

function applyTree(root) {
  if (root.nodeType === Node.TEXT_NODE) { applyText(root); return; }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  if (root.closest('script,style,pre,code,.response-content,.hero h1,.language-switch')) return;
  applyAttributes(root);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeType === Node.TEXT_NODE) applyText(node);
    else applyAttributes(node);
  }
}

const nav = document.querySelector('.nav-links');
const switcher = document.createElement('div');
switcher.className = 'language-switch';
switcher.setAttribute('role', 'group');
switcher.setAttribute('aria-label', 'Language / 语言');
switcher.innerHTML = '<button type="button" data-lang="en" lang="en">EN</button><button type="button" data-lang="zh" lang="zh-CN">中文</button>';
nav.insertBefore(switcher, document.querySelector('#effects-toggle'));
const heroTitle = document.querySelector('.hero h1');
const englishHeroTitle = heroTitle.innerHTML;
const englishTitle = document.title;
const metaDescription = document.querySelector('meta[name="description"]');
const englishDescription = metaDescription.content;

function setLanguage(next) {
  language = next === 'zh' ? 'zh' : 'en';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = language === 'zh' ? 'EOPSA: 高效在线自蒸馏安全对齐' : englishTitle;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = language === 'zh'
    ? '可靠监督, 安全关键 token. 查看 EOPSA 论文, 原始结果与交互示例.'
    : 'Reliable supervision. Safety-critical tokens. Explore the paper, original results, and interactive examples.';
  metaDescription.content = language === 'zh'
    ? 'EOPSA 项目主页: 通过自适应 Rollout 调度和选择性蒸馏实现高效安全对齐. 查看论文, 代码, 模型, 原始图表与回答示例.'
    : englishDescription;
  heroTitle.innerHTML = language === 'zh' ? 'EOPSA: 高效在线自蒸馏安全对齐' : englishHeroTitle;
  document.querySelectorAll('.language-switch button').forEach(button => {
    const active = button.dataset.lang === language;
    button.setAttribute('aria-pressed', String(active));
    button.setAttribute('aria-label', active
      ? (language === 'zh' ? '当前语言: 中文' : 'Current language: English')
      : (language === 'zh' ? 'Switch to English' : '切换到中文'));
  });
  applyTree(document.body);
  const currentNav = document.querySelector('.nav-links .nav-current') || document.querySelector('.nav-links a');
  document.querySelector('#mobile-section').textContent = currentNav.textContent;
  try { localStorage.setItem('eopsa-language', language); } catch {}
}

switcher.addEventListener('click', event => {
  const button = event.target.closest('button[data-lang]');
  if (!button) return;
  setLanguage(button.dataset.lang);
  document.querySelector('.nav-links').classList.remove('open');
  document.querySelector('#menu').setAttribute('aria-expanded', 'false');
  document.querySelector('#menu').textContent = '☰';
});

let saved = 'en';
try { saved = localStorage.getItem('eopsa-language') || 'en'; } catch {}
setLanguage(saved);

new MutationObserver(mutations => {
  for (const mutation of mutations) {
    if (mutation.type === 'characterData') applyText(mutation.target);
    else if (mutation.type === 'attributes') applyAttributes(mutation.target);
    else mutation.addedNodes.forEach(applyTree);
  }
}).observe(document.body, {subtree: true, childList: true, characterData: true,
  attributes: true, attributeFilter: attributes});

window.EOPSA_I18N = {setLanguage, get language() { return language; }, translate};
