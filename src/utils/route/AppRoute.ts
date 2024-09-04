export const AppRoute = {
  Main: (): string => '/',
  Content: (): string => '/post',
  PostCreating: (): string => '/create',
} as const;