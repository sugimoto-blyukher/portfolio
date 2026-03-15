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
    title: 'X (旧Twitter)',
    url: 'https://twitter.com/sug1m0t0_unk',
    description: '私のTwitterアカウントです。最新の情報や投稿を確認できます。',
  },
  {
    title: 'sugimoto',
    url: 'https://sinta.fun',
    description: '私のブログです。最新の情報や投稿を確認できます。',
  },
]
