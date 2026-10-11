from pathlib import Path
from PIL import Image, ImageStat
folder = Path(__file__).parent / "public" / "projects"
for src in sorted(folder.glob("*.png")):
    im = Image.open(src).convert("RGB")
    if im.width > 1400:
        im.thumbnail((1400, 875), Image.Resampling.LANCZOS)
    stats = ImageStat.Stat(im)
    dst = src.with_suffix(".webp")
    im.save(dst, "WEBP", quality=79, method=5)
    print(src.stem, "size", im.size, "variance", round(sum(stats.stddev)/3,2), "webp bytes", dst.stat().st_size)
