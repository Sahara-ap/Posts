export const AppRoute = {
  Main: (): string => '/',
  Content: (postId?:number): string => `/post/:${postId}`,
  PostCreating: (): string => '/create',
} as const;