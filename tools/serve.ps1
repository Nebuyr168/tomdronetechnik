param([string]$Root = (Split-Path $PSScriptRoot -Parent), [int]$Port = 8770)
$mime = @{ ".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8"; ".js"="application/javascript; charset=utf-8"; ".png"="image/png"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"; ".webp"="image/webp"; ".svg"="image/svg+xml"; ".mp4"="video/mp4"; ".woff2"="font/woff2"; ".ico"="image/x-icon"; ".json"="application/json" }
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
Write-Host "Serving $Root on http://localhost:$Port"
while ($l.IsListening) {
  $ctx = $l.GetContext()
  $path = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath)
  if ($path.EndsWith("/")) { $path += "index.html" }
  $file = Join-Path $Root ($path -replace "/", "\")
  try {
    if (Test-Path $file -PathType Leaf) {
      $bytes = [IO.File]::ReadAllBytes($file)
      $ext = [IO.Path]::GetExtension($file).ToLower()
      $ctx.Response.ContentType = if ($mime[$ext]) { $mime[$ext] } else { "application/octet-stream" }
      $ctx.Response.StatusCode = 200
    } else {
      $bytes = [Text.Encoding]::UTF8.GetBytes("404 $path")
      $ctx.Response.StatusCode = 404
    }
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } catch { $ctx.Response.StatusCode = 500 }
  $ctx.Response.Close()
}
