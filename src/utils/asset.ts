export default function assetPath(path) {
  return `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/${path.replace(/^\//, '')}`;
}
