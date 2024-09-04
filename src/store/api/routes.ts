export const ApiRoute = {
  AllPosts: (): string => '/posts',
  Post: (postId: number): string => `/posts/${postId}`,
  CreatePost: (): string => '/posts',
};
