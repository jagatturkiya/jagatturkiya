$port = 3000
$root = $PSScriptRoot

$mimeTypes = @{
    ".html" = "text/html; charset=UTF-8"
    ".css"  = "text/css; charset=UTF-8"
    ".js"   = "application/javascript; charset=UTF-8"
    ".json" = "application/json; charset=UTF-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".webp" = "image/webp"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".woff2" = "font/woff2"
    ".woff" = "font/woff"
    ".ttf"  = "font/ttf"
}

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    $port = 5000
    $listener = New-Object System.Net.HttpListener
    $prefix = "http://localhost:$port/"
    $listener.Prefixes.Add($prefix)
    $listener.Start()
}

Write-Host "==================================================="
Write-Host "Jagat Turkiya Executive Website is running locally!"
Write-Host "Local URL: http://localhost:$port"
Write-Host "==================================================="

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.RawUrl
        $pathPart = $rawUrl.Split('?')[0]
        $pathPart = [System.Uri]::UnescapeDataString($pathPart)

        # Redirect .html to clean URLs
        if ($pathPart.EndsWith(".html")) {
            if ($pathPart -eq "/index.html") {
                $response.StatusCode = 301
                $response.RedirectLocation = "/"
                $response.Close()
                continue
            } else {
                $response.StatusCode = 301
                $response.RedirectLocation = $pathPart.Substring(0, $pathPart.Length - 5)
                $response.Close()
                continue
            }
        }

        if ($pathPart -eq "/" -or [string]::IsNullOrEmpty($pathPart)) {
            $pathPart = "/index.html"
        }

        # Normalize relative path
        $relPath = $pathPart.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $filePath = [System.IO.Path]::Combine($root, $relPath)

        if (-not (Test-Path -Path $filePath -PathType Leaf)) {
            $htmlCandidate = $filePath + ".html"
            if (Test-Path -Path $htmlCandidate -PathType Leaf) {
                $filePath = $htmlCandidate
            }
        }

        if (Test-Path -Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $response.ContentType = $contentType
            $response.Headers.Add("Access-Control-Allow-Origin", "*")
            $response.Headers.Add("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
            $response.Headers.Add("Pragma", "no-cache")
            $response.Headers.Add("Expires", "0")

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            $response.StatusCode = 200
        } else {
            $response.StatusCode = 404
            $response.ContentType = "text/html; charset=UTF-8"
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("<h2>404 Not Found</h2><p>Page not found: $pathPart</p><a href='/'>Return to Home</a>")
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    } catch {
        # ignore context errors on close
    }
}
