$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$dir = Join-Path $root 'public\projects\_captures'
New-Item -ItemType Directory -Force -Path $dir | Out-Null
$browser = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
if (-not (Test-Path $browser)) { throw 'Google Chrome nao encontrado.' }
$demos = @(
  @('automotiva', 'https://demoautomobilistica.netlify.app/'),
  @('climatizacao', 'https://democlimatiza.netlify.app/'),
  @('fisioterapia', 'https://demo-fisio-wine.vercel.app/'),
  @('engenharia', 'https://demo-engenharia-civil.vercel.app/'),
  @('cardapio', 'https://web--ieie-app--nw8yr2c7byc6.code.run/')
)
foreach ($demo in $demos) {
  $name = $demo[0]
  $url = $demo[1]
  $profile = Join-Path $env:TEMP "luan-portfolio-shot-$name"
  $target = Join-Path $dir "$name.png"
  Write-Output "Capturando $name em $url"
  & $browser --headless=new --disable-gpu --hide-scrollbars --no-first-run --disable-extensions --user-data-dir="$profile" --window-size=1440,900 --virtual-time-budget=6500 --screenshot="$target" "$url" | Out-Null
  if (-not (Test-Path $target)) { throw "A captura do projeto $name falhou" }
}
python (Join-Path $root 'render-covers.py')
Write-Output 'Capturas atualizadas em public/projects/*.webp'
