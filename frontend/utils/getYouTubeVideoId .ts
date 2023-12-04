// utils.ts
export function getYouTubeVideoId(url: string): string | null {
  const regExp =
    /^(?:(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11}))/;
  const match = url.match(regExp);

  if (match && match[1]) {
    return match[1];
  }

  return null;
}
