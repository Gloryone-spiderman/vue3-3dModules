# 从 Git 历史中移除 SSH 私钥的脚本
# 使用方法：在项目根目录运行此脚本

Write-Host "正在查找包含 SSH 私钥的文件..." -ForegroundColor Yellow

# 查找包含私钥的文件
$blobId = "425518a066b38d8489116505a378abd28f7bd6b8"
$filePath = git rev-list --objects --all | Select-String $blobId | ForEach-Object { ($_ -split '\s+')[1] }

if ($filePath) {
    Write-Host "找到包含私钥的文件: $filePath" -ForegroundColor Red
    Write-Host ""
    Write-Host "警告：此操作将重写 Git 历史！" -ForegroundColor Yellow
    Write-Host "建议："
    Write-Host "1. 如果这是个人项目，可以使用 git filter-branch 移除"
    Write-Host "2. 如果已推送到远程，需要强制推送（危险操作）"
    Write-Host "3. 如果私钥已泄露，请立即重新生成新的 SSH 密钥"
    Write-Host ""
    Write-Host "要查看文件内容，运行: git show $blobId" -ForegroundColor Cyan
} else {
    Write-Host "无法找到包含该 blob 的文件，可能需要使用其他方法" -ForegroundColor Yellow
}



