@echo off

goto check_Permissions

:check_Permissions
    echo Administrative permissions required. Detecting permissions...

    net session >nul 2>&1
    if %errorLevel% == 0 (
        echo Success: Administrative permissions confirmed. Starting config tool
        goto startInstallation
    ) else (
        echo Failure: Current permissions inadequate. Please right click bat and run as Administrator.
        pause
        exit /B 1
    )
    pause

:startInstallation

echo Searching package.json
if exist package.json (
    rem package.json exists
    echo Success: package.json found
    echo Starting : NPM install 
    START /B /wait cmd /C "npm install"
    goto installService
) else (
    rem stop installation
    echo Failure: Cannot find package.json, make sure you've launched the script within the Atlas folder.
    pause
    exit /B 1
)

:installService

call install_service.bat
echo Success: Installation successful