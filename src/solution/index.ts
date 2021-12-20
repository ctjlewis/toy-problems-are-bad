import { bookmarks, lists, videos } from "..";

interface VideoWithBookmarks {
  title: string;
  bookmarks: number[];
}

const output = lists.map(
  (list) => {
    const videosWithBookmarks: VideoWithBookmarks[] =
      videos.filter(
        /**
         * Find videos that belong to the current list.
         */
        (video) => video.listId === list.id
      ).map(
        /**
         * Find bookmarks for each video and return a structure containing them.
         */
        (video) => {
          const videoBookmarks = bookmarks.filter(
            (bookmark) => bookmark.videoId === video.id
          ).map(
            (bookmark) => bookmark.time
          );

          return {
            title: video.title,
            bookmarks: videoBookmarks
          }
        }
      );

      /**
       * Return the list and the videos it contains along with bookmarks.
       */
      return {
        name: list.name,
        videos: videosWithBookmarks,
      };
  }
);

console.log(JSON.stringify(output, null, 2));