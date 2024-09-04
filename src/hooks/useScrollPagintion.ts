import { INITIAL_NUMBER_POSTS } from 'App/constants/constants';
import { useCallback, useEffect, useState } from 'react';
import { IPostResponse } from 'store/api/types/post-response.interface';

interface IReturn {
  shownPosts: IPostResponse[];
}
export const useScrollPagination = (posts: IPostResponse[]): IReturn  => {
  const [countPosts, setCountPosts] = useState(INITIAL_NUMBER_POSTS);
  const shownPosts = posts.slice(0, countPosts);
  console.log('countPosts', countPosts)


  const handleDocumentScroll = useCallback(() => {
    console.log('sum', document.body.scrollHeight - (document.documentElement.scrollTop + window.innerHeight))
    if (
      document.body.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) <= 5) {
      setCountPosts((prev) => prev + INITIAL_NUMBER_POSTS);
    }
  }, []);

  useEffect(() => {
    if (shownPosts.length < posts.length) {
      document.addEventListener('scroll', handleDocumentScroll);
    }

    return () => document.removeEventListener('scroll', handleDocumentScroll);
  }, [shownPosts.length, posts.length, handleDocumentScroll]);

  return {shownPosts}
}