export const optimize = (url, t = "f_auto,q_auto:best,w_1600,c_limit") => {
  if (!url.includes("/upload/")) return url;

  return url
    .replace("/upload/", `/upload/${t}/`)
    .replace(/\.(jpg|jpeg|png|avif|webp)(?=$|[?#])/i, "");
};