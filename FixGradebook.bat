@echo off

cd %USERPROFILE%\AppData\local\Pearson\
for /d %%G in (".\2*") do rd /s /q "%%~G"
start chrome https://ps.ocsb.ca/teachers/LaunchGradebook.ptg