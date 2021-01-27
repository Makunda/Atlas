@echo off

cd .\web-application
call npm run build
if errorlevel 1 ( 
	echo Unsuccessful build of the front-end
	exit
)

echo Front-end was built successfully

cd ..

del /Q .\atlas-api\src\views\index.html
del /s /Q .\atlas-api\src\public\js\
xcopy /e /v .\web-application\dist\js .\atlas-api\src\public\js
copy .\web-application\dist\index.html .\atlas-api\src\views\index.html



cd .\atlas-api\
echo Launching the api
call npm run start:dev
