@echo off
echo *.bat > .gitignore
REM send.bat - Automate git add, commit, and push with a custom message.

REM Check if a commit message is provided
if "%~1"=="" (
    echo.
    echo Usage: send.bat "Your commit message"
    echo.
    echo Example:
    echo   send.bat "Fixed bug in user authentication"
    echo.
    exit /b 1
)

REM Add all changes to the staging area
echo Adding all changes to Git...
git add .

REM Check if git add was successful
if ERRORLEVEL 1 (
    echo Error: 'git add' failed.
    exit /b 1
)

REM Commit changes with the provided message
echo Committing changes...
git commit -m "%*"

REM Check if git commit was successful
if ERRORLEVEL 1 (
    echo Error: 'git commit' failed. There might be no changes to commit.
    exit /b 1
)

REM Push changes to the remote repository
echo Pushing changes to remote repository...
git push

REM Check if git push was successful
if ERRORLEVEL 1 (
    echo Error: 'git push' failed.
    exit /b 1
)

echo.
echo Success: Changes have been pushed to the remote repository.
echo.
exit /b 0