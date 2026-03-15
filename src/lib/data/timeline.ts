export interface TimelineEntry {
	date: string;
	event: string;
}

export const timelineEntries: TimelineEntry[] = [
	{ date: '2019', event: '初めてプログラミングをする(言語はRuby)' },
	{ date: '2021/03/31', event: '中学卒業' },
	{ date: '2021/04/01', event: '盛岡工業高等学校入学' },
	{ date: '2021/10/1', event: '盛岡工業高等学校中退' },
	{ date: '2024/08/30', event: '高等学校卒業程度認定試験取得' },
	{ date: '2025/04/01', event: '公立はこだて未来大学入学' },
	{ date: '2025/4/15~2025/9/xx', event: 'ETロボコンに参加' },
	{ date: '2025/12/21', event: 'P2hacks CyberAgent賞受賞' }
];
