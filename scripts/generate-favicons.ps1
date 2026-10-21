Add-Type -AssemblyName System.Drawing

function Create-Favicon($size, $outputPath, $isIco = $false) {
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.Clear([System.Drawing.Color]::Transparent)

    # Dark squircle base (#080808)
    $bgBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 8, 8, 8))
    $cornerRad = [int]($size * 0.22)
    
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = $cornerRad * 2
    $path.AddArc(0, 0, $d, $d, 180, 90)
    $path.AddArc(($size - $d), 0, $d, $d, 270, 90)
    $path.AddArc(($size - $d), ($size - $d), $d, $d, 0, 90)
    $path.AddArc(0, ($size - $d), $d, $d, 90, 90)
    $path.CloseFigure()
    $g.FillPath($bgBrush, $path)

    # Subtle border (#222226)
    $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(255, 34, 34, 38)), 1.5
    $g.DrawPath($pen, $path)
    $pen.Dispose()
    $bgBrush.Dispose()

    # Plain bold WHITE JT text (NO DIAMOND!)
    $fontSize = [single]($size * 0.46)
    $font = New-Object System.Drawing.Font("Arial", $fontSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
    
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    $rect = New-Object System.Drawing.RectangleF ([single]0), ([single]($size * 0.04)), ([single]$size), ([single]$size)
    $g.DrawString("JT", $font, $textBrush, $rect, $sf)

    $font.Dispose()
    $textBrush.Dispose()
    $sf.Dispose()
    $path.Dispose()
    $g.Dispose()

    if ($isIco) {
        $icon = [System.Drawing.Icon]::FromHandle($bmp.GetHicon())
        $fs = [System.IO.File]::OpenWrite($outputPath)
        $icon.Save($fs)
        $fs.Close()
        $icon.Dispose()
    } else {
        $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    $bmp.Dispose()
    Write-Host "Created plain $outputPath successfully"
}

# Generate PNGs and ICO in public and dist
$dirs = @("public", "public/assets", "public/assets/images", "assets", "assets/images")
foreach ($d in $dirs) {
    if (-not (Test-Path $d)) { New-Item -ItemType Directory -Path $d -Force | Out-Null }
    Create-Favicon 64 "$d/favicon-64x64.png"
    Create-Favicon 32 "$d/favicon-32x32.png"
    Create-Favicon 16 "$d/favicon-16x16.png"
    Create-Favicon 180 "$d/apple-touch-icon.png"
    Create-Favicon 64 "$d/favicon.png"
    Create-Favicon 32 "$d/favicon.ico" $true
}

# Also at root
Create-Favicon 32 "favicon.ico" $true
Create-Favicon 64 "favicon.png"
