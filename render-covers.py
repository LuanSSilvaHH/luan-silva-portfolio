from PIL import Image, ImageFilter, ImageEnhance, ImageDraw
from pathlib import Path
root = Path(r"C:\Users\Luan\Documents\portifolio\luan-silva-portfolio\public\projects")
source = root / "_captures"
for name in ["automotiva", "climatizacao", "fisioterapia", "engenharia", "cardapio"]:
    img = Image.open(source / f"{name}.png").convert("RGB")
    img = img.crop((0, 0, min(1420,img.width), min(858,img.height)))
    canvas_size = (1200, 960)
    cover_ratio = max(canvas_size[0] / img.width, canvas_size[1] / img.height)
    back = img.resize((round(img.width * cover_ratio), round(img.height * cover_ratio)), Image.Resampling.LANCZOS)
    x = (back.width - canvas_size[0])//2; y = (back.height - canvas_size[1])//2
    back = back.crop((x,y,x+canvas_size[0],y+canvas_size[1]))
    back = back.filter(ImageFilter.GaussianBlur(30))
    back = ImageEnhance.Brightness(back).enhance(.32 if name != "fisioterapia" else .45)
    canvas = back.copy()
    screen_width = 1122
    screen_height = round(img.height * screen_width / img.width)
    screen = img.resize((screen_width, screen_height), Image.Resampling.LANCZOS)
    px,py = 39,73
    border = Image.new("RGB", (screen_width+6,screen_height+6), (208,207,193))
    canvas.paste(border,(px-3,py-3))
    canvas.paste(screen,(px,py))
    shade = Image.new("RGBA",canvas_size,(0,0,0,0))
    shade_draw = ImageDraw.Draw(shade)
    for row in range(790,960):
        opacity=int(180 * (row-790) / 170)
        shade_draw.line([(0,row),(1200,row)], fill=(3,9,8,opacity))
    canvas = Image.alpha_composite(canvas.convert("RGBA"),shade).convert("RGB")
    dest = root / f"{name}.webp"
    canvas.save(dest,format="WEBP",quality=84,method=6)
    preview=canvas.copy(); preview.thumbnail((550,440))
    preview.save(source/f"{name}-card.webp",format="WEBP",quality=65)
    print(name, "file",dest.stat().st_size,"preview",preview.size)
