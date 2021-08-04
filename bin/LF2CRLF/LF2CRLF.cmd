@echo off
for /r . %%i in (%~1) do (
  call "%~dp0unix2dos.exe" -o "%%i"
)