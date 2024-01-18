export const externalRedirectsManager = (url: string): string | undefined => {
  const REDIRECTION_URL_MAP: { [x in string]: string } = {
    "/call": "https://cal.com/jkrishna",
  };

  return REDIRECTION_URL_MAP[new URL(url)?.pathname] ?? undefined;
};
