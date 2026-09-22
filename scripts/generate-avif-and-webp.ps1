param(
    [string]$Directory = "."
)

$Extensions = @(
    ".jpg",
    ".jpeg",
    ".png"
)

$ExcludeDirectories = @(
    ".git",
    "old"
)

$RootDirectory = (Resolve-Path $Directory).Path

$ExcludePaths = $ExcludeDirectories |
    ForEach-Object {
        try {
            (Resolve-Path (Join-Path $RootDirectory $_) -ErrorAction Stop).Path
        }
        catch {
            $null
        }
    } |
    Where-Object { $_ }

Get-ChildItem -Path $RootDirectory -File -Recurse |
    Where-Object {
        $Extensions -contains $_.Extension.ToLowerInvariant()
    } |
    Where-Object {
        $FilePath = $_.FullName

        -not ($ExcludePaths | Where-Object {
            $FilePath.StartsWith(
                $_ + [System.IO.Path]::DirectorySeparatorChar,
                [System.StringComparison]::OrdinalIgnoreCase
            )
        })
    } |
    ForEach-Object {
        $InputFile = $_.FullName

        $BasePath = [System.IO.Path]::Combine(
            $_.DirectoryName,
            $_.BaseName
        )

        $WebP = "$BasePath.webp"
        $AVIF = "$BasePath.avif"

        Write-Host "Processing: $InputFile"

        if (-not (Test-Path $WebP)) {
            Write-Host "  -> WebP ($WebP)"
            magick $InputFile -quality 85 $WebP
        }
        else {
            Write-Host "  -> WebP already exists, skipped"
        }

        if (-not (Test-Path $AVIF)) {
            Write-Host "  -> AVIF ($AVIF)"
            magick $InputFile -quality 80 $AVIF
        }
        else {
            Write-Host "  -> AVIF already exists, skipped"
        }
    }
