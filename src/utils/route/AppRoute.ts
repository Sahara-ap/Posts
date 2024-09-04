export const AppRoute = {
  Home: (): string => '/',
  PostPage: (postId:number): string => `/post/:${postId}`,
  PostCreatingPage: (): string => '/create',
} as const;