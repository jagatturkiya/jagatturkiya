Add-Type -AssemblyName System.Drawing

function Create-Favicon($size, $outputPath, $isIco = $false) {
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.Clear([System.Drawing.Color]::Transparent)

    # Calculate dimensions
    $center = [single]($size / 2.0)
    $diamondRadius = [single]($size * 0.40)
    
    # Diamond 45-degree polygon points
    $pTop = New-Object System.Drawing.PointF $center, ($center - $diamondRadius)
    $pRight = New-Object System.Drawing.PointF ($center + $diamondRadius), $center
    $pBottom = New-Object System.Drawing.PointF $center, ($center + $diamondRadius)
    $pLeft = New-Object System.Drawing.PointF ($center - $diamondRadius), $center
    $poly = [System.Drawing.PointF[]]@($pTop, $pRight, $pBottom, $pLeft)

    # Subtle fill
    $fillBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(35, 245, 176, 37))
    $g.FillPolygon($fillBrush, $poly)
    $fillBrush.Dispose()

    # Golden border
    $penWidth = [single][Math]::Max(2.0, ($size * 0.085))
    $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(255, 245, 176, 37)), $penWidth
    $pen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
    $g.DrawPolygon($pen, $poly)
    $pen.Dispose()

    # Draw bold JT text
    $fontSize = [single]($size * 0.38)
    $font = New-Object System.Drawing.Font("Arial", $fontSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 245, 176, 37))
    
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    $rect = New-Object System.Drawing.RectangleF ([single]0), ([single]($size * 0.02)), ([single]$size), ([single]$size)
    $g.DrawString("JT", $font, $textBrush, $rect, $sf)

    $font.Dispose()
    $textBrush.Dispose()
    $sf.Dispose()
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
    Write-Host "Created $outputPath successfully"
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
