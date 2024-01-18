import { type LoaderArgs, json, redirect } from "@remix-run/server-runtime";
import { externalRedirectsManager } from "~/redirects";

export let loader = async (arg: LoaderArgs) => {
  const redirectURL = externalRedirectsManager(arg.request.url);
  if (redirectURL !== undefined) {
    return redirect(redirectURL, 301);
  }

  return json({ error: "Route not found" }, { status: 404 });
};
