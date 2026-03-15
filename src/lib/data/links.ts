export interface Link {
  title: string;
  url: string;
  description?: string;
}

export const links: Link[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/sugimoto-blyukher',
    description: '私のGitHubアカウントです。私のプロジェクトを公開しています。',
  },
  {
    title: 'X (旧Twitter) (sugimoto(cedar root))',
    url: 'https://twitter.com/sug1m0t0_unk',
    description: '私の大学用のXアカウントです。最新の情報や投稿を確認できます。',
  },
  {
    title: 'X (旧Twitter) (sugimoto)',
    url: 'https://twitter.com/SanMa3MaSunMa',
    description: '私のXアカウント2です。ロボティクスや低レイヤーなどの技術系のネタや日常をつぶやきます。',
  },
  {
    title: 'sugimoto',
    url: 'https://sinta.fun',
    description: '私のブログです。最新の情報や投稿を確認できます。',
  },
]
