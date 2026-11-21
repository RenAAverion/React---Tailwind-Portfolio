export default function getLinkStatus(link) {
  if (!link || link === "Unpublished") return { status: "unpublished", url: null };
  const raw = link.split(" or ")[0].trim();
  const url = raw.startsWith("http") ? raw : `https://${raw}`;
  return { status: "live", url };
}

