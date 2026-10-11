$ErrorActionPreference = 'Continue'
$dir = Join-Path $PSScriptRoot 'public\projects'
New-Item -ItemType Directory -Force -Path $dir | Out-Null
$browser = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$demos = @(
  @('climatizacao', 'https://democlimatiza.netlify.app/'),
  @('fisioterapia', 'https://demo-fisio-wine.vercel.app/'),
  @('engenharia', 'https://demo-ambiental-engenharia.vercel.app/'),
  @('cardapio', 'https://web--ieie-app--nw8yr2c7byc6.code.run')
)
foreach ($demo in $demos) {
  $name = $demo[0]
  $url = $demo[1]
  $profile = Join-Path $env:TEMP "portfolio-capture-$name"
  $target = Join-Path $dir "$name.png"
  Write-Output "Capturing $name ..."
  & $browser --headless --disable-gpu --hide-scrollbars --no-first-run --disable-extensions --user-data-dir="$profile" --window-size=1440,900 --virtual-time-budget=6500 --screenshot="$target" "$url" 2>&1 | Select-Object -Last 2
  if (Test-Path $target) { Get-Item $target | Select-Object Name,Length }
}
